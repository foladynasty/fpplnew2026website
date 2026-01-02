# Deploy to Staging Script
# Run this after making changes to deploy to fp2026staging.fp-edu.com

param(
    [string]$CommitMessage = "Update staging deployment"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  FP-EDU Staging Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Ensure we're on main branch
Write-Host "[1/7] Switching to main branch..." -ForegroundColor Yellow
git checkout main
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to switch to main branch" -ForegroundColor Red
    exit 1
}

# Step 2: Build the Next.js project
Write-Host "[2/7] Building Next.js project..." -ForegroundColor Yellow
Write-Host "      This may take a few minutes..." -ForegroundColor Gray

# Clean previous build
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
}

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "      Build completed successfully!" -ForegroundColor Green

# Step 3: Update plesk-deploy folder
Write-Host "[3/7] Updating plesk-deploy folder..." -ForegroundColor Yellow

$standalonePath = ".next\standalone\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website"

# Check if standalone build exists
if (-not (Test-Path $standalonePath)) {
    # Try alternative path structure
    $standalonePath = ".next\standalone"
    if (-not (Test-Path "$standalonePath\server.js")) {
        Write-Host "ERROR: Standalone build not found!" -ForegroundColor Red
        Write-Host "       Expected at: $standalonePath" -ForegroundColor Red
        exit 1
    }
}

# Backup web.config and .env if they exist
$webConfigBackup = $null
$envBackup = $null
$serverJsBackup = $null

if (Test-Path "plesk-deploy\web.config") {
    $webConfigBackup = Get-Content "plesk-deploy\web.config" -Raw
}
if (Test-Path "plesk-deploy\.env") {
    $envBackup = Get-Content "plesk-deploy\.env" -Raw
}
if (Test-Path "plesk-deploy\server.js") {
    $serverJsBackup = Get-Content "plesk-deploy\server.js" -Raw
}

# Clear and recreate plesk-deploy (except .git files)
if (Test-Path "plesk-deploy") {
    Get-ChildItem "plesk-deploy" -Exclude ".git*" | Remove-Item -Recurse -Force
}

# Copy standalone build
Copy-Item -Recurse -Force "$standalonePath\*" "plesk-deploy\" -ErrorAction SilentlyContinue

# Copy static files
if (Test-Path ".next\static") {
    New-Item -ItemType Directory -Force "plesk-deploy\.next\static" | Out-Null
    Copy-Item -Recurse -Force ".next\static\*" "plesk-deploy\.next\static\"
}

# Copy public folder
if (Test-Path "public") {
    Copy-Item -Recurse -Force "public" "plesk-deploy\public" -ErrorAction SilentlyContinue
}

# Restore web.config
if ($webConfigBackup) {
    Set-Content "plesk-deploy\web.config" $webConfigBackup
    Write-Host "      Restored web.config" -ForegroundColor Gray
}

# Restore .env
if ($envBackup) {
    Set-Content "plesk-deploy\.env" $envBackup
    Write-Host "      Restored .env" -ForegroundColor Gray
}

# Restore server.js (Critical for IISNode compatibility)
if ($serverJsBackup) {
    Set-Content "plesk-deploy\server.js" $serverJsBackup
    Write-Host "      Restored server.js (IISNode Fix)" -ForegroundColor Gray
}

Write-Host "      plesk-deploy folder updated!" -ForegroundColor Green

# Step 4: Stage and commit changes to main
Write-Host "[4/7] Committing changes to main..." -ForegroundColor Yellow
git add -A
git commit -m "$CommitMessage"
# Note: commit might fail if no changes, that's OK

# Step 5: Push main branch
Write-Host "[5/7] Pushing main branch..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Failed to push main branch (may need to pull first)" -ForegroundColor Yellow
}

# Step 6: Update staging-deploy branch
Write-Host "[6/7] Updating staging-deploy branch..." -ForegroundColor Yellow
git branch -D staging-deploy 2>$null
git subtree split --prefix=plesk-deploy -b staging-deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to create staging-deploy branch" -ForegroundColor Red
    exit 1
}

# Step 7: Push staging-deploy branch
Write-Host "[7/7] Pushing staging-deploy branch to trigger Plesk deployment..." -ForegroundColor Yellow
git push origin staging-deploy --force
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to push staging-deploy branch" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your changes will be automatically deployed to:" -ForegroundColor Cyan
Write-Host "  https://fp2026staging.fp-edu.com" -ForegroundColor White
Write-Host ""
Write-Host "Plesk will pull and deploy within a few seconds." -ForegroundColor Gray
Write-Host ""
