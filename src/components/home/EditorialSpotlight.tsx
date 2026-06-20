import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPropertyBySlug, agents } from "@/lib/data/mock-data";
import { formatPrice } from "@/lib/utils";

export function EditorialSpotlight() {
  const property = getPropertyBySlug("luxe-sea-view-penthouse-mumbai-001");
  const agent = agents[0];
  if (!property) return null;

  return (
    <Section bg="obsidian" className="!pt-0 !pb-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2 md:pt-4 pb-14 md:pb-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 md:-inset-4 border border-gold-true/30 rounded-lg pointer-events-none" />
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
              <Image src={property.images[0]} alt={property.title} fill className="object-cover" sizes="600px" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading label="Property of the Month" title={property.title} className="mb-6" />
            <p className="text-mist leading-relaxed mb-6">{property.description.slice(0, 200)}...</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              {property.amenities.slice(0, 4).map((a) => (
                <li key={a} className="text-ash flex items-center gap-2">
                  <span className="w-1 h-1 bg-gold-true rounded-full shrink-0" /> {a}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 p-4 card-panel mb-8">
              <Image src={agent.avatar} alt={agent.firstName} width={48} height={48} className="rounded-full shrink-0" />
              <div className="min-w-0">
                <p className="text-white font-medium">{agent.firstName} {agent.lastName}</p>
                <p className="text-xs text-ash truncate">{agent.title}</p>
              </div>
              <p className="ml-auto font-mono text-gold-warm shrink-0">{formatPrice(property.price)}</p>
            </div>
            <Link href={`/property/${property.slug}`} className="btn-primary">
              Read the Full Story →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
