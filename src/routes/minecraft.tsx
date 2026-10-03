import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { LocationBanners } from "@/components/LocationBanners";
import { Cpu, Server, HardDrive, FolderOpen, Zap, Shield } from "lucide-react";
import minecraftHero from "@/assets/hero/minecraft.jpg";
import stoneIcon from "@/assets/mc-icons/stone.webp";
import coalIcon from "@/assets/mc-icons/coal.webp";
import ironIcon from "@/assets/mc-icons/iron.webp";
import goldIcon from "@/assets/mc-icons/gold.webp";
import diamondIcon from "@/assets/mc-icons/diamond.webp";
import netheriteIcon from "@/assets/mc-icons/netherite.webp";
import bedrockIcon from "@/assets/mc-icons/bedrock.webp";
import beaconIcon from "@/assets/mc-icons/beacon.webp";
import lapisIcon from "@/assets/mc-icons/lapis.svg";
import redstoneIcon from "@/assets/mc-icons/redstone.svg";
import barrierIcon from "@/assets/mc-icons/barrier.svg";

export const Route = createFileRoute("/minecraft")({
  head: () => ({
    meta: [
      { title: "Minecraft Server Hosting — TitanNodes" },
      { name: "description", content: "Budget, Premium, Powerful & Legacy Minecraft server hosting starting at ₹10/mo. DDoS protected, instant setup, 24/7 support." },
    ],
  }),
  component: MinecraftPage,
});

export type Tier = "legacy" | "budget" | "premium" | "powerful";

const tierOptions: { id: Tier; label: string; icon: typeof Zap; color: string }[] = [
  { id: "legacy", label: "Legacy", icon: Shield, color: "cyan" },
  { id: "budget", label: "Budget", icon: Server, color: "emerald" },
  { id: "premium", label: "Premium", icon: Zap, color: "success" },
  { id: "powerful", label: "Powerful", icon: Cpu, color: "violet" },
];

const features = [
  "Premium Game Panel",
  "Advanced DDoS Protection",
  "SFTP Access",
  "All Versions",
  "24/7 Support",
  "Auto Backups",
];

