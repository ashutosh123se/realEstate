import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Sparkles, Clock, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data/mock-data";

export const metadata: Metadata = {
  title: "Advanced Search",
  description: "AI-powered property search with natural language and map-first discovery.",
};

const recentSearches = [
  "3BHK sea-facing apartment in Mumbai under 3 crore",
  "Luxury villa in Bandra with pool",
  "Investment property Dubai 8% yield",
];

export default function SearchPage() {
  return (
    <>
      <PageHeader
        label="Intelligent Search"
        title="Describe Your Dream Home"
        description="Use natural language, voice search, or draw on the map to find exactly what you're looking for."
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <Container size="narrow" className="!px-0">
            <div className="relative">
              <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-warm" />
              <input
                type="text"
                placeholder="3BHK sea-facing apartment in Mumbai under 3 crore with swimming pool..."
                className="input-field pl-12 pr-14 h-14 md:h-16 text-base"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-ash hover:text-gold-warm" aria-label="Voice search">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-smoke mt-3 text-center">AI parses your query and applies filters automatically</p>
          </Container>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="glass-panel rounded-lg p-6">
              <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-warm" /> Recent Searches
              </h3>
              <ul className="space-y-3">
                {recentSearches.map((s) => (
                  <li key={s} className="flex items-center justify-between group gap-3">
                    <button type="button" className="text-sm text-ash hover:text-pearl text-left flex-1 leading-relaxed">{s}</button>
                    <Trash2 className="w-3.5 h-3.5 text-smoke opacity-0 group-hover:opacity-100 shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 h-72 md:h-80 card-panel flex items-center justify-center">
              <p className="text-smoke text-sm">Mapbox GL — Draw-to-search polygon tool</p>
            </div>
          </div>

          <section className="page-block">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <SectionHeading title="Matching Properties" className="mb-0" />
              <Link href="/compare" className="btn-secondary !py-2 !px-4 text-[10px] shrink-0">Compare Mode</Link>
            </div>
            <div className="property-grid">
              {properties.slice(0, 6).map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
