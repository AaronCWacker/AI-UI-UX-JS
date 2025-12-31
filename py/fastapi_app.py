import os
import time
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

APP_NAME = os.getenv("APP_NAME", "fastapi")
PORT = int(os.getenv("PORT", "8000"))

app = FastAPI(title=f"{APP_NAME}@{PORT}")

@app.get("/health")
def health():
    return {
        "ok": True,
        "app": APP_NAME,
        "port": PORT,
        "epoch": int(time.time()),
    }

@app.get("/echo")
def echo(msg: str = "hello"):
    return {"ok": True, "app": APP_NAME, "port": PORT, "msg": msg}

@app.get("/", response_class=HTMLResponse)
def root():
    return f"""
    <html><body style="font-family: sans-serif">
      <h2>✅ {APP_NAME} running on port {PORT}</h2>
      <ul>
        <li><a href="/health">/health</a></li>
        <li><a href="/echo?msg=hi">/echo?msg=hi</a></li>
      </ul>
    </body></html>
    """
