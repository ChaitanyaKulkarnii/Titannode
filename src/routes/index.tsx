import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  HeroSection, FeaturesSection, ServicesSection,
  GamesSection, LocationsSection, FAQSection, CTASection,
} from "@/components/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TitanNode — Minecraft, VPS, Web & Bot Hosting" },
      {
        name: "description",
        content:
          "Affordable Minecraft server hosting, VPS hosting, web hosting and Discord bot hosting with 99.9% uptime, DDoS protection and 24/7 support.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <GamesSection />
        <LocationsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
