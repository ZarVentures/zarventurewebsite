# Hostinger Deployment Guide for Zar Ventures Website

## Overview
This guide will help you deploy your Next.js website on Hostinger. Since your site is primarily static with client-side interactivity, we'll use **Static Export** method which works best with Hostinger's shared hosting.

## Deployment Options

### Option 1: Static Export (Recommended for Hostinger Shared Hosting)
- ✅ Works with basic shared hosting
- ✅ No Node.js server required
- ✅ Fast and cost-effective
- ✅ Easy to deploy via FTP/File Manager

### Option 2: Node.js Hosting (If you have VPS/Cloud Hosting)
- Requires Node.js runtime
- Supports full Next.js SSR features
- More complex setup

---

## Prerequisites

1. **Hostinger Account** with:
   - Shared hosting plan (for static export)
   - OR VPS/Cloud hosting (for Node.js deployment)

2. **FTP Access** or **File Manager** access to your hosting account

3. **Domain name** (if not using subdomain)

---

## Method 1: Static Export Deployment (Recommended)

### Step 1: Update Next.js Configuration

Update `next.config.mjs` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: for better compatibility
}

export default nextConfig
```

### Step 2: Build the Static Site

Run these commands locally:

```bash
# Install dependencies (if not already done)
npm install

# Build the static site
npm run build
```

This will create an `out` folder with all static files.

### Step 3: Upload to Hostinger

**Via FTP:**
1. Connect to your Hostinger FTP using FileZilla or similar
2. Navigate to `public_html` folder (or your domain's root folder)
3. Upload all contents from the `out` folder
4. Ensure `.htaccess` file is uploaded (for routing)

**Via File Manager:**
1. Log in to Hostinger hPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload the `out` folder contents
5. Extract if needed

### Step 4: Configure .htaccess (Important!)

Create/update `.htaccess` file in `public_html`:

```apache
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Handle Next.js routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Method 2: Node.js Deployment (VPS/Cloud Hosting)

### Step 1: Prepare Your Server

1. SSH into your Hostinger VPS
2. Install Node.js (v18 or higher):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. Install PM2 (Process Manager):
   ```bash
   sudo npm install -g pm2
   ```

### Step 2: Upload Your Project

```bash
# Clone from GitHub
git clone https://github.com/ZarVentures/zarventures-website.git
cd zarventures-website

# Install dependencies
npm install

# Build the project
npm run build
```

### Step 3: Start the Application

```bash
# Start with PM2
pm2 start npm --name "zarventures" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Step 4: Configure Nginx (Reverse Proxy)

Create Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Required Files for Deployment

### For Static Export:
1. ✅ All files from `out` folder (after build)
2. ✅ `.htaccess` file (for routing)
3. ✅ All images from `public` folder
4. ✅ All static assets

### For Node.js:
1. ✅ All source files
2. ✅ `package.json`
3. ✅ `next.config.mjs`
4. ✅ `.env` file (if any environment variables)
5. ✅ `node_modules` (or run `npm install` on server)

---

## Environment Variables (If Needed)

If you have environment variables, create `.env.local`:

```env
NEXT_PUBLIC_S3_BUCKET_URL=your_s3_url
NEXT_PUBLIC_AWS_REGION=us-east-1
```

For static export, these should be prefixed with `NEXT_PUBLIC_` to be included in the build.

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check images are loading
- [ ] Test navigation links
- [ ] Verify contact form (if functional)
- [ ] Check mobile responsiveness
- [ ] Test page speed
- [ ] Verify SSL certificate (HTTPS)
- [ ] Check Google Analytics (if configured)

---

## Troubleshooting

### Issue: 404 Errors on Routes
**Solution:** Ensure `.htaccess` file is uploaded and RewriteEngine is enabled

### Issue: Images Not Loading
**Solution:** Check image paths and ensure `unoptimized: true` in next.config.mjs

### Issue: Styles Not Loading
**Solution:** Verify CSS files are uploaded and check file permissions

### Issue: JavaScript Not Working
**Solution:** Check browser console for errors, verify all JS files are uploaded

---

## Support Resources

- Hostinger Support: https://www.hostinger.com/contact
- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Hostinger Knowledge Base: https://support.hostinger.com/

---

## Quick Deployment Script

Save this as `deploy.sh`:

```bash
#!/bin/bash
echo "Building static site..."
npm run build

echo "Preparing files..."
cd out
tar -czf ../deploy.tar.gz .

echo "Deploy.tar.gz created! Upload this to your Hostinger public_html folder"
```

---

**Note:** For the easiest deployment, use **Static Export** method as it requires minimal server configuration and works with basic shared hosting plans.

