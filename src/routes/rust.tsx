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
  Flame,
  Activity,
  RefreshCw,
  Sliders,
  Layers,
} from "lucide-react";
import rustHero from "@/assets/games/rust.jpg";
import rustLogo from "@/assets/rust-logo.svg";

export const Route = createFileRoute("/rust")({
  head: () => ({
    meta: [
      { title: "Rust Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Rust server hosting with Budget, Premium, and Ryzen 9 Deluxe tiers starting at ₹270/mo. uMod, Carbon, automated wipe scheduler and 10Tbps+ DDoS mitigation.",
      },
    ],
  }),
  component: RustPage,
});

export type RustTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: RustTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "uMod (Oxide) & Carbon Support",
  "Automated Wipe & Backup Scheduler",
  "Custom & Procedural Maps (RustMaps)",
  "Enterprise 10Tbps+ DDoS Protection",
  "Instant 60-Second Setup",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: RustTier,
  popular?: boolean
): PlanCardData & { tier: RustTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget Rust Server"
      : tier === "premium"
      ? "Premium Rust Server"
      : "Ryzen 9 Deluxe Rust Server",
  price: priceInr / 86.5,
  topBannerLogo: rustLogo,
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

const allPlans: (PlanCardData & { tier: RustTier })[] = [
  // ───────── Rust Budget Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "80 GB NVMe", 270, "budget"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "100 GB NVMe", 400, "budget"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "120 GB NVMe", 550, "budget", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 800, "budget"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "180 GB NVMe", 1200, "budget"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "200 GB NVMe", 1600, "budget"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "250 GB NVMe", 2000, "budget"),

  // ───────── Rust Premium Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "80 GB NVMe", 545, "premium"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "100 GB NVMe", 866, "premium"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "120 GB NVMe", 1100, "premium", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 1467, "premium"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "180 GB NVMe", 1740, "premium"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "200 GB NVMe", 2200, "premium"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "250 GB NVMe", 2960, "premium"),

  // ───────── Rust Deluxe (Ryzen 9) Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "70 GB NVMe", 990, "deluxe"),
  makePlan("Titan Hero", "16 GB RAM", "300% CPU", "100 GB NVMe", 1680, "deluxe", true),
  makePlan("Titan Legend", "24 GB RAM", "400% CPU", "120 GB NVMe", 2270, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "500% CPU", "200 GB NVMe", 3360, "deluxe"),
  makePlan("Titan Max", "48 GB RAM", "600% CPU", "250 GB NVMe", 4100, "deluxe"),
];

const rustFeatures = [
  {
    icon: Flame,
    title: "uMod & Carbon 1-Click",
    desc: "Deploy Oxide/Carbon plugins, custom kits, gather multipliers, and custom loot tables in seconds.",
  },
  {
    icon: RefreshCw,
    title: "Automated Wipe Manager",
    desc: "Schedule automated map and blueprint wipes with automated backups and Discord notifications.",
  },
  {
    icon: Shield,
    title: "Path.net Anti-DDoS",
    desc: "Hardware-level UDP packet scrubbing engineered specifically for Rust's RakNet protocol.",
  },
  {
    icon: HardDrive,
    title: "Ultra-Fast Gen4 NVMe",
    desc: "Instant world generation and zero rubberbanding, keeping collider save times under milliseconds.",
  },
];

function RustPage() {
  const [tier, setTier] = useState<RustTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={rustHero}
          alt="Rust Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/65 via-[#050810]/45 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ce422b]/40 bg-black/60 px-4 py-1.5 text-xs font-semibold text-[#f87171] backdrop-blur-md shadow-[0_0_18px_rgba(206,66,43,0.3)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Rust Server Host • Budget • Premium • Deluxe Ryzen 9</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={rustLogo}
              alt="Rust Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(206,66,43,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Rust Server <span className="text-[#ce422b]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Survive the wipe with uninterrupted FPS and ultra-low ping. Powered by high-frequency compute, automated wipe tools, uMod/Carbon plugin support, and 10Tbps+ DDoS mitigation.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#ce422b]">
            <span className="h-px w-6 sm:w-8 bg-[#ce422b]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#ce422b]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Rust Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Select between Budget, Premium, and AMD Ryzen™ 9 Deluxe configurations.
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
                  activeClass = "bg-[#ce422b] text-white shadow-lg shadow-[#ce422b]/30 font-bold";
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
            <Activity className="h-3.5 w-3.5 text-[#ce422b]" />
            {tier === "budget"
              ? "Budget Tier: High-value Rust hosting starting at ₹270/mo"
              : tier === "premium"
              ? "Premium Tier: High-performance NVMe starting at ₹545/mo"
              : "Deluxe Tier: Extreme AMD Ryzen™ 9 9950X compute starting at ₹990/mo"}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ce422b]">Engineered For Rust</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host Rust On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rustFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-[#ce422b]/40 hover:shadow-[0_12px_30px_rgba(206,66,43,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#ce422b]/20 bg-[#ce422b]/10 text-[#ce422b]">
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
