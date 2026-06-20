import { HeroSection } from "@/components/home/HeroSection";
import { SearchPanel } from "@/components/home/SearchPanel";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyLuxeSection } from "@/components/home/WhyLuxeSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { EditorialSpotlight } from "@/components/home/EditorialSpotlight";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FooterCTA } from "@/components/home/FooterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchPanel />
      <CollectionsSection />
      <FeaturedProperties />
      <StatsSection />
      <WhyLuxeSection />
      <CitiesSection />
      <EditorialSpotlight />
      <TestimonialsSection />
      <BlogSection />
      <FooterCTA />
    </>
  );
}
