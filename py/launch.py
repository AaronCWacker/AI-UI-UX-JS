import os
import sys
import time
import subprocess


HOST = "0.0.0.0"


def _env(app_name: str, port: int) -> dict:
    env = os.environ.copy()
    env["APP_NAME"] = app_name
    env["PORT"] = str(port)
    return env


def start_fastapi(port: int) -> subprocess.Popen:
    """
    Starts FastAPI using uvicorn against fastapi_app:app
    """
    cmd = [
        sys.executable, "-m", "uvicorn",
        "fastapi_app:app",
        "--host", HOST,
        "--port", str(port),
    ]
    print(f"[start_fastapi] {' '.join(cmd)}")
    return subprocess.Popen(
        cmd,
        cwd=os.path.dirname(os.path.abspath(__file__)),
        env=_env(f"fastapi-{port}", port),
        stdout=None,
        stderr=None
    )


def start_streamlit(port: int) -> subprocess.Popen:
    """
    Starts Streamlit against streamlit_app.py
    """
    cmd = [
        sys.executable, "-m", "streamlit", "run",
        "streamlit_app.py",
        "--server.address", HOST,
        "--server.port", str(port),
    ]
    print(f"[start_streamlit] {' '.join(cmd)}")
    return subprocess.Popen(
        cmd,
        cwd=os.path.dirname(os.path.abspath(__file__)),
        env=_env(f"streamlit-{port}", port),
        stdout=None,
        stderr=None
    )


def start_gradio(port: int) -> subprocess.Popen:
    """
    Starts Gradio (mounted FastAPI wrapper) using uvicorn against gradio_app:api
    """
    cmd = [
        sys.executable, "-m", "uvicorn",
        "gradio_app:api",
        "--host", HOST,
        "--port", str(port),
    ]
    print(f"[start_gradio] {' '.join(cmd)}")
    return subprocess.Popen(
        cmd,
        cwd=os.path.dirname(os.path.abspath(__file__)),
        env=_env(f"gradio-{port}", port),
        stdout=None,
        stderr=None
    )


def main():
    # One port per app for simplicity
    fastapi_port = 8000
    streamlit_port = 8501
    gradio_port = 7860

    procs = []

    # Start each app as its own process
    procs.append(start_fastapi(fastapi_port))
    time.sleep(0.5)

    procs.append(start_streamlit(streamlit_port))
    time.sleep(0.5)

    procs.append(start_gradio(gradio_port))
    time.sleep(0.5)

    print("\n[launch.py] Started all processes.")
    print(f"FastAPI   -> http://50.21.181.241:{fastapi_port}/health")
    print(f"Streamlit -> http://50.21.181.241:{streamlit_port}/?health=1")
    print(f"Gradio    -> http://50.21.181.241:{gradio_port}/healthz")
    print("\n[launch.py] Press Ctrl+C to stop.\n")

    try:
        # Wait for all processes (this will block forever unless they exit)
        for p in procs:
            p.wait()
    except KeyboardInterrupt:
        print("\n[launch.py] Ctrl+C received; terminating...")
        for p in procs:
            try:
                p.terminate()
            except Exception:
                pass
        # Give them a moment to exit cleanly
        time.sleep(2)
        print("[launch.py] Done.")


if __name__ == "__main__":
    main()
