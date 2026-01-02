---
description: Deploy website changes to staging (fp2026staging.fp-edu.com)
---

# Deploy to Staging Workflow

This workflow deploys the Next.js website to the Plesk staging server at fp2026staging.fp-edu.com.

## Prerequisites
- All code changes have been made and saved
- You are on the `main` branch

## Quick Deploy (Automated)

// turbo
1. Run the deployment script:
```powershell
cd c:\Users\folad\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website
.\deploy-staging.ps1 -CommitMessage "Your commit message here"
```

The script will:
- Build the Next.js project
- Update the `plesk-deploy` folder
- Commit and push to `main`
- Update and push the `staging-deploy` branch
- Plesk will automatically deploy

## Manual Deploy Steps

If the script fails or you need manual control:

### Step 1: Build the project
```powershell
cd c:\Users\folad\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

### Step 2: Update plesk-deploy folder
```powershell
$standalonePath = ".next\standalone\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website"

# Clear plesk-deploy (keep web.config and .env)
Get-ChildItem "plesk-deploy" -Exclude "web.config",".env" | Remove-Item -Recurse -Force

# Copy standalone build
Copy-Item -Recurse -Force "$standalonePath\*" "plesk-deploy\"

# Copy static files
Copy-Item -Recurse -Force ".next\static" "plesk-deploy\.next\static"

# Copy public folder
Copy-Item -Recurse -Force "public" "plesk-deploy\public"
```

### Step 3: Commit and push main
```powershell
git add -A
git commit -m "Update deployment"
git push origin main
```

### Step 4: Update staging-deploy branch
```powershell
git branch -D staging-deploy
git subtree split --prefix=plesk-deploy -b staging-deploy
git push origin staging-deploy --force
```

## Verify Deployment

After deployment, verify at: https://fp2026staging.fp-edu.com

Check:
- [ ] Homepage loads correctly
- [ ] Styling is applied
- [ ] Navigation works
- [ ] Images display

## Troubleshooting

### Build fails
- Check for TypeScript errors: `npx tsc --noEmit`
- Check for ESLint errors: `npm run lint`

### Push rejected
- If GitHub push protection is enabled, you may need to disable it temporarily
- Go to: https://github.com/settings/security_analysis

### Plesk not updating
- Log into Plesk and click "Deploy now" manually
- Check the repository settings are pointing to `staging-deploy` branch
