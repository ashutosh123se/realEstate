"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cities } from "@/lib/data/mock-data";
import { formatPrice } from "@/lib/utils";
import type { City } from "@/types";

const FALLBACK_CITY_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80";

function CityCard({ city, index }: { city: City; index: number }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = imgError ? FALLBACK_CITY_IMAGE : city.image;

  return (
    <Reveal delay={index * 0.05} className="shrink-0 w-64">
      <Link href={`/properties?city=${city.name.toLowerCase()}`} className="block group">
        <div className="relative h-40 rounded-lg overflow-hidden mb-4 bg-slate">
          <Image
            src={imageSrc}
            alt={city.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="256px"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 gradient-card-overlay" />
        </div>
        <h3 className="font-display text-lg text-white mb-1">{city.name}</h3>
        <p className="text-xs text-smoke mb-3">{city.country}</p>
        <div className="flex justify-between gap-3 text-xs">
          <span className="text-ash">{city.propertyCount} properties</span>
          <span className="text-gold-warm font-mono shrink-0">Avg {formatPrice(city.avgPrice)}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export function CitiesSection() {
  return (
    <Section bg="obsidian" className="!pt-0 !pb-0">
      <Container>
        <SectionHeading label="Global Presence" title="Featured Cities" className="mb-10 md:mb-12" />

        <div className="relative h-64 md:h-80 card-panel mb-10 md:mb-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full opacity-40">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="absolute w-3 h-3 rounded-full bg-gold-true shadow-glow animate-pulse"
                  style={{
                    left: `${((city.lng + 180) / 360) * 100}%`,
                    top: `${((90 - city.lat) / 180) * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
          <p className="absolute bottom-4 left-4 text-xs text-smoke font-mono">
            Interactive map — Mapbox integration ready
          </p>
        </div>

        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-14 md:pb-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cities.map((city, i) => (
            <CityCard key={city.id} city={city} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
