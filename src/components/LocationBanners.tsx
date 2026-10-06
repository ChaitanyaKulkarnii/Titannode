import { Cpu, Server } from "lucide-react";
import singapore from "@/assets/locations/singapore.jpg";
import india from "@/assets/locations/india.jpg";
import germany from "@/assets/locations/germany.jpg";
import usa from "@/assets/locations/usa.jpg";
import flagSG from "@/assets/flags/singapore.png";
import flagIN from "@/assets/flags/india.png";
import flagDE from "@/assets/flags/germany.png";
import flagUS from "@/assets/flags/usa.png";

interface Location {
  name: string;
  flag: string;
  bg: string;
  cpus: string[];
  accent: string;
  popular?: boolean;
}

const locations: Location[] = [
  { name: "Singapore", flag: flagSG, bg: singapore, accent: "from-red-500/40", cpus: ["AMD EPYC 7F72", "Intel Platinum"] },
  { name: "India", flag: flagIN, bg: india, accent: "from-orange-500/50", cpus: ["AMD Ryzen 9 9950X", "Intel Platinum", "AMD EPYC 7F72"], popular: true },
  { name: "Germany", flag: flagDE, bg: germany, accent: "from-yellow-500/40", cpus: ["AMD Ryzen 9 9950X", "AMD EPYC 7F72"] },
  { name: "USA — California", flag: flagUS, bg: usa, accent: "from-blue-500/40", cpus: ["AMD EPYC 7F72", "Intel Platinum"] },
];

export function LocationBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="group relative overflow-hidden rounded-md border border-zinc-800/90 bg-[#090a0d] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
          >
            {/* Top hairline highlight on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {loc.popular && (
              <div className="absolute right-3 top-3 z-10 rounded border border-sky-500/40 bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-400">
                Popular
              </div>
            )}
            <img
              src={loc.bg}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-55 brightness-[1.4] transition duration-500 group-hover:scale-105 group-hover:opacity-75 group-hover:brightness-[1.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/50 to-transparent" />
            <div className="relative flex min-h-[170px] flex-col justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <img src={loc.flag} alt="" className="h-6 w-6 rounded-sm ring-1 ring-white/20 object-cover" />
                <h3 className="text-base font-bold leading-tight text-white tracking-tight">{loc.name}</h3>
              </div>
              <div className="space-y-1.5 text-xs">
                {loc.cpus.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-zinc-300 font-medium">
                    {c.startsWith("AMD") ? (
                      <Cpu className="h-3.5 w-3.5 text-sky-400" />
                    ) : (
                      <Server className="h-3.5 w-3.5 text-sky-400" />
                    )}
                    <span className="truncate">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
