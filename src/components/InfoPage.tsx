import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function InfoPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.66_0.22_295/0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
      </section>
      <main className="mx-auto max-w-4xl px-4 pb-24">
        <div className="prose prose-invert max-w-none rounded-2xl border border-white/10 bg-card/40 p-8 text-foreground/85 leading-relaxed">
          {children ?? (
            <p className="text-muted-foreground">
              We're putting the finishing touches on this page. Please check back soon — or contact our team if you need information right now.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
