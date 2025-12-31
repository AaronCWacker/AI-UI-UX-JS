import os
import time
import streamlit as st

APP_NAME = os.getenv("APP_NAME", "streamlit")
PORT = int(os.getenv("PORT", "8501"))

st.set_page_config(page_title=f"{APP_NAME}@{PORT}", layout="centered")

# Health mode: http://localhost:8501/?health=1
qp = st.query_params
if "health" in qp:
    # Keep it minimal and stable for fetch-based checks
    st.write("ok=1")
    st.write(f"app={APP_NAME}")
    st.write(f"port={PORT}")
    st.write(f"epoch={int(time.time())}")
    st.stop()

st.title(f"✅ {APP_NAME} on {PORT}")
st.write("Try health check: `/?health=1`")
st.write("Timestamp:", int(time.time()))
