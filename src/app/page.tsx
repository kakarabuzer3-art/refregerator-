import { BrandStatement } from "@/components/sections/BrandStatement";
import { CollectionsPreview } from "@/components/sections/CollectionsPreview";
import { DealerBand } from "@/components/sections/DealerBand";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FeaturesPreview } from "@/components/sections/FeaturesPreview";
import { Hero } from "@/components/sections/Hero";
import { HowToChoose } from "@/components/sections/HowToChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <CollectionsPreview />
      <FeaturedProducts />
      <FeaturesPreview />
      <HowToChoose />
      <FaqPreview />
      <DealerBand />
    </>
  );
}
