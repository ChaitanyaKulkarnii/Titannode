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
  Code2,
  Sliders,
} from "lucide-react";
import hytaleHero from "@/assets/games/hytale.jpg";
import hytaleLogo from "@/assets/hytale-logo.png";

export const Route = createFileRoute("/hytale")({
  head: () => ({
    meta: [
      { title: "Hytale Dedicated Server Hosting — TitanNodes" },
      {
        name: "description",
        content:
          "High-performance Hytale server hosting powered by Intel Xeon Platinum 8269CY starting at ₹110/mo. Titan Starter to Titan Max plans with NVMe Gen4, full modding support and enterprise DDoS protection.",
      },
    ],
  }),
  component: HytalePage,
});

const features = [
  "Pre-configured World Engine",
  "Enterprise 10Tbps+ DDoS Protection",
  "Full SFTP & Config Editor Access",
  "Automated World Backups",
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
  subtitle: "Budget Hytale Server",
  price: priceInr / 83,
  topBannerLogo: hytaleLogo,
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
  makePlan("Titan Starter", "4 GiB DDR4", "100% Xeon Platinum", "20 GiB NVMe", 110),
  makePlan("Titan Pro", "6 GiB DDR4", "200% Xeon Platinum", "30 GiB NVMe", 150),
  makePlan("Titan Hero", "8 GiB DDR4", "300% Xeon Platinum", "40 GiB NVMe", 190, true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% Xeon Platinum", "50 GiB NVMe", 270),
  makePlan("Titan Star", "16 GiB DDR4", "500% Xeon Platinum", "60 GiB NVMe", 350),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% Xeon Platinum", "80 GiB NVMe", 500),
  makePlan("Titan Max", "32 GiB DDR4", "700% Xeon Platinum", "100 GiB NVMe", 650),
];

const hytaleFeatures = [
  {
    icon: Code2,
    title: "Java & In-Game Scripting",
    desc: "Complete support for Hytale custom server plugins, live asset reloading, and client-side modding tools.",
  },
  {
    icon: Zap,
    title: "Instant 60s Deployment",
    desc: "Your Hytale node is initialized with bare-metal compute and dedicated routing instantly upon order.",
  },
  {
    icon: Shield,
    title: "Layer 4 & 7 DDoS Mitigation",
    desc: "Always-on Path.net filtering to mitigate UDP and protocol-level flood attacks without latency spikes.",
  },
  {
    icon: Sliders,
    title: "Full World Config Editor",
    desc: "Easily adjust world generation presets, creature spawn rates, and gameplay parameters via web GUI or SFTP.",
  },
];

function HytalePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={hytaleHero}
          alt="Hytale Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/80 via-[#050810]/60 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Hytale Host • Intel Xeon Platinum 8269CY</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={hytaleLogo}
              alt="Hytale Official Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_30px_rgba(16,185,129,0.7)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Hytale Server <span className="text-emerald-400">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-zinc-300 md:text-lg leading-relaxed drop-shadow">
            Embark on a journey of creation and adventure in Orbis. Ultra-low latency compute optimized for high-entity multiplayer worlds, procedural generation, and custom scripts.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-8 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400">
            <span className="h-px w-6 sm:w-8 bg-emerald-400/40" />
            Intel Xeon Platinum 8269CY Plans
            <span className="h-px w-6 sm:w-8 bg-emerald-400/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Hytale Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Budget-friendly, high-performance NVMe game servers starting at just ₹110/mo.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Engineered For Creators</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host Hytale On TitanNodes?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hytaleFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-lg border border-white/10 bg-[#080c14] p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_12px_30px_rgba(16,185,129,0.15)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
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
