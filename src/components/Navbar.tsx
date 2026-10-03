import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown, ChevronRight, Menu, X, ArrowRight,
  Server, Bot, Monitor, Gift, Globe, Box, Gamepad2,
  Users, Mail, HelpCircle, Activity, Lock, CreditCard, Scale, Award,
  FileText
} from "lucide-react";
import logo from "@/assets/logo-new.png";
import { useCurrency, type Currency } from "@/lib/currency";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  to: string;
  description?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  isExternal?: boolean;
}

interface DropdownGroup {
  id: string;
  label: string;
  width?: string;
  icon?: React.ComponentType<{ className?: string }>;
  links: DropdownItem[];
}

const DISCORD_URL = "https://discord.gg/8hxmzySAsT";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-18.91-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.92,53.88,53,48.8,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.92,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

const hostingServices: DropdownItem[] = [
  { label: "Minecraft Hosting", to: "/minecraft", description: "From ₹10/mo • NVMe", badge: "Hot", icon: Box },
  { label: "VPS Hosting", to: "/vps-hosting", description: "Intel Gold & AMD EPYC", badge: "NVMe", icon: Server },
  { label: "Windows RDP", to: "/rdp-hosting", description: "Full Admin Access", icon: Monitor },
  { label: "Discord Bots", to: "/bot-hosting", description: "Node.js, Python & Java", icon: Bot },
  { label: "Web Hosting", to: "/web-hosting", description: "Fast NVMe & cPanel", icon: Globe },
  { label: "Free Hosting", to: "/free-hosting", description: "Risk-Free Sandbox", badge: "Free", icon: Gift },
];

const companyLinks: DropdownItem[] = [
  { label: "About Us", to: "/about", description: "Hardware & Vision", icon: Users },
  { label: "Infrastructure", to: "/infrastructure", description: "Direct Node Telemetry", icon: Activity },
  { label: "Support", to: "/contact", description: "24/7 Technical Help", icon: Mail },
  { label: "FAQs", to: "/faqs", description: "Common Questions", icon: HelpCircle },
  { label: "Discord Community", to: DISCORD_URL, description: "12,000+ Members", icon: DiscordIcon as any, isExternal: true },
];

const legalLinks: DropdownItem[] = [
  { label: "Terms of Service", to: "/terms", description: "Service Agreement", icon: FileText },
  { label: "Privacy Policy", to: "/privacy", description: "Data Safeguards", icon: Lock },
  { label: "Refund Policy", to: "/refund", description: "5-Day Tiered Policy", icon: CreditCard },
  { label: "Acceptable Use", to: "/aup", description: "Network Policy", icon: Scale },
  { label: "Service Level (SLA)", to: "/sla", description: "99.0% Uptime SLA", icon: Award },
];

const menuGroups: DropdownGroup[] = [
  { id: "hosting", label: "Hosting", width: "w-80", icon: Server, links: hostingServices },
  { id: "company", label: "Company", width: "w-72", icon: Users, links: companyLinks },
  { id: "legal", label: "Legal", width: "w-72", icon: Scale, links: legalLinks },
];

const currencySymbols: Record<Currency, string> = { INR: "₹", USD: "$", EUR: "€" };
const currencies: Currency[] = ["USD", "INR", "EUR"];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
      <img
        src={logo}
        alt="TitanNodes"
        className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-md bg-black object-cover border border-zinc-800 transition group-hover:border-zinc-700"
      />
      <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
        Titan<span className="text-zinc-400 group-hover:text-white transition-colors">Nodes</span>
      </span>
    </Link>
  );
}

