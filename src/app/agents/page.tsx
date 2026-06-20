import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { agents } from "@/lib/data/mock-data";
import { formatPrice } from "@/lib/utils";
import { Star, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Agents",
  description: "Find and connect with certified luxury property specialists.",
};

const specialties = ["Luxury Residential", "Commercial", "NRI Services", "Investment", "Farmhouse", "Industrial"];

export default function AgentsPage() {
  const featured = agents.filter((a) => a.isFeatured);

  return (
    <>
      <PageHeader
        label="Expert Network"
        title="Our Agents"
        description="Certified luxury property advisors across 40+ countries — find the right specialist for your journey."
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search by name, city, specialization..."
              className="input-field flex-1 min-w-[240px] !h-11"
            />
            <select className="input-field sm:w-52 !h-11">
              <option>All Specializations</option>
              {specialties.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select className="input-field sm:w-44 !h-11">
              <option>Sort by Rating</option>
              <option>Deals Closed</option>
              <option>Most Reviews</option>
            </select>
          </div>

          <section className="page-block">
            <SectionHeading label="Featured" title="Featured Agents" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((agent) => (
                <Link
                  key={agent.id}
                  href={`/agents/${agent.slug}`}
                  className="card-panel flex gap-6 p-6 hover:border-gold-alpha40 transition-all group"
                >
                  <Image
                    src={agent.avatar}
                    alt={agent.firstName}
                    width={112}
                    height={112}
                    className="rounded-full border-2 border-gold-true shrink-0 object-cover w-28 h-28"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-white group-hover:text-gold-warm transition-colors">
                      {agent.firstName} {agent.lastName}
                    </h3>
                    <p className="text-sm text-gold-warm mt-1 mb-2">{agent.title}</p>
                    <div className="flex items-center gap-1 text-sm text-ash mb-2">
                      <Star className="w-3.5 h-3.5 text-gold-true fill-gold-true" />
                      {agent.rating} · {agent.dealsClosed} deals
                    </div>
                    <div className="flex items-center gap-1 text-xs text-smoke">
                      <MapPin className="w-3 h-3 shrink-0" /> {agent.city}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="page-block">
            <SectionHeading label="Directory" title="All Agents" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <Link
                  key={agent.id}
                  href={`/agents/${agent.slug}`}
                  className="card-panel p-6 hover:border-gold-alpha40 hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={agent.avatar}
                      alt={agent.firstName}
                      width={64}
                      height={64}
                      className="rounded-full border border-iron group-hover:border-gold-true transition-colors shrink-0"
                    />
                    <div className="min-w-0 text-left">
                      <h3 className="font-display text-lg text-white truncate">
                        {agent.firstName} {agent.lastName}
                      </h3>
                      <p className="text-xs text-ash mt-0.5 truncate">{agent.title}</p>
                      <div className="flex items-center gap-1 mt-1.5 text-xs text-gold-warm">
                        <Star className="w-3 h-3 fill-gold-true shrink-0" /> {agent.rating}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-smoke mt-4 pt-4 border-t border-iron">
                    {agent.dealsClosed} deals · {formatPrice(agent.totalValue)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
