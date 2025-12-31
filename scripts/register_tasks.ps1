param(
  [string]$BaseDir = (Resolve-Path "$PSScriptRoot\..").Path
)

$ErrorActionPreference = "Stop"

$update = Join-Path $BaseDir "scripts\update_from_github.ps1"
$mf = Join-Path $BaseDir "scripts\run_monitor_fastapi.ps1"
$ms = Join-Path $BaseDir "scripts\run_monitor_streamlit.ps1"
$mg = Join-Path $BaseDir "scripts\run_monitor_gradio.ps1"

function Register-Task($Name, $Ps1Path, $Minutes) {
  $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Ps1Path`""
  $trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) `
            -RepetitionInterval (New-TimeSpan -Minutes $Minutes) `
            -RepetitionDuration (New-TimeSpan -Days 3650)
  $settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -RestartCount 999 -RestartInterval (New-TimeSpan -Minutes 1) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
  Register-ScheduledTask -TaskName $Name -Action $action -Trigger $trigger -Settings $settings -Force | Out-Null
  Write-Host "✅ Registered: $Name"
}

Register-Task -Name "AI-UI-UX-JS UpdateFromGitHub" -Ps1Path $update -Minutes 15
Register-Task -Name "AI-UI-UX-JS Monitor FastAPI"   -Ps1Path $mf     -Minutes 60
Register-Task -Name "AI-UI-UX-JS Monitor Streamlit" -Ps1Path $ms     -Minutes 60
Register-Task -Name "AI-UI-UX-JS Monitor Gradio"    -Ps1Path $mg     -Minutes 60

Write-Host "All tasks registered."
