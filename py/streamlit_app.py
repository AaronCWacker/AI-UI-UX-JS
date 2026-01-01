# app_Streamlit.py 🧠🕹️ (Streamlit, single-file)
# Multiplayer “room memory” + tiny easy-words command language.
# ✅ Shared across all clients connected to the SAME Streamlit *process*
# ✅ Near-real-time sync via st_autorefresh (rerun, NOT page reload)
# ⚠️ If you run multiple processes/replicas, each replica has its own RAM store (use Redis to fix)

import time, threading, secrets, logging
from dataclasses import dataclass, field
from typing import Dict, Any, List, Optional

import streamlit as st

# Optional but recommended
from streamlit_autorefresh import st_autorefresh


# -------------------------
# (Optional) silence ScriptRunContext warning spam
# -------------------------
logging.getLogger("streamlit.runtime.scriptrunner_utils.script_run_context").setLevel(logging.ERROR)
logging.getLogger("streamlit.runtime.scriptrunner").setLevel(logging.ERROR)
logging.getLogger("streamlit").setLevel(logging.ERROR)


# -------------------------
# Shared server cache (RAM) - SINGLETON via cache_resource
# -------------------------

PLAYER_TTL = 180
MAX_EVENTS = 300

@dataclass
class Room:
    created_at: float = field(default_factory=time.time)
    seq: int = 0
    players: Dict[str, Dict[str, Any]] = field(default_factory=dict)   # sid -> {name, seat, last_seen}
    public: Dict[str, Any] = field(default_factory=lambda: {"kv": {}, "turn": 0})
    private: Dict[int, Dict[str, Any]] = field(default_factory=dict)   # seat -> {kv:{}}
    events: List[Dict[str, Any]] = field(default_factory=list)

@st.cache_resource(show_spinner=False)
def get_store():
    # One shared object per Streamlit process
    return {
        "lock": threading.Lock(),
        "rooms": {},  # room_id -> Room
    }

STORE = get_store()


# -------------------------
# Helpers
# -------------------------

def _now() -> int:
    return int(time.time())

def _get_room(room_id: str) -> Room:
    room_id = (room_id or "LOBBY")[:24]
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

def get_sid() -> str:
    # IMPORTANT: do NOT use hard page reload; session_state must persist
    if "sid" not in st.session_state:
        st.session_state["sid"] = secrets.token_hex(16)
    return st.session_state["sid"]


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
# Core actions
# -------------------------

def join_room(room_id: str, name: str, sid: str) -> str:
    room_id = (room_id or "LOBBY")[:24]
    name = (name or "Player")[:24]
    r = _get_room(room_id)

    with STORE["lock"]:
        _prune(r)
        if sid in r.players:
            r.players[sid]["name"] = name
            r.players[sid]["last_seen"] = _now()
            _event(r, "rename", {"seat": _seat_of(r, sid), "name": name})
        else:
            seat = _smallest_unused_seat(r)
            r.players[sid] = {"name": name, "seat": seat, "last_seen": _now()}
            r.private.setdefault(seat, {"kv": {}})
            _event(r, "join", {"seat": seat, "name": name})

    return f"Joined `{room_id}` as **{name}** (seat {_seat_of(r, sid)}). 🪑"

def leave_room(room_id: str, sid: str) -> str:
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

def run_cmd(room_id: str, cmd: str, sid: str) -> Dict[str, Any]:
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
            except Exception:
                return {"ok": False, "msg": "add needs a number, e.g. add score 5"}
            cur = r.public["kv"].get(k, 0)
            try:
                cur = float(cur)
            except Exception:
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

def snapshot(room_id: str, sid: str) -> Dict[str, Any]:
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
        seq = r.seq

    return {"room": room_id, "seq": seq, "you": you, "roster": _roster(r), "public": pub, "private": priv, "events_tail": events}

def heartbeat(room_id: str, sid: str):
    """Called each rerun to keep player alive and pruning accurate."""
    room_id = (room_id or "LOBBY")[:24]
    r = _get_room(room_id)
    with STORE["lock"]:
        _prune(r)
        if sid in r.players:
            r.players[sid]["last_seen"] = _now()


