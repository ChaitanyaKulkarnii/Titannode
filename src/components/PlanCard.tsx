import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import abstractTexture from "@/assets/textures/abstract-card-bg.jpg";

export interface PlanSpec {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface PlanCardData {
  name: string;
  subtitle: string;
  price: number;          // USD
  image?: string;         // square icon (e.g. minecraft block)
  topBannerLogo?: string; // logo image banner displayed at top of card
  iconNode?: React.ReactNode;
  popular?: boolean;
  specs: PlanSpec[];      // 4 specs (label/value)
  features: string[];
  orderLink?: string;
}

export function PlanCard({ plan }: { plan: PlanCardData }) {
  const { format } = useCurrency();
  return (
    <div
      className={`group relative flex flex-col rounded-none p-5 sm:p-5.5 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        plan.popular
          ? "border border-[#00b0ff]/70 bg-[#090d16] shadow-[0_0_35px_-5px_rgba(0,176,255,0.25)]"
          : "border border-transparent bg-[#080c14] hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.85)]"
      }`}
    >
      {/* Abstract Texture Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#070b12]">
        <img
          src={abstractTexture}
          alt=""
          className={`h-full w-full object-cover opacity-50 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-70 ${
            plan.name === "Stone"
              ? "object-[center_15%]"
              : plan.name === "Coal"
              ? "object-[center_45%] -scale-x-100"
              : plan.name === "Iron"
              ? "object-[center_75%]"
              : "object-[center_90%] -scale-x-100"
          }`}
        />
        {/* Soft vignette gradient for clean text readability while keeping abstract texture rich */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b12]/60 via-[#070b12]/30 to-[#070b12]/85" />
      </div>

      {/* Sleek Minimalist Top Accent Highlight - only for popular */}
      {plan.popular && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-[#00b0ff] to-transparent" />
      )}

      {/* Most Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 z-20 rounded-none bg-[#039be5] px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-white shadow-md">
          Most Popular
        </div>
      )}

      {/* Top Banner Logo if specified */}
      {plan.topBannerLogo && (
        <div className="relative z-10 -mx-5 sm:-mx-5.5 -mt-5 sm:-mt-5.5 mb-4 flex h-16 items-center justify-center border-b border-white/10 bg-[#060a12]/95 px-4 py-2.5 backdrop-blur-md">
          <img
            src={plan.topBannerLogo}
            alt="Palworld"
            className="h-10 sm:h-11 w-auto max-w-[90%] object-contain drop-shadow-[0_2px_12px_rgba(0,176,255,0.4)]"
          />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 mb-4 flex items-center gap-3">
        {plan.image ? (
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-white/10 bg-white/[0.03] p-1 shadow-inner backdrop-blur-md transition-colors duration-300 group-hover:border-white/20">
            <img
              src={plan.image}
              alt=""
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-white/10 bg-white/5 shadow-inner">
            {plan.iconNode}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="truncate text-xl font-extrabold tracking-tight text-white leading-tight">{plan.name}</h3>
          <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{plan.subtitle}</p>
        </div>
      </div>

      {/* Price */}
      <div className="relative z-10 mb-4 flex items-baseline gap-1.5">
        <span className="text-3xl font-extrabold tracking-tight text-[#00b0ff] drop-shadow-[0_2px_8px_rgba(0,176,255,0.25)]">
          {format(plan.price)}
        </span>
        <span className="text-xs font-medium text-muted-foreground">/month</span>
      </div>

      {/* Specs Grid with Clean Rectangular Micro-Panels */}
      <div className="relative z-10 mb-4 grid grid-cols-2 gap-2">
        {plan.specs.map((s) => (
          <div
            key={s.label}
            className="flex items-start gap-2 rounded-none border border-white/[0.07] bg-black/40 px-2 py-1.5 backdrop-blur-sm transition duration-200 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <s.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00b0ff]" />
            <span className="font-medium leading-snug text-foreground/90 text-[11px]">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Hairline Divider */}
      <div className="relative z-10 my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Features List */}
      <div className="relative z-10 mb-5 space-y-2 px-0.5">
        {plan.features.map((f) => (
          <div key={f} className="flex items-center gap-2.5 text-xs text-foreground/90">
            <Check className="h-3.5 w-3.5 shrink-0 text-[#00b0ff]" strokeWidth={2.5} />
            <span>{f}</span>
          </div>
        ))}
      </div>

      {/* Clicky 3D Tactile Rectangle CTA Button */}
      <div className="relative z-10 mt-auto pt-1">
        <a
          href={plan.orderLink || "https://discord.gg/8hxmzySAsT"}
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex w-full cursor-pointer items-center justify-center rounded-none border border-[#0288d1] border-b-[4px] border-b-[#01579b] bg-[#0288d1] py-2.5 px-4 text-xs font-black uppercase tracking-wider text-white shadow-[0_3px_12px_rgba(2,136,209,0.3)] transition-all duration-100 hover:bg-[#00b0ff] hover:border-b-[#0277bd] hover:shadow-[0_4px_18px_rgba(0,176,255,0.45)] hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[2px] active:border-b-[#01579b] active:shadow-none active:brightness-90 select-none"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
