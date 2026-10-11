import { GlassButton } from "@/components/ui/GlassButton";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { products } from "@/lib/products";

/** One featured model from three different collections. */
const featuredSlugs = [
  "grand-90-american",
  "built-in-70-30",
  "tall-60-frost-free",
] as const;

export function FeaturedProducts() {
  const featured = featuredSlugs.flatMap((slug) =>
    products.filter((product) => product.slug === slug),
  );

  return (
    <Section
      id="featured"
      title="Popular models"
      intro="A good place to start if you are not sure what you need."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <GlassButton href="/products" variant="primary">
          See every model
        </GlassButton>
        <GlassButton href="/compare">Compare models</GlassButton>
      </div>
    </Section>
  );
}
