"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { getFeaturedProperties, properties } from "@/lib/data/mock-data";
import type { Property } from "@/types";
import { cn } from "@/lib/utils";

type FilterId = "all" | "this-week" | "under-2cr" | "new-construction" | "resale";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "this-week", label: "This Week" },
  { id: "under-2cr", label: "Under 2Cr" },
  { id: "new-construction", label: "New Construction" },
  { id: "resale", label: "Resale" },
];

const TWO_CRORE = 20_000_000;

function applyFilter(list: Property[], filter: FilterId): Property[] {
  switch (filter) {
    case "all":
      return list.filter((p) => p.isFeatured);
    case "this-week":
      return list.filter((p) => (p.lastViewed ?? 0) >= 40);
    case "under-2cr":
      return list.filter((p) => p.price < TWO_CRORE);
    case "new-construction":
      return list.filter((p) => p.status === "NEW_LAUNCH" || (p.yearBuilt ?? 0) >= 2023);
    case "resale":
      return list.filter((p) => p.status !== "NEW_LAUNCH" && (p.yearBuilt ?? 0) < 2023);
    default:
      return list;
  }
}

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProperties = useMemo(() => {
    const pool = activeFilter === "all" ? getFeaturedProperties() : properties;
    return applyFilter(pool, activeFilter);
  }, [activeFilter]);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -396 : 396, behavior: "smooth" });
    }
  };

  const handleFilterChange = (id: FilterId) => {
    setActiveFilter(id);
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <Section bg="obsidian" className="!pt-0 !pb-0">
      <Container>
        <div className="border-t border-iron/40 pt-14 md:pt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 mb-12 md:mb-14">
            <SectionHeading
              label="Featured Listings"
              title="Exceptional Properties"
              description="Curated residences hand-selected for architecture, location, and investment potential."
              className="mb-0 max-w-xl"
            />
            <div className="flex flex-wrap gap-2.5 lg:shrink-0 lg:pb-1" role="group" aria-label="Filter properties">
              {filters.map(({ id, label }) => {
                const isActive = activeFilter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(id)}
                    className={cn(
                      "px-4 py-2.5 text-xs uppercase tracking-wider rounded-full border transition-all",
                      isActive
                        ? "border-gold-true text-gold-warm bg-gold-alpha10"
                        : "border-iron text-ash hover:border-gold-alpha40 hover:text-pearl"
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative px-2 md:px-4 pb-14 md:pb-20">
            {filteredProperties.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-iron/80 bg-graphite/30 px-6 py-16 text-center">
                <p className="font-display text-xl text-white mb-2">No properties match this filter</p>
                <p className="text-sm text-ash mb-6 max-w-md">
                  Try a different category or view all featured listings.
                </p>
                <button
                  type="button"
                  onClick={() => handleFilterChange("all")}
                  className="btn-secondary !min-h-0 !h-10 !py-0 !px-5 !text-[11px]"
                >
                  View All
                </button>
              </div>
            ) : (
              <>
                <div
                  ref={scrollRef}
                  className="flex gap-8 md:gap-10 overflow-x-auto pt-2 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {filteredProperties.map((property) => (
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
                  className="absolute left-0 top-[138px] -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-graphite border border-iron flex items-center justify-center text-pearl hover:border-gold-true hover:text-gold-warm transition-all hidden md:flex shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-[138px] translate-x-1/2 z-10 w-11 h-11 rounded-full bg-graphite border border-iron flex items-center justify-center text-pearl hover:border-gold-true hover:text-gold-warm transition-all hidden md:flex shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
