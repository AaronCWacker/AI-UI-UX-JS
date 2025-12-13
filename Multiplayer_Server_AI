# app.py 🧠🕹️ (Gradio Space, single-file)
# Multiplayer “room memory” + tiny easy-words command language.
# ✅ Shared across all clients connected to this Space (same running instance)
# ⚠️ Resets if the Space restarts/sleeps (RAM = goldfish with confidence 🐠)

import time, threading
from dataclasses import dataclass, field
from typing import Dict, Any, List, Optional

import gradio as gr  # HF Spaces Gradio SDK: put this file as app.py :contentReference[oaicite:0]{index=0}


# -------------------------
# Shared server cache (RAM)
# -------------------------

PLAYER_TTL = 180          # seconds idle => considered gone (went to refill coffee ☕)
MAX_EVENTS = 300

@dataclass
class Room:
    created_at: float = field(default_factory=time.time)
    seq: int = 0
    players: Dict[str, Dict[str, Any]] = field(default_factory=dict)   # session_hash -> {name, seat, last_seen}
    public: Dict[str, Any] = field(default_factory=lambda: {"kv": {}, "turn": 0})
    private: Dict[int, Dict[str, Any]] = field(default_factory=dict)   # seat -> {kv:{}}
    events: List[Dict[str, Any]] = field(default_factory=list)

STORE = {
    "lock": threading.Lock(),
    "rooms": {},  # room_id -> Room
}

def _now() -> int:
    return int(time.time())

def _get_room(room_id: str) -> Room:
    with STORE["lock"]:
        r = STORE["rooms"].get(room_id)
        if r is None:
            r = Room()
            STORE["rooms"][room_id] = r
        return r

def _event(r: Room, kind: str, data: Dict[str, Any]):
    r.seq += 1
    r.events.append({"seq": r.seq, "t": _now(), "kind": kind, "data": data})
    if len(r.events) > MAX_EVENTS:
        r.events = r.events[-MAX_EVENTS:]

def _prune(r: Room):
    cutoff = _now() - PLAYER_TTL
    dead = [sid for sid, p in r.players.items() if int(p.get("last_seen", 0)) < cutoff]
    for sid in dead:
        nm = r.players[sid].get("name", "Unknown")
        seat = int(r.players[sid].get("seat", -1))
        del r.players[sid]
        _event(r, "leave", {"seat": seat, "name": nm, "why": "timeout"})

def _seat_of(r: Room, sid: str) -> Optional[int]:
    p = r.players.get(sid)
    return int(p["seat"]) if p and "seat" in p else None

def _smallest_unused_seat(r: Room) -> int:
    used = {int(p["seat"]) for p in r.players.values()}
    seat = 0
    while seat in used:
        seat += 1
    return seat

def _roster(r: Room) -> List[Dict[str, Any]]:
    return sorted(
        [{"seat": int(p["seat"]), "name": p["name"], "last_seen": int(p["last_seen"])} for p in r.players.values()],
        key=lambda x: x["seat"]
    )


# -------------------------
# “Easy words” language
# -------------------------

HELP = """easy words 📎
- join [name]         : join room
- leave               : leave room
- say <msg>           : chat/action line
- put <k> <v>         : set shared memory
- get <k>             : read shared memory
- add <k> <num>       : add number into shared memory
- del <k>             : delete key
- list                : list keys
- who                 : list players
- mine <k> <v>        : set your private memory (only your seat sees it)
- myget <k>           : read your private memory
- clear               : host only (seat 0)
"""

def _parse(cmd: str):
    cmd = (cmd or "").strip()
    parts = cmd.split()
    verb = parts[0].lower() if parts else ""
    rest = parts[1:] if len(parts) > 1 else []
    return verb, rest


# -------------------------
# Gradio handlers
# -------------------------

def preload(room_in: str, name_in: str, request: gr.Request):
    """
    Prefill room/name from URL query params if present.
    gr.Request exposes query_params/session_hash. :contentReference[oaicite:1]{index=1}
    """
    qp = dict(request.query_params or {})
    room = (qp.get("room") or room_in or "LOBBY")[:24]
    name = (qp.get("name") or name_in or "Player")[:24]
    return room, name, f"Tip: share URL like `?room={room}&name={name}` 🔗"

