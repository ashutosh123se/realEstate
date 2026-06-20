import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bed, Maximize, MapPin, Share2, Heart, MessageCircle,
  Calendar, Check, Building, Compass,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { getPropertyBySlug, agents, properties } from "@/lib/data/mock-data";
import { formatPrice, formatArea } from "@/lib/utils";
import { NAV_OFFSET } from "@/lib/layout/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: property.title,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const agent = agents.find((a) => a.id === property.agentId);
  const similar = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <>
      <section style={{ paddingTop: NAV_OFFSET }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[45vh] md:h-[65vh] min-h-[320px]">
          <div className="lg:col-span-2 relative">
            <Image src={property.images[0]} alt={property.title} fill className="object-cover" priority sizes="66vw" />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {property.isFeatured && <span className="tag-featured">Featured</span>}
              {property.isVerified && <span className="tag-verified">Verified</span>}
              {property.isReraRegistered && <span className="tag-new">RERA Registered</span>}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 grid-rows-2">
            {property.images.slice(1, 5).map((img, i) => (
              <div key={i} className="relative">
                <Image src={img} alt="" fill className="object-cover" sizes="17vw" />
              </div>
            ))}
          </div>
        </div>

        <Container className="py-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ash border-b border-iron">
          <span>{property.images.length} Photos</span>
          <span className="text-iron">·</span>
          <Link href="#tour" className="hover:text-gold-warm">3D Tour</Link>
          <span className="text-iron">·</span>
          <span>Video</span>
          <span className="text-iron">·</span>
          <span>Floor Plan</span>
          <span className="text-iron">·</span>
          <span>Map</span>
          <div className="ml-auto flex gap-4">
            <button type="button" className="flex items-center gap-1.5 hover:text-pearl"><Heart className="w-4 h-4" /> Save</button>
            <button type="button" className="flex items-center gap-1.5 hover:text-pearl"><Share2 className="w-4 h-4" /> Share</button>
          </div>
        </Container>
      </section>

      <PageContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 pt-10 md:pt-12">
          <div className="lg:col-span-2 content-stack">
            <div>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-3 leading-tight">{property.title}</h1>
              <div className="flex items-center gap-2 text-ash mb-6">
                <MapPin className="w-4 h-4 shrink-0" />
                {property.location.locality}, {property.location.city}, {property.location.country}
              </div>
              <p className="font-display text-3xl md:text-4xl text-gold-warm mb-2">{formatPrice(property.price)}</p>
              {property.pricePerSqft && (
                <p className="font-mono text-sm text-ash">{formatPrice(property.pricePerSqft)} per sq.ft.</p>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 card-panel p-6">
              {property.bedrooms && (
                <div className="text-center">
                  <Bed className="w-5 h-5 text-gold-warm mx-auto mb-2" />
                  <p className="text-white font-medium text-sm">{property.bedrooms} BHK</p>
                </div>
              )}
              <div className="text-center">
                <Maximize className="w-5 h-5 text-gold-warm mx-auto mb-2" />
                <p className="text-white font-medium text-sm">{formatArea(property.areaSqft)}</p>
              </div>
              {property.floor && (
                <div className="text-center">
                  <Building className="w-5 h-5 text-gold-warm mx-auto mb-2" />
                  <p className="text-white font-medium text-sm">Floor {property.floor}/{property.totalFloors}</p>
                </div>
              )}
              {property.facing && (
                <div className="text-center">
                  <Compass className="w-5 h-5 text-gold-warm mx-auto mb-2" />
                  <p className="text-white font-medium text-sm">{property.facing} Facing</p>
                </div>
              )}
            </div>

            <section>
              <SectionHeading title="Overview" className="mb-4" />
              <p className="text-mist leading-relaxed">{property.description}</p>
            </section>

            <section>
              <SectionHeading title="Property Highlights" className="mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-ash">
                    <Check className="w-4 h-4 text-gold-true shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </section>

            <div id="tour" className="h-64 card-panel flex items-center justify-center">
              <p className="text-smoke text-sm">Matterport 3D Virtual Tour — Integration Ready</p>
            </div>

            <section className="page-block">
              <SectionHeading title="Similar Properties" />
              <div className="property-grid !grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3">
                {similar.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start h-fit">
            {agent && (
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-iron">
                  <Image src={agent.avatar} alt={agent.firstName} width={64} height={64} className="rounded-full border-2 border-gold-true shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white font-medium">{agent.firstName} {agent.lastName}</p>
                    <p className="text-xs text-ash truncate">{agent.title}</p>
                    <p className="text-xs text-gold-warm mt-1">★ {agent.rating} · {agent.reviewCount} reviews</p>
                  </div>
                </div>
                <form className="space-y-4">
                  <div><label className="input-label">Name</label><input type="text" className="input-field !h-11 text-sm" /></div>
                  <div><label className="input-label">Phone</label><input type="tel" className="input-field !h-11 text-sm" /></div>
                  <div><label className="input-label">Email</label><input type="email" className="input-field !h-11 text-sm" /></div>
                  <div><label className="input-label">Visit Date</label><input type="date" className="input-field !h-11 text-sm" /></div>
                  <div><label className="input-label">Message</label><textarea rows={3} className="input-field !h-auto py-3 text-sm resize-none" /></div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Schedule Visit
                  </button>
                </form>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button type="button" className="btn-secondary !py-2.5 !px-3 flex items-center justify-center gap-2 text-[10px]">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                  <button type="button" className="btn-secondary !py-2.5 !px-3 flex items-center justify-center gap-2 text-[10px]">
                    Call Now
                  </button>
                </div>
                <p className="text-xs text-smoke mt-4 font-mono">Ref: {property.id.toUpperCase()}</p>
                {property.reraNumber && (
                  <p className="text-xs text-smoke font-mono mt-1">RERA: {property.reraNumber}</p>
                )}
              </div>
            )}
          </aside>
        </div>
      </PageContent>
    </>
  );
}