function NavCurrencySelector({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const { currency, setCurrency, symbol } = useCurrency();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "inline-flex h-8 items-center gap-1.5 rounded-md border px-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200",
          isOpen
            ? "border-zinc-700 bg-white/[0.06] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            : "border-zinc-800 bg-[#0c0d10] text-zinc-300 hover:border-zinc-700 hover:text-white"
        )}
      >
        <span className="font-bold text-white">{symbol}</span>
        <span>{currency}</span>
        <ChevronDown className={cn("h-3 w-3 opacity-60 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-md border border-zinc-800 bg-[#090a0d] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.05] z-50 animate-in fade-in duration-150">
          <div className="space-y-0.5">
            {currencies.map(c => {
              const active = currency === c;
              return (
                <button
                  key={c}
                  onClick={() => { setCurrency(c); onClose(); }}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-sm px-2.5 py-1.5 text-xs transition-all duration-150",
                    active
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-sm border text-xs font-bold transition-all",
                      active
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-[#121316] border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700"
                    )}>
                      {currencySymbols[c]}
                    </span>
                    <span className="tracking-wider">{c}</span>
                  </div>
                  {active && (
                    <span className="w-1 h-3 rounded-none bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-lg border border-zinc-800 bg-[#090a0d] p-5 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.95)] animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pr-8">
          <img src={logo} alt="TitanNodes" className="h-10 w-10 rounded-md bg-black object-cover border border-zinc-800 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              TitanNodes Portal
            </h3>
            <p className="text-xs text-zinc-400">Account &amp; Game Server Management</p>
          </div>
        </div>

        <div className="space-y-4">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#5865F2] py-3 px-4 text-sm font-bold text-white transition hover:bg-[#4752C4] shadow-lg shadow-[#5865F2]/25"
          >
            <DiscordIcon className="h-5 w-5" />
            Continue with Discord
          </a>

          <div className="relative flex items-center justify-center py-2">
            <span className="absolute inset-x-0 h-px bg-zinc-800" />
            <span className="relative bg-[#090a0d] px-3 text-xs uppercase tracking-wider text-zinc-500 font-semibold">Instant Client Support</span>
          </div>

          <p className="text-xs text-center text-zinc-400 leading-relaxed">
            All game servers, VPS deployments, and active customer orders are synchronized through our 24/7 Discord support portal.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 bg-[#121316] py-2.5 text-xs font-semibold text-white hover:border-zinc-700 transition"
          >
            Open Ticket on Discord <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { currency, setCurrency, symbol } = useCurrency();
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Click outside to close any open desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setLoginModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (p: string) => location.pathname === p;
  const closeMobile = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };
  const handleMobileLink = (href: string) => {
    closeMobile();
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      navigate({ to: href });
    }
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown(prev => (prev === id ? null : id));
  };

  return (
    <>
      {/* High-volume Solid Black Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#050608]/98 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_45px_rgba(0,0,0,0.95)]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Brand onClick={closeMobile} />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Games - Direct Link */}
              <Link
                to="/game-hosting"
                className={cn(
                  "px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 bg-transparent",
                  isActive("/game-hosting")
                    ? "text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.75)]"
                    : "text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                )}
              >
                Games
              </Link>

              {menuGroups.map(menu => {
                const isOpen = openDropdown === menu.id;
                const isGroupActive = menu.links.some(l => isActive(l.to));

                return (
                  <div key={menu.id} className="relative">
                    <button
                      onClick={() => toggleDropdown(menu.id)}
                      onMouseEnter={() => {
                        if (openDropdown !== null && openDropdown !== "mobile-currency") setOpenDropdown(menu.id);
                      }}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 bg-transparent border-0 outline-none cursor-pointer",
                        isOpen
                          ? "text-white font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.85)]"
                          : isGroupActive
                          ? "text-white font-semibold"
                          : "text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      )}
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-all duration-200",
                          isOpen ? "rotate-180 text-white" : "text-zinc-500 opacity-70 group-hover:text-zinc-300"
                        )}
                      />
                    </button>

                    {/* Rectangular Dark Dropdown Card */}
                    {isOpen && (
                      <div
                        className={cn(
                          "absolute top-full mt-3 overflow-hidden rounded-md border border-zinc-800 bg-[#090a0d] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.05] z-50 animate-in fade-in duration-150",
                          menu.id === "legal"
                            ? "right-0"
                            : menu.id === "company"
                            ? "left-1/2 -translate-x-1/2"
                            : "left-0",
                          menu.width || "w-80"
                        )}
                      >
                        <div className="space-y-0.5">
                          {menu.links.map(link => {
                            const active = isActive(link.to);

                            if (link.isExternal) {
                              return (
                                <a
                                  key={link.label}
                                  href={link.to}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => setOpenDropdown(null)}
                                  className="group flex items-center justify-between rounded-sm px-3 py-2.5 text-sm transition-all duration-150 text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                                >
                                  <div className="flex items-center gap-3.5 min-w-0">
                                    {link.image ? (
                                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#121316] border border-zinc-800 p-1 group-hover:bg-[#1a1c22] group-hover:border-zinc-700 transition-all duration-150 shadow-sm">
                                        <img src={link.image} alt="" className="h-5 w-auto max-w-[36px] object-contain drop-shadow-[0_0_8px_rgba(0,176,255,0.4)]" />
                                      </span>
                                    ) : link.icon ? (
                                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#121316] border border-zinc-800 text-zinc-400 group-hover:bg-[#1a1c22] group-hover:border-zinc-700 group-hover:text-white transition-all duration-150 shadow-sm">
                                        <link.icon className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
                                      </span>
                                    ) : null}
                                    <div className="min-w-0">
                                      <div className="font-bold text-sm text-zinc-100 group-hover:text-white transition-colors flex items-center gap-2">
                                        {link.label}
                                      </div>
                                      {link.description && (
                                        <p className="text-xs text-zinc-400 group-hover:text-zinc-300 mt-0.5 font-normal truncate">
                                          {link.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpenDropdown(null)}
                                className={cn(
                                  "group flex items-center justify-between rounded-sm px-3 py-2.5 text-sm transition-all duration-150",
                                  active
                                    ? "bg-white/[0.08] text-white"
                                    : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                                )}
                              >
                                <div className="flex items-center gap-3.5 min-w-0">
                                  {link.image ? (
                                    <span className={cn(
                                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border p-1 transition-all duration-150 shadow-sm",
                                      active
                                        ? "bg-zinc-800 border-zinc-600"
                                        : "bg-[#121316] border-zinc-800 group-hover:bg-[#1a1c22] group-hover:border-zinc-700"
                                    )}>
                                      <img src={link.image} alt="" className="h-5 w-auto max-w-[36px] object-contain drop-shadow-[0_0_8px_rgba(0,176,255,0.4)]" />
                                    </span>
                                  ) : link.icon ? (
                                    <span className={cn(
                                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-all duration-150 shadow-sm",
                                      active
                                        ? "bg-zinc-800 border-zinc-600 text-white"
                                        : "bg-[#121316] border-zinc-800 text-zinc-400 group-hover:bg-[#1a1c22] group-hover:border-zinc-700 group-hover:text-white"
                                    )}>
                                      <link.icon className={cn("h-6 w-6 transition-colors", active ? "text-white" : "text-zinc-400 group-hover:text-white")} />
                                    </span>
                                  ) : null}
                                  <div className="min-w-0">
                                    <div className="font-bold text-sm text-zinc-100 group-hover:text-white transition-colors flex items-center gap-2">
                                      {link.label}
                                      {link.badge && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-zinc-800 text-zinc-300 border border-zinc-700/60 uppercase tracking-wider">
                                          {link.badge}
                                        </span>
                                      )}
                                    </div>
                                    {link.description && (
                                      <p className="text-xs text-zinc-400 group-hover:text-zinc-300 mt-0.5 font-normal truncate">
                                        {link.description}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                {active ? (
                                  <span className="w-1 h-4 rounded-none bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] shrink-0 ml-2" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Currency Selector */}
              <div className="ml-1">
                <NavCurrencySelector
                  isOpen={openDropdown === "currency"}
                  onToggle={() => setOpenDropdown(prev => prev === "currency" ? null : "currency")}
                  onClose={() => setOpenDropdown(null)}
                />
              </div>
            </div>

            {/* Desktop Right Side Buttons: Discord + Login */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-2 rounded-md border border-zinc-800 bg-[#111215] px-3.5 text-xs font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white transition-all duration-200 uppercase tracking-[0.1em]"
              >
                <DiscordIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Discord</span>
              </a>

              <button
                onClick={() => setLoginModalOpen(true)}
                className="h-8 px-5 rounded-md bg-white text-black text-xs uppercase tracking-[0.12em] font-extrabold hover:bg-zinc-200 transition-all duration-200"
              >
                Login
              </button>
            </div>

            {/* Mobile Header Controls: Currency Selector + Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <NavCurrencySelector
                isOpen={openDropdown === "mobile-currency"}
                onToggle={() => setOpenDropdown(prev => prev === "mobile-currency" ? null : "mobile-currency")}
                onClose={() => setOpenDropdown(null)}
              />

              <button
                onClick={() => {
                  setOpenDropdown(null);
                  setMobileMenuOpen(v => !v);
                }}
                className={cn(
                  "flex items-center justify-center h-8 w-8 rounded-md border transition-all duration-200 active:scale-95",
                  mobileMenuOpen
                    ? "bg-white text-black border-white shadow-sm"
                    : "border-zinc-800 bg-[#0c0d10] text-zinc-300 hover:text-white hover:border-zinc-700"
                )}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-4.5 h-4.5 text-black" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to give proper height below fixed navbar */}
      <div className="h-16 lg:h-20" aria-hidden />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#050608] flex flex-col h-[100dvh] overscroll-contain animate-in fade-in duration-150">
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-white/[0.08] shrink-0 bg-[#050608]">
            <Brand onClick={closeMobile} />
            <button
              onClick={closeMobile}
              className="flex items-center justify-center h-8.5 w-8.5 rounded-md border border-zinc-800 bg-[#0c0d10] text-zinc-300 hover:text-white active:scale-95 transition-all"
              aria-label="Close menu"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Mobile Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3.5 overscroll-contain">
            {/* Quick Currency Selector Segmented Switch */}
            <div className="rounded-lg border border-zinc-800/90 bg-[#090a0d] p-3 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Select Currency
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Active: {currencySymbols[currency]} {currency}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {currencies.map(c => {
                  const active = currency === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md border text-xs font-bold transition-all active:scale-95",
                        active
                          ? "bg-white border-white text-black shadow-sm"
                          : "bg-[#111215] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      )}
                    >
                      <span className={active ? "font-extrabold text-black" : "text-white"}>
                        {currencySymbols[c]}
                      </span>
                      <span>{c}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Game Hosting Hub Link */}
            <button
              type="button"
              onClick={() => handleMobileLink("/game-hosting")}
              className={cn(
                "w-full rounded-lg border p-3.5 flex items-center justify-between transition-all text-left group",
                isActive("/game-hosting")
                  ? "bg-white/10 border-white/30 text-white"
                  : "bg-[#090a0d] border-zinc-800/90 hover:border-zinc-700 active:bg-white/[0.04]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#121316] border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-700">
                  <Box className="w-5 h-5 text-white" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">All Game Servers</span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white text-black uppercase tracking-wider">
                      Browse
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 truncate">
                    Minecraft, Palworld, Rust, ARK &amp; more
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </button>

            {/* Accordion Categories */}
            {menuGroups.map(cat => {
              const isOpen = openDropdown === cat.id;
              const hasActiveChild = cat.links.some(l => isActive(l.to));

              return (
                <div
                  key={cat.id}
                  className={cn(
                    "rounded-lg border overflow-hidden transition-all duration-200",
                    isOpen
                      ? "border-zinc-700 bg-[#090a0d]"
                      : hasActiveChild
                      ? "border-zinc-700/80 bg-[#090a0d]"
                      : "border-zinc-800/90 bg-[#090a0d]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : cat.id)}
                    className="w-full p-3.5 flex items-center justify-between active:bg-white/[0.04] transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      {cat.icon && <cat.icon className="w-4 h-4 text-zinc-400" />}
                      <span className="text-sm font-bold text-white tracking-tight">
                        {cat.label}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {cat.links.length}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-zinc-500 transition-transform duration-200",
                        isOpen && "rotate-180 text-white"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-250 ease-in-out",
                      isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-2 pb-2.5 pt-0.5 space-y-1 border-t border-zinc-800/60">
                      {cat.links.map(link => {
                        const active = isActive(link.to);

                        if (link.isExternal) {
                          return (
                            <a
                              key={link.label}
                              href={link.to}
                              target="_blank"
                              rel="noreferrer"
                              onClick={closeMobile}
                              className="group flex items-center justify-between rounded-md p-2.5 text-sm transition-all text-zinc-300 hover:bg-white/[0.05] hover:text-white active:bg-white/[0.08]"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {link.image ? (
                                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#121316] border border-zinc-800 p-1 group-hover:bg-[#1a1c22] group-hover:border-zinc-700 transition-all shadow-sm">
                                    <img src={link.image} alt="" className="h-4.5 w-auto max-w-[32px] object-contain drop-shadow-[0_0_8px_rgba(0,176,255,0.4)]" />
                                  </span>
                                ) : link.icon ? (
                                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#121316] border border-zinc-800 text-zinc-400 group-hover:bg-[#1a1c22] group-hover:border-zinc-700 group-hover:text-white transition-all shadow-sm">
                                    <link.icon className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                                  </span>
                                ) : null}
                                <div className="min-w-0">
                                  <div className="font-bold text-sm text-zinc-100 group-hover:text-white flex items-center gap-2">
                                    <span>{link.label}</span>
                                  </div>
                                  {link.description && (
                                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 mt-0.5 truncate">
                                      {link.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                            </a>
                          );
                        }

                        return (
                          <button
                            key={link.label}
                            type="button"
                            onClick={() => handleMobileLink(link.to)}
                            className={cn(
                              "flex items-center justify-between w-full text-left p-2.5 text-sm transition-all rounded-md group active:scale-[0.99]",
                              active
                                ? "bg-white/[0.08] text-white border border-white/20"
                                : "text-zinc-300 hover:bg-white/[0.04] hover:text-white border border-transparent"
                            )}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {link.image ? (
                                <span
                                  className={cn(
                                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border p-1 transition-all shadow-sm",
                                    active
                                      ? "bg-zinc-800 border-zinc-600"
                                      : "bg-[#121316] border-zinc-800 group-hover:bg-[#1a1c22]"
                                  )}
                                >
                                  <img
                                    src={link.image}
                                    alt=""
                                    className="h-4.5 w-auto max-w-[32px] object-contain drop-shadow-[0_0_8px_rgba(0,176,255,0.4)]"
                                  />
                                </span>
                              ) : link.icon ? (
                                <span
                                  className={cn(
                                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all shadow-sm",
                                    active
                                      ? "bg-zinc-800 border-zinc-600 text-white"
                                      : "bg-[#121316] border-zinc-800 text-zinc-400 group-hover:bg-[#1a1c22] group-hover:text-white"
                                  )}
                                >
                                  <link.icon
                                    className={cn(
                                      "h-5 w-5 transition-colors",
                                      active ? "text-white" : "text-zinc-400 group-hover:text-white"
                                    )}
                                  />
                                </span>
                              ) : null}
                              <div className="min-w-0">
                                <div className="font-bold text-sm text-zinc-100 group-hover:text-white flex items-center gap-2">
                                  <span>{link.label}</span>
                                  {link.badge && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-zinc-800 text-zinc-300 border border-zinc-700/60 uppercase tracking-wider">
                                      {link.badge}
                                    </span>
                                  )}
                                </div>
                                {link.description && (
                                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300 mt-0.5 truncate">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            {active ? (
                              <span className="w-1.5 h-4 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)] ml-2 shrink-0" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all ml-2 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="border-t border-white/[0.08] p-4 sm:p-5 shrink-0 space-y-2 bg-[#050608] pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#5865F2]/25 active:scale-[0.98] transition-all"
              >
                <DiscordIcon className="w-4 h-4 shrink-0" />
                <span>Discord</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  setLoginModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider active:scale-[0.98] transition-all"
              >
                <span>Client Login</span>
              </button>
            </div>
            <p className="text-center text-[10px] text-zinc-500 font-mono">
              24/7 Dedicated Support • Automated Instant Setup
            </p>
          </div>
        </div>
      )}

      {/* Login / Portal Dialog */}
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
}
