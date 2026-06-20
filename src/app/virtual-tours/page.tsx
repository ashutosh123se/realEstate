import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABlock } from "@/components/ui/CTABlock";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/data/mock-data";
import { Box, Camera, Video, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Virtual Tours",
  description: "Immersive 3D property tours, 360° photos, and live virtual showrooms.",
};

const tourTypes = [
  { icon: Camera, title: "360° Photos", desc: "Panoramic room-by-room exploration" },
  { icon: Box, title: "3D Matterport", desc: "Walk through properties remotely" },
  { icon: Video, title: "Video Walkthroughs", desc: "Cinematic property films" },
  { icon: Smartphone, title: "AR View", desc: "Visualize furniture in your space" },
];

export default function VirtualToursPage() {
  const tourProperties = properties.filter((p) => p.isFeatured);

  return (
    <>
      <PageHeader
        label="Immersive Technology"
        title="Experience Properties Before You Visit"
        description="360° photos, Matterport 3D tours, and live agent walkthroughs — from anywhere in the world."
        align="center"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="h-64 md:h-80 card-panel flex items-center justify-center -mt-4">
            <p className="text-smoke text-sm">Auto-playing 3D tour preview — Matterport embed</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {tourTypes.map((t) => (
              <div key={t.title} className="text-center p-4">
                <t.icon className="w-10 h-10 text-gold-warm mx-auto mb-4" />
                <h3 className="font-display text-lg text-white mb-2">{t.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <section className="page-block">
            <SectionHeading title="Properties with Virtual Tours" />
            <div className="property-grid">
              {tourProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>

          <CTABlock title="Live Virtual Showroom" description="Schedule a live video call with an agent who walks through the property in real time.">
            <button type="button" className="btn-primary">Schedule Live Tour</button>
          </CTABlock>
        </div>
      </PageContent>
    </>
  );
}
