import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABlock } from "@/components/ui/CTABlock";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data/mock-data";
import { ChevronDown, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "NRI Services",
  description: "Invest in India from anywhere in the world — complete NRI property buying support.",
};

const steps = [
  "Identify eligible properties (residential, not agricultural)",
  "Appoint Power of Attorney if not visiting in person",
  "Open NRE/NRO account for fund transfer",
  "Complete KYC and FEMA compliance",
  "Execute sale agreement and register property",
  "Obtain tax clearance and repatriation certificate",
];

const countries = ["USA", "UK", "Canada", "UAE", "Singapore", "Australia"];

export default function NRIServicesPage() {
  return (
    <>
      <PageHeader
        label="NRI Portal"
        title="Invest in India From Anywhere in the World"
        description="Dedicated support for Non-Resident Indians — legal, financial, and property advisory under one roof."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <section>
              <SectionHeading title="NRI Buying Guide" className="mb-6" />
              <ol className="space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-display text-2xl text-gold-true/40 shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-mist pt-1 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
            <div className="space-y-4">
              {["Eligible Properties for NRI", "Currency & Payment (FEMA)", "Tax Guidance", "Power of Attorney"].map((topic) => (
                <details key={topic} className="glass-panel rounded-lg p-6 group">
                  <summary className="font-display text-lg text-white cursor-pointer flex items-center justify-between list-none">
                    {topic}
                    <ChevronDown className="w-5 h-5 text-ash group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <p className="text-sm text-ash mt-4 leading-relaxed">
                    Comprehensive guidance on {topic.toLowerCase()} for NRIs investing in Indian real estate.
                  </p>
                </details>
              ))}
            </div>
          </div>

          <section className="page-block">
            <SectionHeading title="Country-Specific Guides" className="mb-6" />
            <div className="flex flex-wrap gap-3">
              {countries.map((c) => (
                <button key={c} type="button" className="flex items-center gap-2 px-4 py-2 border border-iron rounded-full text-sm text-ash hover:border-gold-true hover:text-gold-warm transition-all">
                  <Globe className="w-4 h-4" /> {c}
                </button>
              ))}
            </div>
          </section>

          <section className="page-block">
            <SectionHeading title="NRI-Preferred Properties" />
            <div className="property-grid">
              {properties.slice(0, 3).map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>

          <CTABlock title="Book NRI Consultation" description="Speak with our NRI specialists">
            <form className="space-y-4 text-left max-w-md mx-auto w-full">
              <input type="text" placeholder="Full Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
              <select className="input-field"><option>Country of Residence</option>{countries.map((c) => <option key={c}>{c}</option>)}</select>
              <button type="submit" className="btn-primary w-full">Schedule Consultation</button>
            </form>
          </CTABlock>
        </div>
      </PageContent>
    </>
  );
}
