import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { LocationBanners } from "@/components/LocationBanners";
import {
  Cpu,
  Server,
  HardDrive,
  Zap,
  Shield,
  Sparkles,
  Code2,
  Sliders,
  Flame,
  Activity,
} from "lucide-react";
import hytaleHero from "@/assets/games/hytale.jpg";
import hytaleLogo from "@/assets/hytale-logo.png";

export const Route = createFileRoute("/hytale")({
  head: () => ({
    meta: [
      { title: "Hytale Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Hytale server hosting with Budget (Intel Xeon Platinum), Premium, and Ryzen 9 tiers starting at ₹110/mo. Titan Starter to Titan Max plans with NVMe Gen4 and enterprise DDoS protection.",
      },
    ],
  }),
  component: HytalePage,
});

export type HytaleTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: HytaleTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "Pre-configured World Engine",
  "Enterprise 10Tbps+ DDoS Protection",
  "Full SFTP & Config Editor Access",
  "Automated World Backups",
  "Instant 60-Second Setup",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: HytaleTier,
  popular?: boolean
): PlanCardData & { tier: HytaleTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget Hytale Server"
      : tier === "premium"
      ? "Premium NVMe Hytale Server"
      : "Ryzen 9 Hytale Server",
  price: priceInr / 86.5,
  topBannerLogo: hytaleLogo,
  popular,
  tier,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "Storage", value: storage },
    { icon: Shield, label: "Anti-DDoS", value: "10Tbps+ Path.net" },
  ],
  features,
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const allPlans: (PlanCardData & { tier: HytaleTier })[] = [
  // ───────── Hytale Budget Plans (Intel Xeon Platinum) ─────────
  makePlan("Titan Starter", "4 GB RAM", "100% CPU", "20 GB NVMe", 110, "budget"),
  makePlan("Titan Pro", "6 GB RAM", "200% CPU", "30 GB NVMe", 150, "budget"),
  makePlan("Titan Hero", "8 GB RAM", "300% CPU", "40 GB NVMe", 190, "budget", true),
  makePlan("Titan Legend", "12 GB RAM", "400% CPU", "50 GB NVMe", 270, "budget"),
  makePlan("Titan Star", "16 GB RAM", "500% CPU", "60 GB NVMe", 350, "budget"),
  makePlan("Titan Ultra", "24 GB RAM", "600% CPU", "80 GB NVMe", 500, "budget"),
  makePlan("Titan Max", "32 GB RAM", "700% CPU", "100 GB NVMe", 650, "budget"),

  // ───────── Hytale Premium Plans ─────────
  makePlan("Titan Starter", "6 GB RAM", "100% CPU", "50 GB NVMe", 300, "premium"),
  makePlan("Titan Pro", "8 GB RAM", "200% CPU", "70 GB NVMe", 505, "premium"),
  makePlan("Titan Hero", "12 GB RAM", "300% CPU", "100 GB NVMe", 775, "premium", true),
  makePlan("Titan Champion", "16 GB RAM", "400% CPU", "120 GB Storage", 985, "premium"),
  makePlan("Titan Legend", "24 GB RAM", "500% CPU", "200 GB Storage", 1300, "premium"),
  makePlan("Titan Star", "32 GB RAM", "750% CPU", "250 GB NVMe", 1500, "premium"),
  makePlan("Titan Ultra", "48 GB RAM", "900% CPU", "300 GB NVMe", 1982, "premium"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "350 GB NVMe", 2410, "premium"),

  // ───────── Hytale Ryzen 9 Plans ─────────
  makePlan("Titan Starter", "4 GB RAM", "100% CPU", "50 GB NVMe", 565, "deluxe"),
  makePlan("Titan Pro", "8 GB RAM", "200% CPU", "70 GB NVMe", 900, "deluxe"),
  makePlan("Titan Hero", "16 GB RAM", "300% CPU", "100 GB NVMe", 1500, "deluxe", true),
  makePlan("Titan Champion", "24 GB RAM", "400% CPU", "120 GB Storage", 2078, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "500% CPU", "200 GB Storage", 2860, "deluxe"),
  makePlan("Titan Max", "48 GB RAM", "600% CPU", "250 GB NVMe", 3720, "deluxe"),
];

const hytaleFeatures = [
  {
    icon: Code2,
    title: "Java & In-Game Scripting",
    desc: "Complete support for Hytale custom server plugins, live asset reloading, and client-side modding tools.",
  },
  {
    icon: Zap,
    title: "Instant 60s Deployment",
    desc: "Your Hytale node is initialized with bare-metal compute and dedicated routing instantly upon order.",
  },
  {
    icon: Shield,
    title: "Layer 4 & 7 DDoS Mitigation",
    desc: "Always-on Path.net filtering to mitigate UDP and protocol-level flood attacks without latency spikes.",
  },
  {
    icon: Sliders,
    title: "Full World Config Editor",
    desc: "Easily adjust world generation presets, creature spawn rates, and gameplay parameters via web GUI or SFTP.",
  },
];

export function HytalePage() {
  const [tier, setTier] = useState<HytaleTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={hytaleHero}
          alt="Hytale Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Hytale Host • Budget, Premium &amp; Ryzen 9</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={hytaleLogo}
              alt="Hytale Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(16,185,129,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Hytale Server <span className="text-emerald-400">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Embark on a journey of creation and adventure in Orbis. Ultra-low latency compute optimized for high-entity multiplayer worlds, procedural generation, and custom scripts.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400">
            <span className="h-px w-6 sm:w-8 bg-emerald-400/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-emerald-400/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Hytale Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between Intel® Xeon® Budget, high-speed NVMe Premium, and AMD Ryzen™ 9 tiers.
          </p>
        </div>

        {/* Tier Switcher Buttons */}
        <div className="my-6 sm:my-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-card/40 p-1.5 backdrop-blur shadow-inner">
            {tierOptions.map((t) => {
              const active = tier === t.id;
              let activeClass = "";
              if (active) {
                if (t.id === "budget") {
                  activeClass = "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/30 font-bold";
                } else if (t.id === "premium") {
                  activeClass = "bg-[#38bdf8] text-black shadow-lg shadow-[#38bdf8]/35 font-bold";
                } else {
                  activeClass = "bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/30 font-bold";
                }
              } else {
                activeClass = "text-muted-foreground hover:text-foreground hover:bg-white/5";
              }

              return (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 ${activeClass}`}
                >
                  <t.icon className="h-4 w-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier Info Banner */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#060a12] px-4 py-1.5 text-xs text-zinc-400">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            {tier === "budget"
              ? "Budget Plans: Powered by Intel® Xeon® Platinum starting at ₹110/mo"
              : tier === "premium"
              ? "Premium Plans: High-performance NVMe starting at ₹300/mo"
              : "Ryzen 9 Plans: Extreme AMD Ryzen™ 9 9950X performance starting at ₹565/mo"}
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlans.map((p) => (
            <PlanCard key={`${p.tier}-${p.name}-${p.price}`} plan={p} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-white/[0.06] bg-black/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Engineered For Creators</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host Hytale On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hytaleFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_12px_30px_rgba(16,185,129,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
