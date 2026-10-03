import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard, type PlanCardData } from "@/components/PlanCard";
import { Globe, HardDrive, Mail, Zap } from "lucide-react";
import webHero from "@/assets/hero/web.jpg";

export const Route = createFileRoute("/web-hosting")({
  head: () => ({
    meta: [
      { title: "Web Hosting — TitanNodes" },
      { name: "description", content: "Lightning-fast cPanel web hosting starting at $1/mo. NVMe SSD, free SSL, 1-click WordPress & unlimited bandwidth." },
    ],
  }),
  component: WebPage,
});

const makeWebPlan = (
  name: string,
  domains: string,
  ssd: string,
  email: string,
  priceUsd: number,
  popular?: boolean
): PlanCardData => ({
  name,
  subtitle: "cPanel Web Hosting",
  price: priceUsd,
  iconNode: <Globe className="h-6 w-6 text-primary" />,
  popular,
  specs: [
    { icon: Globe, label: "Domains", value: domains },
    { icon: HardDrive, label: "NVMe SSD", value: ssd },
    { icon: Mail, label: "Emails", value: email },
    { icon: Zap, label: "Bandwidth", value: "Unlimited" },
  ],
  features: [
    "cPanel Access",
    "Unlimited Subdomains",
    "1-Click WordPress",
    "Unlimited Bandwidth",
    "Free SSL Certificate",
  ],
  orderLink: "https://discord.gg/8hxmzySAsT",
});

const plans: PlanCardData[] = [
  makeWebPlan("WebSpace S", "1 Domain", "25 GB", "10 Accounts", 1),
  makeWebPlan("WebSpace M", "2 Domains", "50 GB", "20 Accounts", 2, true),
  makeWebPlan("WebSpace L", "Unlimited Domains", "100 GB", "50 Accounts", 4),
];

function WebPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative w-full overflow-hidden">
        <img src={webHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Lightning-fast <span className="gradient-text-violet">Web Hosting</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            High-speed NVMe SSD cPanel web hosting with free SSL, 1-click WordPress installs, and unlimited bandwidth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
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
