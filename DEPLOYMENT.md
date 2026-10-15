# TitanNode Hosting & Deployment Guide (cPanel & VPS)

This guide provides simple, step-by-step commands to deploy this website on **cPanel Shared Hosting**, **cPanel Node.js App**, or any **Linux VPS**.

---

## 🛠️ Local Development & Build Commands

Run these commands in your project terminal:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🚀 Option 1: Deploying on cPanel Shared Hosting (Static Site - Recommended)

If you have a standard cPanel hosting account (Apache/LiteSpeed/Nginx without Node.js):

1. **Build the static site**:
   ```bash
   npm run build:static
   ```
   This generates the production bundle inside the `dist-static/` directory with `.htaccess` pre-configured.

2. **Ready-made Zip**:
   - A pre-built zip archive `titannode-cpanel.zip` is ready in the project root!
   - Or to re-generate it at any time, run:
     ```powershell
     Compress-Archive -Path "dist-static\*" -DestinationPath "titannode-cpanel.zip" -Force
     ```

3. **Upload to cPanel File Manager**:
   - Log into your **cPanel** dashboard.
   - Open **File Manager** and enter your website root directory (usually `public_html/` or your subdomain folder).
   - Click **Upload** in the top toolbar, select `titannode-cpanel.zip`.
   - Once uploaded (100% green bar), go back to File Manager, right-click `titannode-cpanel.zip`, and click **Extract**.
   - Make sure all files (`index.html`, `.htaccess`, `assets/`, `images/`, etc.) are placed directly in `public_html/` (not inside a nested subfolder).

4. **Show Hidden Files (Verify `.htaccess`)**:
   - In cPanel File Manager, click **Settings** (top right gear icon).
   - Check **Show Hidden Files (dotfiles)** and click **Save**.
   - Verify that `.htaccess` is present. It ensures client-side routing works for all routes (like `/vps-hosting`, `/game-hosting`, `/about`, etc.) without 404 errors.


---

## ⚡ Option 2: Deploying on cPanel via "Setup Node.js App"

If your cPanel features **Setup Node.js App**:

1. Upload the entire project directory to cPanel (e.g. `/home/username/titannode-app`).
2. Open **Setup Node.js App** in cPanel:
   - **Node.js Version**: 18.x or 20.x+
   - **Application Mode**: Production
   - **Application Root**: `titannode-app`
   - **Application URL**: `yourdomain.com`
   - **Application Startup File**: `server.js`
3. Click **Create** or **Save**.
4. Open cPanel **Terminal** or SSH into your server:
   ```bash
   cd titannode-app
   npm install
   npm run build
   ```
5. Click **Restart Application** in cPanel Node.js App dashboard.

---

## 🐧 Option 3: Deploying on a Linux VPS (Ubuntu / Debian / AlmaLinux)

To host on a VPS using PM2 and Nginx:

### 1. Install Node.js & PM2 on VPS
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

### 2. Clone & Build
```bash
git clone <your-repo-url> titannode-app
cd titannode-app
npm install
npm run build
```

### 3. Start Production Server with PM2
```bash
PORT=8080 pm2 start server.js --name "titannode-web"
pm2 save
pm2 startup
```

### 4. Nginx Reverse Proxy (Optional)
`/etc/nginx/sites-available/default`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Restart Nginx:
```bash
sudo systemctl restart nginx
```

---

## 🎯 Verification
Visit `http://yourdomain.com` in your browser. All pages, assets, and routes will load cleanly.
