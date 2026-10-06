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
      { title: "Minecraft Server Hosting — TitanNode" },
      { name: "description", content: "Budget, Premium, Deluxe & Legacy Minecraft server hosting starting at ₹38/mo. DDoS protected, instant setup, 24/7 support." },
    ],
  }),
  component: MinecraftPage,
});

export type Tier = "legacy" | "budget" | "premium" | "deluxe";

const tierOptions: { id: Tier; label: string; icon: typeof Zap; color: string }[] = [
  { id: "legacy", label: "Legacy", icon: Shield, color: "cyan" },
  { id: "budget", label: "Budget", icon: Server, color: "emerald" },
  { id: "premium", label: "Premium", icon: Zap, color: "success" },
  { id: "deluxe", label: "Deluxe", icon: Cpu, color: "violet" },
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
  price: priceInr / 86.5,
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
  // Legacy Tier
  make("Stone", "2 GB RAM", "100% CPU", "10 GB NVMe", "1 Auto Backup", 38, stoneIcon, "legacy"),
  make("Coal", "4 GB RAM", "150% CPU", "20 GB NVMe", "2 Auto Backups", 75, coalIcon, "legacy"),
  make("Iron", "6 GB RAM", "200% CPU", "30 GB NVMe", "2 Auto Backups", 100, ironIcon, "legacy"),
  make("Gold", "8 GB RAM", "250% CPU", "40 GB NVMe", "3 Auto Backups", 147, goldIcon, "legacy"),
  make("Lapis", "12 GB RAM", "300% CPU", "50 GB NVMe", "3 Auto Backups", 220, lapisIcon, "legacy"),
  make("Redstone", "16 GB RAM", "350% CPU", "60 GB NVMe", "4 Auto Backups", 300, redstoneIcon, "legacy"),
  make("Diamond", "24 GB RAM", "500% CPU", "80 GB NVMe", "5 Auto Backups", 410, diamondIcon, "legacy", true),
  make("Netherite", "32 GB RAM", "650% CPU", "100 GB NVMe", "6 Auto Backups", 600, netheriteIcon, "legacy"),
  make("Bedrock", "48 GB RAM", "800% CPU", "120 GB NVMe", "8 Auto Backups", 750, bedrockIcon, "legacy"),
  make("Beacon", "64 GB RAM", "1000% CPU", "150 GB NVMe", "10 Auto Backups", 900, beaconIcon, "legacy"),

  // Budget Tier
  make("Stone", "2 GB RAM", "100% CPU", "10 GB NVMe", "1 Auto Backup", 49, stoneIcon, "budget"),
  make("Coal", "4 GB RAM", "150% CPU", "20 GB NVMe", "2 Auto Backups", 89, coalIcon, "budget"),
  make("Iron", "6 GB RAM", "200% CPU", "30 GB NVMe", "2 Auto Backups", 129, ironIcon, "budget"),
  make("Gold", "8 GB RAM", "250% CPU", "40 GB NVMe", "3 Auto Backups", 169, goldIcon, "budget"),
  make("Lapis", "12 GB RAM", "300% CPU", "50 GB NVMe", "3 Auto Backups", 249, lapisIcon, "budget"),
  make("Redstone", "16 GB RAM", "350% CPU", "60 GB NVMe", "4 Auto Backups", 329, redstoneIcon, "budget"),
  make("Diamond", "24 GB RAM", "500% CPU", "80 GB NVMe", "5 Auto Backups", 450, diamondIcon, "budget", true),
  make("Netherite", "32 GB RAM", "650% CPU", "100 GB NVMe", "6 Auto Backups", 600, netheriteIcon, "budget"),
  make("Bedrock", "48 GB RAM", "800% CPU", "120 GB NVMe", "8 Auto Backups", 829, bedrockIcon, "budget"),
  make("Beacon", "64 GB RAM", "1000% CPU", "150 GB NVMe", "10 Auto Backups", 950, beaconIcon, "budget"),

  // Premium Tier
  make("Stone", "2 GB RAM", "100% CPU", "10 GB NVMe", "1 Auto Backup", 89, stoneIcon, "premium"),
  make("Coal", "4 GB RAM", "150% CPU", "20 GB NVMe", "2 Auto Backups", 169, coalIcon, "premium"),
  make("Iron", "6 GB RAM", "200% CPU", "30 GB NVMe", "2 Auto Backups", 249, ironIcon, "premium"),
  make("Gold", "8 GB RAM", "250% CPU", "40 GB NVMe", "3 Auto Backups", 325, goldIcon, "premium"),
  make("Lapis", "12 GB RAM", "300% CPU", "50 GB NVMe", "3 Auto Backups", 480, lapisIcon, "premium"),
  make("Redstone", "16 GB RAM", "350% CPU", "60 GB NVMe", "4 Auto Backups", 630, redstoneIcon, "premium"),
  make("Diamond", "24 GB RAM", "500% CPU", "80 GB NVMe", "5 Auto Backups", 940, diamondIcon, "premium", true),
  make("Netherite", "32 GB RAM", "650% CPU", "100 GB NVMe", "6 Auto Backups", 1200, netheriteIcon, "premium"),
  make("Bedrock", "48 GB RAM", "800% CPU", "120 GB NVMe", "8 Auto Backups", 1700, bedrockIcon, "premium"),
  make("Beacon", "64 GB RAM", "1000% CPU", "150 GB NVMe", "10 Auto Backups", 2200, beaconIcon, "premium"),

  // Deluxe Tier
  make("Stone", "2 GB RAM", "100% CPU", "10 GB NVMe", "1 Auto Backup", 250, stoneIcon, "deluxe"),
  make("Coal", "4 GB RAM", "150% CPU", "20 GB NVMe", "2 Auto Backups", 500, coalIcon, "deluxe"),
  make("Iron", "6 GB RAM", "200% CPU", "30 GB NVMe", "2 Auto Backups", 750, ironIcon, "deluxe"),
  make("Gold", "8 GB RAM", "250% CPU", "40 GB NVMe", "3 Auto Backups", 1000, goldIcon, "deluxe"),
  make("Lapis", "12 GB RAM", "300% CPU", "50 GB NVMe", "3 Auto Backups", 1450, lapisIcon, "deluxe"),
  make("Redstone", "16 GB RAM", "350% CPU", "60 GB NVMe", "4 Auto Backups", 1900, redstoneIcon, "deluxe"),
  make("Diamond", "24 GB RAM", "500% CPU", "80 GB NVMe", "5 Auto Backups", 2700, diamondIcon, "deluxe", true),
  make("Netherite", "32 GB RAM", "650% CPU", "100 GB NVMe", "6 Auto Backups", 3600, netheriteIcon, "deluxe"),
  make("Bedrock", "48 GB RAM", "800% CPU", "120 GB NVMe", "8 Auto Backups", 4200, bedrockIcon, "deluxe"),
  make("Beacon", "64 GB RAM", "1000% CPU", "150 GB NVMe", "10 Auto Backups", 5600, beaconIcon, "deluxe"),
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
          className="absolute inset-0 h-full w-full object-cover opacity-80 brightness-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/25 to-background" />
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
                if (t.id === "deluxe") activeClass = "bg-[#00b0ff] text-white shadow-lg shadow-[#00b0ff]/30 font-bold";
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