const make = (
  name: string, ram: string, cpu: string, storage: string,
  backups: string, priceInr: number, image: string, tier: Tier, popular?: boolean,
): PlanCardData & { tier: Tier } => ({
  name,
  subtitle: `${tier.charAt(0).toUpperCase() + tier.slice(1)} Minecraft Server`,
  price: priceInr / 83,
  image,
  popular,
  tier,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "NVMe", value: storage },
    { icon: FolderOpen, label: "Backups", value: backups },
  ],
  features,
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const plans: (PlanCardData & { tier: Tier })[] = [
  // Budget Tier
  make("Stone", "2 GiB DDR4 (3200 MHz)", "0.5 vCore (50%)", "5 GiB NVMe (GEN-4)", "1", 20, stoneIcon, "budget"),
  make("Coal", "4 GiB DDR4 (3200 MHz)", "1.0 vCore (100%)", "15 GiB NVMe (GEN-4)", "2", 40, coalIcon, "budget"),
  make("Iron", "6 GiB DDR4 (3200 MHz)", "1.5 vCore (150%)", "20 GiB NVMe (GEN-4)", "2", 60, ironIcon, "budget"),
  make("Gold", "8 GiB DDR4 (3200 MHz)", "2.0 vCore (200%)", "25 GiB NVMe (GEN-4)", "3", 80, goldIcon, "budget"),
  make("Lapis", "12 GiB DDR4 (3200 MHz)", "3.0 vCore (300%)", "40 GiB NVMe (GEN-4)", "3", 120, lapisIcon, "budget"),
  make("Redstone", "16 GiB DDR4 (3200 MHz)", "3.5 vCore (350%)", "60 GiB NVMe (GEN-4)", "4", 160, redstoneIcon, "budget"),
  make("Diamond", "32 GiB DDR4 (3200 MHz)", "4.0 vCore (400%)", "80 GiB NVMe (GEN-4)", "5", 320, diamondIcon, "budget", true),
  make("Netherite", "48 GiB DDR4 (3200 MHz)", "4.5 vCore (450%)", "90 GiB NVMe (GEN-4)", "6", 480, netheriteIcon, "budget"),
  make("Bedrock", "64 GiB DDR4 (3200 MHz)", "5 vCore (500%)", "100 GiB NVMe (GEN-4)", "8", 640, bedrockIcon, "budget"),
  make("Barrier", "∞ GiB DDR4 (3200 MHz)", "∞ vCore (∞%)", "∞ GiB NVMe (GEN-4)", "Unlimited", 950, barrierIcon, "budget"),

  // Premium Tier
  make("Stone", "2 GiB DDR4 (3200 MHz)", "0.5 vCore (50%)", "5 GiB NVMe (GEN-4)", "1", 60, stoneIcon, "premium"),
  make("Coal", "4 GiB DDR4 (3200 MHz)", "1.0 vCore (100%)", "15 GiB NVMe (GEN-4)", "2", 120, coalIcon, "premium"),
  make("Iron", "6 GiB DDR4 (3200 MHz)", "1.5 vCore (150%)", "20 GiB NVMe (GEN-4)", "2", 180, ironIcon, "premium"),
  make("Gold", "8 GiB DDR4 (3200 MHz)", "2.0 vCore (200%)", "25 GiB NVMe (GEN-4)", "3", 240, goldIcon, "premium"),
  make("Lapis", "10 GiB DDR4 (3200 MHz)", "2.5 vCore (250%)", "40 GiB NVMe (GEN-4)", "3", 300, lapisIcon, "premium"),
  make("Redstone", "12 GiB DDR4 (3200 MHz)", "3.0 vCore (300%)", "60 GiB NVMe (GEN-4)", "4", 360, redstoneIcon, "premium"),
  make("Diamond", "16 GiB DDR4 (3200 MHz)", "3.5 vCore (350%)", "80 GiB NVMe (GEN-4)", "5", 480, diamondIcon, "premium", true),
  make("Netherite", "24 GiB DDR4 (3200 MHz)", "4 vCore (400%)", "90 GiB NVMe (GEN-4)", "6", 720, netheriteIcon, "premium"),
  make("Bedrock", "32 GiB DDR4 (3200 MHz)", "5 vCore (500%)", "100 GiB NVMe (GEN-4)", "8", 960, bedrockIcon, "premium"),
  make("Barrier", "∞ GiB DDR4 (3200 MHz)", "∞ vCore (∞%)", "∞ GiB NVMe (GEN-4)", "Unlimited", 1670, barrierIcon, "premium"),

  // Powerful Tier (Exact User Specified DDR5 4300MHz Plans & Photos)
  make("Stone", "2 GiB DDR5 (4300 MHz)", "0.5 vCore (50%)", "5 GiB NVMe (GEN-4)", "1", 180, stoneIcon, "powerful"),
  make("Coal", "4 GiB DDR5 (4300 MHz)", "1.0 vCore (100%)", "15 GiB NVMe (GEN-4)", "2", 360, coalIcon, "powerful"),
  make("Iron", "6 GiB DDR5 (4300 MHz)", "1.5 vCore (150%)", "20 GiB NVMe (GEN-4)", "2", 560, ironIcon, "powerful"),
  make("Gold", "8 GiB DDR5 (4300 MHz)", "2.0 vCore (200%)", "25 GiB NVMe (GEN-4)", "3", 720, goldIcon, "powerful"),
  make("Lapis", "10 GiB DDR5 (4300 MHz)", "2.5 vCore (250%)", "40 GiB NVMe (GEN-4)", "3", 900, lapisIcon, "powerful"),
  make("Redstone", "12 GiB DDR5 (4300 MHz)", "3.0 vCore (300%)", "60 GiB NVMe (GEN-4)", "4", 1100, redstoneIcon, "powerful"),
  make("Diamond", "16 GiB DDR5 (4300 MHz)", "3.5 vCore (350%)", "80 GiB NVMe (GEN-4)", "5", 1500, diamondIcon, "powerful", true),
  make("Netherite", "24 GiB DDR5 (4300 MHz)", "∞ vCore (∞%)", "90 GiB NVMe (GEN-4)", "6", 2450, netheriteIcon, "powerful"),
  make("Bedrock", "32 GiB DDR5 (4300 MHz)", "∞ vCore (∞%)", "100 GiB NVMe (GEN-4)", "8", 3370, bedrockIcon, "powerful"),
  make("Barrier", "∞ GiB DDR5 (4300 MHz)", "∞ vCore (∞%)", "∞ GiB NVMe (GEN-4)", "Unlimited", 4370, barrierIcon, "powerful"),

  // Legacy Tier (Same specs as Premium @ ₹5/GB RAM)
  make("Stone", "2 GiB DDR4 (3200 MHz)", "0.5 vCore (50%)", "5 GiB NVMe (GEN-4)", "1", 10, stoneIcon, "legacy"),
  make("Coal", "4 GiB DDR4 (3200 MHz)", "1.0 vCore (100%)", "15 GiB NVMe (GEN-4)", "2", 20, coalIcon, "legacy"),
  make("Iron", "6 GiB DDR4 (3200 MHz)", "1.5 vCore (150%)", "20 GiB NVMe (GEN-4)", "2", 30, ironIcon, "legacy"),
  make("Gold", "8 GiB DDR4 (3200 MHz)", "2.0 vCore (200%)", "25 GiB NVMe (GEN-4)", "3", 40, goldIcon, "legacy"),
  make("Lapis", "10 GiB DDR4 (3200 MHz)", "2.5 vCore (250%)", "40 GiB NVMe (GEN-4)", "3", 50, lapisIcon, "legacy"),
  make("Redstone", "12 GiB DDR4 (3200 MHz)", "3.0 vCore (300%)", "60 GiB NVMe (GEN-4)", "4", 60, redstoneIcon, "legacy"),
  make("Diamond", "16 GiB DDR4 (3200 MHz)", "3.5 vCore (350%)", "80 GiB NVMe (GEN-4)", "5", 80, diamondIcon, "legacy", true),
  make("Netherite", "24 GiB DDR4 (3200 MHz)", "4 vCore (400%)", "90 GiB NVMe (GEN-4)", "6", 120, netheriteIcon, "legacy"),
  make("Bedrock", "32 GiB DDR4 (3200 MHz)", "5 vCore (500%)", "100 GiB NVMe (GEN-4)", "8", 160, bedrockIcon, "legacy"),
];

