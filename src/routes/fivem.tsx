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
  Radio,
  Sliders,
  Database,
  Flame,
  Activity,
} from "lucide-react";
import fivemHero from "@/assets/games/fivem.jpg";
import fivemLogo from "@/assets/fivem-logo.png";

export const Route = createFileRoute("/fivem")({
  head: () => ({
    meta: [
      { title: "FiveM Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance FiveM server hosting with Budget (Intel Platinum), Premium, and Deluxe tiers starting at ₹120/mo. txAdmin pre-installed, OneSync ready, MySQL database and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: FiveMPage,
});

export type FiveMTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: FiveMTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "txAdmin Web Panel Included",
  "OneSync Infinity 1024-Slot Ready",
  "Free Managed MariaDB Database",
  "Enterprise 10Tbps+ DDoS Filtering",
  "Instant 60-Second Setup",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: FiveMTier,
  popular?: boolean
): PlanCardData & { tier: FiveMTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget FiveM Server"
      : tier === "premium"
      ? "Premium NVMe FiveM Server"
      : "Deluxe FiveM Server",
  price: priceInr / 86.5,
  topBannerLogo: fivemLogo,
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

const allPlans: (PlanCardData & { tier: FiveMTier })[] = [
  // ───────── Budget Plans (Intel Platinum) ─────────
  makePlan("Titan Starter", "4 GB RAM", "100% CPU", "20 GB NVMe", 120, "budget"),
  makePlan("Titan Pro", "6 GB RAM", "200% CPU", "30 GB NVMe", 160, "budget"),
  makePlan("Titan Hero", "8 GB RAM", "300% CPU", "40 GB NVMe", 200, "budget", true),
  makePlan("Titan Legend", "12 GB RAM", "400% CPU", "50 GB NVMe", 280, "budget"),
  makePlan("Titan Star", "16 GB RAM", "500% CPU", "60 GB NVMe", 360, "budget"),
  makePlan("Titan Ultra", "24 GB RAM", "600% CPU", "80 GB NVMe", 520, "budget"),
  makePlan("Titan Max", "32 GB RAM", "700% CPU", "100 GB NVMe", 660, "budget"),

  // ───────── Premium Plans (AMD Ryzen DDR5) ─────────
  makePlan("Titan Starter", "4 GB RAM", "150% CPU", "30 GB NVMe Gen4", 190, "premium"),
  makePlan("Titan Pro", "6 GB RAM", "250% CPU", "45 GB NVMe Gen4", 260, "premium"),
  makePlan("Titan Hero", "8 GB RAM", "350% CPU", "60 GB NVMe Gen4", 340, "premium", true),
  makePlan("Titan Legend", "12 GB RAM", "450% CPU", "80 GB NVMe Gen4", 480, "premium"),
  makePlan("Titan Star", "16 GB RAM", "550% CPU", "100 GB NVMe Gen4", 620, "premium"),
  makePlan("Titan Ultra", "24 GB RAM", "700% CPU", "140 GB NVMe Gen4", 880, "premium"),
  makePlan("Titan Max", "32 GB RAM", "800% CPU", "180 GB NVMe Gen4", 1120, "premium"),

  // ───────── Deluxe Plans (AMD Ryzen 9 9950X OneSync) ─────────
  makePlan("Titan Starter", "8 GB RAM", "250% CPU", "80 GB NVMe Gen4", 950, "deluxe"),
  makePlan("Titan Hero", "16 GB RAM", "400% CPU", "140 GB NVMe Gen4", 1620, "deluxe", true),
  makePlan("Titan Legend", "24 GB RAM", "550% CPU", "200 GB NVMe Gen4", 2200, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "280 GB NVMe Gen4", 2980, "deluxe"),
  makePlan("Titan Ultra", "48 GB RAM", "900% CPU", "400 GB NVMe Gen4", 3890, "deluxe"),
  makePlan("Titan Max", "64 GB RAM", "1100% CPU", "500 GB NVMe Gen4", 4750, "deluxe"),
];

const fivemFeatures = [
  {
    icon: Sliders,
    title: "Official txAdmin Included",
    desc: "Complete web GUI management for FiveM. Live console, player bans, announcements, automated schedule restarts, and diagnostics.",
  },
  {
    icon: Radio,
    title: "OneSync Infinity Support",
    desc: "Engineered to smoothly scale up to 1,024 concurrent players with state-aware networking and synchronization.",
  },
  {
    icon: Database,
    title: "Managed MariaDB / MySQL",
    desc: "Pre-configured high-performance database instance ready for ESX, QBCore, and custom SQL resource frameworks.",
  },
  {
    icon: Shield,
    title: "FiveM-Specific Anti-DDoS",
    desc: "Automated Path.net network scrubbing tailored for OneSync UDP bursts and server list query flooding.",
  },
];

export function FiveMPage() {
  const [tier, setTier] = useState<FiveMTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={fivemHero}
          alt="FiveM Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-orange-400 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated FiveM Host • Budget, Premium &amp; Deluxe</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={fivemLogo}
              alt="FiveM Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(249,115,22,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            FiveM Server <span className="text-[#f97316]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Run lag-free GTA V Roleplay servers with OneSync Infinity, txAdmin panel, pre-configured MySQL, and 10Tbps+ enterprise DDoS mitigation.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#f97316]">
            <span className="h-px w-6 sm:w-8 bg-[#f97316]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#f97316]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your FiveM Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between Intel® Xeon® Budget, high-speed NVMe Premium, and AMD Ryzen™ 9 Deluxe configurations.
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
            <Activity className="h-3.5 w-3.5 text-[#f97316]" />
            {tier === "budget"
              ? "Budget Plans: Intel® Xeon® Platinum multi-core starting at ₹120/mo"
              : tier === "premium"
              ? "Premium Plans: High-speed NVMe Gen4 hosting starting at ₹190/mo"
              : "Deluxe Plans: Extreme AMD Ryzen™ 9 9950X compute starting at ₹950/mo"}
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlans.map((p) => (
            <PlanCard key={`${p.tier}-${p.name}-${p.price}`} plan={p} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f97316]">Roleplay Performance</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">Engineered for FiveM Roleplay</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fivemFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:border-[#f97316]/40 hover:shadow-[0_12px_30px_rgba(249,115,22,0.15)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#f97316]/20 bg-[#f97316]/10 text-[#f97316]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
