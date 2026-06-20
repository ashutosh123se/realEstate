import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, Store, Warehouse, Factory, Hotel, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Real Estate",
  description: "Premium office spaces, retail, warehousing, and hospitality properties for B2B investors.",
};

const categories = [
  { icon: Building2, title: "Office Spaces", desc: "Grade A/B/C offices, co-working, campus" },
  { icon: Store, title: "Retail & High Street", desc: "Mall spaces, high street retail, F&B" },
  { icon: Warehouse, title: "Warehousing & Logistics", desc: "Industrial parks, cold storage, last-mile" },
  { icon: Factory, title: "Industrial Land", desc: "Manufacturing zones, SEZ plots" },
  { icon: Hotel, title: "Hospitality", desc: "Hotels, resorts, serviced apartments" },
  { icon: Server, title: "Data Centers", desc: "Hyperscale and edge data center assets" },
];

export default function CommercialPage() {
  return (
    <>
      <PageHeader
        label="Commercial"
        title="Commercial Real Estate"
        description="B2B property portal for office, retail, industrial, and hospitality investments."
        image="https://images.unsplash.com/photo-1486406146928-c627a92ad1ab?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="card-panel p-8 hover:border-gold-alpha40 transition-all group">
                <cat.icon className="w-10 h-10 text-gold-warm mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <SectionHeading title="Corporate Inquiry" className="mb-6" />
              <form className="space-y-4">
                <div><label className="input-label">Company Name</label><input type="text" className="input-field" /></div>
                <div><label className="input-label">Required Size (sq.ft.)</label><input type="text" className="input-field" /></div>
                <div><label className="input-label">Intent</label><select className="input-field"><option>Lease</option><option>Purchase</option></select></div>
                <div><label className="input-label">Preferred Cities</label><input type="text" className="input-field" /></div>
                <div><label className="input-label">Requirements</label><textarea rows={3} className="input-field !h-auto py-3 resize-none" /></div>
                <button type="submit" className="btn-primary w-full">Submit Inquiry</button>
              </form>
            </div>
            <div>
              <SectionHeading title="Featured Commercial Listings" className="mb-6" />
              <div className="space-y-4">
                {[
                  { name: "Grade A Office — BKC Mumbai", yield: "7.2%", area: "25,000 sq.ft.", price: "₹45 Cr" },
                  { name: "Retail Space — Khan Market Delhi", yield: "8.5%", area: "3,200 sq.ft.", price: "₹18 Cr" },
                  { name: "Warehouse — Bhiwandi MIDC", yield: "9.1%", area: "1,00,000 sq.ft.", price: "₹32 Cr" },
                ].map((listing) => (
                  <div key={listing.name} className="card-panel p-6 hover:border-gold-alpha40 transition-colors">
                    <h3 className="text-white font-medium mb-2">{listing.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gold-warm font-mono">Yield {listing.yield}</span>
                      <span className="text-ash">{listing.area}</span>
                      <span className="text-pearl font-mono">{listing.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
}
