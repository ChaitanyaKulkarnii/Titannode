import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { Cpu, Server as ServerIcon, HardDrive, Globe, Shield, MapPin, Info, Zap, Clock } from "lucide-react";
import flagIN from "@/assets/flags/india.png";
import flagSG from "@/assets/flags/singapore.png";
import flagDE from "@/assets/flags/germany.png";
import vpsHero from "@/assets/hero/vps.jpg";

export const Route = createFileRoute("/vps-hosting")({
  head: () => ({
    meta: [
      { title: "VPS Hosting — Intel Gold 6154, AMD EPYC & Ryzen — TitanNode" },
      {
        name: "description",
        content:
          "High-performance KVM VPS hosting. Select Intel Gold 6154, AMD EPYC, or AMD Ryzen CPUs across India, Singapore, and Germany datacenters.",
      },
    ],
  }),
  component: VpsPage,
});

type LocationId = "india" | "singapore" | "germany";
type CpuId = "intel" | "epyc" | "ryzen";

interface LocationOption {
  id: LocationId;
  name: string;
  flag: string;
  code: string;
  comingSoon?: boolean;
}

interface CpuOption {
  id: CpuId;
  label: string;
  badge: string;
  subtitle: string;
}

const locations: LocationOption[] = [
  { id: "india", name: "India", flag: flagIN, code: "IN" },
  { id: "singapore", name: "Singapore", flag: flagSG, code: "SG", comingSoon: true },
  { id: "germany", name: "Germany", flag: flagDE, code: "DE", comingSoon: true },
];

const cpuOptions: CpuOption[] = [
  { id: "intel", label: "Intel Gold 6154", badge: "Intel - Standard", subtitle: "High Clock Enterprise Intel Gold Cores" },
  { id: "epyc", label: "AMD EPYC - Premium", badge: "AMD EPYC - Premium", subtitle: "Multi-Core High Density Compute" },
  { id: "ryzen", label: "AMD Ryzen™ - Premium", badge: "AMD Ryzen™ - Premium", subtitle: "Ultra-High Single-Thread Performance" },
];

interface ConfigDetail {
  note: string;
  cpuModels: string[];
  plans: PlanCardData[];
}