def join(room_id: str, name: str, request: gr.Request):
    sid = request.session_hash  # per-client identity (no tokens to leak)
    room_id = (room_id or "LOBBY")[:24]
    name = (name or "Player")[:24]

    r = _get_room(room_id)
    with STORE["lock"]:
        _prune(r)
        if sid in r.players:
            # rename / heartbeat
            r.players[sid]["name"] = name
            r.players[sid]["last_seen"] = _now()
            _event(r, "rename", {"seat": _seat_of(r, sid), "name": name})
        else:
            seat = _smallest_unused_seat(r)
            r.players[sid] = {"name": name, "seat": seat, "last_seen": _now()}
            r.private.setdefault(seat, {"kv": {}})
            _event(r, "join", {"seat": seat, "name": name})

    return f"Joined `{room_id}` as **{name}** (seat {_seat_of(r, sid)}). 🪑"

def leave(room_id: str, request: gr.Request):
    sid = request.session_hash
    room_id = (room_id or "LOBBY")[:24]
    r = _get_room(room_id)

    with STORE["lock"]:
        _prune(r)
        if sid not in r.players:
            return "You are not joined. Try `join` first. 🤷"
        nm = r.players[sid]["name"]
        seat = int(r.players[sid]["seat"])
        del r.players[sid]
        _event(r, "leave", {"seat": seat, "name": nm, "why": "manual"})
    return f"Left `{room_id}`. Bye, brave packet. 🧳📦"

def run_cmd(room_id: str, cmd: str, request: gr.Request):
    sid = request.session_hash
    room_id = (room_id or "LOBBY")[:24]
    cmd = (cmd or "").strip()
    if not cmd:
        return {"ok": False, "msg": "Empty. Try: help"}

    r = _get_room(room_id)
    verb, rest = _parse(cmd)

    with STORE["lock"]:
        _prune(r)

        if verb in ("help", "?"):
            return {"ok": True, "msg": HELP}

        if verb == "join":
            # allow “join name” inside cmd box too
            nm = (" ".join(rest).strip() or "Player")[:24]
            if sid in r.players:
                r.players[sid]["name"] = nm
                r.players[sid]["last_seen"] = _now()
                _event(r, "rename", {"seat": _seat_of(r, sid), "name": nm})
                return {"ok": True, "msg": f"Renamed to {nm}."}
            seat = _smallest_unused_seat(r)
            r.players[sid] = {"name": nm, "seat": seat, "last_seen": _now()}
            r.private.setdefault(seat, {"kv": {}})
            _event(r, "join", {"seat": seat, "name": nm})
            return {"ok": True, "msg": f"Joined as {nm} (seat {seat})."}

        if verb == "leave":
            if sid not in r.players:
                return {"ok": False, "msg": "Not joined."}
            nm = r.players[sid]["name"]
            seat = int(r.players[sid]["seat"])
            del r.players[sid]
            _event(r, "leave", {"seat": seat, "name": nm, "why": "manual"})
            return {"ok": True, "msg": "Left."}

        if sid not in r.players:
            return {"ok": False, "msg": "Join first. (Try: join Aaron)"}

        # heartbeat
        r.players[sid]["last_seen"] = _now()
        seat = int(r.players[sid]["seat"])
        name = r.players[sid]["name"]
        r.public.setdefault("kv", {})
        r.private.setdefault(seat, {"kv": {}})
        r.private[seat].setdefault("kv", {})

        if verb == "who":
            return {"ok": True, "players": _roster(r)}

        if verb == "list":
            return {"ok": True, "keys": sorted(list(r.public["kv"].keys()))}

        if verb == "say":
            msg = " ".join(rest).strip()[:240]
            if not msg:
                return {"ok": False, "msg": "Usage: say <msg>"}
            _event(r, "say", {"seat": seat, "name": name, "text": msg})
            return {"ok": True, "msg": "sent 🗣️"}

        if verb == "put":
            if len(rest) < 2:
                return {"ok": False, "msg": "Usage: put <k> <v>"}
            k = rest[0]
            v = " ".join(rest[1:])[:240]
            r.public["kv"][k] = v
            _event(r, "put", {"seat": seat, "key": k, "value": v})
            return {"ok": True, "msg": f"stored ✅ {k}"}

        if verb == "get":
            if len(rest) != 1:
                return {"ok": False, "msg": "Usage: get <k>"}
            k = rest[0]
            return {"ok": True, "key": k, "value": r.public["kv"].get(k)}

        if verb == "add":
            if len(rest) < 2:
                return {"ok": False, "msg": "Usage: add <k> <num>"}
            k = rest[0]
            try:
                amt = float(rest[1])
            except:
                return {"ok": False, "msg": "add needs a number, e.g. add score 5"}
            cur = r.public["kv"].get(k, 0)
            try:
                cur = float(cur)
            except:
                cur = 0.0
            r.public["kv"][k] = cur + amt
            _event(r, "add", {"seat": seat, "key": k, "amt": amt, "new": r.public["kv"][k]})
            return {"ok": True, "msg": f"{k} -> {r.public['kv'][k]} 📈"}

        if verb == "del":
            if len(rest) != 1:
                return {"ok": False, "msg": "Usage: del <k>"}
            k = rest[0]
            r.public["kv"].pop(k, None)
            _event(r, "del", {"seat": seat, "key": k})
            return {"ok": True, "msg": f"deleted 🧹 {k}"}

        if verb == "mine":
            if len(rest) < 2:
                return {"ok": False, "msg": "Usage: mine <k> <v>"}
            k = rest[0]
            v = " ".join(rest[1:])[:240]
            r.private[seat]["kv"][k] = v
            _event(r, "mine", {"seat": seat, "key": k})
            return {"ok": True, "msg": f"saved 🤫 {k}"}

        if verb == "myget":
            if len(rest) != 1:
                return {"ok": False, "msg": "Usage: myget <k>"}
            k = rest[0]
            return {"ok": True, "key": k, "value": r.private.get(seat, {}).get("kv", {}).get(k)}

        if verb == "clear":
            if seat != 0:
                return {"ok": False, "msg": "Only host (seat 0) can clear 🧯"}
            r.public["kv"] = {}
            r.events = []
            r.seq = 0
            _event(r, "clear", {"by": name})
            return {"ok": True, "msg": "cleared 🧼"}

        return {"ok": False, "msg": f"Unknown verb: {verb}. Try: help"}

