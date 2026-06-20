import type { Metadata } from "next";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Container } from "@/components/layout/Container";
import { properties } from "@/lib/data/mock-data";
import { NAV_OFFSET } from "@/lib/layout/constants";

export const metadata: Metadata = {
  title: "Map Search",
  description: "Location-centric property discovery with interactive map search.",
};

export default function MapSearchPage() {
  return (
    <div className="flex flex-col lg:flex-row" style={{ minHeight: `calc(100dvh - ${NAV_OFFSET}px)`, paddingTop: NAV_OFFSET }}>
      <div className="flex-1 relative bg-graphite min-h-[50vh] lg:min-h-0">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <p className="font-display text-2xl text-pearl mb-2">Interactive Map Search</p>
            <p className="text-smoke text-sm leading-relaxed">Mapbox GL JS — dark theme, gold property pins, cluster aggregation, draw polygon, heatmap toggle</p>
          </div>
        </div>
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {["Price Density", "Metro Lines", "Schools", "Satellite", "3D Buildings"].map((l) => (
            <button key={l} type="button" className="px-3 py-1.5 text-xs bg-void/80 backdrop-blur border border-iron rounded text-ash hover:text-gold-warm">
              {l}
            </button>
          ))}
        </div>
      </div>
      <aside className="w-full lg:w-96 bg-obsidian border-t lg:border-t-0 lg:border-l border-iron overflow-y-auto max-h-[50vh] lg:max-h-none">
        <Container className="py-4 lg:!px-4">
          <h2 className="font-display text-lg text-white">Results</h2>
          <p className="text-xs text-smoke mb-4">{properties.length} properties in view</p>
          <div className="space-y-4">
            {properties.slice(0, 4).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </Container>
      </aside>
    </div>
  );
}
