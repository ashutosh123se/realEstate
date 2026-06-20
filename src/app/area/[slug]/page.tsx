import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties, agents } from "@/lib/data/mock-data";

export const metadata: Metadata = {
  title: "Bandra West — Area Guide",
  description: "Complete neighborhood guide for Bandra West, Mumbai — prices, infrastructure, and listings.",
};

export async function generateStaticParams() {
  return [{ slug: "bandra-west-mumbai" }];
}

export default function AreaGuidePage() {
  const areaProperties = properties.filter((p) => p.location.city === "Mumbai");
  const areaAgent = agents[0];

  return (
    <>
      <PageHeader
        label="Area Guide"
        title="Bandra West, Mumbai"
        description="Mumbai's most coveted suburb — where Bollywood meets old-world charm and ultra-luxury living."
        image="https://images.unsplash.com/photo-1564507592333-c60657eea4c5?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <StatGrid
            stats={[
              { value: "₹85,000", label: "Avg Price/sqft" },
              { value: "+12.4%", label: "1Y Price Change" },
              { value: "9.2/10", label: "Demand Index" },
              { value: "8.8/10", label: "Infrastructure" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHeading title="About the Area" className="mb-6" />
              <div className="text-mist leading-relaxed space-y-4">
                <p>Bandra West stands as Mumbai&apos;s most prestigious residential address, a seamless blend of colonial heritage, celebrity culture, and contemporary luxury.</p>
                <p>The area commands premium prices driven by limited supply, excellent connectivity, and an unmatched social infrastructure of international schools, fine dining, and luxury retail.</p>
              </div>
            </div>
            <div className="h-64 card-panel flex items-center justify-center">
              <p className="text-smoke text-sm">Area map with landmarks</p>
            </div>
          </div>

          <section className="page-block">
            <SectionHeading title="Active Listings in Bandra West" />
            <div className="property-grid">
              {areaProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>

          <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
            <Image src={areaAgent.avatar} alt={areaAgent.firstName} width={64} height={64} className="rounded-full border-2 border-gold-true shrink-0" />
            <div className="text-center sm:text-left flex-1 min-w-0">
              <p className="text-xs text-gold-warm uppercase tracking-wider">Area Expert</p>
              <p className="font-display text-xl text-white">{areaAgent.firstName} {areaAgent.lastName}</p>
              <p className="text-sm text-ash">{areaAgent.title}</p>
            </div>
            <button type="button" className="btn-primary shrink-0">Contact Agent</button>
          </div>
        </div>
      </PageContent>
    </>
  );
}
