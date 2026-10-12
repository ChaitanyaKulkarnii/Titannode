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
  Layers,
  Network,
  Download,
  Settings2,
} from "lucide-react";
import arkHero from "@/assets/games/ark.jpg";
import arkLogo from "@/assets/ark-logo.svg";

export const Route = createFileRoute("/ark")({
  head: () => ({
    meta: [
      { title: "ARK: Survival Evolved Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance ARK: Survival Evolved server hosting with Budget, Premium, and Ryzen 9 Deluxe tiers starting at ₹370/mo. Steam Workshop mods, Cross-ARK clusters, and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: ArkPage,
});

export type ArkTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: ArkTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "Cross-ARK Cluster Transfer Ready",
  "Steam Workshop 1-Click Mod Manager",
  "Full GameUserSettings.ini Web Editor",
  "Automated World Save & Backup Manager",
  "Enterprise 10Tbps+ DDoS Mitigation",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: ArkTier,
  popular?: boolean
): PlanCardData & { tier: ArkTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget ARK Server"
      : tier === "premium"
      ? "Premium ARK Server"
      : "Ryzen 9 Deluxe ARK Server",
  price: priceInr / 86.5,
  topBannerLogo: arkLogo,
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

const allPlans: (PlanCardData & { tier: ArkTier })[] = [
  // ───────── ARK Budget Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "60 GB NVMe", 370, "budget"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "80 GB NVMe", 480, "budget"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "100 GB NVMe", 720, "budget", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 1030, "budget"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "200 GB NVMe", 1420, "budget"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "300 GB NVMe", 1680, "budget"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "400 GB NVMe", 2040, "budget"),

  // ───────── ARK Premium Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "80 GB NVMe", 565, "premium"),
  makePlan("Titan Pro", "12 GB RAM", "400% CPU", "100 GB NVMe", 880, "premium"),
  makePlan("Titan Hero", "16 GB RAM", "500% CPU", "120 GB NVMe", 1200, "premium", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "150 GB NVMe", 1450, "premium"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "180 GB NVMe", 1740, "premium"),
  makePlan("Titan Ultra", "48 GB RAM", "800% CPU", "200 GB NVMe", 2400, "premium"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "250 GB NVMe", 3100, "premium"),

  // ───────── ARK Deluxe (Ryzen 9) Plans ─────────
  makePlan("Titan Starter", "8 GB RAM", "200% CPU", "70 GB NVMe", 1050, "deluxe"),
  makePlan("Titan Hero", "16 GB RAM", "300% CPU", "100 GB NVMe", 1770, "deluxe", true),
  makePlan("Titan Legend", "24 GB RAM", "400% CPU", "120 GB Storage", 2384, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "500% CPU", "200 GB Storage", 3430, "deluxe"),
  makePlan("Titan Max", "48 GB RAM", "600% CPU", "250 GB NVMe", 4400, "deluxe"),
];

const arkFeatures = [
  {
    icon: Network,
    title: "Cross-ARK Clustering",
    desc: "Seamlessly link multiple maps into one cluster. Transfer survivors, tamed dinos, and inventory across worlds effortlessly.",
  },
  {
    icon: Download,
    title: "1-Click Steam Workshop",
    desc: "Install popular mods like Structures Plus (S+), Primal Fear, Dino Storage, and Awesome SpyGlass with automatic updates.",
  },
  {
    icon: Settings2,
    title: "Complete INI Editor",
    desc: "Easily customize taming multipliers, XP curves, breeding speeds, engram points, and harvest rates via web GUI or raw text.",
  },
  {
    icon: Shield,
    title: "Dedicated UDP DDoS Filter",
    desc: "Enterprise Path.net traffic scrubbing specifically optimized for Unreal Engine 4 network protocol floods.",
  },
];

function ArkPage() {
  const [tier, setTier] = useState<ArkTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={arkHero}
          alt="ARK: Survival Evolved Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/65 via-[#050810]/45 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">

          <div className="mb-4 flex items-center justify-center">
            <img
              src={arkLogo}
              alt="ARK: Survival Evolved Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(0,229,255,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            ARK Server <span className="text-[#00e5ff]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Tame, breed, and build without lag spikes or memory exhaustion. Ultra-fast NVMe storage, automated cluster networking, Steam Workshop mods, and 10Tbps+ DDoS mitigation.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#00e5ff]">
            <span className="h-px w-6 sm:w-8 bg-[#00e5ff]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#00e5ff]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your ARK Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between high-value Budget, high-speed Premium, and AMD Ryzen™ 9 Deluxe configurations.
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
                  activeClass = "bg-[#00e5ff] text-black shadow-lg shadow-[#00e5ff]/35 font-bold";
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
            <Activity className="h-3.5 w-3.5 text-[#00e5ff]" />
            {tier === "budget"
              ? "Budget Tier: High-value ARK hosting starting at ₹370/mo"
              : tier === "premium"
              ? "Premium Tier: High-performance NVMe starting at ₹565/mo"
              : "Deluxe Tier: Extreme AMD Ryzen™ 9 9950X compute starting at ₹1,050/mo"}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00e5ff]">Engineered For Survival</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host ARK On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {arkFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-[#00e5ff]/40 hover:shadow-[0_12px_30px_rgba(0,229,255,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#00e5ff]/20 bg-[#00e5ff]/10 text-[#00e5ff]">
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
