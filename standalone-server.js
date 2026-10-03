import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || process.env.APP_PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";

const CLIENT_DIR = path.join(__dirname, "dist", "client");
const SERVER_ENTRY = path.join(__dirname, "dist", "server", "server.js");

let ssrHandler = null;
if (fs.existsSync(SERVER_ENTRY)) {
  try {
    const mod = await import(`file://${SERVER_ENTRY}`);
    ssrHandler = mod.default || mod;
  } catch (err) {
    console.warn("Could not load server SSR bundle, running in static mode:", err.message);
  }
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".wasm": "application/wasm",
};

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = reqUrl.pathname;

  let filePath = path.join(CLIENT_DIR, pathname);
  
  // Prevent directory traversal
  if (!filePath.startsWith(CLIENT_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("Forbidden");
  }

  // Check if static file exists directly or as directory index
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return serveFile(res, filePath);
  }

  // If path ends with / or exists as directory
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, "index.html");
    if (fs.existsSync(indexPath)) {
      return serveFile(res, indexPath);
    }
  }

  // Delegate to SSR Handler if available
  if (ssrHandler && typeof ssrHandler.fetch === "function") {
    try {
      const fullUrl = `http://${req.headers.host || "localhost"}${req.url}`;
      const headers = new Headers();
      for (const [key, val] of Object.entries(req.headers)) {
        if (val) headers.append(key, Array.isArray(val) ? val.join(", ") : val);
      }

      const webReq = new Request(fullUrl, {
        method: req.method,
        headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
        duplex: req.method !== "GET" && req.method !== "HEAD" ? "half" : undefined,
      });

      const webRes = await ssrHandler.fetch(webReq);

      res.writeHead(webRes.status, Object.fromEntries(webRes.headers.entries()));
      const bodyBuffer = await webRes.arrayBuffer();
      return res.end(Buffer.from(bodyBuffer));
    } catch (err) {
      console.error("SSR Execution Error:", err);
    }
  }

  // Fallback to static index.html for SPA client-side routing
  const fallbackIndex = path.join(CLIENT_DIR, "index.html");
  if (fs.existsSync(fallbackIndex)) {
    return serveFile(res, fallbackIndex);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 TitanNodes Web Server running at http://${HOST}:${PORT}`);
});