# -------------------------
# UI
# -------------------------

st.set_page_config(page_title="Multiplayer Memory (Streamlit)", page_icon="🧠", layout="wide")
st.title("🧠🕹️ Multiplayer Memory (Streamlit) — synced")
st.caption("This uses a shared in-process store + per-client reruns (autorefresh).")

sid = get_sid()

# Prefill from URL params
qp = st.query_params
pref_room = (qp.get("room") or "LOBBY")[:24]
pref_name = (qp.get("name") or "Player")[:24]

if "room" not in st.session_state:
    st.session_state["room"] = pref_room
if "name" not in st.session_state:
    st.session_state["name"] = pref_name
if "last_result" not in st.session_state:
    st.session_state["last_result"] = {"ok": True, "msg": "Ready. Try: join Aaron"}

# Live sync toggle + tick
with st.sidebar:
    st.header("⚙️ Sync")
    live_sync = st.toggle("Live sync (rerun each client)", value=True)
    interval_ms = st.slider("Refresh interval (ms)", 250, 2000, 1000, 50)
    st.caption("This must rerun each client; Streamlit can’t server-push to browsers.")

if live_sync:
    st_autorefresh(interval=interval_ms, key="mm_poll")  # rerun, not full reload

# Controls
colA, colB, colC = st.columns([2, 2, 3])
with colA:
    room = st.text_input("room", value=st.session_state["room"])
with colB:
    name = st.text_input("name", value=st.session_state["name"])

st.session_state["room"] = (room or "LOBBY")[:24]
st.session_state["name"] = (name or "Player")[:24]

# Heartbeat every rerun (keeps TTL + prune correct across clients)
heartbeat(st.session_state["room"], sid)

share_qp = f"?room={st.session_state['room']}&name={st.session_state['name']}"
with colC:
    st.write("🔗 Shareable URL params:")
    st.code(share_qp, language="text")

btn1, btn2, btn3, _ = st.columns([1, 1, 1, 6])
tip_box = st.empty()
with btn1:
    if st.button("Join 🪑", use_container_width=True):
        tip_box.success(join_room(st.session_state["room"], st.session_state["name"], sid))
with btn2:
    if st.button("Leave 🧳", use_container_width=True):
        tip_box.warning(leave_room(st.session_state["room"], sid))
with btn3:
    if st.button("Help 📎", use_container_width=True):
        st.session_state["last_result"] = {"ok": True, "msg": HELP}

st.divider()

cmd = st.text_input(
    "command",
    value=st.session_state.get("cmd_text", ""),
    placeholder="join Aaron  |  say hi  |  put mood happy  |  add score 5  |  mine secret yes",
)
st.session_state["cmd_text"] = cmd

run_col, _ = st.columns([1, 5])
with run_col:
    if st.button("Run ✅", use_container_width=True):
        st.session_state["last_result"] = run_cmd(st.session_state["room"], cmd, sid)
        st.session_state["cmd_text"] = ""

# Live state (everyone sees shared STORE on rerun)
live = snapshot(st.session_state["room"], sid)

# seq change indicator (helps you verify sync is happening)
last_seq = st.session_state.get("last_seq", -1)
changed = (live["seq"] != last_seq)
st.session_state["last_seq"] = live["seq"]

m1, m2, m3 = st.columns(3)
m1.metric("room.seq", live["seq"])
m2.metric("players", len(live["roster"]))
m3.metric("you.seat", live["you"]["seat"] if live["you"]["joined"] else -1)
st.caption("✅ changed this tick" if changed else "⏳ no change this tick")

left, right = st.columns([1, 1])
with left:
    st.subheader("result")
    st.json(st.session_state["last_result"])
with right:
    st.subheader("live state")
    st.json(live)

st.divider()
st.subheader("events (tail)")
for e in live["events_tail"]:
    t = time.strftime("%H:%M:%S", time.localtime(e["t"]))
    st.write(f"- `{t}` **{e['kind']}** — {e['data']}")

st.caption(f"sid: {sid} • room: {st.session_state['room']}")
