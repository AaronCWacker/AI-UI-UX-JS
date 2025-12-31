param(
  [string]$PyDir = (Resolve-Path "$PSScriptRoot\..").Path,
  [string]$PythonExe = "python"
)

$ErrorActionPreference = "Stop"
Set-Location $PyDir

& $PythonExe ".\monitor_caller.py" --tech fastapi --port-from 8000 --port-to 8001 --interval-s 30
