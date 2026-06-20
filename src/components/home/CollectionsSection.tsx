"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { Reveal } from "@/components/ui/Reveal";
import { collections } from "@/lib/data/mock-data";

export function CollectionsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Handpicked Collections"
          align="center"
          titleClassName="italic"
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
          {collections.map((col, i) => (
            <Reveal key={col.id} delay={i * 0.08} className="h-full">
              <CollectionCard collection={col} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