def snapshot(room_id: str, request: gr.Request):
    """
    Called by a Timer to keep the UI “multiplayer live”.
    gr.Timer.tick runs on a schedule. :contentReference[oaicite:2]{index=2}
    """
    sid = request.session_hash
    room_id = (room_id or "LOBBY")[:24]
    r = _get_room(room_id)

    with STORE["lock"]:
        _prune(r)
        joined = sid in r.players
        seat = _seat_of(r, sid)
        you = {"joined": joined, "seat": seat, "name": r.players[sid]["name"] if joined else None}
        pub = r.public
        priv = r.private.get(seat, {}) if joined else {}
        events = r.events[-40:]

    return {
        "room": room_id,
        "you": you,
        "roster": _roster(r),
        "public": pub,
        "private": priv,
        "events_tail": events,
    }


# -------------------------
# UI (Blocks)
# -------------------------

with gr.Blocks(title="Multiplayer Memory (Gradio)") as demo:
    gr.Markdown("## 🧠🕹️ Multiplayer Memory (Gradio)\nShared room state + easy words. No tokens. No drama. Just vibes. 🎻")

    with gr.Row():
        room = gr.Textbox(label="room", value="LOBBY")
        name = gr.Textbox(label="name", value="Player")

    tip = gr.Markdown("")

    with gr.Row():
        btn_join = gr.Button("Join 🪑")
        btn_leave = gr.Button("Leave 🧳")
        btn_help = gr.Button("Help 📎")

    cmd = gr.Textbox(label="command", placeholder="join Aaron  |  say hi  |  put mood happy  |  add score 5  |  mine secret yes")
    btn_run = gr.Button("Run ✅")

    out = gr.JSON(label="result")
    state = gr.JSON(label="live state")

    timer = gr.Timer(1.0)

    # Prefill from URL params on first load (best-effort) :contentReference[oaicite:3]{index=3}
    demo.load(preload, inputs=[room, name], outputs=[room, name, tip], api_name=False)

    btn_join.click(join, inputs=[room, name], outputs=tip, api_name=False)
    btn_leave.click(leave, inputs=[room], outputs=tip, api_name=False)

    # Commands are also exposed as an API if you want to call from JS later (“Use via API”) :contentReference[oaicite:4]{index=4}
    btn_run.click(run_cmd, inputs=[room, cmd], outputs=out, api_name="cmd")
    btn_help.click(lambda: {"ok": True, "msg": HELP}, inputs=None, outputs=out, api_name=False)

    # Live snapshot for multiplayer feel (polling via Timer) :contentReference[oaicite:5]{index=5}
    timer.tick(snapshot, inputs=[room], outputs=[state], api_name="state")

demo.launch()
