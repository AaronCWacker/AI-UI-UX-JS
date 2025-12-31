# FastAPI
python -m uvicorn fastapi_app:app --host 0.0.0.0 --port 8000

# Streamlit
python -m streamlit run streamlit_app.py --server.port 8501 --server.address 0.0.0.0

# Gradio (via uvicorn)
python -m uvicorn gradio_app:api --host 0.0.0.0 --port 7860

# Monitor (example)
python monitor_caller.py --tech fastapi --port-from 8000 --port-to 8001 --interval-s 30
