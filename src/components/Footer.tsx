import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-new.png";

const cols = [
  {
    title: "Hosting",
    links: [
      { label: "Minecraft Hosting", to: "/minecraft" },
      { label: "VPS Hosting", to: "/vps-hosting" },
      { label: "Web Hosting", to: "/web-hosting" },
      { label: "Bot Hosting", to: "/bot-hosting" },
      { label: "RDP Hosting", to: "/rdp-hosting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "Infrastructure", to: "/infrastructure" },
      { label: "FAQs", to: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Refund Policy", to: "/refund" },
      { label: "Acceptable Use", to: "/aup" },
      { label: "SLA", to: "/sla" },
    ],
  },
] as const;

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-18.91-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.92,53.88,53,48.8,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.92,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-14">
        {/* Discord Callout Banner */}
        <div className="relative mb-12 sm:mb-16 overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#4752C4] via-[#5865F2] to-[#7289DA] p-6 sm:p-8 text-white shadow-2xl md:p-10">
          {/* Background decorative watermark icons */}
          <DiscordIcon className="absolute -left-6 -top-6 h-36 w-36 text-white/10" />
          <DiscordIcon className="absolute bottom-2 left-1/3 h-24 w-24 text-white/10" />
          <DiscordIcon className="absolute -right-6 -bottom-6 h-40 w-40 text-white/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-4xl">
                Join Our <span className="text-blue-200">Discord</span>
              </h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm font-medium text-white/90 md:text-base">
                12,000+ members — get support, share feedback, and catch exclusive news first.
              </p>
            </div>

            <a
              href="https://discord.gg/8hxmzySAsT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-xl sm:rounded-2xl bg-white px-7 py-3 sm:py-3.5 text-sm font-extrabold text-[#5865F2] shadow-lg transition duration-200 hover:scale-105 hover:bg-slate-100 active:scale-95"
            >
              <DiscordIcon className="h-5 w-5 text-[#5865F2]" />
              Join us on Discord
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="TitanNode" className="h-9 w-9 rounded-full bg-white/5 object-cover ring-1 ring-white/20" />
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-primary">Titan</span><span className="text-white">Node</span>
              </span>
            </div>
            <p className="mt-3 sm:mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Enterprise-grade Minecraft, VPS, Web and Bot hosting with 99.9% uptime and 24/7 support.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">{col.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-xs sm:text-sm text-muted-foreground transition hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:text-left md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TitanNode. All rights reserved.</p>
          <p className="text-xs font-medium text-green-400">Website is made by Gandhali Kulkarni</p>
        </div>
      </div>
    </footer>
  );
}