const makePlan = (
  name: string,
  subtitle: string,
  vCores: string,
  ram: string,
  ssd: string,
  priceInr: number,
  locationName: string,
  cpuName: string,
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle,
  price: priceInr / 83,
  iconNode: <ServerIcon className="h-6 w-6 text-primary" />,
  popular,
  specs: [
    { icon: Cpu, label: "vCPU", value: `${vCores} vCores` },
    { icon: ServerIcon, label: "RAM", value: ram },
    { icon: HardDrive, label: "Disk", value: ssd },
    { icon: Globe, label: "Bandwidth", value: "Unmetered Bandwidth (1 Gbps)" },
  ],
  features: [
    cpuName,
    `Located in ${locationName}`,
    "Advanced DDoS Mitigation",
    "Full Root & KVM Access",
    "Unmetered Bandwidth",
  ],
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const configMap: Record<`${LocationId}_${CpuId}`, ConfigDetail> = {
  // INDIA - INTEL GOLD 6154 (DEFAULT & UNTOUCHED)
  india_intel: {
    note: "Our India Intel Gold / Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the 'Order Now' button.",
    cpuModels: [
      "Intel® Gold 6154 @ 3.00 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
    plans: [
      makePlan("Plan 1", "Intel Gold 6154 KVM VPS", "2", "6 GB DDR4", "50 GB SSD", 380, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 2", "Intel Gold 6154 KVM VPS", "2", "8 GB DDR4", "80 GB SSD", 480, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 3", "Intel Gold 6154 KVM VPS", "4", "12 GB DDR4", "100 GB SSD", 670, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 4", "Intel Gold 6154 KVM VPS", "6", "16 GB DDR4", "150 GB SSD", 999, "Delhi, IN", "Intel Gold 6154", true),
      makePlan("Plan 5", "Intel Gold 6154 KVM VPS", "6", "24 GB DDR4", "200 GB SSD", 1500, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 6", "Intel Gold 6154 KVM VPS", "8", "32 GB DDR4", "200 GB SSD", 1800, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 7", "Intel Gold 6154 KVM VPS", "10", "48 GB DDR4", "300 GB SSD", 2000, "Delhi, IN", "Intel Gold 6154"),
      makePlan("Plan 8", "Intel Gold 6154 KVM VPS", "12", "64 GB DDR4", "400 GB SSD", 2600, "Delhi, IN", "Intel Gold 6154"),
    ],
  },

  // INDIA - AMD EPYC
  india_epyc: {
    note: "Our India AMD EPYC plans come with 2 CPU options. You can choose any available option based on current stock by clicking on the 'Order Now' button.",
    cpuModels: [
      "EPYC 7F72 3.20 GHz Server",
      "EPYC 7K62 2.60 GHz Server",
    ],
    plans: [
      makePlan("EPYC Premium XS", "AMD EPYC KVM VPS", "2", "6 GB DDR4 ECC", "50 GB NVMe SSD", 381.16, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium S", "AMD EPYC KVM VPS", "2", "8 GB DDR4 ECC", "80 GB NVMe SSD", 571.74, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium M", "AMD EPYC KVM VPS", "4", "12 GB DDR4 ECC", "100 GB NVMe SSD", 952.90, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium L", "AMD EPYC KVM VPS", "6", "16 GB DDR4 ECC", "150 GB NVMe SSD", 1143.48, "India", "AMD EPYC - Premium", true),
      makePlan("EPYC Premium XL", "AMD EPYC KVM VPS", "6", "24 GB DDR4 ECC", "200 GB NVMe SSD", 1524.64, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium XXL", "AMD EPYC KVM VPS", "8", "32 GB DDR4 ECC", "300 GB NVMe SSD", 1905.80, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium 2XL", "AMD EPYC KVM VPS", "10", "48 GB DDR4 ECC", "350 GB NVMe SSD", 2477.54, "India", "AMD EPYC - Premium"),
      makePlan("EPYC Premium 3XL", "AMD EPYC KVM VPS", "12", "64 GB DDR4 ECC", "400 GB NVMe SSD", 3335.15, "India", "AMD EPYC - Premium"),
    ],
  },

  // INDIA - AMD RYZEN
  india_ryzen: {
    note: "Our India AMD Ryzen™ Premium plans come with 2 CPU options. You can choose your preferred option based on your use case by clicking the 'Order Now' button.",
    cpuModels: [
      "AMD Ryzen™ 9 9900X (Performance Users | Up to 100 Gbps Protection)",
      "AMD Ryzen™ 9 5900X (DDoS Protection Users | OVH VAC Up to 17 Tbps)",
    ],
    plans: [
      makePlan("Ryzen XS", "AMD Ryzen KVM VPS", "1", "4 GB DDR5 ECC", "50 GB NVMe SSD", 611.76, "India", "AMD Ryzen™ - Premium"),
      makePlan("Ryzen S", "AMD Ryzen KVM VPS", "2", "8 GB DDR5 ECC", "80 GB NVMe SSD", 1048.19, "India", "AMD Ryzen™ - Premium"),
      makePlan("Ryzen L", "AMD Ryzen KVM VPS", "4", "16 GB DDR5 ECC", "150 GB NVMe SSD", 1810.51, "India", "AMD Ryzen™ - Premium", true),
      makePlan("AMD Ryzen XL", "AMD Ryzen KVM VPS", "5", "24 GB DDR5 ECC", "180 GB NVMe SSD", 2477.54, "India", "AMD Ryzen™ - Premium"),
      makePlan("Ryzen XL", "AMD Ryzen KVM VPS", "6", "32 GB DDR5 ECC", "200 GB NVMe SSD", 3621.02, "India", "AMD Ryzen™ - Premium"),
      makePlan("Ryzen VPS 2XL", "AMD Ryzen KVM VPS", "8", "48 GB DDR5 ECC", "250 GB NVMe SSD", 4764.50, "India", "AMD Ryzen™ - Premium"),
    ],
  },

  // SINGAPORE - AMD EPYC MILAN
  singapore_epyc: {
    note: "Singapore AMD EPYC Milan high-density cloud compute nodes featuring unmetered 1Gbps network transit.",
    cpuModels: ["AMD EPYC™ Milan Series @ 3.30 GHz Turbo"],
    plans: [],
  },
  singapore_intel: {
    note: "Equinix SG1 Singapore datacenter with direct Asia-Pacific Tier 1 fiber transit.",
    cpuModels: ["Intel® Xeon® Gold Series"],
    plans: [],
  },
  singapore_ryzen: {
    note: "AMD Ryzen™ high-frequency Singapore nodes tailored for high TPS game servers.",
    cpuModels: ["AMD Ryzen™ 9 Series"],
    plans: [],
  },

  // GERMANY - AMD RYZEN
  germany_ryzen: {
    note: "Frankfurt, Germany datacenter with AMD Ryzen™ 9 5900X processors and 17Tbps+ DDoS mitigation.",
    cpuModels: ["AMD Ryzen™ 9 5900X @ 4.80 GHz Max Boost"],
    plans: [],
  },
  germany_intel: {
    note: "EU Central datacenter (Frankfurt, DE) delivering high-speed connectivity across Europe.",
    cpuModels: ["Intel® Gold Series"],
    plans: [],
  },
  germany_epyc: {
    note: "AMD EPYC high-density enterprise nodes in Frankfurt, Germany.",
    cpuModels: ["AMD EPYC™ Series"],
    plans: [],
  },
};

function VpsPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationId>("india");
  const [selectedCpu, setSelectedCpu] = useState<CpuId>("intel");

  const selectedLocObj = locations.find((l) => l.id === selectedLocation);
  const isComingSoon = selectedLocObj?.comingSoon ?? false;

  const activeKey = `${selectedLocation}_${selectedCpu}` as const;
  const config = configMap[activeKey] ?? configMap["india_intel"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full overflow-hidden">
        <img src={vpsHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-success" />
            <span>High-Performance KVM Infrastructure</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white">
            Configure Your <span className="gradient-text-violet">VPS</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Select your preferred location and processor architecture to view available plans and instant pricing.
          </p>
        </div>
      </section>

      {/* Interactive Configurator Section */}
      <main className="mx-auto max-w-7xl px-4 pb-20 space-y-10">
        <div className="rounded-3xl border border-white/10 bg-card/40 p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-8">
          
          {/* Location Selector Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-white/10 pb-6">
            <div className="w-28 text-sm font-bold tracking-wide uppercase text-muted-foreground">
              Location:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {locations.map((loc) => {
                const isSelected = selectedLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`inline-flex items-center gap-2.5 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-white shadow-lg shadow-primary/30 ring-1 ring-primary/50 scale-[1.02]"
                        : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <img src={loc.flag} alt={loc.name} className="h-4 w-6 rounded object-cover shadow-sm" />
                    <span>{loc.name}</span>
                    {loc.comingSoon && (
                      <span className={`ml-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${
                        isSelected
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-primary/15 text-primary border-primary/30"
                      }`}>
                        Coming Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CPU Selector Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-28 text-sm font-bold tracking-wide uppercase text-muted-foreground">
              CPU:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {cpuOptions.map((cpu) => {
                const isSelected = selectedCpu === cpu.id;
                return (
                  <button
                    key={cpu.id}
                    onClick={() => setSelectedCpu(cpu.id)}
                    className={`inline-flex items-center gap-2.5 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-white shadow-lg shadow-primary/30 ring-1 ring-primary/50 scale-[1.02]"
                        : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cpu.id === "intel" && <ServerIcon className={`h-4 w-4 ${isSelected ? "text-white" : "text-cyan-400"}`} />}
                    {cpu.id === "epyc" && <Cpu className={`h-4 w-4 ${isSelected ? "text-white" : "text-sky-400"}`} />}
                    {cpu.id === "ryzen" && <Zap className={`h-4 w-4 ${isSelected ? "text-white" : "text-emerald-400"}`} />}
                    <span>{cpu.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CPU Note & Stock Callout Box */}
          {!isComingSoon && (
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-foreground/90 font-medium">
                    {config.note}
                  </p>

                  {config.cpuModels.length > 0 && (
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available CPU Models:</span>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/80">
                        {config.cpuModels.map((m) => (
                          <div key={m} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Dynamic Plan Grid Header */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Available VPS Plans
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Showing active plans for <span className="text-primary font-semibold">{selectedLocObj?.name}</span> with <span className="text-primary font-semibold">{cpuOptions.find(c => c.id === selectedCpu)?.label}</span>.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-muted-foreground">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span>Advanced DDoS Mitigation &amp; Instant Provisioning</span>
          </div>
        </div>

        {/* Dynamic Plan Cards Grid OR Coming Soon Card */}
        {isComingSoon ? (
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 via-card/50 to-card p-12 text-center shadow-2xl backdrop-blur-xl space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/30 shadow-lg">
              <Clock className="h-8 w-8 animate-pulse" />
            </div>
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
                ✨ Location Under Deployment
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                {selectedLocObj?.name} VPS Hosting — Coming Soon
              </h3>
              <p className="mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed">
                We are currently deploying bare-metal hardware and fiber network infrastructure in our {selectedLocObj?.name} datacenter. Node availability and instant provisioning for {selectedLocObj?.name} will open soon!
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-muted-foreground border-t border-white/10 max-w-lg mx-auto">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-cyan-400" /> 17Tbps+ DDoS Scrubbing</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-emerald-400" /> Tier 1 Fiber Transit</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> NVMe Gen4 Storage</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
