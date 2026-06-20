import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Your Property",
  description: "Get the best price for your property with LUXE REALTY's white-glove selling service.",
};

const steps = [
  { num: "01", title: "Enter Property Details", desc: "Complete our 5-minute form with property specifics." },
  { num: "02", title: "Agent Connects Within 24 Hours", desc: "A certified luxury advisor reviews and contacts you." },
  { num: "03", title: "Property Listed & Sold", desc: "Professional photography, 3D tours, and global marketing." },
];

const benefits = [
  "94% properties sold within 60 days",
  "Zero listing fee",
  "Professional photography included",
  "3D tour creation",
  "12,000+ active buyers",
  "Legal documentation support",
];

export default function SellPage() {
  return (
    <>
      <PageHeader
        label="Sell With Us"
        title="Get the Best Price for Your Property — Guaranteed."
        description="Join 12,000+ homeowners who trusted LUXE REALTY"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="text-center">
            <button type="button" className="btn-primary">Get Free Valuation</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-6 md:p-8">
                <span className="font-display text-5xl text-gold-true/30">{s.num}</span>
                <h3 className="font-display text-xl text-white mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-xl p-6 md:p-8 max-w-2xl mx-auto w-full">
            <SectionHeading title="List Your Property" align="center" className="mb-8" />
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="input-label">Property Type</label>
                  <select className="input-field"><option>Villa</option><option>Apartment</option><option>Penthouse</option></select>
                </div>
                <div>
                  <label className="input-label">Location</label>
                  <input type="text" className="input-field" placeholder="City, locality" />
                </div>
                <div>
                  <label className="input-label">BHK</label>
                  <select className="input-field"><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option></select>
                </div>
                <div>
                  <label className="input-label">Area (sq.ft.)</label>
                  <input type="number" className="input-field" placeholder="2000" />
                </div>
                <div>
                  <label className="input-label">Asking Price</label>
                  <input type="text" className="input-field" placeholder="₹" />
                </div>
                <div>
                  <label className="input-label">Phone</label>
                  <input type="tel" className="input-field" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="input-label">Upload Photos (up to 30)</label>
                <div className="border-2 border-dashed border-iron rounded-lg p-12 text-center text-ash hover:border-gold-alpha40 transition-colors cursor-pointer text-sm">
                  Drag & drop photos here, or click to browse
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">Submit Property</button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 card-panel">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="text-sm text-mist">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </PageContent>
    </>
  );
}
