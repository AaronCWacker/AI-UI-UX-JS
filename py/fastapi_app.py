# game_server.py
# ✅ Minimal FastAPI “Game Server” for Rooms/Players/State/Events (SSE)
# Run:  python -m uvicorn game_server:app --host 127.0.0.1 --port 8000
# Notes:
# - Single-process in-memory state (perfect for now)
# - SSE stream at /events
# - Simple command bus at /cmd
# - Snapshot at /state

from __future__ import annotations

import asyncio
import json
import time
import uuid
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel, Field

# ---------------------------
# Config
# ---------------------------

APP_NAME = "AllAIInc Game Server"
TTL_SECONDS = 60 * 5  # prune idle players after 5 minutes
MAX_EVENTS_BUFFER = 5000  # per-room ring buffer

# If you want to lock CORS down later, set to ["https://allaiinc.org"]
CORS_ALLOW_ORIGINS = ["*"]

# ---------------------------
# Models
# ---------------------------

class CmdIn(BaseModel):
    room: str = Field(default="LOBBY")
    sid: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(default="anon")
    cmd: str = Field(..., description="e.g. 'join', 'move x=1 y=2', 'say hello'")
    args: Dict[str, Any] = Field(default_factory=dict)

class CmdOut(BaseModel):
    ok: bool
    room: str
    sid: str
    seq: int
    applied: Dict[str, Any]

@dataclass
class Player:
    sid: str
    name: str
    joined_at: float = field(default_factory=time.time)
    last_seen: float = field(default_factory=time.time)
    meta: Dict[str, Any] = field(default_factory=dict)

@dataclass
class Event:
    seq: int
    ts: float
    type: str
    data: Dict[str, Any]

@dataclass
class RoomState:
    room: str
    seq: int = 0
    players: Dict[str, Player] = field(default_factory=dict)
    world: Dict[str, Any] = field(default_factory=dict)  # your game state goes here
    events: List[Event] = field(default_factory=list)    # ring buffer
    lock: asyncio.Lock = field(default_factory=asyncio.Lock)
    new_event: asyncio.Event = field(default_factory=asyncio.Event)

# ---------------------------
# In-memory store
# ---------------------------

ROOMS: Dict[str, RoomState] = {}

def get_room(room_name: str) -> RoomState:
    room_name = (room_name or "LOBBY").strip()[:64]
    if room_name not in ROOMS:
        ROOMS[room_name] = RoomState(room=room_name, world={"objects": {}, "messages": []})
    return ROOMS[room_name]

def _push_event(rs: RoomState, etype: str, data: Dict[str, Any]) -> Event:
    rs.seq += 1
    ev = Event(seq=rs.seq, ts=time.time(), type=etype, data=data)
    rs.events.append(ev)
    if len(rs.events) > MAX_EVENTS_BUFFER:
        rs.events = rs.events[-MAX_EVENTS_BUFFER:]
    rs.new_event.set()         # wake SSE listeners
    rs.new_event = asyncio.Event()
    return ev

def _touch_player(rs: RoomState, sid: str, name: str) -> Player:
    p = rs.players.get(sid)
    if not p:
        p = Player(sid=sid, name=name)
        rs.players[sid] = p
    else:
        if name and name != p.name:
            p.name = name
        p.last_seen = time.time()
    return p

def _prune_idle(rs: RoomState) -> List[str]:
    now = time.time()
    gone = [sid for sid, p in rs.players.items() if now - p.last_seen > TTL_SECONDS]
    for sid in gone:
        rs.players.pop(sid, None)
        _push_event(rs, "player_left", {"sid": sid})
    return gone

# ---------------------------
# FastAPI App
# ---------------------------

app = FastAPI(title=APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ALLOW_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"ok": True, "name": APP_NAME, "rooms": len(ROOMS)}

@app.get("/state")
async def state(room: str = "LOBBY", sid: str = "", name: str = ""):
    rs = get_room(room)
    async with rs.lock:
        if sid:
            _touch_player(rs, sid, name or "anon")
        _prune_idle(rs)

        players = [
            {"sid": p.sid, "name": p.name, "last_seen": p.last_seen, "joined_at": p.joined_at, "meta": p.meta}
            for p in rs.players.values()
        ]
        return JSONResponse(
            {
                "room": rs.room,
                "seq": rs.seq,
                "players": players,
                "world": rs.world,
            }
        )

