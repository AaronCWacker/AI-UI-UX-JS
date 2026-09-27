#!/usr/bin/env python3
"""Upload a Sky Chase MP4 to X, then reply with play + code URLs.

Requires: pip install requests
Set X_USER_ACCESS_TOKEN to an OAuth 2.0 *user* token with tweet.write,
tweet.read, users.read and media.write scopes, and the applicable X API access.
Never put this token in the HTML, repository, command line, or chat.

Preview: python Sky-Chase-8-post-x.py clip.mp4
Publish: python Sky-Chase-8-post-x.py clip.mp4 --publish
Resume only the reply: ... --publish --post-id <existing-video-post-id>
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time

import requests

BASE = "https://api.x.com/2"
TOP = "✈️ Sky Chase 8 — supersonic dogfights in cloud clashes. Built with Astra + Three.js. Jump into WAKE, load your soundtrack, and record your best 60 seconds. Multiplayer + full code in the reply. #ThreeJS #GameDev"
REPLY = "✈️ Join the WAKE squadron:\nhttps://allaiinc.org/Sky-Chase-8.html?room=WAKE\n\n💻 Full HTML + JS code:\nhttps://allaiinc.org/Sky-Chase-8-source.txt"


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("video", type=Path)
    p.add_argument("--publish", action="store_true")
    p.add_argument("--convert", action="store_true", help="Convert any browser recording to H.264/AAC MP4 with ffmpeg before uploading")
    p.add_argument("--post-id", help="Reply to this already-published video post; do not upload or repost")
    p.add_argument("--state", type=Path, help="Optional progress file; defaults alongside the video")
    a = p.parse_args()
    if not a.video.is_file():
        p.error("Video file does not exist")
    if a.convert:
        if not shutil.which("ffmpeg"):
            p.error("Install ffmpeg to use --convert")
        output = a.video.with_name(a.video.stem + "-x-ready.mp4")
        subprocess.run(["ffmpeg", "-n", "-i", str(a.video), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-movflags", "+faststart", str(output)], check=True)
        a.video = output
    with a.video.open("rb") as f:
        header = f.read(32)
    if a.video.suffix.lower() != ".mp4" or b"ftyp" not in header:
        p.error("Use a real MP4. Convert WebM with ffmpeg first; changing the extension does not convert it.")
    if a.post_id and not a.post_id.isdigit():
        p.error("--post-id must contain digits only")
    print("VIDEO POST\n" + TOP + "\n\nREPLY\n" + REPLY)
    if not a.publish:
        print("\nPreview only. Add --publish to upload and publish both posts.")
        return
    token = os.environ.get("X_USER_ACCESS_TOKEN")
    if not token:
        p.error("Set X_USER_ACCESS_TOKEN locally to an authorized X user token first.")
    state_path = a.state or a.video.with_suffix(".x-state.json")
    state = json.loads(state_path.read_text()) if state_path.exists() else {}
    digest = hashlib.sha256(a.video.read_bytes()).hexdigest()
    if state.get("sha256") and state["sha256"] != digest:
        p.error("The progress file belongs to another clip. Use --state with a new path.")
    if state.get("reply_id"):
        print("Already published: https://x.com/i/status/" + state["post_id"])
        return
    if state.get("pending"):
        p.error("A previous post request has an uncertain result. Check X before retrying. If the video post exists, use --post-id with a NEW --state path; if the reply exists, no further action is needed.")
    state["sha256"] = digest
    session = requests.Session()
    session.headers["Authorization"] = "Bearer " + token

    def save():
        temp = state_path.with_suffix(state_path.suffix + ".tmp")
        temp.write_text(json.dumps(state, indent=2) + "\n")
        temp.replace(state_path)

    def api(method, path, **kwargs):
        r = session.request(method, BASE + path, timeout=60, **kwargs)
        if not r.ok:
            # Deliberately do not print headers, token, or response body.
            raise RuntimeError(f"X returned HTTP {r.status_code} for {path}. Check API access, token scopes, and account limits.")
        return r.json().get("data", {}) if r.content else {}

    def post(payload, key):
        state["pending"] = key
        save()  # A timeout must never silently create a duplicate post on retry.
        result = api("POST", "/tweets", json=payload)
        if not result.get("id"):
            raise RuntimeError("No post ID was returned. Check X before retrying.")
        state[key] = result["id"]
        state.pop("pending", None)
        save()
        return result["id"]

    top_id = a.post_id or state.get("post_id")
    if not top_id:
        init = api("POST", "/media/upload/initialize", json={"media_type": "video/mp4", "total_bytes": a.video.stat().st_size, "media_category": "tweet_video"})
        media_id = init["id"]
        with a.video.open("rb") as f:
            index = 0
            while chunk := f.read(4 * 1024 * 1024):
                api("POST", f"/media/upload/{media_id}/append", data={"segment_index": index}, files={"media": ("chunk.mp4", chunk, "application/octet-stream")})
                index += 1
                print(f"Uploaded segment {index}")
        result = api("POST", f"/media/upload/{media_id}/finalize")
        deadline = time.monotonic() + 600
        info = result.get("processing_info")
        while info and info.get("state") != "succeeded":
            if info.get("state") == "failed":
                raise RuntimeError("X could not process the video.")
            if time.monotonic() > deadline:
                raise RuntimeError("X video processing timed out before publishing; no post was created.")
            time.sleep(min(30, max(1, info.get("check_after_secs", 2))))
            result = api("GET", "/media/upload", params={"media_id": media_id, "command": "STATUS"})
            info = result.get("processing_info")
        top_id = post({"text": TOP, "media": {"media_ids": [media_id]}}, "post_id")
    else:
        state["post_id"] = top_id
        save()
    reply_id = post({"text": REPLY, "reply": {"in_reply_to_tweet_id": top_id}}, "reply_id")
    print("Video: https://x.com/i/status/" + top_id)
    print("Reply: https://x.com/i/status/" + reply_id)


if __name__ == "__main__":
    try:
        main()
    except (requests.RequestException, RuntimeError, OSError, ValueError, KeyError, subprocess.CalledProcessError) as e:
        print("Stopped: " + (str(e) if not isinstance(e, requests.RequestException) else "Network request failed; inspect the progress file and X before retrying."), file=sys.stderr)
        sys.exit(1)
