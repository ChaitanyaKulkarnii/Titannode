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
  Database,
  Radio,
  Sliders,
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
          "High-performance FiveM GTA V RP server hosting with Budget (Intel Xeon Platinum) and Premium (Ryzen 9 DDR5) tiers starting at ₹120/mo. OneSync Infinity ready with txAdmin and 10Tbps+ DDoS mitigation.",
      },
    ],
  }),
  component: FiveMPage,
});

export type FiveMTier = "budget" | "premium";

const tierOptions: { id: FiveMTier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Tier", icon: Server },
  { id: "premium", label: "Premium Tier", icon: Flame },
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
  subtitle: tier === "budget" ? "Budget FiveM Server" : "Premium FiveM Server",
  price: priceInr / 83,
  topBannerLogo: fivemLogo,
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

const allPlans: (PlanCardData & { tier: FiveMTier })[] = [
  // Budget Tier (Intel Platinum)
  makePlan("Titan Starter", "4 GiB DDR4", "100% CPU", "20 GiB NVMe", 120, "budget"),
  makePlan("Titan Pro", "6 GiB DDR4", "200% CPU", "30 GiB NVMe", 160, "budget"),
  makePlan("Titan Hero", "8 GiB DDR4", "300% CPU", "40 GiB NVMe", 200, "budget", true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% CPU", "50 GiB NVMe", 280, "budget"),
  makePlan("Titan Star", "16 GiB DDR4", "500% CPU", "60 GiB NVMe", 360, "budget"),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% CPU", "80 GiB NVMe", 520, "budget"),
  makePlan("Titan Max", "32 GiB DDR4", "700% CPU", "100 GiB NVMe", 660, "budget"),

  // Premium Tier (AMD Ryzen 9 9950X / DDR5 5600MHz RAM & Gen4 NVMe)
  makePlan("Titan Starter", "4 GiB DDR5 (5600MHz)", "150% CPU", "30 GiB NVMe Gen4", 190, "premium"),
  makePlan("Titan Pro", "6 GiB DDR5 (5600MHz)", "250% CPU", "45 GiB NVMe Gen4", 260, "premium"),
  makePlan("Titan Hero", "8 GiB DDR5 (5600MHz)", "350% CPU", "60 GiB NVMe Gen4", 340, "premium", true),
  makePlan("Titan Legend", "12 GiB DDR5 (5600MHz)", "450% CPU", "80 GiB NVMe Gen4", 480, "premium"),
  makePlan("Titan Star", "16 GiB DDR5 (5600MHz)", "550% CPU", "100 GiB NVMe Gen4", 620, "premium"),
  makePlan("Titan Ultra", "24 GiB DDR5 (5600MHz)", "700% CPU", "140 GiB NVMe Gen4", 880, "premium"),
  makePlan("Titan Max", "32 GiB DDR5 (5600MHz)", "800% CPU", "180 GiB NVMe Gen4", 1120, "premium"),
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
    title: "Instant MariaDB Database",
    desc: "Pre-configured SQL backend ready for ESX, QBCore, and Qbox frameworks with zero manual database setup required.",
  },
  {
    icon: Shield,
    title: "10Tbps+ Gaming Anti-DDoS",
    desc: "Tailored UDP packet filtering engineered to mitigate FiveM server-list query attacks and high-volume state spoofing.",
  },
];

function FiveMPage() {
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-[#ff7722] backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated FiveM Host • Budget &amp; Premium Ryzen 9</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={fivemLogo}
              alt="FiveM Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(255,85,0,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            FiveM Server <span className="text-[#ff7722]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Run your dream GTA V RP community. Zero-lag NVMe compute optimized for QBCore, ESX, custom MLOs, high-poly vehicles, and hundreds of concurrent roleplayers.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#ff7722]">
            <span className="h-px w-6 sm:w-8 bg-[#ff7722]/40" />
            Official TitanNode Configurations
            <span className="h-px w-6 sm:w-8 bg-[#ff7722]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your FiveM Plan
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
                  activeClass = "bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 font-bold";
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

        {/* Tier Info Banner */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#060a12] px-4 py-1.5 text-xs text-zinc-400">
            <Activity className="h-3.5 w-3.5 text-[#ff7722]" />
            {tier === "budget"
              ? "Budget Tier: Powered by Intel® Platinum starting at ₹120/mo"
              : "Premium Tier: AMD Ryzen™ 9 9950X @ 5.7GHz with DDR5 5600MHz RAM"}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff7722]">Engineered For Roleplay</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host FiveM On TitanNode?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fivemFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-[#ff5500]/40 hover:shadow-[0_12px_30px_rgba(255,85,0,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#ff5500]/20 bg-[#ff5500]/10 text-[#ff7722]">
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