@app.post("/cmd")
async def cmd(payload: CmdIn):
    rs = get_room(payload.room)
    async with rs.lock:
        p = _touch_player(rs, payload.sid, payload.name)
        _prune_idle(rs)

        cmd_text = payload.cmd.strip()
        cmd_lower = cmd_text.lower()

        applied: Dict[str, Any] = {"cmd": cmd_text, "sid": payload.sid, "name": p.name}

        # ---- Minimal command set (extend freely) ----
        if cmd_lower.startswith("join"):
            _push_event(rs, "player_joined", {"sid": payload.sid, "name": p.name})
            applied["type"] = "join"

        elif cmd_lower.startswith("say"):
            msg = cmd_text[3:].strip() or payload.args.get("msg", "")
            entry = {"sid": payload.sid, "name": p.name, "msg": msg, "ts": time.time()}
            rs.world.setdefault("messages", []).append(entry)
            rs.world["messages"] = rs.world["messages"][-200:]  # keep last 200
            _push_event(rs, "chat", entry)
            applied["type"] = "say"
            applied["msg"] = msg

        elif cmd_lower.startswith("move"):
            # Example: "move x=1 y=2" or args={"x":1,"y":2}
            x = payload.args.get("x")
            y = payload.args.get("y")
            # parse simple "k=v" tokens
            for tok in cmd_text.split()[1:]:
                if "=" in tok:
                    k, v = tok.split("=", 1)
                    if k == "x":
                        x = float(v)
                    if k == "y":
                        y = float(v)

            if x is None or y is None:
                raise HTTPException(status_code=400, detail="move requires x and y")

            rs.world.setdefault("positions", {})[payload.sid] = {"x": x, "y": y}
            _push_event(rs, "move", {"sid": payload.sid, "name": p.name, "x": x, "y": y})
            applied["type"] = "move"
            applied["x"] = x
            applied["y"] = y

        elif cmd_lower.startswith("set"):
            # Generic setter: args={"path":"objects.tree1","value":{...}}
            path = payload.args.get("path")
            value = payload.args.get("value")
            if not path:
                raise HTTPException(status_code=400, detail="set requires args.path")

            # naive dot-path set into world dict
            cur = rs.world
            parts = path.split(".")
            for key in parts[:-1]:
                cur = cur.setdefault(key, {})
            cur[parts[-1]] = value

            _push_event(rs, "set", {"sid": payload.sid, "name": p.name, "path": path, "value": value})
            applied["type"] = "set"
            applied["path"] = path

        else:
            # Unknown commands still become events (useful for rapid prototyping)
            _push_event(rs, "cmd", {"sid": payload.sid, "name": p.name, "cmd": cmd_text, "args": payload.args})
            applied["type"] = "cmd"

        return CmdOut(ok=True, room=rs.room, sid=payload.sid, seq=rs.seq, applied=applied)

@app.get("/events")
async def events(request: Request, room: str = "LOBBY", sid: str = "", name: str = "", after: int = 0):
    """
    SSE stream:
    - Client can pass after=<seq> to resume from last received.
    - Sends "event: <type>" and "data: <json>" and "id: <seq>"
    """
    rs = get_room(room)

    async def event_gen():
        # Initial touch + optional replay
        async with rs.lock:
            if sid:
                _touch_player(rs, sid, name or "anon")
            _prune_idle(rs)

            backlog = [ev for ev in rs.events if ev.seq > after]
            for ev in backlog:
                yield _format_sse(ev)

        # Live stream
        while True:
            if await request.is_disconnected():
                break

            # Wait for new event or periodic keepalive
            try:
                await asyncio.wait_for(rs.new_event.wait(), timeout=15.0)
            except asyncio.TimeoutError:
                # keepalive comment so proxies don't close idle connections
                yield ": keepalive\n\n"
                continue

            # Drain newly available events since last_seq
            async with rs.lock:
                if sid:
                    _touch_player(rs, sid, name or "anon")
                _prune_idle(rs)

                # Send only the latest event(s) after 'after'
                # Update 'after' to rs.seq as we go
                new_events = [ev for ev in rs.events if ev.seq > after]
                for ev in new_events:
                    after = ev.seq
                    yield _format_sse(ev)

    return StreamingResponse(event_gen(), media_type="text/event-stream")

def _format_sse(ev: Event) -> str:
    data = json.dumps({"seq": ev.seq, "ts": ev.ts, "type": ev.type, "data": ev.data}, separators=(",", ":"))
    # SSE format
    return f"id: {ev.seq}\nevent: {ev.type}\ndata: {data}\n\n"
