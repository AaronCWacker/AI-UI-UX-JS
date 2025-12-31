from __future__ import annotations

import argparse
import csv
import os
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

import requests


CENTRAL = ZoneInfo("America/Chicago")
ROLLOVER_HOURS = (0, 6, 12, 18)


@dataclass
class Target:
    tech: str
    port: int

    def url(self) -> str:
        if self.tech == "fastapi":
            return f"http://localhost:{self.port}/health"
        if self.tech == "streamlit":
            return f"http://localhost:{self.port}/?health=1"
        if self.tech == "gradio":
            return f"http://localhost:{self.port}/healthz"
        raise ValueError(f"Unknown tech: {self.tech}")


def now_central() -> datetime:
    return datetime.now(tz=CENTRAL)


def current_rollover_bucket(dt: datetime) -> datetime:
    """
    Returns the bucket start time for the nearest rollover boundary <= dt
    e.g. 2025-12-31 07:12 -> 2025-12-31 06:00 (Central)
    """
    hour = dt.hour
    bucket_hour = max([h for h in ROLLOVER_HOURS if h <= hour], default=0)
    return dt.replace(hour=bucket_hour, minute=0, second=0, microsecond=0)


def ensure_dir(path: str) -> None:
    os.makedirs(path, exist_ok=True)


def log_path(base_dir: str, tech: str, port: int, bucket_start: datetime) -> str:
    ensure_dir(os.path.join(base_dir, "logs", tech))
    stamp_day = bucket_start.strftime("%Y%m%d")
    stamp_hh = bucket_start.strftime("%H00")
    return os.path.join(base_dir, "logs", tech, f"{tech}_{port}_{stamp_day}_{stamp_hh}.csv")


def append_csv_row(path: str, row: dict) -> None:
    is_new = not os.path.exists(path)
    with open(path, "a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(row.keys()))
        if is_new:
            w.writeheader()
        w.writerow(row)


def do_health_check(t: Target, timeout_s: float) -> dict:
    url = t.url()
    ts = now_central()
    t0 = time.perf_counter()
    status = None
    ok = False
    err = ""
    body = ""
    try:
        r = requests.get(url, timeout=timeout_s)
        status = r.status_code
        body = (r.text or "")[:800].replace("\n", "\\n")
        ok = (200 <= r.status_code < 300)
    except Exception as e:
        err = repr(e)
    ms = int((time.perf_counter() - t0) * 1000)

    return {
        "ts_central": ts.isoformat(),
        "tech": t.tech,
        "port": t.port,
        "url": url,
        "method": "GET",
        "status": status if status is not None else "",
        "latency_ms": ms,
        "ok": 1 if ok else 0,
        "response_snippet": body,
        "error": err,
    }


def run_monitor(
    tech: str,
    port_from: int,
    port_to: int,
    interval_s: float,
    timeout_s: float,
    base_dir: str,
) -> None:
    ports = list(range(port_from, port_to + 1))
    targets = [Target(tech=tech, port=p) for p in ports]

    print(f"[monitor] tech={tech} ports={port_from}..{port_to} interval_s={interval_s} timeout_s={timeout_s}")
    print(f"[monitor] base_dir={base_dir}")
    while True:
        dt = now_central()
        bucket = current_rollover_bucket(dt)

        for t in targets:
            row = do_health_check(t, timeout_s=timeout_s)
            path = log_path(base_dir, tech=tech, port=t.port, bucket_start=bucket)
            append_csv_row(path, row)
            print(f"[monitor] {row['ts_central']} {t.tech}:{t.port} ok={row['ok']} status={row['status']} ms={row['latency_ms']} -> {os.path.basename(path)}")

        time.sleep(interval_s)


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser()
    ap.add_argument("--tech", required=True, choices=["fastapi", "streamlit", "gradio"])
    ap.add_argument("--port-from", type=int, required=True)
    ap.add_argument("--port-to", type=int, required=True)
    ap.add_argument("--interval-s", type=float, default=30.0)
    ap.add_argument("--timeout-s", type=float, default=5.0)
    ap.add_argument("--base-dir", default=os.path.dirname(os.path.abspath(__file__)))
    return ap.parse_args()


def main() -> None:
    args = parse_args()
    run_monitor(
        tech=args.tech,
        port_from=args.port_from,
        port_to=args.port_to,
        interval_s=args.interval_s,
        timeout_s=args.timeout_s,
        base_dir=args.base_dir,
    )


if __name__ == "__main__":
    main()
