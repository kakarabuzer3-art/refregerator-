import type { Metadata } from "next";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { collections } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse refrigerator collections: American style, integrated, freestanding and under-counter models for Irish kitchens.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageIntro eyebrow="Collections" title="Find the right fit for your kitchen">
        Four collections, from wide American style to compact under-counter
        models. Choose by space, then compare models.
      </PageIntro>
      <Section id="all-collections" title="All collections">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </Section>
    </>
  );
}
