"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";

const tabs = ["BUY", "RENT", "SELL", "COMMERCIAL", "INVESTMENT"] as const;
const propertyTypes = ["Villa", "Apartment", "Penthouse", "Townhouse", "Plot", "Commercial"];
const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];
const quickFilters = ["Waterfront", "Golf Course", "Smart Home", "Pet-Friendly", "Investment Grade"];

export function SearchPanel() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("BUY");
  const [selectedBedrooms, setSelectedBedrooms] = useState<string[]>([]);
  const [budget, setBudget] = useState(50000000);

  const formatBudget = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    return `₹${(val / 100000).toFixed(0)} L`;
  };

  return (
    <section className="relative -mt-16 md:-mt-20 z-20 pb-4">
      <Container size="form" className="!max-w-4xl">
        <div className="glass-panel rounded-xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-wrap gap-1 mb-8 border-b border-iron pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  activeTab === tab
                    ? "text-gold-warm border-b-2 border-gold-true -mb-[17px] pb-[15px]"
                    : "text-ash hover:text-pearl"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="input-label">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-smoke" />
                <input type="text" placeholder="City, locality, or landmark" className="input-field pl-11" />
              </div>
            </div>
            <div>
              <label className="input-label">Property Type</label>
              <select className="input-field appearance-none cursor-pointer">
                <option value="">All Types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="input-label">Budget — {formatBudget(budget)}</label>
              <input
                type="range"
                min={1000000}
                max={500000000}
                step={1000000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate rounded-full appearance-none cursor-pointer accent-gold-true mt-4"
              />
            </div>
            <div>
              <label className="input-label">Bedrooms</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {bedroomOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() =>
                      setSelectedBedrooms((prev) =>
                        prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
                      )
                    }
                    className={`px-3 py-2 text-xs rounded-md border transition-all ${
                      selectedBedrooms.includes(b)
                        ? "border-gold-true bg-gold-alpha10 text-gold-warm"
                        : "border-iron text-ash hover:border-gold-alpha40"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link href="/properties" className="btn-primary w-full flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Search Now
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-smoke">Or browse by</span>
            {quickFilters.map((f) => (
              <Link
                key={f}
                href={`/properties?filter=${f.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-1 text-xs text-ash border border-iron rounded-full hover:border-gold-true hover:text-gold-warm transition-all"
              >
                {f}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
