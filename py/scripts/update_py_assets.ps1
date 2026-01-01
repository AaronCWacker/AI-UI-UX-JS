$Owner  = "AaronCWacker"
$Repo   = "AI-UI-UX-JS"
$Branch = "main"

$DestPy = "C:\SRC\py"
$ZipUrl = "https://github.com/$Owner/$Repo/archive/refs/heads/$Branch.zip"

$Work   = "$env:ProgramData\$Repo-update"
$Zip    = "$Work\repo.zip"
$Extract= "$Work\extract"

Write-Host "Updating py assets from GitHub..."

New-Item -ItemType Directory -Force -Path $Work | Out-Null
if (Test-Path $Extract) { Remove-Item $Extract -Recurse -Force }

Invoke-WebRequest $ZipUrl -OutFile $Zip -UseBasicParsing
Expand-Archive $Zip $Extract -Force

# GitHub zip always has one top folder: Repo-Branch
$Root = Get-ChildItem $Extract -Directory | Select-Object -First 1
$SrcPy = Join-Path $Root.FullName "py"

if (-not (Test-Path $SrcPy)) {
  throw "py folder not found in repo zip"
}

# Copy *.py
Copy-Item "$SrcPy\*.py" $DestPy -Force

# Copy launch.json if present
$SrcLaunch = "$SrcPy\.vscode\launch.json"
$DstVscode = "$DestPy\.vscode"

if (Test-Path $SrcLaunch) {
  New-Item -ItemType Directory -Force -Path $DstVscode | Out-Null
  Copy-Item $SrcLaunch "$DstVscode\launch.json" -Force
}

Write-Host "✅ Update complete: .py files + launch.json overwritten"
