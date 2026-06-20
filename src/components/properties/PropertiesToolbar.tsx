"use client";

import { Grid3X3, List, Map } from "lucide-react";
import { useState } from "react";

export function PropertiesToolbar({ count }: { count: number }) {
  const [view, setView] = useState<"grid" | "list" | "map">("grid");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-iron">
      <p className="text-pearl">
        <span className="font-mono text-gold-warm">{count.toLocaleString()}</span>
        <span className="text-ash ml-2">Properties Found</span>
      </p>
      <div className="flex items-center gap-4">
        <div className="flex border border-iron rounded-md overflow-hidden">
          {([
            { id: "grid" as const, icon: Grid3X3 },
            { id: "list" as const, icon: List },
            { id: "map" as const, icon: Map },
          ]).map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={`p-2.5 transition-colors ${view === id ? "bg-gold-alpha10 text-gold-warm" : "text-ash hover:text-pearl"}`}
              aria-label={`${id} view`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        <select className="input-field !h-10 !w-auto text-sm">
          <option>Newest</option>
          <option>Price ↑</option>
          <option>Price ↓</option>
          <option>Most Popular</option>
          <option>Highest Yield</option>
        </select>
        <button className="btn-secondary !py-2 !px-4 text-[10px]">Save Search</button>
      </div>
    </div>
  );
}
