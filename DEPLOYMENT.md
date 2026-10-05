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

## 🚀 Option 1: Deploying on cPanel Shared Hosting (Static Upload)

If you have a standard cPanel hosting account (Apache/Nginx):

1. **Build locally or in cPanel Terminal**:
   ```bash
   npm run build
   ```
2. **Locate the Output Folder**:
   - The build output is located in `dist/client/`.
3. **Upload to cPanel**:
   - Compress all contents inside `dist/client/` into a `.zip` file.
   - Open **cPanel File Manager** → navigate to `public_html/`.
   - Upload the `.zip` file and extract its contents directly into `public_html/`.
4. **URL Routing**:
   - The included `.htaccess` file automatically routes all page subpaths (`/vps-hosting`, `/game-hosting`, etc.) to `index.html` without returning 404 errors.

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
