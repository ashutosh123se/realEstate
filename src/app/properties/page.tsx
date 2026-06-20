import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data/mock-data";
import { PropertiesToolbar } from "@/components/properties/PropertiesToolbar";
import { PropertiesFilters } from "@/components/properties/PropertiesFilters";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse our curated collection of luxury properties worldwide.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHeader
        label="Inventory"
        title="Luxury Properties"
        description="2,847 exceptional properties across 40+ countries — filter, compare, and discover your next address."
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <PropertiesToolbar count={properties.length} />
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <aside className="lg:w-80 shrink-0">
              <PropertiesFilters />
            </aside>
            <div className="flex-1 min-w-0">
              <div className="property-grid">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-iron text-center">
                <p className="text-sm text-smoke mb-4">
                  Showing 1–{properties.length} of 2,847 properties
                </p>
                <button type="button" className="btn-secondary">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
}
