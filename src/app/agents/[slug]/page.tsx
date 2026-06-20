import type { Metadata } from "next";
import Image from "next/image";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { agents, getAgentProperties } from "@/lib/data/mock-data";
import { formatPrice } from "@/lib/utils";
import { Star, MapPin, MessageCircle, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { NAV_OFFSET } from "@/lib/layout/constants";
import { Container } from "@/components/layout/Container";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  return { title: agent ? `${agent.firstName} ${agent.lastName}` : "Agent Profile" };
}

export default async function AgentProfilePage({ params }: Props) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) notFound();

  const listings = getAgentProperties(agent.id);

  return (
    <>
      <section style={{ paddingTop: NAV_OFFSET }} className="border-b border-iron/50">
        <div className="h-40 md:h-48 bg-gradient-to-br from-graphite to-slate" />
        <Container className="relative -mt-20 md:-mt-24 pb-10 md:pb-14">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <Image
              src={agent.avatar}
              alt={agent.firstName}
              width={160}
              height={160}
              className="rounded-full border-4 border-gold-true shrink-0 w-32 h-32 md:w-40 md:h-40 object-cover"
            />
            <div className="flex-1 min-w-0 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-success rounded-full" />
                <span className="text-xs text-success uppercase tracking-wider">Available Today</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-2">{agent.firstName} {agent.lastName}</h1>
              <p className="text-gold-warm mb-4">{agent.title}</p>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-gold-true fill-gold-true" />
                <span className="text-pearl">{agent.rating}</span>
                <span className="text-ash text-sm">({agent.reviewCount} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {agent.specializations.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs border border-iron rounded-full text-ash">{s}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn-primary">Contact Agent</button>
                <button type="button" className="btn-secondary flex items-center gap-2"><Calendar className="w-4 h-4" /> Schedule Call</button>
                <button type="button" className="btn-secondary flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <StatGrid
            bordered
            stats={[
              { value: String(agent.experience), label: "Years Experience" },
              { value: String(agent.dealsClosed), label: "Properties Sold" },
              { value: formatPrice(agent.totalValue), label: "In Transactions" },
              { value: "98%", label: "Satisfaction" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHeading title="About" className="mb-6" />
              <p className="text-mist leading-relaxed">{agent.bio}</p>
              <div className="flex items-center gap-2 mt-4 text-ash text-sm">
                <MapPin className="w-4 h-4 shrink-0" /> {agent.city} · {agent.areas.join(", ")}
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 h-fit">
              <SectionHeading title="Contact" className="mb-6" />
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="input-field !h-11 text-sm" />
                <input type="email" placeholder="Email" className="input-field !h-11 text-sm" />
                <textarea placeholder="Message" rows={3} className="input-field !h-auto py-3 text-sm resize-none" />
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>

          <section className="page-block">
            <SectionHeading title="Active Listings" />
            <div className="property-grid">
              {listings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
