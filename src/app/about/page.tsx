import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import { CTABlock } from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "About Us",
  description: "28 years of connecting people to places — the LUXE REALTY story.",
};

const milestones = [
  { year: "1998", event: "Founded in Mumbai with a vision for luxury real estate" },
  { year: "2005", event: "Expanded to Delhi NCR and Bangalore" },
  { year: "2012", event: "International launch — Dubai and London offices" },
  { year: "2018", event: "10,000th property transacted" },
  { year: "2024", event: "AI-powered search and virtual tour platform launched" },
  { year: "2026", event: "40+ countries, 500+ agents, ₹48,000 Cr transacted" },
];

const team = [
  { name: "Vikram Malhotra", title: "Founder & CEO", image: "photo-1472099645785-5658abf4ff4e" },
  { name: "Anita Desai", title: "Chief Operating Officer", image: "photo-1573496359142-b8d87734a5a2" },
  { name: "Rahul Kapoor", title: "Head of International", image: "photo-1560250097-0b93528c311a" },
  { name: "Meera Iyer", title: "Chief Technology Officer", image: "photo-1580489944761-15a19d654956" },
];

const values = [
  { title: "Integrity", desc: "Transparent dealings with zero hidden charges." },
  { title: "Excellence", desc: "White-glove service at every touchpoint." },
  { title: "Innovation", desc: "Technology that enhances, never replaces, human expertise." },
  { title: "Global Vision", desc: "Local mastery with international standards." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Story"
        title="28 Years of Connecting People to Places"
        description="From a single Mumbai office to a global luxury real estate platform."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <StatGrid
            bordered
            stats={[
              { value: "12,000+", label: "Properties" },
              { value: "28", label: "Countries" },
              { value: "500+", label: "Agents" },
              { value: "₹48,000 Cr", label: "Transacted" },
            ]}
          />

          <section className="page-block">
            <SectionHeading title="Our Journey" />
            <div className="space-y-0">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start py-5 border-b border-iron last:border-0">
                  <span className="font-mono text-sm text-gold-warm shrink-0 w-16 pt-0.5">{m.year}</span>
                  <p className="text-mist leading-relaxed flex-1">{m.event}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="page-block">
            <SectionHeading title="Leadership Team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {team.map((member) => (
                <article key={member.name} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`https://images.unsplash.com/${member.image}?w=400&q=80`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="300px"
                    />
                  </div>
                  <h3 className="font-display text-xl text-white">{member.name}</h3>
                  <p className="text-sm text-gold-warm mt-1">{member.title}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="page-block">
            <SectionHeading title="Our Values" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="card-panel p-6">
                  <h3 className="font-display text-xl text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CTABlock
            title="Join Our Team"
            description="Build the future of luxury real estate with us."
          >
            <Link href="/contact?subject=careers" className="btn-primary">
              View Careers
            </Link>
          </CTABlock>
        </div>
      </PageContent>
    </>
  );
}
