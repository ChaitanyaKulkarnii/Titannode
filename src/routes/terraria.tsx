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
  Gamepad2,
  Terminal,
} from "lucide-react";
import terrariaHero from "@/assets/games/terraria.jpg";
import terrariaLogo from "@/assets/terraria-logo.svg";

export const Route = createFileRoute("/terraria")({
  head: () => ({
    meta: [
      { title: "Terraria Dedicated Server Hosting — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Terraria dedicated server hosting with Budget, Premium, and Deluxe tiers starting at ₹28/mo. tModLoader, Calamity, TShock support, Mobile & PC crossplay, and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: TerrariaPage,
});

export type TerrariaTier = "budget" | "premium" | "deluxe";

const tierOptions: { id: TerrariaTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Plans", icon: Server },
  { id: "premium", label: "Premium Plans", icon: Flame },
  { id: "deluxe", label: "Deluxe Plans", icon: Zap },
];

const features = [
  "tModLoader (Calamity & Thorium) 1-Click",
  "TShock & Vanilla Dedicated Engines",
  "Automated World Save (.wld) & Backups",
  "Enterprise 10Tbps+ DDoS Protection",
  "Full SFTP, Web Console & Config Access",
  "24/7 Priority Discord Support",
];

const makePlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  tier: TerrariaTier,
  popular?: boolean
): PlanCardData & { tier: TerrariaTier } => ({
  name,
  subtitle:
    tier === "budget"
      ? "Budget Terraria Server"
      : tier === "premium"
      ? "Premium Terraria Server"
      : "Deluxe Terraria Server",
  price: priceInr / 86.5,
  topBannerLogo: terrariaLogo,
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

const allPlans: (PlanCardData & { tier: TerrariaTier })[] = [
  // ───────── Terraria Budget Plans ─────────
  makePlan("Titan Starter", "2 GB RAM", "100% CPU", "10 GB NVMe", 28, "budget"),
  makePlan("Titan Scout", "4 GB RAM", "150% CPU", "20 GB NVMe", 54, "budget"),
  makePlan("Titan Pro", "6 GB RAM", "200% CPU", "30 GB NVMe", 77, "budget"),
  makePlan("Titan Hero", "8 GB RAM", "250% CPU", "40 GB NVMe", 100, "budget", true),
  makePlan("Titan Champion", "12 GB RAM", "300% CPU", "50 GB NVMe", 150, "budget"),
  makePlan("Titan Legend", "16 GB RAM", "350% CPU", "60 GB NVMe", 197, "budget"),
  makePlan("Titan Star", "24 GB RAM", "500% CPU", "80 GB NVMe", 300, "budget"),
  makePlan("Titan Max", "32 GB RAM", "800% CPU", "100 GB NVMe", 420, "budget"),

  // ───────── Terraria Premium Plans ─────────
  makePlan("Titan Starter", "2 GB RAM", "100% CPU", "10 GB NVMe", 37, "premium"),
  makePlan("Titan Scout", "4 GB RAM", "150% CPU", "20 GB NVMe", 70, "premium"),
  makePlan("Titan Pro", "6 GB RAM", "200% CPU", "30 GB NVMe", 100, "premium"),
  makePlan("Titan Hero", "8 GB RAM", "250% CPU", "40 GB NVMe", 133, "premium", true),
  makePlan("Titan Champion", "12 GB RAM", "300% CPU", "50 GB NVMe", 177, "premium"),
  makePlan("Titan Legend", "16 GB RAM", "350% CPU", "60 GB NVMe", 210, "premium"),
  makePlan("Titan Star", "24 GB RAM", "500% CPU", "80 GB NVMe", 320, "premium"),
  makePlan("Titan Max", "32 GB RAM", "800% CPU", "100 GB NVMe", 450, "premium"),

  // ───────── Terraria Deluxe Plans ─────────
  makePlan("Titan Starter", "2 GB RAM", "100% CPU", "10 GB NVMe", 82, "deluxe"),
  makePlan("Titan Scout", "4 GB RAM", "150% CPU", "20 GB NVMe", 160, "deluxe"),
  makePlan("Titan Pro", "6 GB RAM", "200% CPU", "30 GB NVMe", 238, "deluxe"),
  makePlan("Titan Hero", "8 GB RAM", "250% CPU", "40 GB NVMe", 300, "deluxe", true),
  makePlan("Titan Champion", "12 GB RAM", "300% CPU", "50 GB NVMe", 450, "deluxe"),
  makePlan("Titan Legend", "16 GB RAM", "350% CPU", "60 GB NVMe", 560, "deluxe"),
  makePlan("Titan Star", "24 GB RAM", "500% CPU", "80 GB NVMe", 900, "deluxe"),
  makePlan("Titan Max", "32 GB RAM", "800% CPU", "100 GB NVMe", 1340, "deluxe"),
];

const terrariaFeatures = [
  {
    icon: Sliders,
    title: "tModLoader 1-Click Support",
    desc: "Seamlessly deploy large modpacks like Calamity Mod, Thorium, Fargo's Souls, and Magic Storage with auto-sync and dependency resolution.",
  },
  {
    icon: Gamepad2,
    title: "PC & Mobile Compatibility",
    desc: "Host multiplayer sandbox adventures accessible to friends on Steam, GOG, Android, and iOS devices with stable networking.",
  },
  {
    icon: Terminal,
    title: "TShock Administration Suite",
    desc: "Granular permission groups, anti-grief protection, banned item lists, region lockdown, and live server console controls.",
  },
  {
    icon: Shield,
    title: "10Tbps+ Path.net Anti-DDoS",
    desc: "Game-tailored L4/L7 UDP DDoS filtering stops connection flooding and ping spikes from disrupting boss battles.",
  },
];

function TerrariaPage() {
  const [tier, setTier] = useState<TerrariaTier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={terrariaHero}
          alt="Terraria Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/70 via-[#050810]/50 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-4 flex items-center justify-center">
            <img
              src={terrariaLogo}
              alt="Terraria Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(34,197,94,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Terraria Server <span className="text-[#22c55e]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Dig, fight, explore, and build on lightning-fast NVMe servers. Full tModLoader modding, TShock administrative tools, crossplay readiness, and 10Tbps+ DDoS mitigation.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#22c55e]">
            <span className="h-px w-6 sm:w-8 bg-[#22c55e]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#22c55e]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Terraria Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between entry-level Budget, high-speed Premium, and heavy-mod Deluxe configurations.
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
                  activeClass = "bg-[#22c55e] text-black shadow-lg shadow-[#22c55e]/35 font-bold";
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
            <Activity className="h-3.5 w-3.5 text-[#22c55e]" />
            {tier === "budget"
              ? "Budget Plans: High-value Terraria hosting starting at ₹28/mo"
              : tier === "premium"
              ? "Premium Plans: High-performance NVMe starting at ₹37/mo"
              : "Deluxe Plans: Extreme compute for heavy Calamity & Thorium modpacks starting at ₹82/mo"}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#22c55e]">Engineered For Adventure</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host Terraria On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {terrariaFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-[#22c55e]/40 hover:shadow-[0_12px_30px_rgba(34,197,94,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#22c55e]/20 bg-[#22c55e]/10 text-[#22c55e]">
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
