import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/HomeSections";
import { Search, Monitor, Smartphone, Gamepad2, LayoutGrid, ArrowRight } from "lucide-react";
import minecraftHero from "@/assets/games/minecraft-hero-wide.jpg";
import rust from "@/assets/games/rust.jpg";
import fivem from "@/assets/games/fivem.jpg";
import ark from "@/assets/games/ark.jpg";
import terraria from "@/assets/games/terraria.jpg";
import valheim from "@/assets/games/valheim.jpg";
import palworld from "@/assets/games/palworld.jpg";
import cs2 from "@/assets/games/cs2.jpg";
import hytale from "@/assets/games/hytale.jpg";
import { useCurrency } from "@/lib/currency";

export const Route = createFileRoute("/game-hosting")({
  head: () => ({
    meta: [
      { title: "Game Server Hosting — TitanNode" },
      { name: "description", content: "Premium game server hosting for Minecraft, Rust, FiveM, ARK, Terraria, Valheim, Palworld, CS2, Hytale and more." },
    ],
  }),
  component: GameHostingPage,
});

type Platform = "pc" | "mobile" | "console";

interface Game {
  name: string;
  image: string;
  startingUsd: number;
  platforms: Platform[];
  popular?: boolean;
  to: string;
}

const games: Game[] = [
  { name: "Minecraft", image: minecraftHero, startingUsd: 38 / 86.5, platforms: ["pc", "mobile", "console"], popular: true, to: "/minecraft" },
  { name: "Palworld", image: palworld, startingUsd: 300 / 86.5, platforms: ["pc"], popular: true, to: "/palworld" },
  { name: "Counter-Strike 2", image: cs2, startingUsd: 100 / 86.5, platforms: ["pc"], popular: true, to: "/cs2" },
  { name: "Hytale", image: hytale, startingUsd: 110 / 86.5, platforms: ["pc"], popular: true, to: "/hytale" },
  { name: "FiveM", image: fivem, startingUsd: 120 / 86.5, platforms: ["pc"], popular: true, to: "/fivem" },
  { name: "Rust", image: rust, startingUsd: 270 / 86.5, platforms: ["pc"], popular: true, to: "/rust" },
  { name: "ARK: Survival Evolved", image: ark, startingUsd: 370 / 86.5, platforms: ["pc"], to: "/ark" },
  { name: "Terraria", image: terraria, startingUsd: 28 / 86.5, platforms: ["pc", "mobile"], popular: true, to: "/terraria" },
  { name: "Valheim", image: valheim, startingUsd: 100 / 86.5, platforms: ["pc"], to: "/valheim" },
];

const filters: { id: "all" | Platform; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "View All", icon: LayoutGrid },
  { id: "pc", label: "PC", icon: Monitor },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "console", label: "Console", icon: Gamepad2 },
];

function GameHostingPage() {
  const [filter, setFilter] = useState<"all" | Platform>("all");
  const [query, setQuery] = useState("");
  const { format } = useCurrency();

  const filtered = useMemo(() => {
    return games.filter((g) => {
      const matchesPlatform = filter === "all" || g.platforms.includes(filter);
      const matchesQuery = query.trim() === "" || g.name.toLowerCase().includes(query.toLowerCase());
      return matchesPlatform && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle non-AI ambient illumination */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[600px] max-w-full rounded-full bg-sky-500/[0.03] blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-16 text-center md:pt-24">
          <h1 className="text-5xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
            Game Server<br />Hosting
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            At <span className="font-semibold text-foreground">TitanNode</span>, we provide{" "}
            <span className="font-semibold text-foreground">premium game server hosting</span>{" "}
            for over 9 of the most popular games you can think of.
          </p>
        </div>
      </section>

      {/* Filter pills + search */}
      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "border-zinc-700 bg-zinc-800 text-white shadow-sm"
                    : "border-zinc-800 bg-[#090a0d] text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <f.icon className="h-4 w-4" />
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..."
            className="h-11 w-full rounded-md border border-zinc-800 bg-[#090a0d] pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-zinc-500 focus:border-zinc-600"
          />
        </div>
      </section>

      {/* Game cards */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <Link
              key={g.name}
              to={g.to}
              className="group relative block overflow-hidden rounded-md border border-zinc-800/90 bg-[#090a0d] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/90 via-[#08090c]/20 to-transparent" />
                {/* Crisp top hairline highlight on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

                {g.popular && (
                  <span className="absolute right-3 top-3 z-10 rounded border border-zinc-700/80 bg-black/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
                    Most Popular
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">{g.name}</h3>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    Starting at <span className="font-semibold text-sky-400">{format(g.startingUsd)}</span>
                    <span className="text-zinc-500">/mo</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-800/70 bg-[#060709] px-4 py-2.5 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  {g.platforms.includes("pc") && <span title="PC"><Monitor className="h-3.5 w-3.5 text-zinc-400" /></span>}
                  {g.platforms.includes("mobile") && <span title="Mobile"><Smartphone className="h-3.5 w-3.5 text-zinc-400" /></span>}
                  {g.platforms.includes("console") && <span title="Console"><Gamepad2 className="h-3.5 w-3.5 text-zinc-400" /></span>}
                </div>
                <span className="inline-flex items-center gap-1 font-medium text-zinc-300 group-hover:text-white">
                  Deploy <ArrowRight className="h-3 w-3 text-sky-400 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No games match your filters.</p>
        )}
      </section>

      <FeaturesSection />
      <Footer />
    </div>
  );
}
