# py minimal servers + monitor

## Servers
- FastAPI: /health
- Streamlit: /?health=1
- Gradio: /healthz

## Logs
monitor_caller.py writes CSV logs per tech+port and rolls every 6 hours (America/Chicago):
00:00, 06:00, 12:00, 18:00

Logs live under:
logs/<tech>/<tech>_<port>_<YYYYMMDD>_<HH00>.csv

## VS Code
Use .vscode/launch.json:
- Start ALL Servers (6 instances)
- Start ALL Monitors
