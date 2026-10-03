import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Building2,
  ShieldAlert,
  MessageSquare,
  Copy,
  Check,
  Send,
  Clock,
  Shield,
  Zap,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import contactElementalBg from "@/assets/textures/contact-elemental-bg.jpg";
import abstractCardBg from "@/assets/textures/abstract-card-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — TitanNodes" },
      {
        name: "description",
        content: "Get in touch with the TitanNodes team for 24/7 support, enterprise sales, or abuse reports.",
      },
    ],
  }),
  component: ContactPage,
});

const contactChannels = [
  {
    id: "support",
    title: "Technical Support",
    role: "Hardware & Server Operations",
    desc: "For server crashes, panel issues, network routing, or node maintenance.",
    contact: "support@titannodes.in",
    actionType: "email",
    tag: "< 15m Response",
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    icon: Mail,
  },
  {
    id: "sales",
    title: "Business & Sales",
    role: "Enterprise & Bulk Infrastructure",
    desc: "Custom dedicated node configs, enterprise SLAs, and volume discounts.",
    contact: "business@titannodes.in",
    actionType: "email",
    tag: "Custom Solutions",
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    icon: Building2,
  },
  {
    id: "security",
    title: "Abuse & Security",
    role: "SOC & Network Incident Response",
    desc: "Report network abuse, DMCA notices, phishing, or emergency security alerts.",
    contact: "abuse@titannodes.in",
    actionType: "email",
    tag: "Priority Escalation",
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    icon: ShieldAlert,
  },
  {
    id: "discord",
    title: "Discord Community",
    role: "24/7 Live Support & Community",
    desc: "Instant live chat with technicians, community builders, and node status bots.",
    contact: "https://discord.gg/8hxmzySAsT",
    actionType: "link",
    tag: "Instant Live Chat",
    tagColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    icon: MessageSquare,
  },
];

const faqs = [
  {
    q: "How fast will our technical team reply?",
    a: "Our technicians operate on 24/7 rotating shifts with an average first-response time under 15 minutes on both Discord tickets and support emails.",
  },
  {
    q: "Can I request custom hardware or IP subnets?",
    a: "Yes. Reach out to our Business & Sales desk (business@titannodes.in) with your memory, vCore, or custom BGP/IP announcement requirements.",
  },
  {
    q: "Where can I monitor live infrastructure health?",
    a: "Live node telemetry and scheduled maintenance announcements are broadcasted in our Discord server and system status channels.",
  },
];

function ContactPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    department: "Technical Support",
    priority: "Normal",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#06090f] text-foreground">
      <Navbar />

      {/* Hero with Elemental Energy Texture */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-20 lg:py-28">
        {/* Background Elemental Energy Wave */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={contactElementalBg}
            alt=""
            className="h-full w-full object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06090f]/70 via-[#06090f]/80 to-[#06090f]" />
        </div>

        {/* Ethereal Glow Highlights */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#00b0ff]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-none border border-[#00b0ff]/40 bg-[#00b0ff]/10 px-3.5 py-1 text-xs font-bold tracking-widest text-[#00b0ff] uppercase shadow-[0_0_15px_rgba(0,176,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b0ff] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00b0ff]" />
            </span>
            Direct Communications Gateway
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Get In Touch With <span className="text-[#00b0ff] drop-shadow-[0_2px_15px_rgba(0,176,255,0.3)]">TitanNodes</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Whether deploying high-compute nodes or needing rapid troubleshooting, our global engineering and support
            team is standing by 24/7/365.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center justify-center gap-2.5 rounded-none border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-[#00b0ff]" />
              <span className="text-xs font-semibold text-foreground/90">&lt; 15m Avg Reply</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-none border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-[#00b0ff]" />
              <span className="text-xs font-semibold text-foreground/90">24/7 Active Crew</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-none border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-[#00b0ff]" />
              <span className="text-xs font-semibold text-foreground/90">Enterprise SLA</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-none border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
              <MessageSquare className="h-4 w-4 text-[#00b0ff]" />
              <span className="text-xs font-semibold text-foreground/90">Discord Tickets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: 4 Specialized Channels */}
          <div className="space-y-4 lg:col-span-7">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#00b0ff]">Direct Channels</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Choose the right department
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactChannels.map((c) => {
                const IconComponent = c.icon;
                const isCopied = copiedId === c.id;

                return (
                  <div
                    key={c.id}
                    className="group relative flex flex-col justify-between rounded-none border border-white/[0.08] bg-[#0a0e17] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00b0ff]/40 hover:shadow-[0_12px_30px_-10px_rgba(0,176,255,0.15)] overflow-hidden"
                  >
                    {/* Top hairline highlight on hover */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00b0ff]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-none border border-white/[0.08] bg-white/[0.02] text-[#00b0ff] shadow-inner transition-colors duration-200 group-hover:border-[#00b0ff]/30 group-hover:bg-[#00b0ff]/5">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span
                          className={`rounded-none border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${c.tagColor}`}
                        >
                          {c.tag}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-white tracking-tight">{c.title}</h3>
                      <p className="text-xs font-semibold text-zinc-400 mt-0.5">{c.role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">{c.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06]">
                      {c.actionType === "email" ? (
                        <div className="flex items-center justify-between gap-2 rounded-none border border-white/[0.06] bg-black/40 px-3 py-2 transition hover:border-white/15">
                          <a
                            href={`mailto:${c.contact}`}
                            className="truncate text-xs font-semibold text-zinc-200 transition hover:text-[#00b0ff]"
                          >
                            {c.contact}
                          </a>
                          <button
                            onClick={() => handleCopy(c.id, c.contact)}
                            className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-none border border-white/10 bg-white/5 text-zinc-400 transition hover:border-[#00b0ff]/50 hover:bg-[#00b0ff]/10 hover:text-[#00b0ff]"
                            title="Copy email address"
                          >
                            {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                          </button>
                        </div>
                      ) : (
                        <a
                          href={c.contact}
                          target="_blank"
                          rel="noreferrer"
                          className="relative inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-none border border-[#0288d1] border-b-[4px] border-b-[#01579b] bg-[#0288d1] py-2.5 px-4 text-xs font-black uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(2,136,209,0.3)] transition-all duration-100 hover:bg-[#00b0ff] hover:border-b-[#0277bd] hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[2px] active:shadow-none"
                        >
                          <span>Open Discord Server</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Direct Dispatch Message Form */}
          <div className="lg:col-span-5">
            <div className="relative rounded-none border border-white/[0.08] bg-[#0a0e17] p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Glowing Top Hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00b0ff]/70 to-transparent" />

              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00b0ff]">Quick Dispatch</span>
                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">Send a Direct Message</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Fill out the form below to route your ticket immediately to the active shift engineer.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-none border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                      <Check className="h-7 w-7" strokeWidth={3} />
                    </div>
                    <h4 className="mt-4 text-xl font-bold text-white">Transmission Sent</h4>
                    <p className="mt-2 text-xs text-muted-foreground max-w-xs mx-auto">
                      Thank you! A copy of your inquiry has been queued for{" "}
                      <span className="text-white font-medium">{formState.department}</span>. Check your inbox for confirmation.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          department: "Technical Support",
                          priority: "Normal",
                          message: "",
                        });
                      }}
                      className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-none border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">Your Name / Organization</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Parker"
                        className="mt-1.5 w-full rounded-none border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 transition focus:border-[#00b0ff] focus:bg-black/70 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">Work or Contact Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="mt-1.5 w-full rounded-none border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 transition focus:border-[#00b0ff] focus:bg-black/70 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300">Department</label>
                        <select
                          value={formState.department}
                          onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                          className="mt-1.5 w-full rounded-none border border-white/10 bg-black/50 px-3 py-2.5 text-xs text-white transition focus:border-[#00b0ff] focus:outline-none"
                        >
                          <option value="Technical Support">Technical Support</option>
                          <option value="Enterprise Sales">Enterprise Sales</option>
                          <option value="Security & SOC">Security & SOC</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300">Priority Level</label>
                        <select
                          value={formState.priority}
                          onChange={(e) => setFormState({ ...formState, priority: e.target.value })}
                          className="mt-1.5 w-full rounded-none border border-white/10 bg-black/50 px-3 py-2.5 text-xs text-white transition focus:border-[#00b0ff] focus:outline-none"
                        >
                          <option value="Normal">Normal (&lt; 2h)</option>
                          <option value="High">High (&lt; 30m)</option>
                          <option value="Critical">Critical (&lt; 15m)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">Inquiry or Incident Details</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your server needs, issue specifics, or question..."
                        className="mt-1.5 w-full rounded-none border border-white/10 bg-black/50 p-3.5 text-xs text-white placeholder-zinc-500 transition focus:border-[#00b0ff] focus:bg-black/70 focus:outline-none"
                      />
                    </div>

                    {/* Clicky 3D Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="relative inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-none border border-[#0288d1] border-b-[5px] border-b-[#01579b] bg-[#0288d1] py-3.5 px-6 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(2,136,209,0.35)] transition-all duration-100 hover:bg-[#00b0ff] hover:border-b-[#0277bd] hover:-translate-y-0.5 active:translate-y-[3px] active:border-b-[2px] active:border-b-[#01579b] active:shadow-none active:brightness-90 select-none"
                      >
                        <Send className="h-4 w-4" />
                        <span>Dispatch Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Common Questions */}
        <div className="mt-20 border-t border-white/[0.08] pt-14">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b0ff]">Instant Answers</span>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="relative rounded-none border border-white/[0.08] bg-[#080d17]/80 p-6 backdrop-blur-md transition hover:border-[#00b0ff]/40"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-none border border-white/10 bg-white/5 text-[#00b0ff]">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{f.q}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
