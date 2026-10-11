import type { Metadata } from "next";
import { CollectionSidebar } from "@/components/layout/CollectionSidebar";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "All refrigerator and fridge freezer models: capacity, dimensions and features at a glance.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="The full range">
        Every model with its capacity and width, so you can shortlist quickly.
      </PageIntro>
      <Section id="range" title="All models">
        <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
          <CollectionSidebar />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
