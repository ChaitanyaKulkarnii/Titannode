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
  Flame,
  Activity,
  Layers,
  Sparkles,
  RefreshCw,
  Compass,
  Sliders,
} from "lucide-react";
import valheimHero from "@/assets/games/valheim.jpg";
import valheimLogo from "@/assets/valheim-logo.svg";

export const Route = createFileRoute("/valheim")({
  head: () => ({
    meta: [
      { title: "Valheim Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Valheim dedicated server hosting with Budget, Premium, and Ryzen 9 Deluxe tiers starting at ₹100/mo. BepInEx mods, Steam & Xbox crossplay, and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: ValheimPage,
});

export type ValheimTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: ValheimTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "BepInEx & ValheimPlus 1-Click Support",
  "Steam & Xbox Crossplay Ready",
  "Automated World Save & Cloud Backups",
  "Enterprise 10Tbps+ DDoS Mitigation",
  "Full SFTP & Root `.db`/`.fwl` Access",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: ValheimTier,
  popular?: boolean
): PlanCardData & { tier: ValheimTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget Valheim Server"
      : tier === "premium"
      ? "Premium Valheim Server"
      : "Ryzen 9 Valheim Server",
  price: priceInr / 86.5,
  topBannerLogo: valheimLogo,
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

const allPlans: (PlanCardData & { tier: ValheimTier })[] = [
  // ───────── Valheim Budget Plans ─────────
  makePlan("Titan Starter", "4 GB RAM", "100% CPU", "20 GB NVMe", 100, "budget"),
  makePlan("Titan Scout", "6 GB RAM", "200% CPU", "30 GB NVMe", 150, "budget"),
  makePlan("Titan Pro", "8 GB RAM", "300% CPU", "40 GB NVMe", 200, "budget"),
  makePlan("Titan Hero", "12 GB RAM", "400% CPU", "50 GB NVMe", 300, "budget"),
  makePlan("Titan Champion", "16 GB RAM", "500% CPU", "60 GB NVMe", 400, "budget", true),
  makePlan("Titan Legend", "24 GB RAM", "600% CPU", "80 GB NVMe", 580, "budget"),
  makePlan("Titan Star", "32 GB RAM", "700% CPU", "100 GB NVMe", 850, "budget"),
  makePlan("Titan Ultra", "48 GB RAM", "850% CPU", "120 GB NVMe", 1162, "budget"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "150 GB NVMe", 1500, "budget"),

  // ───────── Valheim Premium Plans ─────────
  makePlan("Titan Starter", "6 GB RAM", "100% CPU", "50 GB NVMe", 355, "premium"),
  makePlan("Titan Pro", "8 GB RAM", "200% CPU", "70 GB NVMe", 520, "premium"),
  makePlan("Titan Hero", "12 GB RAM", "300% CPU", "100 GB NVMe", 914, "premium", true),
  makePlan("Titan Champion", "16 GB RAM", "400% CPU", "120 GB Storage", 1030, "premium"),
  makePlan("Titan Legend", "24 GB RAM", "500% CPU", "200 GB Storage", 1300, "premium"),
  makePlan("Titan Star", "32 GB RAM", "750% CPU", "250 GB NVMe", 1600, "premium"),
  makePlan("Titan Ultra", "48 GB RAM", "900% CPU", "300 GB NVMe", 2008, "premium"),
  makePlan("Titan Max", "64 GB RAM", "1000% CPU", "350 GB NVMe", 2610, "premium"),

  // ───────── Valheim Deluxe (Ryzen 9) Plans ─────────
  makePlan("Titan Starter", "4 GB RAM", "100% CPU", "40 GB NVMe", 610, "deluxe"),
  makePlan("Titan Pro", "8 GB RAM", "200% CPU", "60 GB NVMe", 980, "deluxe"),
  makePlan("Titan Hero", "12 GB RAM", "250% CPU", "80 GB NVMe", 1280, "deluxe", true),
  makePlan("Titan Champion", "16 GB RAM", "300% CPU", "100 GB NVMe", 1600, "deluxe"),
  makePlan("Titan Legend", "24 GB RAM", "400% CPU", "140 GB Storage", 2200, "deluxe"),
  makePlan("Titan Star", "32 GB RAM", "500% CPU", "180 GB Storage", 3000, "deluxe"),
  makePlan("Titan Max", "48 GB RAM", "600% CPU", "250 GB NVMe", 3940, "deluxe"),
];

const valheimFeatures = [
  {
    icon: Sliders,
    title: "BepInEx & ValheimPlus",
    desc: "1-click mod installation with BepInEx framework. Modify carry weight, craft ranges, building limits, and loot drop rates.",
  },
  {
    icon: Compass,
    title: "Steam & Xbox Crossplay",
    desc: "Host Viking worlds with native crossplay enabled. Friends on Steam, Windows PC Game Pass, and Xbox consoles can explore together.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Lag World Sync",
    desc: "High-frequency CPU threads eliminate portal stutter, heavy terrain lag, and boat desync during massive Viking raids.",
  },
  {
    icon: Shield,
    title: "Path.net Anti-DDoS",
    desc: "Real-time UDP packet filtering engineered specifically for Unity game networking and Steam query port flooding.",
  },
];

export function ValheimPage() {
  const [tier, setTier] = useState<ValheimTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={valheimHero}
          alt="Valheim Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/65 via-[#050810]/45 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-4 flex items-center justify-center">
            <img
              src={valheimLogo}
              alt="Valheim Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(56,189,248,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Valheim Server <span className="text-[#38bdf8]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Conquer the 10th Norse realm with flawless performance. Seamless Steam &amp; Xbox crossplay, automated world saves, BepInEx modding, and 10Tbps+ DDoS protection.
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
            Choose Your Valheim Plan
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
              ? "Budget Plans: High-value Valheim hosting starting at ₹100/mo"
              : tier === "premium"
              ? "Premium Plans: High-performance NVMe starting at ₹355/mo"
              : "Ryzen 9 Plans: Extreme AMD Ryzen™ 9 compute starting at ₹610/mo"}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8]">Viking Engineered</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host Valheim On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valheimFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-[#38bdf8]/40 hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-[#38bdf8]">
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
