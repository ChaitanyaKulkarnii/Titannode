import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { LocationBanners } from "@/components/LocationBanners";
import { Cpu, Server, HardDrive, Zap, Shield, Sparkles, Activity, Check, RefreshCw, Terminal } from "lucide-react";
import palworldHero from "@/assets/games/palworld.jpg";
import palworldLogo from "@/assets/palworld-logo.png";

export const Route = createFileRoute("/palworld")({
  head: () => ({
    meta: [
      { title: "Palworld Dedicated Server Hosting — TitanNodes" },
      {
        name: "description",
        content:
          "High-performance Palworld server hosting starting at ₹300/mo. Titan Starter to Titan Max plans with NVMe Gen4, automated RAM management and DDoS protection.",
      },
    ],
  }),
  component: PalworldPage,
});

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
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "Budget Palworld Server",
  price: priceInr / 83,
  topBannerLogo: palworldLogo,
  popular,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "Storage", value: storage },
    { icon: Shield, label: "Anti-DDoS", value: "10Tbps+ Path.net" },
  ],
  features,
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const budgetPlans: PlanCardData[] = [
  makePlan("Titan Starter", "8 GiB RAM", "200% CPU", "60 GiB NVMe", 300),
  makePlan("Titan Pro", "12 GiB RAM", "400% CPU", "80 GiB NVMe", 400),
  makePlan("Titan Hero", "16 GiB RAM", "500% CPU", "100 GiB NVMe", 600, true),
  makePlan("Titan Legend", "24 GiB RAM", "600% CPU", "150 GiB NVMe", 800),
  makePlan("Titan Star", "32 GiB RAM", "700% CPU", "200 GiB NVMe", 1200),
  makePlan("Titan Ultra", "48 GiB RAM", "800% CPU", "300 GiB NVMe", 1600),
  makePlan("Titan Max", "64 GiB RAM", "1000% CPU", "400 GiB NVMe", 2000),
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
  const [tier] = useState<"budget">("budget");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={palworldHero}
          alt="Palworld Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background" />
        <div className="relative mx-auto flex min-h-[48vh] sm:min-h-[58vh] max-w-7xl flex-col items-center justify-center px-4 py-14 sm:py-24 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00b0ff]/30 bg-black/50 px-4 py-1.5 text-xs font-semibold text-[#00b0ff] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Palworld Host</span>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <img
              src={palworldLogo}
              alt="Palworld"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,176,255,0.4)]"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Palworld Server <span className="text-[#00b0ff]">Hosting</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-muted-foreground md:text-lg leading-relaxed">
            Catch Pals, construct automated bases, and conquer dungeons with zero lag. Bare-metal NVMe compute built specifically for demanding Palworld multiplayer worlds.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans Section */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-8 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#00b0ff]">
            <span className="h-px w-6 sm:w-8 bg-[#00b0ff]/40" />
            Official TitanNodes Configurations
            <span className="h-px w-6 sm:w-8 bg-[#00b0ff]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your Palworld Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            All plans feature dedicated NVMe Gen4 SSDs, 10Tbps+ DDoS protection, and Palworld logo branding.
          </p>

          {/* Active Tier Pill */}
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-xl border border-[#00b0ff]/40 bg-[#00b0ff]/10 px-5 py-2 text-xs sm:text-sm font-bold text-[#00b0ff] shadow-[0_0_15px_rgba(0,176,255,0.2)]">
              <Activity className="h-4 w-4" />
              Budget Tier Performance • ₹300 - ₹2,000/mo
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {budgetPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
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
