"use client";

import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data/mock-data";
import { Heart, Bell, Calendar, FileText, Settings, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { NAV_OFFSET } from "@/lib/layout/constants";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "saved", label: "Saved", icon: Heart },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "visits", label: "Site Visits", icon: Calendar },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ paddingTop: NAV_OFFSET }} className="min-h-screen bg-void">
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2">Welcome back</h1>
            <p className="text-ash">Your personalized property management center</p>
            <div className="mt-4 h-2 bg-graphite rounded-full overflow-hidden max-w-md">
              <div className="h-full w-3/4 bg-gold-true rounded-full" />
            </div>
            <p className="text-xs text-smoke mt-1">Profile 75% complete</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Saved", count: 24, icon: Heart },
              { label: "Applications", count: 3, icon: FileText },
              { label: "Alerts", count: 7, icon: Bell },
              { label: "Tours", count: 2, icon: Calendar },
            ].map((s) => (
              <div key={s.label} className="card-panel p-6">
                <s.icon className="w-5 h-5 text-gold-warm mb-3" />
                <p className="font-display text-3xl md:text-4xl text-white">{s.count}</p>
                <p className="text-xs text-ash uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 border-b border-iron [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id ? "text-gold-warm border-b-2 border-gold-true" : "text-ash hover:text-pearl"
                }`}
              >
                <tab.icon className="w-4 h-4" /> {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <section className="page-block">
              <SectionHeading title="Recommended for You" />
              <div className="property-grid">
                {properties.slice(0, 3).map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </section>
          )}

          {activeTab === "saved" && (
            <div className="property-grid">
              {properties.slice(0, 4).map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-4">
              {["Luxe Sea View Penthouse — Inquiry Sent", "Bandra Waterfront Villa — Site Visit Scheduled", "Golf Course Penthouse — Under Negotiation"].map((app, i) => (
                <div key={i} className="card-panel p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-medium">{app.split(" — ")[0]}</p>
                    <p className="text-sm text-gold-warm mt-1">{app.split(" — ")[1]}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div key={step} className={`w-8 h-1 rounded ${step <= i + 2 ? "bg-gold-true" : "bg-iron"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PageContent>
    </div>
  );
}
