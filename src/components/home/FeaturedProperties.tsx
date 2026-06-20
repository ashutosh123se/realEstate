"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { getFeaturedProperties } from "@/lib/data/mock-data";

const filters = ["All", "This Week", "Under 2Cr", "New Construction", "Resale"];

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const properties = getFeaturedProperties();

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -396 : 396, behavior: "smooth" });
    }
  };

  return (
    <Section bg="obsidian" className="!pb-0">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <SectionHeading
            label="Featured Listings"
            title="Exceptional Properties"
            className="mb-0"
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                type="button"
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-all ${
                  i === 0
                    ? "border-gold-true text-gold-warm bg-gold-alpha10"
                    : "border-iron text-ash hover:border-gold-alpha40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="relative px-2 md:px-4 pb-12 md:pb-16">
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-10 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {properties.map((property) => (
              <div
                key={property.id}
                className="snap-start shrink-0 w-[340px] sm:w-[360px]"
              >
                <PropertyCard property={property} variant="carousel" className="h-full" />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-[130px] -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-graphite border border-iron flex items-center justify-center text-pearl hover:border-gold-true hover:text-gold-warm transition-all hidden md:flex shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-[130px] translate-x-1/2 z-10 w-11 h-11 rounded-full bg-graphite border border-iron flex items-center justify-center text-pearl hover:border-gold-true hover:text-gold-warm transition-all hidden md:flex shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
