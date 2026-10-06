import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocationBanners } from "@/components/LocationBanners";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { Cpu, Server as ServerIcon, HardDrive, MapPin, Globe, MonitorSmartphone, Shield } from "lucide-react";
import vpsHero from "@/assets/hero/vps.jpg";

export const Route = createFileRoute("/rdp-hosting")({
  head: () => ({
    meta: [
      { title: "Windows RDP Hosting — Intel Platinum — TitanNode" },
      {
        name: "description",
        content:
          "High-performance Windows RDP hosting in Noida, India. Intel Platinum CPUs, DDR4 ECC RAM, NVMe storage, Unmetered bandwidth & Advance DDoS mitigation.",
      },
    ],
  }),
  component: RdpPage,
});

const makeRdpPlan = (
  name: string,
  vCores: string,
  ram: string,
  ssd: string,
  priceInr: number,
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "Intel Platinum RDP",
  price: priceInr / 83,
  iconNode: <MonitorSmartphone className="h-6 w-6 text-primary" />,
  popular,
  specs: [
    { icon: Cpu, label: "vCPU", value: `${vCores} vCores` },
    { icon: MonitorSmartphone, label: "RAM", value: ram },
    { icon: HardDrive, label: "NVMe", value: ssd },
    { icon: Globe, label: "Bandwidth", value: "Unmetered (1 Gbps)" },
  ],
  features: [
    "Intel Platinum Processor",
    "Located in Noida, IN",
    "Advance DDoS Mitigation",
    "Windows Server 2022",
    "Full Admin Access",
  ],
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const plans: PlanCardData[] = [
  makeRdpPlan("RDP Plan 1", "2", "6 GB DDR4", "50 GB NVMe", 380),
  makeRdpPlan("RDP Plan 2", "2", "8 GB DDR4", "80 GB NVMe", 480),
  makeRdpPlan("RDP Plan 3", "4", "12 GB DDR4", "100 GB NVMe", 670),
  makeRdpPlan("RDP Plan 4", "6", "16 GB DDR4", "150 GB NVMe", 999, true),
  makeRdpPlan("RDP Plan 5", "6", "24 GB DDR4", "200 GB NVMe", 1500),
  makeRdpPlan("RDP Plan 6", "8", "32 GB DDR4", "200 GB NVMe", 1800),
  makeRdpPlan("RDP Plan 7", "10", "48 GB DDR4", "300 GB NVMe", 2000),
  makeRdpPlan("RDP Plan 8", "12", "64 GB DDR4", "400 GB NVMe", 2600),
];

function RdpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative w-full overflow-hidden">
        <img src={vpsHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-success" />
            <span>Noida, IN Data Center</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Windows <span className="gradient-text-violet">Intel Platinum RDP</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Full admin Windows RDP access on Intel Platinum processors, NVMe storage, and 1 Gbps unmetered bandwidth in Noida, India.
          </p>
        </div>
      </section>

      <LocationBanners />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Available RDP Plans</h2>
            <p className="text-sm text-muted-foreground">Select your ideal Windows RDP server configuration hosted in Noida, India.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span>Advance DDoS Mitigation Included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
