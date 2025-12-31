param(
  [string]$PyDir = "C:\SRC\py",
  [string]$PythonExe = "python"
)

$ErrorActionPreference = "Stop"
Set-Location $PyDir

# 1) FastAPI (uvicorn)
Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m uvicorn fastapi_app:app --host 0.0.0.0 --port 8000" `
  -WorkingDirectory $PyDir

Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m uvicorn fastapi_app:app --host 0.0.0.0 --port 8001" `
  -WorkingDirectory $PyDir

# 2) Streamlit
Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m streamlit run streamlit_app.py --server.address 0.0.0.0 --server.port 8501" `
  -WorkingDirectory $PyDir

Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m streamlit run streamlit_app.py --server.address 0.0.0.0 --server.port 8502" `
  -WorkingDirectory $PyDir

# 3) Gradio (mounted into FastAPI, run with uvicorn)
Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m uvicorn gradio_app:api --host 0.0.0.0 --port 7860" `
  -WorkingDirectory $PyDir

Start-Process powershell -ArgumentList "-NoProfile","-NoExit","-Command",
  "$PythonExe -m uvicorn gradio_app:api --host 0.0.0.0 --port 7861" `
  -WorkingDirectory $PyDir

Write-Host "✅ Started all servers (FastAPI 8000/8001, Streamlit 8501/8502, Gradio 7860/7861)."
Write-Host "Tip: open your health pages from C:\SRC\py\healthcheck_*.html"
