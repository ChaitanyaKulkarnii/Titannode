import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { Bot, Cpu, Server, HardDrive, Shield } from "lucide-react";
import botHero from "@/assets/hero/bot.jpg";

export const Route = createFileRoute("/bot-hosting")({
  head: () => ({
    meta: [
      { title: "Discord Bot Hosting — TitanNode" },
      { name: "description", content: "Premium Discord bot hosting starting at ₹25/mo. 24/7 uptime, NVMe Gen-4 storage, Node.js & Python support." },
    ],
  }),
  component: BotPage,
});

const features = [
  "24/7 Uptime Guarantee",
  "Node.js, Python & Java",
  "Git Webhook Auto-Deploy",
  "Full SFTP & Panel Access",
  "Enterprise DDoS Shield",
];

const makeBotPlan = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  priceInr: number,
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "Premium Bot Node",
  price: priceInr / 83,
  iconNode: <Bot className="h-6 w-6 text-primary" />,
  popular,
  specs: [
    { icon: Server, label: "RAM", value: ram },
    { icon: Cpu, label: "CPU", value: cpu },
    { icon: HardDrive, label: "NVMe", value: storage },
    { icon: Shield, label: "DDoS", value: "Protected" },
  ],
  features,
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const plans: PlanCardData[] = [
  makeBotPlan("Starter Plan", "512 MiB DDR4 (3200MHz)", "0.5 vCore (50%)", "5 GiB NVMe (GEN-4)", 25),
  makeBotPlan("Basic Plan", "1 GiB DDR4 (3200MHz)", "1.00 vCore (100%)", "10 GiB NVMe (GEN-4)", 50, true),
  makeBotPlan("Professional Plan", "2 GiB DDR4 (3200MHz)", "1.25 vCore (125%)", "15 GiB NVMe (GEN-4)", 80),
];

function BotPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img src={botHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Premium <span className="gradient-text-violet">Discord Bot</span> Hosting
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
            High-performance 24/7 bot runtimes on DDR4 3200MHz memory and PCIe Gen-4 NVMe storage.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <p className="mb-2 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-primary/40" />
            Choose your bot plan
            <span className="h-px w-8 bg-primary/40" />
          </p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Simple, Affordable Pricing</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            All plans include instant deployment, 24/7 uptime, Git auto-deploy webhooks, and full SFTP access.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
