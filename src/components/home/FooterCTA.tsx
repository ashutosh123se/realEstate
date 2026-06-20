import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function FooterCTA() {
  return (
    <Section spacing="hero" className="relative overflow-hidden !pt-0 !pb-16 md:!pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80)` }}
      />
      <div className="absolute inset-0 bg-void/85" />
      <Container className="relative text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 max-w-2xl mx-auto leading-tight">
          Ready to Find Your Next Address?
        </h2>
        <p className="text-mist text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
          Schedule a private consultation with our luxury property advisors.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto">
          <Link
            href="/contact?subject=consultation"
            className="btn-primary w-full sm:flex-1 sm:max-w-[260px]"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/properties"
            className="btn-secondary w-full sm:flex-1 sm:max-w-[260px]"
          >
            Browse All Properties
          </Link>
        </div>
      </Container>
    </Section>
  );
}
