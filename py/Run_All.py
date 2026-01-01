from __future__ import annotations

import os
import sys
import time
import signal
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional


# -------- Config (edit as you like) --------
DEFAULT_APPS = [
    "fastapi_app.py",
    "streamlit_app.py",
    "gradio_app.py",
]

# Base ports (primary/secondary are base and base+1)
BASE_PORTS = {
    "fastapi": 8000,     # -> 8000, 8001, 8002...
    "streamlit": 8501,   # -> 8501, 8502, 8503...
    "gradio": 7860,      # -> 7860, 7861, 7862...
}

HOST = "0.0.0.0"


@dataclass
class AppSpec:
    app_type: str              # fastapi | streamlit | gradio
    filename: str              # e.g. fastapi_app.py
    instance_index: int        # 0 = primary, 1 = secondary, ...
    port: int


def detect_type(filename: str) -> str:
    """
    Determine type using 'contains' style checks.
    """
    f = filename.lower()
    if "fastapi" in f:
        return "fastapi"
    if "streamlit" in f:
        return "streamlit"
    if "gradio" in f:
        return "gradio"
    raise ValueError(f"Cannot detect app type from filename: {filename}")


def build_specs(app_files: List[str], instances_each: int = 2) -> List[AppSpec]:
    """
    For each app file, spawn 'instances_each' instances.
    If multiple apps of same type exist, ports allocate sequentially by encounter order.
    """
    # how many instances already assigned per type
    counters: Dict[str, int] = {k: 0 for k in BASE_PORTS.keys()}
    specs: List[AppSpec] = []

    for fname in app_files:
        app_type = detect_type(fname)
        base = BASE_PORTS[app_type]

        for _ in range(instances_each):
            idx = counters[app_type]
            port = base + idx  # primary = base+0, secondary = base+1, etc.
            specs.append(AppSpec(app_type=app_type, filename=fname, instance_index=idx, port=port))
            counters[app_type] += 1

    return specs


def python_exe() -> str:
    """
    Use the interpreter that's running this launcher (best for VS Code).
    """
    return sys.executable


def spawn_process(spec: AppSpec, workdir: Path) -> subprocess.Popen:
    """
    Create the correct command based on type. Each child gets its own PORT + APP_NAME env.
    """
    env = os.environ.copy()
    env["PORT"] = str(spec.port)
    env["APP_NAME"] = f"{spec.app_type}-{spec.port}"

    py = python_exe()

    if spec.app_type in ("fastapi", "gradio"):
        # Uvicorn module load:
        # - fastapi_app.py exposes "app"
        # - gradio_app.py exposes "api"
        module_name = Path(spec.filename).stem
        attr = "app" if spec.app_type == "fastapi" else "api"
        cmd = [
            py, "-m", "uvicorn",
            f"{module_name}:{attr}",
            "--host", HOST,
            "--port", str(spec.port),
        ]

    elif spec.app_type == "streamlit":
        # Streamlit run uses the file path
        cmd = [
            py, "-m", "streamlit", "run", str(workdir / spec.filename),
            "--server.address", HOST,
            "--server.port", str(spec.port),
        ]
    else:
        raise ValueError(f"Unsupported type: {spec.app_type}")

    print(f"[spawn] {spec.app_type} instance={spec.instance_index} port={spec.port}")
    print(f"        cmd: {' '.join(cmd)}")

    # Start each process with its own console output in the same terminal
    return subprocess.Popen(
        cmd,
        cwd=str(workdir),
        env=env,
        stdout=None,   # inherit
        stderr=None,   # inherit
        creationflags=0
    )


def terminate_processes(procs: List[subprocess.Popen]) -> None:
    """
    Try graceful shutdown, then hard kill.
    """
    for p in procs:
        if p.poll() is None:
            try:
                p.terminate()
            except Exception:
                pass

    t0 = time.time()
    while time.time() - t0 < 5:
        if all(p.poll() is not None for p in procs):
            return
        time.sleep(0.1)

    for p in procs:
        if p.poll() is None:
            try:
                p.kill()
            except Exception:
                pass


def main() -> int:
    workdir = Path(__file__).resolve().parent

    # Allow override via env, otherwise use the three files you listed
    # Example: set APPS="fastapi_app.py;streamlit_app.py;gradio_app.py"
    apps_env = os.getenv("APPS", "")
    if apps_env.strip():
        app_files = [a.strip() for a in apps_env.split(";") if a.strip()]
    else:
        app_files = DEFAULT_APPS

    instances_each = int(os.getenv("INSTANCES_EACH", "2"))

    specs = build_specs(app_files, instances_each=instances_each)

    # Sanity: ensure files exist
    for s in specs:
        path = workdir / s.filename
        if not path.exists():
            raise FileNotFoundError(f"Missing file: {path}")

    procs: List[subprocess.Popen] = []

    def _handle_signal(sig, frame):
        print(f"\n[Run_All] received signal {sig}; shutting down children...")
        terminate_processes(procs)
        raise SystemExit(0)

    signal.signal(signal.SIGINT, _handle_signal)
    signal.signal(signal.SIGTERM, _handle_signal)

    print("[Run_All] starting all apps...")
    for spec in specs:
        procs.append(spawn_process(spec, workdir))

    print("\n[Run_All] all processes spawned.")
    print("FastAPI health:   http://localhost:8000/health and :8001/health")
    print("Streamlit health: http://localhost:8501/?health=1 and :8502/?health=1")
    print("Gradio health:    http://localhost:7860/healthz and :7861/healthz")
    print("\n[Run_All] Press Ctrl+C to stop.\n")

    # Wait forever, but if a child dies, report it.
    try:
        while True:
            time.sleep(1.0)
            for p in procs:
                rc = p.poll()
                if rc is not None:
                    print(f"[Run_All] child exited pid={p.pid} rc={rc}")
    except KeyboardInterrupt:
        print("\n[Run_All] Ctrl+C; shutting down...")
        terminate_processes(procs)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
