"use client";

import type { LucideIcon } from "lucide-react";
import { Brain, Shield, Box, Receipt, Globe, FileCheck, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Feature = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
};

const features: Feature[] = [
  { num: "01", icon: Brain, title: "AI-Powered Property Matching", desc: "Our intelligent engine learns your preferences and surfaces properties you'll love.", accent: "from-gold-true/20 via-transparent to-transparent" },
  { num: "02", icon: Shield, title: "Certified Luxury Agents Network", desc: "Every agent is vetted, RERA-certified, and trained in white-glove service.", accent: "from-transparent via-gold-true/10 to-transparent" },
  { num: "03", icon: Box, title: "Virtual 3D Property Tours", desc: "Explore every corner from anywhere with immersive Matterport walkthroughs.", accent: "from-transparent to-gold-true/15" },
  { num: "04", icon: Receipt, title: "Zero Hidden Charges Policy", desc: "Complete transparency on fees, commissions, and closing costs upfront.", accent: "from-gold-true/15 via-transparent to-transparent" },
  { num: "05", icon: Globe, title: "Global Investor Network", desc: "Connect with verified buyers and investors across 40+ countries.", accent: "from-transparent via-gold-true/12 to-gold-true/5" },
  { num: "06", icon: FileCheck, title: "End-to-End Transaction Support", desc: "From inquiry to registration — legal, finance, and documentation handled.", accent: "from-gold-true/25 via-gold-true/5 to-transparent" },
];

/** Stagger offsets on mobile/tablet columns only */
const mobileOffsets = [
  "",
  "sm:translate-y-4",
  "",
  "sm:translate-y-6",
  "sm:translate-y-2",
  "",
];

function PillarCard({
  feature,
  index,
  variant = "default",
  stagger = false,
}: {
  feature: Feature;
  index: number;
  variant?: "default" | "hero" | "banner";
  stagger?: boolean;
}) {
  const Icon = feature.icon;
  const isHero = variant === "hero";
  const isBanner = variant === "banner";

  return (
    <Reveal delay={index * 0.07} className={cn("h-full", stagger && mobileOffsets[index])}>
      <article
        className={cn(
          "pillar-card group relative h-full overflow-hidden rounded-xl border border-iron/80",
          "bg-graphite/60 backdrop-blur-sm transition-all duration-500",
          "hover:border-gold-true/50 hover:shadow-gold hover:-translate-y-1",
          isHero && "min-h-[380px] lg:min-h-full",
          isBanner && "min-h-[220px]",
          !isHero && !isBanner && "min-h-[280px]"
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            feature.accent
          )}
        />

        {/* Ghost numeral */}
        <span
          className={cn(
            "pointer-events-none absolute -right-2 -top-4 font-display font-light leading-none text-gold-true/[0.07] transition-all duration-500 group-hover:text-gold-true/[0.12]",
            isHero ? "text-[8rem] md:text-[10rem]" : isBanner ? "text-[6rem]" : "text-[5.5rem] md:text-[6.5rem]"
          )}
          aria-hidden
        >
          {feature.num}
        </span>

        {/* Corner brackets */}
        <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-gold-true/0 transition-all duration-500 group-hover:border-gold-true/60" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-gold-true/0 transition-all duration-500 group-hover:border-gold-true/60" />

        <div
          className={cn(
            "relative flex h-full flex-col p-7 md:p-8",
            isHero && "md:p-10 lg:justify-between"
          )}
        >
          <div className="mb-auto flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-gold-warm">
                {feature.num}
              </span>
              <span className="hidden h-px w-8 bg-gold-true/40 sm:block" />
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-true/25 bg-void/40 transition-all duration-500 group-hover:border-gold-true/60 group-hover:bg-gold-alpha10 group-hover:shadow-glow">
              <Icon className="h-[18px] w-[18px] text-gold-warm" strokeWidth={1.5} />
            </span>
          </div>

          <div className={cn("mt-8", isHero && "lg:mt-0 lg:max-w-md")}>
            <h3
              className={cn(
                "font-display leading-[1.15] text-white transition-colors duration-300 group-hover:text-gold-pale/90",
                isHero ? "text-2xl md:text-3xl lg:text-4xl mb-4" : isBanner ? "text-xl md:text-2xl mb-3" : "text-xl md:text-[1.35rem] mb-3"
              )}
            >
              {feature.title}
            </h3>
            <p
              className={cn(
                "leading-relaxed text-ash",
                isHero ? "text-base md:text-[1.05rem] max-w-sm" : "text-sm line-clamp-3"
              )}
            >
              {feature.desc}
            </p>
          </div>

          {isHero && (
            <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold-warm/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span>Explore the experience</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function WhyLuxeSection() {
  const [hero, ...rest] = features;
  const [b, c, d, e, banner] = rest;

  return (
    <Section bg="obsidian" className="relative overflow-hidden !pt-12 md:!pt-16 !pb-0">
      {/* Background architecture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold-true/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,154,40,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,40,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <Container className="relative">
        {/* Editorial header */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="section-label mb-4">Why LUXE REALTY</p>
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-5xl lg:text-[3.25rem]">
              The Standard
              <span className="block italic text-gold-warm">of Excellence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end lg:col-span-7">
            <div className="flex items-start gap-6">
              <span className="mt-2 hidden h-px w-16 shrink-0 bg-gradient-to-r from-gold-true to-transparent md:block" />
              <div>
                <p className="max-w-xl text-base leading-relaxed text-mist md:text-lg">
                  Six pillars that define how we serve India&apos;s most discerning property buyers and investors —
                  engineered for precision, transparency, and white-glove care.
                </p>
                <p className="mt-4 font-mono text-xs tracking-widest text-smoke">
                  01 — 06 / PILLARS
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bento pillar gallery — desktop */}
        <div className="hidden pb-14 md:pb-20 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto_auto] lg:gap-5 xl:gap-6">
          {hero && (
            <div className="lg:col-span-5 lg:row-span-2">
              <PillarCard feature={hero} index={0} variant="hero" />
            </div>
          )}
          {b && (
            <div className="lg:col-span-4 lg:row-start-1">
              <PillarCard feature={b} index={1} />
            </div>
          )}
          {c && (
            <div className="lg:col-span-3 lg:row-start-1">
              <PillarCard feature={c} index={2} />
            </div>
          )}
          {d && (
            <div className="lg:col-span-4 lg:row-start-2">
              <PillarCard feature={d} index={3} />
            </div>
          )}
          {e && (
            <div className="lg:col-span-3 lg:row-start-2">
              <PillarCard feature={e} index={4} />
            </div>
          )}
          {banner && (
            <div className="lg:col-span-12 lg:row-start-3">
              <PillarCard feature={banner} index={5} variant="banner" />
            </div>
          )}
        </div>

        {/* Staggered columns — mobile & tablet */}
        <div className="grid grid-cols-1 gap-5 pb-14 sm:grid-cols-2 md:gap-6 md:pb-20 lg:hidden">
          {features.map((feature, i) => (
            <PillarCard
              key={feature.num}
              feature={feature}
              index={i}
              stagger
              variant={i === 0 ? "hero" : i === 5 ? "banner" : "default"}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
