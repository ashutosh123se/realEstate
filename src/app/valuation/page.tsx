"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

export default function ValuationPage() {
  const [result, setResult] = useState<{ min: number; max: number; confidence: number } | null>(null);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult({ min: 85000000, max: 98000000, confidence: 87 });
  };

  return (
    <>
      <PageHeader
        label="Instant Valuation"
        title="Know Your Property's True Worth"
        description="AI-powered instant valuation backed by local transaction data and comparable sales."
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <Container size="form" className="!px-0">
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <SectionHeading title="Instant AI Valuation" align="center" className="mb-6" />
              <form onSubmit={handleEstimate} className="space-y-4">
                <div>
                  <label className="input-label">Address</label>
                  <input type="text" className="input-field" placeholder="Enter property address" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="input-label">Property Type</label><select className="input-field"><option>Apartment</option><option>Villa</option></select></div>
                  <div><label className="input-label">BHK</label><select className="input-field"><option>3</option><option>4</option></select></div>
                  <div><label className="input-label">Area (sq.ft.)</label><input type="number" className="input-field" defaultValue={2400} /></div>
                  <div><label className="input-label">Age (years)</label><input type="number" className="input-field" defaultValue={5} /></div>
                </div>
                <button type="submit" className="btn-primary w-full">Get Instant Estimate</button>
              </form>
              {result && (
                <div className="mt-8 p-6 card-panel border-gold-alpha40 text-center">
                  <p className="text-xs text-gold-warm uppercase tracking-wider mb-2">Estimated Range</p>
                  <p className="font-display text-3xl text-white">{formatPrice(result.min)} — {formatPrice(result.max)}</p>
                  <p className="text-sm text-ash mt-2">Confidence Score: {result.confidence}%</p>
                </div>
              )}
            </div>
          </Container>

          <Container size="form" className="!px-0">
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <SectionHeading title="Request Detailed Valuation" className="mb-6" />
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <input type="tel" placeholder="Phone" className="input-field" />
                <textarea placeholder="Additional property details" rows={4} className="input-field !h-auto py-3 resize-none" />
                <button type="submit" className="btn-primary w-full">Request Expert Valuation</button>
              </form>
            </div>
          </Container>
        </div>
      </PageContent>
    </>
  );
}
