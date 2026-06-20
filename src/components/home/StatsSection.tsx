"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/data/mock-data";

type StatItem = {
  end: number;
  label: string;
  format: (value: number) => string;
};

const statItems: StatItem[] = [
  {
    end: stats.propertiesListed,
    label: "Properties Listed",
    format: (v) => `${v.toLocaleString("en-IN")}+`,
  },
  {
    end: 4200,
    label: "Properties Sold",
    format: (v) => `₹${v.toLocaleString("en-IN")} Cr+`,
  },
  {
    end: stats.yearsExcellence,
    label: "Years of Excellence",
    format: (v) => String(v),
  },
  {
    end: 97,
    label: "Client Satisfaction",
    format: (v) => `${v}.3%`,
  },
];

function AnimatedStat({ item }: { item: StatItem }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = item.end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= item.end) {
        setValue(item.end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, item.end]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-end text-center w-full">
      <div className="flex items-center justify-center min-h-[3.25rem] sm:min-h-[3.75rem] md:min-h-[4.25rem] w-full mb-3 px-1">
        <span className="font-display text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-none whitespace-nowrap tabular-nums tracking-tight">
          {item.format(isInView ? value : item.end)}
        </span>
      </div>
      <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-ash leading-snug max-w-[9rem] sm:max-w-none">
        {item.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <Section bg="obsidian" className="!pt-0 !pb-12 md:!pb-16">
      <Container>
        <div className="relative mt-10 md:mt-14 lg:mt-16 rounded-xl border border-iron/60 bg-obsidian/40 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #C49A28 0, #C49A28 1px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-iron/40">
            {statItems.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.08}
                className="flex items-stretch justify-center py-12 md:py-14 px-4 sm:px-6"
              >
                <AnimatedStat item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
