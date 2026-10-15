import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [{ title: "Infrastructure — Coming Soon — TitanNode" }],
  }),
  component: InfrastructurePage,
});

export function InfrastructurePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-32">
        {/* Ambient subtle light */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#00b0ff]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-none border border-[#00b0ff]/40 bg-[#00b0ff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#00b0ff] shadow-[0_0_15px_rgba(0,176,255,0.2)]">
            <Clock className="h-3.5 w-3.5" />
            Under Construction
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-7xl">
            Coming <span className="text-[#00b0ff]">Soon</span>
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We are currently updating our datacenter telemetry and hardware documentation. Please check back soon.
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="inline-flex cursor-pointer items-center justify-center rounded-none border border-[#0288d1] border-b-[4px] border-b-[#01579b] bg-[#0288d1] py-2.5 px-6 text-xs font-black uppercase tracking-wider text-white shadow-[0_2px_12px_rgba(2,136,209,0.3)] transition-all duration-100 hover:bg-[#00b0ff] hover:border-b-[#0277bd] hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[2px] active:shadow-none"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
