import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import "./styles.css";
import { CurrencyProvider } from "@/lib/currency";
import { lazy, Suspense } from "react";

// ── Lazy-load all pages (re-using existing route components) ───
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Ark = lazy(() => import("@/pages/Ark"));
const Aup = lazy(() => import("@/pages/Aup"));
const BotHosting = lazy(() => import("@/pages/BotHosting"));
const Contact = lazy(() => import("@/pages/Contact"));
const Cs2 = lazy(() => import("@/pages/Cs2"));
const Faqs = lazy(() => import("@/pages/Faqs"));
const FiveM = lazy(() => import("@/pages/FiveM"));
const FreeHosting = lazy(() => import("@/pages/FreeHosting"));
const GameHosting = lazy(() => import("@/pages/GameHosting"));
const Hytale = lazy(() => import("@/pages/Hytale"));
const Infrastructure = lazy(() => import("@/pages/Infrastructure"));
const Minecraft = lazy(() => import("@/pages/Minecraft"));
const Palworld = lazy(() => import("@/pages/Palworld"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const RdpHosting = lazy(() => import("@/pages/RdpHosting"));
const Refund = lazy(() => import("@/pages/Refund"));
const Rust = lazy(() => import("@/pages/Rust"));
const Sla = lazy(() => import("@/pages/Sla"));
const Terms = lazy(() => import("@/pages/Terms"));
const Terraria = lazy(() => import("@/pages/Terraria"));
const Valheim = lazy(() => import("@/pages/Valheim"));
const VpsHosting = lazy(() => import("@/pages/VpsHosting"));
const WebHosting = lazy(() => import("@/pages/WebHosting"));

// ── Loading spinner ────────────────────────────────────────────
function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

function Lazy({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoading />}>{children}</Suspense>;
}

// ── Router ─────────────────────────────────────────────────────
const rootRoute = createRootRoute({ component: () => <Outlet /> });

function makeRoute(
  path: string,
  Component: React.LazyExoticComponent<() => JSX.Element>,
) {
  return createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => (
      <Lazy>
        <Component />
      </Lazy>
    ),
  });
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Lazy>
      <Home />
    </Lazy>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  makeRoute("/about", About),
  makeRoute("/ark", Ark),
  makeRoute("/aup", Aup),
  makeRoute("/bot-hosting", BotHosting),
  makeRoute("/contact", Contact),
  makeRoute("/cs2", Cs2),
  makeRoute("/faqs", Faqs),
  makeRoute("/fivem", FiveM),
  makeRoute("/free-hosting", FreeHosting),
  makeRoute("/game-hosting", GameHosting),
  makeRoute("/hytale", Hytale),
  makeRoute("/infrastructure", Infrastructure),
  makeRoute("/minecraft", Minecraft),
  makeRoute("/palworld", Palworld),
  makeRoute("/privacy", Privacy),
  makeRoute("/rdp-hosting", RdpHosting),
  makeRoute("/refund", Refund),
  makeRoute("/rust", Rust),
  makeRoute("/sla", Sla),
  makeRoute("/terms", Terms),
  makeRoute("/terraria", Terraria),
  makeRoute("/valheim", Valheim),
  makeRoute("/vps-hosting", VpsHosting),
  makeRoute("/web-hosting", WebHosting),
]);

const queryClient = new QueryClient();
const router = createRouter({ routeTree, scrollRestoration: true });

// ── Mount ──────────────────────────────────────────────────────
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <RouterProvider router={router} />
      </CurrencyProvider>
    </QueryClientProvider>
  </StrictMode>,
);
