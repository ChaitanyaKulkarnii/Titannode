import { createFileRoute } from "@tanstack/react-router";
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
  Terminal,
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
          "Competitive Counter-Strike 2 server hosting powered by Intel Xeon Platinum 8269CY starting at ₹100/mo. Sub-tick precision, CounterStrikeSharp ready, FastDL and 10Tbps+ DDoS protection.",
      },
    ],
  }),
  component: CS2Page,
});

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
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "Budget CS2 Server",
  price: priceInr / 83,
  topBannerLogo: cs2Logo,
  popular,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "NVMe", value: storage },
    { icon: Shield, label: "Anti-DDoS", value: "10Tbps+ Path.net" },
  ],
  features,
});

const plans: PlanCardData[] = [
  makePlan("Titan Starter", "4 GiB DDR4", "100% Xeon Platinum", "20 GiB NVMe", 100),
  makePlan("Titan Pro", "6 GiB DDR4", "200% Xeon Platinum", "30 GiB NVMe", 130),
  makePlan("Titan Hero", "8 GiB DDR4", "300% Xeon Platinum", "40 GiB NVMe", 170, true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% Xeon Platinum", "50 GiB NVMe", 260),
  makePlan("Titan Star", "16 GiB DDR4", "500% Xeon Platinum", "60 GiB NVMe", 330),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% Xeon Platinum", "80 GiB NVMe", 480),
  makePlan("Titan Max", "32 GiB DDR4", "700% Xeon Platinum", "100 GiB NVMe", 620),
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
            <span>Dedicated CS2 Host • Intel Xeon Platinum 8269CY</span>
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
            Host competitive 5v5 scrims, community retakes, surf, and custom casual servers. Bare-metal Intel Xeon compute engineered for maximum tick precision.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-8 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-400">
            <span className="h-px w-6 sm:w-8 bg-amber-400/40" />
            Intel Xeon Platinum 8269CY Plans
            <span className="h-px w-6 sm:w-8 bg-amber-400/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your CS2 Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Budget-friendly, ultra-low ping NVMe competitive servers starting at just ₹100/mo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
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
