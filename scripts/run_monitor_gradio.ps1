param(
  [string]$PyDir = (Resolve-Path "$PSScriptRoot\..").Path,
  [string]$PythonExe = "python"
)

$ErrorActionPreference = "Stop"
Set-Location $PyDir

& $PythonExe ".\monitor_caller.py" --tech gradio --port-from 7860 --port-to 7861 --interval-s 30
