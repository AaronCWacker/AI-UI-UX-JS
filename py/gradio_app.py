import os
import time
import gradio as gr
from fastapi import FastAPI
from fastapi.responses import JSONResponse

APP_NAME = os.getenv("APP_NAME", "gradio")
PORT = int(os.getenv("PORT", "7860"))

def echo(msg: str):
    return f"[{APP_NAME}@{PORT}] {msg}"

demo = gr.Interface(
    fn=echo,
    inputs=gr.Textbox(label="Message", value="hello"),
    outputs=gr.Textbox(label="Echo"),
    title=f"{APP_NAME}@{PORT}",
)

api = FastAPI(title=f"{APP_NAME}@{PORT}")

@api.get("/healthz")
def healthz():
    return JSONResponse({
        "ok": True,
        "app": APP_NAME,
        "port": PORT,
        "epoch": int(time.time()),
    })

# Mount gradio at "/"
api = gr.mount_gradio_app(api, demo, path="/")
