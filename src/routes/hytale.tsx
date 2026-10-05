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
          "High-performance Hytale server hosting with Budget (Intel Xeon Platinum) and Premium (Ryzen 9 DDR5) tiers starting at ₹110/mo. Titan Starter to Titan Max plans with NVMe Gen4 and enterprise DDoS protection.",
      },
    ],
  }),
  component: HytalePage,
});

export type HytaleTier = "budget" | "premium";

const tierOptions: { id: HytaleTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Tier", icon: Server },
  { id: "premium", label: "Premium Tier", icon: Flame },
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
  subtitle: tier === "budget" ? "Budget Hytale Server" : "Premium Hytale Server",
  price: priceInr / 83,
  topBannerLogo: hytaleLogo,
  popular,
  tier,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "NVMe", value: storage },
    { icon: Shield, label: "Anti-DDoS", value: "10Tbps+ Path.net" },
  ],
  features,
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const allPlans: (PlanCardData & { tier: HytaleTier })[] = [
  // Budget Tier (Intel Xeon Platinum 8269CY)
  makePlan("Titan Starter", "4 GiB DDR4", "100% CPU", "20 GiB NVMe", 110, "budget"),
  makePlan("Titan Pro", "6 GiB DDR4", "200% CPU", "30 GiB NVMe", 150, "budget"),
  makePlan("Titan Hero", "8 GiB DDR4", "300% CPU", "40 GiB NVMe", 190, "budget", true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% CPU", "50 GiB NVMe", 270, "budget"),
  makePlan("Titan Star", "16 GiB DDR4", "500% CPU", "60 GiB NVMe", 350, "budget"),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% CPU", "80 GiB NVMe", 500, "budget"),
  makePlan("Titan Max", "32 GiB DDR4", "700% CPU", "100 GiB NVMe", 650, "budget"),

  // Premium Tier (AMD Ryzen 9 9950X / DDR5 5600MHz RAM & Gen4 NVMe)
  makePlan("Titan Starter", "4 GiB DDR5 (5600MHz)", "150% CPU", "30 GiB NVMe Gen4", 180, "premium"),
  makePlan("Titan Pro", "6 GiB DDR5 (5600MHz)", "250% CPU", "45 GiB NVMe Gen4", 250, "premium"),
  makePlan("Titan Hero", "8 GiB DDR5 (5600MHz)", "350% CPU", "60 GiB NVMe Gen4", 320, "premium", true),
  makePlan("Titan Legend", "12 GiB DDR5 (5600MHz)", "450% CPU", "80 GiB NVMe Gen4", 460, "premium"),
  makePlan("Titan Star", "16 GiB DDR5 (5600MHz)", "550% CPU", "100 GiB NVMe Gen4", 590, "premium"),
  makePlan("Titan Ultra", "24 GiB DDR5 (5600MHz)", "700% CPU", "140 GiB NVMe Gen4", 840, "premium"),
  makePlan("Titan Max", "32 GiB DDR5 (5600MHz)", "800% CPU", "180 GiB NVMe Gen4", 1090, "premium"),
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

function HytalePage() {
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
          className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/80 via-[#050810]/60 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Hytale Host • Budget &amp; Premium Ryzen 9</span>
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
            Switch between high-value Budget and ultra-performance Ryzen 9 Premium tiers.
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
                  activeClass = "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 font-bold";
                } else {
                  activeClass = "bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold";
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
              ? "Budget Tier: Powered by Intel® Xeon® Platinum 8269CY starting at ₹110/mo"
              : "Premium Tier: AMD Ryzen™ 9 9950X / 7950X @ 5.7GHz with DDR5 5600MHz RAM"}
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlans.map((p) => (
            <PlanCard key={`${p.tier}-${p.name}`} plan={p} />
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
