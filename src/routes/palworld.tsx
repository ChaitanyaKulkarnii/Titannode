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
  Gamepad2,
  RefreshCw,
  Terminal,
  Activity,
  Flame,
} from "lucide-react";
import palworldHero from "@/assets/hero/palworld-hero.jpg";
import palworldLogo from "@/assets/palworld-logo.png";

export const Route = createFileRoute("/palworld")({
  head: () => ({
    meta: [
      { title: "Palworld Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Palworld server hosting with Budget, Premium, and Deluxe tiers starting at ₹300/mo. Titan Starter to Titan Max plans with NVMe Gen4, automated RAM management and DDoS protection.",
      },
    ],
  }),
  component: PalworldPage,
});

export type PalTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: PalTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "Automated RAM Leak Restarts",
  "Enterprise 10Tbps+ DDoS Protection",
  "Full SFTP & Root Config Access",
  "Pre-configured World Settings",
  "Instant 60-Second Setup",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: PalTier,
  popular?: boolean
): PlanCardData & { tier: PalTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget Palworld Server"
      : tier === "premium"
      ? "Premium NVMe Palworld Server"
      : "Deluxe Palworld Server",
  price: priceInr / 86.5,
  topBannerLogo: palworldLogo,
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

const allPlans: (PlanCardData & { tier: PalTier })[] = [
  // ───────── Budget Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "60 GB NVMe", 300, "budget"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "80 GB NVMe", 400, "budget"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "100 GB NVMe", 600, "budget", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 800, "budget"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "200 GB NVMe", 1200, "budget"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "300 GB NVMe", 1600, "budget"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "400 GB NVMe", 2000, "budget"),

  // ───────── Premium Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "80 GB NVMe", 538, "premium"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "100 GB NVMe", 800, "premium"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "120 GB NVMe", 1070, "premium", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 1360, "premium"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "180 GB NVMe", 1650, "premium"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "200 GB NVMe", 2300, "premium"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "250 GB NVMe", 3000, "premium"),

  // ───────── Deluxe Plans (AMD Ryzen 9 9950X) ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "70 GB NVMe", 1000, "deluxe"),
  makePlan("Titan Hero", "16 GB RAM", "300% CPU", "100 GB NVMe", 1700, "deluxe", true),
  makePlan("Titan Legend", "24 GB RAM", "400% CPU", "120 GB Storage", 2300, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "500% CPU", "200 GB Storage", 3370, "deluxe"),
  makePlan("Titan Max", "48 GB RAM", "600% CPU", "250 GB NVMe", 4200, "deluxe"),
];

const palFeatures = [
  {
    icon: RefreshCw,
    title: "Automated RAM Cleaner",
    desc: "Unreal Engine 5 memory leak protection with automated garbage-collection restarts during player downtime.",
  },
  {
    icon: Zap,
    title: "Instant 60s Deployment",
    desc: "Your Palworld dedicated world is compiled, generated, and assigned dedicated IP routing instantly upon order.",
  },
  {
    icon: Shield,
    title: "Layer 4 & 7 DDoS Filtering",
    desc: "Real-time UDP packet inspection engineered specifically for Palworld protocol flood attacks.",
  },
  {
    icon: Terminal,
    title: "Full Admin Controls",
    desc: "Direct access to WorldOption.sav, admin passwords, server multipliers, exp rates, and death drop settings.",
  },
];

function PalworldPage() {
  const [tier, setTier] = useState<PalTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={palworldHero}
          alt="Palworld Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-sky-400 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Palworld Host • Budget, Premium &amp; Deluxe</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={palworldLogo}
              alt="Palworld Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(56,189,248,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Palworld Server <span className="text-[#38bdf8]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            High-performance Palworld multiplayer servers with automated memory leak cleanups, instant deployment, and 10Tbps+ enterprise DDoS mitigation.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#38bdf8]">
            <span className="h-px w-6 sm:w-8 bg-[#38bdf8]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#38bdf8]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Palworld Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between entry-level Budget, high-speed Premium, and AMD Ryzen™ 9 Deluxe configurations.
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
            <Activity className="h-3.5 w-3.5 text-[#38bdf8]" />
            {tier === "budget"
              ? "Budget Plans: High-value multi-core Palworld hosting starting at ₹300/mo"
              : tier === "premium"
              ? "Premium Plans: High-speed NVMe hosting starting at ₹538/mo"
              : "Deluxe Plans: Extreme AMD Ryzen™ 9 9950X performance starting at ₹1,000/mo"}
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlans.map((p) => (
            <PlanCard key={`${p.tier}-${p.name}-${p.price}`} plan={p} />
          ))}
        </div>
      </section>

      {/* Palworld Specific Features */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">Optimized Engine</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">Engineered for Palworld Multi-core</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {palFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:border-[#38bdf8]/40 hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-[#38bdf8]">
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
