# Git Setup Commands for Bitbucket

## Prerequisites
1. Install Git from https://git-scm.com/download/win
2. After installation, restart your terminal/command prompt

## Commands to Run (in order):

### 1. Initialize Git Repository (if not already initialized)
```bash
git init
```

### 2. Add the Bitbucket Remote Repository
```bash
git remote add origin git@bitbucket.org:zarventuress/zarventures.git
```

### 3. Check Current Status
```bash
git status
```

### 4. Add All Files to Staging
```bash
git add .
```

### 5. Create Initial Commit
```bash
git commit -m "Initial commit: Zar Ventures website"
```

### 6. Set Default Branch to Master (if needed)
```bash
git branch -M master
```

### 7. Push to Bitbucket Master Branch
```bash
git push -u origin master
```

## Alternative: If you need to use HTTPS instead of SSH

If SSH keys are not set up, use HTTPS:
```bash
git remote add origin https://bitbucket.org/zarventuress/zarventures.git
git push -u origin master
```

## Troubleshooting

### If you get authentication errors:
- For SSH: Set up SSH keys in Bitbucket (Settings > SSH Keys)
- For HTTPS: Use your Bitbucket username and app password

### If the repository already exists on Bitbucket:
You may need to pull first:
```bash
git pull origin master --allow-unrelated-histories
git push -u origin master
```

