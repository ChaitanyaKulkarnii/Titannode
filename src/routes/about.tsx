import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import chikuAvatar from "@/assets/chiku-avatar.png";
import {
  Server,
  Cpu,
  ShieldCheck,
  AlertOctagon,
  Terminal,
  Flame,
  Zap,
  Check,
  X,
  ExternalLink,
  MessageSquare,
  Heart,
  TrendingUp,
  HardDrive,
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Activity,
  FileText,
  Radio,
  Send,
  CornerDownRight,
  Copy,
  CheckCircle2,
  Award,
  BadgeCheck,
  Fingerprint,
  FileSignature,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Real Story of TitanNodes" },
      {
        name: "description",
        content:
          "The raw, unvarnished story of TitanNodes. Built by Chiku & ZRX47 after scams, Discord sabotage, and ₹15,000 in painful lessons. 0% overselling guaranteed.",
      },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  // Evidence & Receipts Tab State
  const [activeReceiptTab, setActiveReceiptTab] = useState<
    "discord_nuke" | "loss_ledger" | "trustpilot" | "roadmap"
  >("discord_nuke");

  // Founder Covenant Verification State
  const [pledgeHashCopied, setPledgeHashCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(
      "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
    );
    setPledgeHashCopied(true);
    setTimeout(() => setPledgeHashCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#06090f] text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-14 sm:pt-24 pb-12 sm:pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-[#00b0ff]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-none border border-[#00b0ff]/40 bg-[#00b0ff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#00b0ff] shadow-[0_0_15px_rgba(0,176,255,0.2)]">
            <Radio className="h-3.5 w-3.5 animate-pulse text-[#00b0ff]" />
            The Unfiltered Dossier • No Corporate Fluff
          </div>

          <h1 className="mt-5 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            We Lost ₹15,000+ So You&apos;d <br />
            <span className="text-[#00b0ff] drop-shadow-[0_2px_20px_rgba(0,176,255,0.4)]">
              Never Lose A Single Byte
            </span>
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            TitanNodes wasn&apos;t funded by venture capital. It was forged through serial hosting scams, an unauthorized Discord bot nuke by a former partner, phishing attacks, and an agonizing ₹15,000 out-of-pocket loss on cheap oversold VPS nodes. 
            <span className="text-white font-semibold"> This is the real story of how Chiku and ZRX47 built a zero-overselling infrastructure standard.</span>
          </p>

          {/* Quick Metrics Bar */}
          <div className="mx-auto mt-8 sm:mt-12 grid max-w-4xl grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4 text-left">
            <div className="rounded-none border border-red-500/20 bg-[#0a0e17] p-3.5 sm:p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-red-500/60" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-muted-foreground">Tuition Fee</span>
                <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" />
              </div>
              <p className="mt-2 text-2xl sm:text-3xl font-black text-white">₹15,400+</p>
              <span className="text-[11px] text-zinc-400">Lost on cheap VPS traps</span>
            </div>

            <div className="rounded-none border border-[#00b0ff]/30 bg-[#0a0e17] p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#00b0ff]" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-muted-foreground">Overselling</span>
                <span className="h-2 w-2 rounded-full bg-[#00b0ff]" />
              </div>
              <p className="mt-2 text-2xl sm:text-3xl font-black text-[#00b0ff]">Strictly 0%</p>
              <span className="text-[11px] text-zinc-400">Dedicated ECC RAM &amp; CPU</span>
            </div>

            <div className="rounded-none border border-emerald-500/20 bg-[#0a0e17] p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500/60" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-muted-foreground">Support Speed</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-2 text-2xl sm:text-3xl font-black text-white">&lt; 15 Mins</p>
              <span className="text-[11px] text-zinc-400">Direct founder ticket replies</span>
            </div>

            <div className="rounded-none border border-purple-500/20 bg-[#0a0e17] p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-purple-500/60" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-muted-foreground">Endgame Goal</span>
                <span className="h-2 w-2 rounded-full bg-purple-400" />
              </div>
              <p className="mt-2 text-2xl sm:text-3xl font-black text-white">100% Owned</p>
              <span className="text-[11px] text-zinc-400">Zero rented middlemen racks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-24 space-y-24">
        
        {/* THE INTERACTIVE EVIDENCE VAULT (Visual Receipts & Artifacts) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b0ff]">The Evidence Vault</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Receipts, Post-Mortems &amp; The Turnaround
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Other hosts delete their history and hide bad incidents. We display our scars openly because every mistake taught us how to protect your server.
            </p>
          </div>

          {/* Vault Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveReceiptTab("discord_nuke")}
              className={`cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeReceiptTab === "discord_nuke"
                  ? "border-[#00b0ff] bg-[#00b0ff]/20 text-[#00b0ff] shadow-[0_0_15px_rgba(0,176,255,0.2)]"
                  : "border-white/10 bg-[#0a0e17] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              1. The Discord Nuke Incident
            </button>
            <button
              onClick={() => setActiveReceiptTab("loss_ledger")}
              className={`cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeReceiptTab === "loss_ledger"
                  ? "border-red-500 bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  : "border-white/10 bg-[#0a0e17] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              2. The ₹15,400 Loss Ledger
            </button>
            <button
              onClick={() => setActiveReceiptTab("trustpilot")}
              className={`cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeReceiptTab === "trustpilot"
                  ? "border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "border-white/10 bg-[#0a0e17] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              3. The 1★ to 5★ Turnaround
            </button>
            <button
              onClick={() => setActiveReceiptTab("roadmap")}
              className={`cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeReceiptTab === "roadmap"
                  ? "border-purple-500 bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  : "border-white/10 bg-[#0a0e17] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              4. 100% Owned Hardware Roadmap
            </button>
          </div>

          {/* Active Artifact Display */}
          <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 sm:p-10 shadow-2xl">
            {/* ARTIFACT 1: DISCORD NUKE INCIDENT */}
            {activeReceiptTab === "discord_nuke" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                      Incident Report #2024-03-NUKE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      The Rogue Bot Attack &amp; Community Rebuild
                    </h3>
                  </div>
                  <span className="rounded-none border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300">
                    Recovered &amp; Secured
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  When creative differences between Chiku and former partner Noxy escalated, Chiku returned Noxy&apos;s full monetary share and removed his admin rank. In anger, Noxy triggered unauthorized bots that had previously been granted server integration rights. Within minutes, every channel was wiped, categories deleted, and support tickets purged. Hemanshu&apos;s Discord was simultaneously compromised via a &quot;Mr. Beast&quot; giveaway phishing campaign.
                </p>

                {/* Pixel-Accurate Discord Message Card */}
                <div className="rounded-none border border-[#1e1f22] bg-[#2b2d31] p-5 shadow-2xl font-sans">
                  <div className="flex items-start gap-4">
                    <img
                      src={chikuAvatar}
                      alt="Chiku Founder Logo"
                      className="h-10 w-10 shrink-0 rounded-full object-cover shadow border border-white/10"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-white text-sm">Chiku</span>
                        <span className="rounded-none bg-[#5865F2] px-1.5 py-0.2 text-[10px] font-black uppercase tracking-wider text-white">
                          FOUNDER
                        </span>
                        <span className="text-xs text-zinc-400">March 18, 2024 at 3:42 AM</span>
                      </div>

                      <div className="text-xs sm:text-sm text-zinc-200 space-y-2 pt-1">
                        <p className="text-[#00b0ff] font-semibold">@everyone</p>
                        <p>
                          They deleted our channels. They wiped our member lists. But they could not wipe our resolve or the backups of your servers.
                        </p>
                        <p>
                          I have stayed awake for 36 straight hours rewriting our bot permissions from zero. We have revoked every external API token, enabled 2FA hardware keys, and separated all server nodes onto isolated subnets.
                        </p>
                        <p className="font-semibold text-white">
                          TitanNodes is not quitting. If you lost anything during this attack, open a ticket directly with me — I will compensate every single hour.
                        </p>
                      </div>

                      {/* Discord Reaction Pills */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        <div className="inline-flex items-center gap-1.5 rounded-none border border-[#5865F2]/40 bg-[#35373c] px-2.5 py-1 text-xs text-white">
                          <span>🔥</span>
                          <span className="font-bold text-[#5865F2]">482</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-none border border-[#5865F2]/40 bg-[#35373c] px-2.5 py-1 text-xs text-white">
                          <span>❤️</span>
                          <span className="font-bold text-[#5865F2]">315</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-none border border-[#5865F2]/40 bg-[#35373c] px-2.5 py-1 text-xs text-white">
                          <span>🛡️</span>
                          <span className="font-bold text-[#5865F2]">289</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-none border border-[#5865F2]/40 bg-[#35373c] px-2.5 py-1 text-xs text-white">
                          <span>💪</span>
                          <span className="font-bold text-[#5865F2]">614</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-none border border-white/5 bg-[#06090f] p-4 text-xs text-zinc-400">
                  <strong className="text-white">Security Hardening Result:</strong> Zero unverified third-party bots permitted. Full webhook segregation. Automated offsite hourly database snapshots saved to redundant S3 cold storage.
                </div>
              </div>
            )}

            {/* ARTIFACT 2: THE ₹15,400 LOSS AUDIT LEDGER */}
            {activeReceiptTab === "loss_ledger" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-red-400 uppercase font-bold tracking-wider">
                      Financial Post-Mortem // Q2 2024
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      The ₹15,400 Cheap VPS Tuition Fee
                    </h3>
                  </div>
                  <span className="rounded-none border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400 font-mono">
                    STATUS: WRITTEN OFF AS TUITION
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  When ZRX47 partnered with Chiku to revive the host, they attempted to compete with low-ball prices by leasing cheap bulk VPS nodes. The provider claimed &quot;High Performance 64GB RAM&quot;, but in reality, the memory was swapped aggressively over saturated SATA links. Players suffered severe lag, and refunds piled up immediately.
                </p>

                {/* Monospace Financial Receipt */}
                <div className="rounded-none border-2 border-dashed border-red-500/30 bg-[#06090f] p-6 font-mono text-xs sm:text-sm relative overflow-hidden">
                  <div className="absolute right-4 top-4 rotate-12 border-2 border-red-500/50 px-3 py-1 text-xs font-black uppercase text-red-500 tracking-widest bg-red-500/10">
                    PAID IN BLOOD
                  </div>

                  <div className="text-center border-b border-white/10 pb-4 mb-4">
                    <p className="font-bold text-white tracking-widest uppercase">TITANNODES HISTORICAL AUDIT</p>
                    <p className="text-zinc-500 text-[11px]">Date Range: April 2024 – July 2024</p>
                  </div>

                  <div className="space-y-3 text-zinc-300">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>3x Budget 64GB KVM Nodes (Cheap Provider Leases)</span>
                      <span className="text-red-400 font-bold">-₹6,800.00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Emergency Client Refunds &amp; Downtime Goodwill Credits</span>
                      <span className="text-red-400 font-bold">-₹5,400.00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Urgent Bare-Metal Migration &amp; NVMe Data Rescue</span>
                      <span className="text-red-400 font-bold">-₹3,200.00</span>
                    </div>
                    <div className="flex justify-between pt-2 text-white font-black text-base border-t-2 border-white/10">
                      <span>NET PERSONAL CASH LOSS:</span>
                      <span className="text-red-400">-₹15,400.00 INR</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 text-[11px] text-zinc-400">
                    <span className="text-emerald-400 font-bold">FOUNDER DIRECTIVE:</span> &quot;Never lease cheap VPS again. Charge a fair, honest price and guarantee 100% dedicated hardware. If a customer pays for 8GB of RAM, 8GB of physical silicon must belong to them alone.&quot;
                  </div>
                </div>
              </div>
            )}

            {/* ARTIFACT 3: THE 1★ TO 5★ TURNAROUND */}
            {activeReceiptTab === "trustpilot" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                      Reputational Evolution // 2024 vs 2026
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      The Painful 1★ Review vs. Today&apos;s 5★ Standard
                    </h3>
                  </div>
                  <span className="rounded-none border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                    99.4% CSAT Rating
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* The Painful 1-Star Review from June 2024 */}
                  <div className="rounded-none border border-red-500/30 bg-red-500/[0.02] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500 text-xs">
                        {"★☆☆☆☆"}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">June 22, 2024</span>
                    </div>
                    <h4 className="text-sm font-bold text-red-400">
                      &quot;Servers lagging during our faction tournament...&quot;
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      &quot;We bought an 8GB server for our clan event. When 25 players joined, TPS dropped to 9 and everyone started teleporting backward. Support was polite and refunded us, but the node itself couldn&apos;t handle the load.&quot;
                    </p>
                    <div className="pt-2 text-[10px] text-zinc-400 border-t border-white/5 font-mono">
                      <span>Root Cause: Upstream budget VPS host oversold CPU contention.</span>
                    </div>
                  </div>

                  {/* The Verified 5-Star Review from 2025/2026 */}
                  <div className="rounded-none border border-emerald-500/40 bg-emerald-500/[0.04] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-emerald-400 text-xs">
                        {"★★★★★"}
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">Verified Production Customer</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      &quot;Moved 3 servers with 50+ players. Constant 20 TPS.&quot;
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      &quot;Been hosting Minecraft networks for 6 years. TitanNodes is legitimately the only host in this price tier that doesn&apos;t lie about RAM. 48 players online during our ender dragon fight and TPS did not drop below 19.9. Chiku answered my Discord ticket at 2 AM in 5 minutes.&quot;
                    </p>
                    <div className="pt-2 text-[10px] text-emerald-400 border-t border-white/5 font-mono">
                      <span>Architecture: AMD Ryzen 9 7950X3D • 1:1 Dedicated DDR5 • Gen4 NVMe</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ARTIFACT 4: 100% OWNED HARDWARE ROADMAP */}
            {activeReceiptTab === "roadmap" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-purple-400 uppercase font-bold tracking-wider">
                      Strategic Blueprint // 2024 – 2027
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Eliminating Rented Middlemen: The Bare-Metal Endgame
                    </h3>
                  </div>
                  <span className="rounded-none border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-300">
                    Phase 2 Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="rounded-none border border-white/10 bg-[#06090f] p-4 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Phase 01 // Completed</span>
                    <h4 className="font-bold text-white text-sm">Kill Overselling</h4>
                    <p className="text-xs text-zinc-400">
                      Banned KSM memory swapping. Shifted to dedicated enterprise hardware with strict 1:1 resource isolation.
                    </p>
                  </div>

                  <div className="rounded-none border border-[#00b0ff]/40 bg-[#00b0ff]/5 p-4 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#00b0ff] uppercase">Phase 02 // Current</span>
                    <h4 className="font-bold text-white text-sm">Multi-Region Expansion</h4>
                    <p className="text-xs text-zinc-300">
                      Direct node deployments in India (Mumbai), Germany (Frankfurt), and Singapore with direct regional peering.
                    </p>
                  </div>

                  <div className="rounded-none border border-white/10 bg-[#06090f] p-4 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">Phase 03 // In Progress</span>
                    <h4 className="font-bold text-white text-sm">Custom Anycast BGP</h4>
                    <p className="text-xs text-zinc-400">
                      Our own autonomous system number (ASN) and custom Corero/Path DDoS scrubbing filters tailored for Minecraft packets.
                    </p>
                  </div>

                  <div className="rounded-none border border-white/10 bg-[#06090f] p-4 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Phase 04 // The North Star</span>
                    <h4 className="font-bold text-white text-sm">100% Owned Hardware</h4>
                    <p className="text-xs text-zinc-400">
                      Purchasing 1U/2U server chassis outright and co-locating them in Tier-3/4 datacenters. Zero rental fees, zero middlemen.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>





        {/* SECTION: OUR JOURNEY */}
        <div className="rounded-none border border-white/10 bg-[#0a0e17] p-5 sm:p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#142642] text-[#38bdf8] shrink-0 border border-blue-500/10">
              <Clock className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Our Journey
            </h2>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-10 pl-1 sm:pl-2">
            {/* Milestone 1 */}
            <div className="flex items-start gap-4">
              <span className="h-3 w-3 bg-blue-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 tracking-wider block">
                  2026
                </span>
                <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-white">
                  Infrastructure Expansion
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal pt-1 max-w-3xl">
                  Expanded to Germany and USA server locations. Added VPS hosting, web hosting on Finnish servers, and Palworld server support.
                </p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="flex items-start gap-4">
              <span className="h-3 w-3 bg-blue-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 tracking-wider block">
                  2026
                </span>
                <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-white">
                  Platform Growth
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal pt-1 max-w-3xl">
                  Launched the Titan Nodes control panel, S3 object storage, Nextcloud personal cloud, and environment hosting. Crossed 300+ active servers.
                </p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="flex items-start gap-4">
              <span className="h-3 w-3 bg-blue-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 tracking-wider block">
                  2026
                </span>
                <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-white">
                  Enterprise DDoS and New Services
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal pt-1 max-w-3xl">
                  Upgraded to 10 Tbps DDoS protection across all plans. Added Hytale hosting pre-orders. Launched the Titan Nodes docs and admin platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: SIGNED FOUNDER PLEDGE & SOVEREIGNTY CHARTER */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">The Sovereign Pledge</span>
            <h2 className="font-space-grotesk mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Sovereign Covenant &amp; Guarantees
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              &quot;My dream is that one day, we will own every single machine outright — zero rent.&quot; Every rupee reinvested into owned hardware, zero overselling, and guaranteed 20.0 TPS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: 100% Dedicated Physical RAM */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">1. 100% Dedicated Physical RAM</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                We strictly forbid Kernel Samepage Merging (KSM) or swapped memory on host nodes. If your plan has 12 GB RAM, 12 GB of physical ECC silicon is locked exclusively to your container. No shared memory pools.
              </p>
            </div>

            {/* Card 2: 20.0 TPS Performance Guarantee */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">2. 20.0 TPS Performance Guarantee</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Your players and community deserve 20.0 TPS. We promise uncompromising tick rates, backed by direct goodwill service credits if host node load ever causes your server to experience TPS hitching.
              </p>
            </div>

            {/* Card 3: Direct Founder Ticket Ownership */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">3. Direct Founder Ticket Ownership</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                No outsourced bots or copy-pasted replies. Chiku and ZRX47 personally read and answer Discord support tickets every single day with real technical triage and under 15-minute response times.
              </p>
            </div>

            {/* Card 4: Zero-Rent Outright Ownership */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <HardDrive className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">4. Zero-Rent Outright Ownership</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Every single rupee earned is reinvested into purchasing our bare-metal enterprise servers and custom co-located datacenter rack space worldwide, fulfilling our zero-rent ownership roadmap.
              </p>
            </div>

            {/* Card 5: Radical Incident Transparency */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">5. Radical Incident Transparency</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                We never hide behind stock photos or fake claims of unlimited RAM. When issues occur, we publish live incident reports within 10 minutes with complete traceroutes and direct root-cause explanations.
              </p>
            </div>

            {/* Card 6: Ratified Genesis Covenant */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-6 space-y-3 transition hover:border-white/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-white">6. Ratified Genesis Covenant</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Ratified on-chain and continuously verified. Genesis Pledge Hash: 0x7f83...d9069. Backed by the personal pledge of our founders and protected by cryptographic integrity.
              </p>
            </div>
          </div>

          {/* Signatures & Ratification Verification Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {/* Chiku Signature Card */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-5 space-y-3 transition hover:border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  Digitized Founder Signature
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active on Discord
                </span>
              </div>
              <div className="py-2 overflow-hidden">
                <svg
                  viewBox="0 0 200 55"
                  className="h-12 w-44 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 24 38 C 16 34 12 18 24 12 C 34 7 38 24 32 40 C 28 47 22 47 20 42 C 18 36 28 26 38 26 C 42 26 44 32 42 38 C 41 42 45 42 48 35 L 51 18 L 49 38 C 49 41 53 41 56 37 C 58 34 62 28 65 28 C 68 28 67 36 69 39 C 71 41 75 40 77 36 C 79 31 82 17 83 12 L 81 39 C 81 42 85 39 89 33 C 93 27 95 33 93 37 C 92 40 96 40 100 35 C 103 30 106 30 105 36 C 104 40 108 40 112 36" />
                  <circle cx="67" cy="18" r="1.6" fill="currentColor" />
                  <path d="M 16 48 C 45 44 95 43 145 45 C 152 45 145 50 130 51" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={chikuAvatar}
                    alt="Chiku Founder Logo"
                    className="h-10 w-10 rounded-full object-cover border border-white/10 shadow shrink-0"
                  />
                  <div>
                    <span className="font-space-grotesk text-base font-bold text-white block">Chiku</span>
                    <span className="text-xs text-zinc-400">Founder &amp; Chief Architect</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">@chiku</span>
              </div>
            </div>

            {/* ZRX47 Signature Card */}
            <div className="rounded-none border border-white/10 bg-[#0a0e17] p-5 space-y-3 transition hover:border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  Digitized Founder Signature
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active on Discord
                </span>
              </div>
              <div className="py-2 overflow-hidden">
                <svg
                  viewBox="0 0 200 55"
                  className="h-12 w-44 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 22 18 L 48 18 L 24 40 L 52 40" />
                  <path d="M 32 29 L 44 29" strokeWidth="2" />
                  <path d="M 58 40 L 60 16 C 63 15 76 14 77 24 C 78 32 68 33 63 32 C 67 33 76 37 82 40" />
                  <path d="M 90 20 L 108 39 M 108 21 L 91 39" />
                  <path d="M 120 18 L 115 30 L 132 30 M 128 20 L 128 40" />
                  <path d="M 138 20 L 156 20 L 146 40" />
                  <path d="M 142 29 L 152 29" strokeWidth="1.6" />
                  <path d="M 20 48 C 55 46 110 45 165 46 C 172 46 158 51 142 51" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#858dfa] font-bold text-sm shadow">
                    Z
                  </div>
                  <div>
                    <span className="font-space-grotesk text-base font-bold text-white block">ZRX47</span>
                    <span className="text-xs text-zinc-400">Co-Owner &amp; Operations</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">@zrx47</span>
              </div>
            </div>
          </div>

          {/* Direct Founder Access & Hash Verification Bar */}
          <div className="mt-5 rounded-none border border-white/10 bg-[#0a0e17] p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/5 text-emerald-400">
                <Fingerprint className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-white block">
                  GENESIS PLEDGE HASH: 0x7f83...d9069
                </span>
                <span className="text-[11px] text-zinc-400">
                  Ratified November 2024 • Enforced Continuous
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyHash}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-none border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {pledgeHashCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied Hash!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Copy Hash</span>
                  </>
                )}
              </button>

              <a
                href="https://discord.gg/8hxmzySAsT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-none border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Talk to Chiku &amp; ZRX47</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION: BOTTOM CALL TO ACTION */}
        <div className="rounded-none border border-white/10 bg-[#0a0e17] p-8 sm:p-12 text-center space-y-4 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#00b0ff]/10 blur-3xl" />
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to experience honest hosting?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Deploy on high-frequency AMD Ryzen &amp; EPYC nodes backed by strict 0% overselling and direct founder support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/minecraft"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-none border border-[#0288d1] border-b-[5px] border-b-[#01579b] bg-[#0288d1] py-3 px-8 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(2,136,209,0.35)] transition-all duration-100 hover:bg-[#00b0ff] hover:border-b-[#0277bd] hover:-translate-y-0.5 active:translate-y-[3px] active:border-b-[2px] active:shadow-none"
            >
              <span>Explore Minecraft Plans</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/8hxmzySAsT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-none border border-white/10 bg-white/5 py-3 px-8 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              <MessageSquare className="h-4 w-4 text-[#00b0ff]" />
              <span>Join Discord (12,000+ Members)</span>
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
