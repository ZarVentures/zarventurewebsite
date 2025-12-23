# PowerShell Script to Connect Project to Bitbucket
# Run this script after installing Git

Write-Host "Setting up Git repository and connecting to Bitbucket..." -ForegroundColor Green

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "After installation, restart your terminal and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if .git folder exists
if (Test-Path .git) {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Cyan
    git init
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to initialize Git repository." -ForegroundColor Red
        exit 1
    }
}

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update it? (y/n)"
    if ($overwrite -eq "y" -or $overwrite -eq "Y") {
        git remote set-url origin git@bitbucket.org:zarventuress/zarventures.git
        Write-Host "Remote updated successfully." -ForegroundColor Green
    }
} else {
    Write-Host "Adding Bitbucket remote..." -ForegroundColor Cyan
    git remote add origin git@bitbucket.org:zarventuress/zarventures.git
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to add remote. Trying HTTPS instead..." -ForegroundColor Yellow
        git remote add origin https://bitbucket.org/zarventuress/zarventures.git
    }
}

# Check git status
Write-Host "`nChecking repository status..." -ForegroundColor Cyan
git status

# Ask if user wants to commit and push
$commit = Read-Host "`nDo you want to add all files, commit, and push to master? (y/n)"
if ($commit -eq "y" -or $commit -eq "Y") {
    Write-Host "Adding all files..." -ForegroundColor Cyan
    git add .
    
    Write-Host "Creating commit..." -ForegroundColor Cyan
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Initial commit: Zar Ventures website"
    }
    git commit -m $commitMessage
    
    Write-Host "Setting branch to master..." -ForegroundColor Cyan
    git branch -M master
    
    Write-Host "Pushing to Bitbucket master branch..." -ForegroundColor Cyan
    git push -u origin master
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`nSuccessfully pushed to Bitbucket!" -ForegroundColor Green
    } else {
        Write-Host "`nPush failed. You may need to:" -ForegroundColor Red
        Write-Host "1. Set up SSH keys for Bitbucket, OR" -ForegroundColor Yellow
        Write-Host "2. Use HTTPS and authenticate with your Bitbucket credentials" -ForegroundColor Yellow
        Write-Host "`nTo use HTTPS instead, run:" -ForegroundColor Cyan
        Write-Host "git remote set-url origin https://bitbucket.org/zarventuress/zarventures.git" -ForegroundColor White
        Write-Host "git push -u origin master" -ForegroundColor White
    }
} else {
    Write-Host "Skipping commit and push. You can run these commands manually:" -ForegroundColor Yellow
    Write-Host "git add ." -ForegroundColor White
    Write-Host "git commit -m 'Your commit message'" -ForegroundColor White
    Write-Host "git branch -M master" -ForegroundColor White
    Write-Host "git push -u origin master" -ForegroundColor White
}

Write-Host "`nSetup complete!" -ForegroundColor Green

