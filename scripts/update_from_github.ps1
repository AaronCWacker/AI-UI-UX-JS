param(
  [string]$RepoUrl = "https://github.com/AaronCWacker/AI-UI-UX-JS.git",
  [string]$Branch  = "main",
  [string]$TargetPyDir = (Resolve-Path "$PSScriptRoot\..").Path,
  [string]$WorkDir = "$env:ProgramData\AI-UI-UX-JS-updater"
)

$ErrorActionPreference = "Stop"

Write-Host "RepoUrl: $RepoUrl"
Write-Host "Branch : $Branch"
Write-Host "Target : $TargetPyDir"
Write-Host "WorkDir: $WorkDir"

New-Item -ItemType Directory -Force -Path $WorkDir | Out-Null
$repoPath = Join-Path $WorkDir "repo"

if (Test-Path $repoPath) {
  Write-Host "Updating existing repo..."
  git -C $repoPath fetch --all
  git -C $repoPath checkout $Branch
  git -C $repoPath pull
} else {
  Write-Host "Cloning repo..."
  git clone --branch $Branch $RepoUrl $repoPath
}

$srcPy = Join-Path $repoPath "py"
if (-not (Test-Path $srcPy)) {
  throw "Source py folder not found at $srcPy"
}

Write-Host "Copying py/ -> Target..."
# Copy only contents; overwrite existing
Copy-Item -Path (Join-Path $srcPy "*") -Destination $TargetPyDir -Recurse -Force

Write-Host "✅ Update complete."
