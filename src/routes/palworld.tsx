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
      { title: "Palworld Dedicated Server Hosting — TitanNodes" },
      {
        name: "description",
        content:
          "High-performance Palworld server hosting with Budget and Premium tiers starting at ₹300/mo. Titan Starter to Titan Max plans with NVMe Gen4, automated RAM management and DDoS protection.",
      },
    ],
  }),
  component: PalworldPage,
});

export type PalTier = "budget" | "premium";

const tierOptions: { id: PalTier; label: string; icon: typeof Zap; color: string }[] = [
  { id: "budget", label: "Budget Tier", icon: Server, color: "cyan" },
  { id: "premium", label: "Premium Tier", icon: Flame, color: "violet" },
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
  subtitle: tier === "budget" ? "Budget Palworld Server" : "Premium Palworld Server",
  price: priceInr / 83,
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
  // Budget Tier (User exact specs & prices)
  makePlan("Titan Starter", "8 GiB RAM", "200% CPU", "60 GiB NVMe", 300, "budget"),
  makePlan("Titan Pro", "12 GiB RAM", "400% CPU", "80 GiB NVMe", 400, "budget"),
  makePlan("Titan Hero", "16 GiB RAM", "500% CPU", "100 GiB NVMe", 600, "budget", true),
  makePlan("Titan Legend", "24 GiB RAM", "600% CPU", "150 GiB NVMe", 800, "budget"),
  makePlan("Titan Star", "32 GiB RAM", "700% CPU", "200 GiB NVMe", 1200, "budget"),
  makePlan("Titan Ultra", "48 GiB RAM", "800% CPU", "300 GiB NVMe", 1600, "budget"),
  makePlan("Titan Max", "64 GiB RAM", "1000% CPU", "400 GiB NVMe", 2000, "budget"),

  // Premium Tier (Powered by AMD Ryzen 9 9950X / DDR5 5600MHz RAM)
  makePlan("Titan Starter", "8 GiB DDR5 (5600MHz)", "250% Ryzen 9", "80 GiB NVMe Gen4", 500, "premium"),
  makePlan("Titan Pro", "12 GiB DDR5 (5600MHz)", "450% Ryzen 9", "110 GiB NVMe Gen4", 700, "premium"),
  makePlan("Titan Hero", "16 GiB DDR5 (5600MHz)", "550% Ryzen 9", "140 GiB NVMe Gen4", 950, "premium", true),
  makePlan("Titan Legend", "24 GiB DDR5 (5600MHz)", "700% Ryzen 9", "200 GiB NVMe Gen4", 1350, "premium"),
  makePlan("Titan Star", "32 GiB DDR5 (5600MHz)", "800% Ryzen 9", "260 GiB NVMe Gen4", 1850, "premium"),
  makePlan("Titan Ultra", "48 GiB DDR5 (5600MHz)", "1000% Ryzen 9", "380 GiB NVMe Gen4", 2500, "premium"),
  makePlan("Titan Max", "64 GiB DDR5 (5600MHz)", "1200% Ryzen 9", "500 GiB NVMe Gen4", 3200, "premium"),
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
    title: "Full World Config Editor",
    desc: "Easily modify Pal capture rates, XP multipliers, egg hatch timers, and death penalties via web GUI or SFTP.",
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
        {/* Crisp in-game clean background without clashing text */}
        <img
          src={palworldHero}
          alt="Palworld Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-70 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/75 via-[#050810]/55 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[62vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00b0ff]/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-[#00b0ff] backdrop-blur-md shadow-[0_0_15px_rgba(0,176,255,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Palworld Host</span>
          </div>

          {/* Prominent, Glowing Palworld Official Logo */}
          <div className="mb-4 flex items-center justify-center">
            <img
              src={palworldLogo}
              alt="Palworld Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(0,176,255,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Palworld Server <span className="text-[#00b0ff]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Catch Pals, construct automated bases, and conquer dungeons with zero lag. Bare-metal NVMe compute built specifically for demanding Palworld multiplayer worlds.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#00b0ff]">
            <span className="h-px w-6 sm:w-8 bg-[#00b0ff]/40" />
            Official TitanNodes Configurations
            <span className="h-px w-6 sm:w-8 bg-[#00b0ff]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Palworld Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Switch between high-value Budget and ultra-performance Ryzen 9 Premium tiers.
          </p>
        </div>

        {/* Tier Switcher Buttons (Like Minecraft) */}
        <div className="my-6 sm:my-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-card/40 p-1.5 backdrop-blur shadow-inner">
            {tierOptions.map((t) => {
              const active = tier === t.id;
              let activeClass = "";
              if (active) {
                if (t.id === "budget") {
                  activeClass = "bg-[#00b0ff] text-white shadow-lg shadow-[#00b0ff]/30 font-bold";
                } else {
                  activeClass = "bg-[#a855f7] text-white shadow-lg shadow-[#a855f7]/30 font-bold";
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

        {/* Tier info banner */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#060a12] px-4 py-1.5 text-xs text-zinc-400">
            <Activity className="h-3.5 w-3.5 text-[#00b0ff]" />
            {tier === "budget"
              ? "Budget Tier: High value multi-core compute starting at ₹300/mo"
              : "Premium Tier: AMD Ryzen™ 9 9950X / 7950X @ 5.7GHz with DDR5 5600MHz RAM"}
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlans.map((p) => (
            <PlanCard key={`${p.tier}-${p.name}`} plan={p} />
          ))}
        </div>
      </section>

      {/* Palworld Specific Features */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00b0ff]">Optimized Engine</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">Engineered for Palworld Multi-core</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {palFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-none border border-white/10 bg-[#090d16] p-5 transition hover:border-[#00b0ff]/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-none border border-[#00b0ff]/30 bg-[#00b0ff]/10 text-[#00b0ff]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
