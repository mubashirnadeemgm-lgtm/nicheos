# GitHub Push Script for NicheOS
# Run this script to push your code to GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  NicheOS GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Add Git to PATH
$env:Path += ";C:\Program Files\Git\bin"

# Get GitHub username
Write-Host "Please enter your GitHub username: " -ForegroundColor Yellow -NoNewline
$username = Read-Host

# Confirm repository name
Write-Host ""
Write-Host "Repository name will be: nicheos" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: Before running this script, create the repository on GitHub:" -ForegroundColor Red
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: nicheos" -ForegroundColor White
Write-Host "3. Description: A futuristic web application for discovering your perfect content niche" -ForegroundColor White
Write-Host "4. Make it Public" -ForegroundColor White
Write-Host "5. DO NOT initialize with README" -ForegroundColor White
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "Have you created the repository on GitHub? (y/n): " -ForegroundColor Yellow -NoNewline
$confirm = Read-Host

if ($confirm -ne 'y') {
    Write-Host ""
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Pushing code to GitHub..." -ForegroundColor Cyan

# Add remote
Write-Host "Adding remote..." -ForegroundColor Gray
git remote add origin "https://github.com/$username/nicheos.git" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote already exists, updating..." -ForegroundColor Yellow
    git remote set-url origin "https://github.com/$username/nicheos.git"
}

# Push to GitHub
Write-Host "Pushing to main branch..." -ForegroundColor Gray
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your repository is now live at:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/nicheos" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Push failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "You may need to authenticate with GitHub." -ForegroundColor Yellow
    Write-Host "A browser window should open for authentication." -ForegroundColor Yellow
    Write-Host "If not, you may need to set up a Personal Access Token." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
