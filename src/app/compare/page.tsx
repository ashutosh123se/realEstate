"use client";

import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { properties } from "@/lib/data/mock-data";
import { formatPrice, formatArea } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { NAV_OFFSET } from "@/lib/layout/constants";

const compareProperties = properties.slice(0, 3);

const rows = [
  { label: "Price", get: (p: typeof properties[0]) => formatPrice(p.price) },
  { label: "Price/sqft", get: (p: typeof properties[0]) => p.pricePerSqft ? formatPrice(p.pricePerSqft) : "—" },
  { label: "Area", get: (p: typeof properties[0]) => formatArea(p.areaSqft) },
  { label: "BHK", get: (p: typeof properties[0]) => p.bedrooms ? `${p.bedrooms} BHK` : "—" },
  { label: "Floor", get: (p: typeof properties[0]) => p.floor ? `${p.floor}/${p.totalFloors}` : "—" },
  { label: "Year Built", get: (p: typeof properties[0]) => p.yearBuilt?.toString() ?? "—" },
  { label: "Furnishing", get: (p: typeof properties[0]) => p.furnishing ?? "—" },
  { label: "Yield", get: (p: typeof properties[0]) => p.yieldPercent ? `${p.yieldPercent}%` : "—" },
  { label: "Pool", get: (p: typeof properties[0]) => p.amenities.includes("Pool") || p.amenities.includes("Private Pool") },
  { label: "Smart Home", get: (p: typeof properties[0]) => p.amenities.includes("Smart Home") },
  { label: "Verified", get: (p: typeof properties[0]) => p.isVerified },
];

export default function ComparePage() {
  return (
    <div style={{ paddingTop: NAV_OFFSET }} className="min-h-screen bg-void">
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <SectionHeading
            label="Analysis"
            title="Compare Properties"
            description="Side-by-side analysis — up to 4 properties"
          />

          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="w-40 p-4 text-left text-xs text-smoke uppercase tracking-wider align-bottom" />
                  {compareProperties.map((p) => (
                    <th key={p.id} className="p-4 text-left min-w-[220px] align-bottom">
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                        <Image src={p.images[0]} alt={p.title} fill className="object-cover" sizes="220px" />
                      </div>
                      <Link href={`/property/${p.slug}`} className="font-display text-lg text-white hover:text-gold-warm line-clamp-2">
                        {p.title}
                      </Link>
                      <p className="text-xs text-ash mt-1">{p.location.locality}, {p.location.city}</p>
                    </th>
                  ))}
                  <th className="p-4 min-w-[180px] align-bottom">
                    <button type="button" className="w-full h-32 border-2 border-dashed border-iron rounded-lg text-ash hover:border-gold-true hover:text-gold-warm transition-colors text-sm">
                      + Add Property
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-iron">
                    <td className="p-4 text-sm text-ash font-medium">{row.label}</td>
                    {compareProperties.map((p) => {
                      const val = row.get(p);
                      return (
                        <td key={p.id} className="p-4 text-sm align-middle">
                          {typeof val === "boolean" ? (
                            val ? <Check className="w-5 h-5 text-success" /> : <X className="w-5 h-5 text-smoke" />
                          ) : (
                            <span className="text-pearl font-mono">{val}</span>
                          )}
                        </td>
                      );
                    })}
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="button" className="btn-secondary">Export as PDF</button>
            <button type="button" className="btn-ghost">Share Comparison</button>
          </div>
        </div>
      </PageContent>
    </div>
  );
}
