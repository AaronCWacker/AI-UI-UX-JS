param(
  [string]$Owner = "AaronCWacker",
  [string]$Repo  = "AI-UI-UX-JS",
  [string]$Branch = "main",

  # Where your live content should be:
  [string]$DestRoot = "C:\SRC",
  [string]$DestPy   = "C:\SRC\py",

  # If you want to only copy certain root files, set patterns here:
  [string[]]$RootCopyPatterns = @("*.html","*.css","*.js","*.json","*.png","*.jpg","*.jpeg","*.webp","*.svg","*.ico","robots.txt","sitemap.xml")
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$p){
  if (-not (Test-Path $p)) { New-Item -ItemType Directory -Force -Path $p | Out-Null }
}

function Copy-MatchingRootFiles([string]$srcRoot, [string]$dstRoot, [string[]]$patterns){
  Ensure-Dir $dstRoot
  foreach($pat in $patterns){
    Get-ChildItem -Path $srcRoot -Filter $pat -File -ErrorAction SilentlyContinue | ForEach-Object {
      Copy-Item $_.FullName -Destination (Join-Path $dstRoot $_.Name) -Force
    }
  }
}

Write-Host "=== Zip Update (No Git) ==="
Write-Host "Repo: $Owner/$Repo  Branch: $Branch"
Write-Host "DestRoot: $DestRoot"
Write-Host "DestPy  : $DestPy"

Ensure-Dir $DestRoot
Ensure-Dir $DestPy

$workDir = Join-Path $env:ProgramData "$Repo-zip-updater"
Ensure-Dir $workDir

$zipPath = Join-Path $workDir "$Repo-$Branch.zip"
$extractDir = Join-Path $workDir "extract"

if (Test-Path $extractDir) { Remove-Item $extractDir -Recurse -Force }
Ensure-Dir $extractDir

# GitHub zip URL (no auth needed for public repos)
$zipUrl = "https://github.com/$Owner/$Repo/archive/refs/heads/$Branch.zip"

Write-Host "Downloading: $zipUrl"
Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath -UseBasicParsing

Write-Host "Extracting zip..."
Expand-Archive -Path $zipPath -DestinationPath $extractDir -Force

# GitHub zips into a single top folder: Repo-Branch (e.g., AI-UI-UX-JS-main)
$top = Get-ChildItem -Path $extractDir -Directory | Select-Object -First 1
if (-not $top) { throw "Could not find extracted top-level folder in $extractDir" }

$srcRoot = $top.FullName
$srcPy   = Join-Path $srcRoot "py"

if (-not (Test-Path $srcPy)) { throw "Expected py folder not found at $srcPy" }

Write-Host "Copying root HTML/assets -> $DestRoot"
Copy-MatchingRootFiles -srcRoot $srcRoot -dstRoot $DestRoot -patterns $RootCopyPatterns

Write-Host "Copying py/ -> $DestPy"
# Copy entire py folder contents (overwrites)
Copy-Item -Path (Join-Path $srcPy "*") -Destination $DestPy -Recurse -Force

Write-Host "✅ Update completed successfully."
