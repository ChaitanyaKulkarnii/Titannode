import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Static SPA build config for cPanel / shared hosting.
 * Strips out TanStack Start SSR + Nitro and produces a plain
 * client-side React SPA that can be served by Apache/Nginx.
 *
 * Usage:  npm run build:static
 * Output: dist-static/  (upload contents to public_html)
 */
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
  },
  server: {
    port: Number(process.env.PORT) || 8080,
    host: true,
  },
});
