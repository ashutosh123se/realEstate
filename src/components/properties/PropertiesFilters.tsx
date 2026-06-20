"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const propertyTypes = ["Villa", "Apartment", "Penthouse", "Studio", "Duplex", "Farmhouse", "Plot", "Commercial"];
const amenities = ["Pool", "Gym", "Parking", "Garden", "Security", "Concierge", "Club House", "EV Charging"];

function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-iron py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-sm font-medium text-pearl uppercase tracking-wider"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function PropertiesFilters() {
  return (
    <div className="sticky top-24 glass-panel rounded-lg p-6">
      <h3 className="font-display text-xl text-white mb-6">Filters</h3>

      <FilterSection title="Location">
        <input type="text" placeholder="Search location..." className="input-field !h-10 text-sm" />
      </FilterSection>

      <FilterSection title="Property Type">
        <div className="space-y-2">
          {propertyTypes.map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-ash cursor-pointer hover:text-pearl">
              <input type="checkbox" className="accent-gold-true" />
              {t}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Budget">
        <input type="range" min={1000000} max={500000000} className="w-full accent-gold-true" />
        <div className="flex justify-between text-xs text-smoke mt-2">
          <span>₹10L</span>
          <span>₹50Cr+</span>
        </div>
      </FilterSection>

      <FilterSection title="Bedrooms">
        <div className="flex gap-2">
          {["1", "2", "3", "4", "5+"].map((b) => (
            <button key={b} className="w-10 h-10 border border-iron rounded-md text-sm text-ash hover:border-gold-true hover:text-gold-warm">
              {b}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Amenities" defaultOpen={false}>
        <div className="space-y-2">
          {amenities.map((a) => (
            <label key={a} className="flex items-center gap-2 text-sm text-ash cursor-pointer">
              <input type="checkbox" className="accent-gold-true" />
              {a}
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="btn-primary w-full mt-6">Apply Filters</button>
      <button className="btn-ghost w-full mt-3 text-center justify-center">Reset</button>
    </div>
  );
}
