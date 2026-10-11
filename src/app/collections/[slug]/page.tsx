import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionSidebar } from "@/components/layout/CollectionSidebar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { collections, getCollection, productsInCollection } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: `${collection.name} refrigerators`,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.slug}` },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = productsInCollection(collection.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection.name },
        ]}
      />
      <PageIntro eyebrow="Collection" title={collection.name}>
        {collection.description}
      </PageIntro>
      <Section id="models" title="Models">
        <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
          <CollectionSidebar current={collection.slug} />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
