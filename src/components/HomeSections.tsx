import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Gamepad2, Server, Globe, Bot, ArrowRight, Zap, Shield,
  Clock, Cpu, MapPin, Activity, Plus, Minus, ArrowUpRight,
} from "lucide-react";
import minecraftHero from "@/assets/hero/minecraft.jpg";
import vpsHero from "@/assets/hero/vps.jpg";
import webHero from "@/assets/hero/web.jpg";
import botHero from "@/assets/hero/bot.jpg";
import { useCurrency } from "@/lib/currency";
import { LocationBanners } from "@/components/LocationBanners";
import { NetworkGlobe } from "@/components/NetworkGlobe";

type TabKey = "minecraft" | "vps" | "web" | "bot";

const tabs: { key: TabKey; label: string; icon: typeof Gamepad2; href: string; title: string; subtitle: string; priceUsd: number; bg: string }[] = [
  {
    key: "minecraft", label: "Minecraft Hosting", icon: Gamepad2, href: "/minecraft",
    title: "Minecraft Server Hosting",
    subtitle: "High-performance Minecraft server hosting with DDoS protection and 24/7 support.",
    priceUsd: 10 / 83, bg: minecraftHero,
  },
  {
    key: "vps", label: "VPS Hosting", icon: Server, href: "/vps-hosting",
    title: "VPS Server Hosting",
    subtitle: "Full root access with dedicated resources, NVMe storage and Intel Gold 6154 processors.",
    priceUsd: 380 / 83, bg: vpsHero,
  },
  {
    key: "web", label: "Web Hosting", icon: Globe, href: "/web-hosting",
    title: "Web Hosting",
    subtitle: "Lightning-fast web hosting with cPanel, free SSL and unlimited bandwidth.",
    priceUsd: 95 / 83, bg: webHero,
  },
  {
    key: "bot", label: "Bot Hosting", icon: Bot, href: "/bot-hosting",
    title: "Discord Bot Hosting",
    subtitle: "24/7 uptime for your Discord bots with full Node.js, Python and Java support.",
    priceUsd: 30 / 83, bg: botHero,
  },
];

const ROTATION: TabKey[] = ["minecraft", "vps", "bot"];

