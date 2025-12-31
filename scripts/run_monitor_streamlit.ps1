param(
  [string]$PyDir = (Resolve-Path "$PSScriptRoot\..").Path,
  [string]$PythonExe = "python"
)

$ErrorActionPreference = "Stop"
Set-Location $PyDir

& $PythonExe ".\monitor_caller.py" --tech streamlit --port-from 8501 --port-to 8502 --interval-s 30
