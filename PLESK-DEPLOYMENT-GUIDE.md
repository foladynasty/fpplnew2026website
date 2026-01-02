# Financial Perspectives Website - Plesk Deployment Guide

## Overview
This guide covers deploying the Next.js website to Plesk with Node.js on Windows (IIS with iisnode).

---

## Prerequisites
- Plesk hosting with Node.js enabled
- Node.js 18+ on your local machine
- Access to Plesk File Manager

---

## Quick Deployment Steps

### Step 1: Build the Project Locally

```bash
# Navigate to project folder
cd c:\Users\folad\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website

# Clean previous build and rebuild
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

### Step 2: Prepare Deployment Folder

After build completes, create the deployment folder:

```powershell
# Set paths
$standalonePath = ".next\standalone\Downloads\Antigravity\fpwebsite2026a\fpstatic2026website"

# Create fresh deployment folder
Remove-Item -Recurse -Force "plesk-deploy" -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force "plesk-deploy"

# Copy standalone build
Copy-Item -Recurse -Force "$standalonePath\*" "plesk-deploy\"

# Copy static files (IMPORTANT!)
Copy-Item -Recurse -Force ".next\static" "plesk-deploy\.next\static"

# Copy public folder
Copy-Item -Recurse -Force "public" "plesk-deploy\public"
```

### Step 3: Create/Update Configuration Files

Ensure these files exist in `plesk-deploy/`:

**server.js** - Already included from standalone build

**web.config** - Create if not exists:
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="StaticPublic" stopProcessing="true">
          <match url="^(.*)$" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" />
          </conditions>
          <action type="None" />
        </rule>
        <rule name="NextStatic" stopProcessing="true">
          <match url="^_next/static/(.*)$" />
          <conditions>
            <add input="{DOCUMENT_ROOT}\.next\static\{R:1}" matchType="IsFile" />
          </conditions>
          <action type="Rewrite" url=".next/static/{R:1}" />
        </rule>
        <rule name="DynamicContent">
          <match url="(.*)" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          </conditions>
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
    <iisnode loggingEnabled="true" devErrorsEnabled="true" />
  </system.webServer>
</configuration>
```

**.env** - Copy from `.env.local` with production values

### Step 4: Upload to Plesk

1. **ZIP** the `plesk-deploy` folder contents (not the folder itself)
2. Log into **Plesk** control panel
3. Go to **File Manager** → your domain folder (e.g., `/fp2026staging.fp-edu.com/`)
4. **Delete** existing files (except `.env` if you want to keep it)
5. **Upload** the ZIP file
6. **Extract** the ZIP in place

### Step 5: Configure Node.js in Plesk

1. Go to **Websites & Domains** → your domain → **Node.js**
2. Configure:
   - **Node.js Version:** 18.x or higher
   - **Application Mode:** Production
   - **Application Root:** Your domain folder
   - **Application Startup File:** `server.js`
3. Click **Enable Node.js** (if not already enabled)
4. Click **Restart App**

### Step 6: Verify Deployment

Visit your site URL and check:
- [ ] Homepage loads with styling
- [ ] Navigation works
- [ ] All pages load correctly
- [ ] Images display properly

---

## Environment Variables

Create a `.env` file on the server with:

```
NODE_ENV=production
WORDPRESS_API_URL=https://fppl.fp-edu.com
ENDORSAL_API_KEY=your-endorsal-api-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
MAILCHIMP_API_KEY=your-mailchimp-key
MAILCHIMP_LIST_ID=your-list-id
SMTP_HOST=your-smtp-server
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
NOTIFICATION_EMAIL=notifications@your-domain.com
```

---

## Folder Structure on Server

```
/your-domain.com/
├── .next/
│   ├── server/
│   ├── static/         ← CSS, JS, fonts
│   └── *.json files
├── node_modules/       ← Bundled dependencies
├── public/             ← Images, favicon, etc.
├── .env                ← Environment variables
├── package.json
├── server.js           ← Application entry point
└── web.config          ← IIS configuration
```

---

## Troubleshooting

### Site shows 404 error
- Verify `server.js` is set as Application Startup File
- Check that Node.js is enabled
- Verify files are in the correct folder (not in a subfolder)

### CSS/Styling not loading
- Ensure `.next/static` folder was copied
- Verify `web.config` is in place
- Clear browser cache (Ctrl+Shift+R)

### Port permission denied error
- Remove any hardcoded ports in server.js
- Ensure server.js uses `process.env.PORT`

### iisnode errors
- Remove `nodeProcessCommandLine` from web.config
- Let Plesk use its default Node.js path

---

## Quick Update Deployment

For small updates (after initial deployment):

1. Make changes locally
2. Run `npm run build`
3. Upload only changed files:
   - `.next/` folder
   - Any changed public files
4. Restart App in Plesk

---

## Contact

For deployment issues or questions, refer to this guide or check Plesk documentation.

Last updated: January 2026
