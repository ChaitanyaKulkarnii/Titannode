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
  Crosshair,
  Gauge,
  Sliders,
  Flame,
  Activity,
} from "lucide-react";
import cs2Hero from "@/assets/games/cs2.jpg";
import cs2Logo from "@/assets/cs2-logo-white.svg";

export const Route = createFileRoute("/cs2")({
  head: () => ({
    meta: [
      { title: "Counter-Strike 2 Dedicated Server Hosting — TitanNodes" },
      {
        name: "description",
        content:
          "Competitive Counter-Strike 2 server hosting with Budget (Intel Xeon Platinum) and Premium (Ryzen 9 DDR5) tiers starting at ₹100/mo. Sub-tick precision, CounterStrikeSharp ready, FastDL and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: CS2Page,
});

export type CS2Tier = "budget" | "premium";

const tierOptions: { id: CS2Tier; label: string; icon: typeof Server }[] = [
  { id: "budget", label: "Budget Tier", icon: Server },
  { id: "premium", label: "Premium Tier", icon: Flame },
];

const features = [
  "Sub-Tick Precision Architecture",
  "CounterStrikeSharp & Metamod Ready",
  "Automated FastDL Map Delivery",
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
  tier: CS2Tier,
  popular?: boolean
): PlanCardData & { tier: CS2Tier } => ({
  name,
  subtitle: tier === "budget" ? "Budget CS2 Server" : "Premium CS2 Server",
  price: priceInr / 83,
  topBannerLogo: cs2Logo,
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

const allPlans: (PlanCardData & { tier: CS2Tier })[] = [
  // Budget Tier (Intel Xeon Platinum 8269CY)
  makePlan("Titan Starter", "4 GiB DDR4", "100% Xeon Platinum", "20 GiB NVMe", 100, "budget"),
  makePlan("Titan Pro", "6 GiB DDR4", "200% Xeon Platinum", "30 GiB NVMe", 130, "budget"),
  makePlan("Titan Hero", "8 GiB DDR4", "300% Xeon Platinum", "40 GiB NVMe", 170, "budget", true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% Xeon Platinum", "50 GiB NVMe", 260, "budget"),
  makePlan("Titan Star", "16 GiB DDR4", "500% Xeon Platinum", "60 GiB NVMe", 330, "budget"),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% Xeon Platinum", "80 GiB NVMe", 480, "budget"),
  makePlan("Titan Max", "32 GiB DDR4", "700% Xeon Platinum", "100 GiB NVMe", 620, "budget"),

  // Premium Tier (AMD Ryzen 9 9950X / DDR5 5600MHz RAM & Gen4 NVMe)
  makePlan("Titan Starter", "4 GiB DDR5 (5600MHz)", "150% Ryzen 9", "30 GiB NVMe Gen4", 160, "premium"),
  makePlan("Titan Pro", "6 GiB DDR5 (5600MHz)", "250% Ryzen 9", "45 GiB NVMe Gen4", 220, "premium"),
  makePlan("Titan Hero", "8 GiB DDR5 (5600MHz)", "350% Ryzen 9", "60 GiB NVMe Gen4", 290, "premium", true),
  makePlan("Titan Legend", "12 GiB DDR5 (5600MHz)", "450% Ryzen 9", "80 GiB NVMe Gen4", 430, "premium"),
  makePlan("Titan Star", "16 GiB DDR5 (5600MHz)", "550% Ryzen 9", "100 GiB NVMe Gen4", 550, "premium"),
  makePlan("Titan Ultra", "24 GiB DDR5 (5600MHz)", "700% Ryzen 9", "140 GiB NVMe Gen4", 790, "premium"),
  makePlan("Titan Max", "32 GiB DDR5 (5600MHz)", "800% Ryzen 9", "180 GiB NVMe Gen4", 1020, "premium"),
];

const cs2Features = [
  {
    icon: Crosshair,
    title: "Sub-Tick Precision",
    desc: "Source 2 sub-tick architecture calibrated for competitive esports tournaments, retakes, and 5v5 scrims.",
  },
  {
    icon: Gauge,
    title: "FastDL Content Routing",
    desc: "Integrated high-bandwidth HTTP FastDL mirror so players download custom workshop maps, sounds, and models instantly.",
  },
  {
    icon: Sliders,
    title: "CounterStrikeSharp & Metamod",
    desc: "1-click installation for C# server plugins, custom warmups, matchZy practice bots, and ranking systems.",
  },
  {
    icon: Shield,
    title: "Low-Latency UDP Protection",
    desc: "Real-time Path.net packet filtering fine-tuned for CS2 network traffic to safeguard against round-dropping DDoS attacks.",
  },
];

function CS2Page() {
  const [tier, setTier] = useState<CS2Tier>("budget");
  const filteredPlans = allPlans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={cs2Hero}
          alt="Counter-Strike 2 Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/80 via-[#050810]/60 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated CS2 Host • Budget &amp; Premium Ryzen 9</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={cs2Logo}
              alt="Counter-Strike 2 Official Logo"
              className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_30px_rgba(245,158,11,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Counter-Strike 2 <span className="text-amber-400">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Host competitive 5v5 scrims, community retakes, surf, and custom casual servers. Bare-metal compute engineered for maximum tick precision.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-4 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-400">
            <span className="h-px w-6 sm:w-8 bg-amber-400/40" />
            Official TitanNodes Configurations
            <span className="h-px w-6 sm:w-8 bg-amber-400/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your CS2 Plan
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
                  activeClass = "bg-amber-500 text-white shadow-lg shadow-amber-500/30 font-bold";
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
            <Activity className="h-3.5 w-3.5 text-amber-400" />
            {tier === "budget"
              ? "Budget Tier: Powered by Intel® Xeon® Platinum 8269CY starting at ₹100/mo"
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
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Engineered For Esports</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host CS2 On TitanNodes?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cs2Features.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_12px_30px_rgba(245,158,11,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-amber-500/20 bg-amber-500/10 text-amber-400">
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
