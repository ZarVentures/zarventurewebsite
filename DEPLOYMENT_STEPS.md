# Quick Deployment Steps for Hostinger

## 🚀 Quick Start (5 Steps)

### Step 1: Update Configuration
```bash
# Backup current config
cp next.config.mjs next.config.mjs.backup

# Use Hostinger config
cp next.config.hostinger.mjs next.config.mjs
```

### Step 2: Build Static Site
```bash
npm install
npm run build
```

This creates an `out` folder with all static files.

### Step 3: Prepare .htaccess
```bash
# Copy the Hostinger .htaccess template
cp .htaccess.hostinger .htaccess
```

### Step 4: Upload to Hostinger
1. Log in to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain folder)
4. **Delete old files** (if any)
5. Upload **ALL contents** from the `out` folder
6. Upload the `.htaccess` file to the root

### Step 5: Verify
1. Visit your domain
2. Test all pages
3. Check navigation works
4. Verify images load

---

## 📁 Files to Upload

From the `out` folder, upload:
- ✅ `index.html`
- ✅ `_next/` folder (all contents)
- ✅ All other HTML files
- ✅ `.htaccess` file (from project root)

**DO NOT upload:**
- ❌ `node_modules/`
- ❌ Source code files (`.tsx`, `.ts`, etc.)
- ❌ `package.json`
- ❌ `.git/` folder

---

## 🔧 Alternative: FTP Upload

If using FTP (FileZilla, etc.):

1. Connect to your Hostinger FTP
2. Navigate to `public_html`
3. Upload all files from `out` folder
4. Upload `.htaccess` file
5. Set permissions:
   - Folders: 755
   - Files: 644
   - `.htaccess`: 644

---

## ✅ Post-Deployment Checklist

- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Images display correctly
- [ ] Contact page works
- [ ] Mobile view is responsive
- [ ] No console errors
- [ ] SSL certificate active (HTTPS)

---

## 🆘 Common Issues

### Pages show 404
→ Check `.htaccess` is uploaded and RewriteEngine is enabled

### Images broken
→ Verify image paths and check `unoptimized: true` in config

### Styles missing
→ Check `_next/static/css/` folder is uploaded

### JavaScript not working
→ Check browser console, verify all JS files uploaded

---

## 📞 Need Help?

- Check `DEPLOYMENT_GUIDE.md` for detailed instructions
- Hostinger Support: https://www.hostinger.com/contact
- Next.js Docs: https://nextjs.org/docs/deployment