function MinecraftPage() {
  const [tier, setTier] = useState<Tier>("legacy");
  const filtered = plans.filter((p) => p.tier === tier);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={minecraftHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-65 brightness-[1.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/35 to-background" />
        <div className="relative mx-auto flex min-h-[45vh] sm:min-h-[55vh] max-w-7xl flex-col items-center justify-center px-4 py-14 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            Let's play <span className="gradient-text-violet">Minecraft</span>
          </h1>
          <p className="mt-3 sm:mt-5 max-w-xl text-xs sm:text-base text-muted-foreground md:text-lg">
            Multiplayer worlds hosted on the best hardware on the market.
          </p>
        </div>
      </section>

      <LocationBanners />

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="mb-3 text-center">
          <p className="mb-2 inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-6 sm:w-8 bg-primary/40" />
            Plans for servers of all shapes and sizes
            <span className="h-px w-6 sm:w-8 bg-primary/40" />
          </p>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl">Choose the perfect plan</h2>
          <h2 className="text-2xl font-extrabold gradient-text-violet sm:text-4xl md:text-5xl">for your community</h2>
        </div>

        {/* Tier switcher buttons */}
        <div className="my-6 sm:my-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-white/10 bg-card/40 p-1.5 backdrop-blur">
            {tierOptions.map((t) => {
              const active = tier === t.id;
              let activeClass = "";
              if (active) {
                if (t.id === "powerful") activeClass = "bg-[#00b0ff] text-white shadow-lg shadow-[#00b0ff]/30 font-bold";
                else if (t.id === "legacy") activeClass = "bg-[#38bdf8] text-slate-950 shadow-lg shadow-[#38bdf8]/20";
                else if (t.id === "budget") activeClass = "bg-[#0284c7] text-white shadow-lg shadow-[#0284c7]/20";
                else if (t.id === "premium") activeClass = "bg-[#039be5] text-white shadow-lg shadow-[#039be5]/30 font-bold";
              } else {
                activeClass = "text-muted-foreground hover:text-foreground hover:bg-white/5";
              }

              return (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-semibold transition ${activeClass}`}
                >
                  <t.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
