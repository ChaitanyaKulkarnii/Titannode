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
  Database,
  Radio,
  Sliders,
  Flame,
} from "lucide-react";
import fivemHero from "@/assets/games/fivem.jpg";
import fivemLogo from "@/assets/fivem-logo.png";

export const Route = createFileRoute("/fivem")({
  head: () => ({
    meta: [
      { title: "FiveM Dedicated Server Hosting — TitanNodes" },
      {
        name: "description",
        content:
          "High-performance FiveM GTA V RP server hosting powered by Intel Xeon Platinum 8269CY starting at ₹120/mo. OneSync Infinity ready with txAdmin, MariaDB and 10Tbps+ DDoS mitigation.",
      },
    ],
  }),
  component: FiveMPage,
});

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
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "Budget FiveM Server",
  price: priceInr / 83,
  topBannerLogo: fivemLogo,
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
  makePlan("Titan Starter", "4 GiB DDR4", "100% Xeon Platinum", "20 GiB NVMe", 120),
  makePlan("Titan Pro", "6 GiB DDR4", "200% Xeon Platinum", "30 GiB NVMe", 160),
  makePlan("Titan Hero", "8 GiB DDR4", "300% Xeon Platinum", "40 GiB NVMe", 200, true),
  makePlan("Titan Legend", "12 GiB DDR4", "400% Xeon Platinum", "50 GiB NVMe", 280),
  makePlan("Titan Star", "16 GiB DDR4", "500% Xeon Platinum", "60 GiB NVMe", 360),
  makePlan("Titan Ultra", "24 GiB DDR4", "600% Xeon Platinum", "80 GiB NVMe", 520),
  makePlan("Titan Max", "32 GiB DDR4", "700% Xeon Platinum", "100 GiB NVMe", 660),
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={fivemHero}
          alt="FiveM Dedicated Server Hosting"
          className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/80 via-[#050810]/60 to-background" />

        <div className="relative mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff5500]/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-[#ff7722] backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated FiveM Host • Intel Xeon Platinum 8269CY</span>
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
        <div className="mb-8 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#ff7722]">
            <span className="h-px w-6 sm:w-8 bg-[#ff7722]/40" />
            Intel Xeon Platinum 8269CY Plans
            <span className="h-px w-6 sm:w-8 bg-[#ff7722]/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl text-white">
            Choose Your FiveM Plan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Budget-friendly, high-performance NVMe roleplay servers starting at just ₹120/mo.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff7722]">Engineered For Roleplay</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl text-white">Why Host FiveM On TitanNodes?</h2>
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
