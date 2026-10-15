/**
 * Generates thin SPA page wrappers under src/pages/.
 * Each wrapper re-exports the page component from the corresponding route file.
 *
 * Run: node scripts/gen-pages.js
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROUTES_DIR = path.join(__dirname, "..", "src", "routes");
const PAGES_DIR = path.join(__dirname, "..", "src", "pages");

// Map: page file name -> { routeFile, componentName }
const pages = [
  { page: "Home", routeFile: "index", componentName: "Index" },
  { page: "About", routeFile: "about", componentName: "AboutPage" },
  { page: "Ark", routeFile: "ark", componentName: "ArkPage" },
  { page: "Aup", routeFile: "aup", componentName: "AupPage" },
  { page: "BotHosting", routeFile: "bot-hosting", componentName: "BotPage" },
  { page: "Contact", routeFile: "contact", componentName: "ContactPage" },
  { page: "Cs2", routeFile: "cs2", componentName: "CS2Page" },
  { page: "Faqs", routeFile: "faqs", componentName: null }, // inline component
  { page: "FiveM", routeFile: "fivem", componentName: "FiveMPage" },
  { page: "FreeHosting", routeFile: "free-hosting", componentName: null }, // inline
  { page: "GameHosting", routeFile: "game-hosting", componentName: "GameHostingPage" },
  { page: "Hytale", routeFile: "hytale", componentName: "HytalePage" },
  { page: "Infrastructure", routeFile: "infrastructure", componentName: "InfrastructurePage" },
  { page: "Minecraft", routeFile: "minecraft", componentName: "MinecraftPage" },
  { page: "Palworld", routeFile: "palworld", componentName: "PalworldPage" },
  { page: "Privacy", routeFile: "privacy", componentName: "PrivacyPage" },
  { page: "RdpHosting", routeFile: "rdp-hosting", componentName: "RdpPage" },
  { page: "Refund", routeFile: "refund", componentName: "RefundPage" },
  { page: "Rust", routeFile: "rust", componentName: "RustPage" },
  { page: "Sla", routeFile: "sla", componentName: "SlaPage" },
  { page: "Terms", routeFile: "terms", componentName: "TermsPage" },
  { page: "Terraria", routeFile: "terraria", componentName: "TerrariaPage" },
  { page: "Valheim", routeFile: "valheim", componentName: "ValheimPage" },
  { page: "VpsHosting", routeFile: "vps-hosting", componentName: "VpsPage" },
  { page: "WebHosting", routeFile: "web-hosting", componentName: "WebPage" },
];

console.log("Pages config:", JSON.stringify(pages, null, 2));