export function HeroSection() {
  const [active, setActive] = useState<TabKey>("minecraft");
  const [paused, setPaused] = useState(false);
  const tab = tabs.find((t) => t.key === active)!;
  const { format } = useCurrency();

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((cur) => {
        const idx = ROTATION.indexOf(cur);
        const next = idx === -1 ? 0 : (idx + 1) % ROTATION.length;
        return ROTATION[next];
      });
    }, 8000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Crossfade background stack */}
      <div className="absolute inset-0">
        {tabs.map((t) => (
          <img
            key={t.key}
            src={t.bg}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              active === t.key ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />

      <div className="relative mx-auto flex min-h-[75vh] sm:min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-14 sm:py-24 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs backdrop-blur-md">
          <tab.icon className="h-3.5 w-3.5" />
          <span>{tab.label}</span>
        </div>

        <h1 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {tab.title}
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base md:text-lg">
          {tab.subtitle}
        </p>

        <p className="mb-6 text-lg font-semibold sm:mb-7 sm:text-xl">
          Starting at <span className="text-success">{format(tab.priceUsd)}</span>
          <span className="text-muted-foreground font-normal">/mo</span>
        </p>

        <Link
          to={tab.href}
          className="mb-8 inline-flex items-center gap-2 rounded-xl gradient-violet px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition hover:shadow-primary/50 sm:mb-12"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Tab pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-md sm:gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => { setActive(t.key); setPaused(true); }}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                active === t.key
                  ? "bg-white/10 text-white ring-1 ring-white/15"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:gap-6 sm:text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            99.9% Uptime
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            DDoS Protected
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Zap, title: "Instant Setup", desc: "Deployment in under 60 seconds. Automated provisioning the moment your payment is confirmed." },
  { icon: Shield, title: "DDoS Protection", desc: "Enterprise-grade mitigation capable of filtering up to 17Tbps+. Stay online during the most intense attacks." },
  { icon: Activity, title: "99.9% Uptime", desc: "Tier 3+ certified data centers with redundant power, cooling and network links." },
  { icon: Clock, title: "24/7 Support", desc: "Real-world experts at your service. Average response time under 15 minutes, day or night." },
  { icon: Cpu, title: "Powerful Hardware", desc: "Latest-gen AMD EPYC™ processors and enterprise NVMe Gen4 storage for maximum performance." },
  { icon: MapPin, title: "Global Locations", desc: "Globally distributed network with premium peerage for optimized gaming traffic." },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Cutting-Edge Features</h2>
        <p className="mt-3 text-muted-foreground">Discover unparalleled server performance and security.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/5 bg-card/40 p-6 transition hover:border-primary/30 hover:bg-card/60"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:scale-110">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Minecraft Hosting",
      desc: "Build, explore, and survive in blocky worlds.",
      href: "/minecraft",
      icon: Gamepad2,
      specLabel: "HARDWARE",
      specValue: "AMD Ryzen 9950X",
      img: minecraftHero,
    },
    {
      title: "VPS Hosting",
      desc: "Full root access with dedicated resources for developers.",
      href: "/vps-hosting",
      icon: Server,
      specLabel: "ACCESS",
      specValue: "KVM Root & NVMe",
      img: vpsHero,
    },
    {
      title: "Web Hosting",
      desc: "Lightning-fast hosting with cPanel included.",
      href: "/web-hosting",
      icon: Globe,
      specLabel: "SERVER",
      specValue: "LiteSpeed & SSL",
      img: webHero,
    },
    {
      title: "Bot Hosting",
      desc: "24/7 uptime for your Discord bots.",
      href: "/bot-hosting",
      icon: Bot,
      specLabel: "RUNTIME",
      specValue: "Node / Python / PM2",
      img: botHero,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Beyond Gaming</p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Your Complete Hosting Solution</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-zinc-800/90 bg-[#090a0d] p-5 transition-all duration-300 hover:border-zinc-700 hover:border-x-zinc-400"
          >
            {/* Top hairline highlight on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {s.img && (
                <div className="relative mb-4 -mx-5 -mt-5 h-28 overflow-hidden border-b border-zinc-800/80">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/30 to-transparent" />
                </div>
              )}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-black/60 text-white transition duration-300 group-hover:border-zinc-600">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded border border-zinc-800/80 bg-black/40 text-zinc-500 transition duration-300 group-hover:border-zinc-600 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{s.desc}</p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-[11px] font-mono text-sky-400">
              <span className="text-sky-400/80">{s.specLabel}:</span>
              <span className="font-semibold text-sky-400">{s.specValue}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─────────────  Game grid section  ───────────── */

import minecraftCard from "@/assets/games/minecraft-hero-wide.jpg";
import rustCard from "@/assets/games/rust.jpg";
import arkCard from "@/assets/games/ark.jpg";
import valheimCard from "@/assets/games/valheim.jpg";
import palworldCard from "@/assets/games/palworld.jpg";
import terrariaCard from "@/assets/games/terraria.jpg";
import cs2Card from "@/assets/games/cs2.jpg";
import fivemCard from "@/assets/games/fivem.jpg";
import hytaleCard from "@/assets/games/hytale.jpg";

const games = [
  { name: "Minecraft", img: minecraftCard, href: "/minecraft", priceUsd: 1, tag: "Most Popular" },
  { name: "Rust", img: rustCard, href: "/game-hosting", priceUsd: 2, tag: "Popular" },
  { name: "ARK: Survival Evolved", img: arkCard, href: "/game-hosting", priceUsd: 2 },
  { name: "Valheim", img: valheimCard, href: "/game-hosting", priceUsd: 2 },
  { name: "Palworld", img: palworldCard, href: "/game-hosting", priceUsd: 3 },
  { name: "Terraria", img: terrariaCard, href: "/game-hosting", priceUsd: 2 },
  { name: "Counter-Strike 2", img: cs2Card, href: "/game-hosting", priceUsd: 3, tag: "Popular" },
  { name: "FiveM (GTA V)", img: fivemCard, href: "/game-hosting", priceUsd: 2 },
  { name: "Hytale", img: hytaleCard, href: "/game-hosting", priceUsd: 2, tag: "Upcoming" },
];

export function GamesSection() {
  const { format } = useCurrency();

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Sleek subtle ambient background highlight - non-AI, ultra subtle dark glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-64 w-[640px] max-w-full rounded-full bg-sky-500/[0.03] blur-[120px]" />

      <div className="relative mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Game Hosting</p>
        <h2 className="text-3xl font-bold md:text-4xl">Servers for every game</h2>
        <p className="mt-3 text-muted-foreground">Pre-configured panels, mod support and instant deployment.</p>
      </div>

      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <Link
            key={g.name}
            to={g.href}
            className="group relative block aspect-[16/10] overflow-hidden rounded-md border border-zinc-800/90 bg-[#090a0d] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
          >
            <img
              src={g.img}
              alt={g.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Smooth dark cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/40 to-transparent" />

            {/* Crisp top hairline highlight on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Status / Category Tag */}
            {g.tag && (
              <span className="absolute right-3 top-3 rounded border border-zinc-700/80 bg-black/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
                {g.tag}
              </span>
            )}

            {/* Bottom info bar */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{g.name}</h3>
                <p className="mt-0.5 text-xs text-zinc-400">
                  Starting at <span className="font-semibold text-sky-400">{format(g.priceUsd)}</span>
                  <span className="text-zinc-500">/mo</span>
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-black/75 px-2.5 py-1 text-xs font-medium text-zinc-300 transition group-hover:border-zinc-600 group-hover:text-white">
                Explore <ArrowRight className="h-3 w-3 text-sky-400 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─────────────  Locations section  ───────────── */

export function LocationsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 overflow-hidden">
      {/* Dashed vertical guidelines across entire section (Cloudflare Blueprint Style) */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between overflow-hidden px-4">
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0 hidden sm:block" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0 hidden sm:block" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
      </div>

      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 h-80 w-[720px] max-w-full rounded-full bg-sky-500/[0.03] blur-[120px]" />

      <div className="relative mb-8 text-center z-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Global Network</p>
        <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Region: Earth</h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
          One unified global backbone for high-performance game servers, VPS and web workloads — close to your players, close to your data.
        </p>
      </div>

      <NetworkGlobe />
    </section>
  );
}

/* ─────────────  FAQ section  ───────────── */

const faqs = [
  { q: "How fast is server setup?", a: "Most servers are deployed automatically within 60 seconds of payment confirmation." },
  { q: "Do you offer DDoS protection?", a: "Yes — every plan includes enterprise-grade DDoS mitigation capable of filtering up to 17Tbps+." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade resources any time from the panel; we prorate the difference automatically." },
  { q: "Which payment methods do you accept?", a: "We accept all major credit cards, UPI, PayPal and crypto." },
  { q: "Is there a money-back guarantee?", a: "Yes — we offer a tiered refund window up to 5 days on eligible services (100% within 12h, 90% within 24h, 80% within 48h, 50% within 5 days). See our refund policy for full details." },
  { q: "Do you support custom mods and plugins?", a: "Yes. You get full file access via SFTP and a one-click installer for popular mods and plugins." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-24">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
        <h2 className="text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-white/5 bg-card/40">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.02]"
              >
                <span className="text-base font-medium">{f.q}</span>
                {isOpen ? <Minus className="h-4 w-4 shrink-0 text-primary" /> : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────  CTA banner  ───────────── */

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-md border border-zinc-800/90 bg-[#090a0d] p-5 sm:p-8 text-center md:p-14">
        {/* Technical Corner Crosshair Ticks */}
        <div className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs text-zinc-600 select-none">+</div>

        {/* Blueprint dot matrix background fading out towards edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Top hairline light */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 border border-zinc-800/80 bg-black/60 px-3 py-1 text-xs font-mono text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>INSTANT PROVISIONING • ZERO SETUP FEES</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to launch your server?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-400 md:text-base">
            Deploy in under 60 seconds with automated instant provisioning, enterprise-grade DDoS mitigation, and 24/7 dedicated support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto sm:max-w-none">
            <Link
              to="/minecraft"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-zinc-800 bg-black/50 px-7 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-white"
            >
              Contact Sales
            </Link>
          </div>

          {/* Technical Guarantee Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 border-t border-zinc-800/60 pt-6 text-[11px] sm:text-xs font-mono text-zinc-400">
            <span>⚡ &lt; 60s Automated Setup</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span>🛡 17+ Tbps Always-On DDoS</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span>💳 5-Day Tiered Money-Back Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
