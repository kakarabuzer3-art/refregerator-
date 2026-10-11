import { CollectionCard } from "@/components/ui/CollectionCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Section } from "@/components/ui/Section";
import { collections } from "@/lib/products";

export function CollectionsPreview() {
  return (
    <Section
      id="collections"
      title="Find your fit"
      intro="Four collections, from wide American style to compact under-counter. Start with the space you have."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </div>
      <div className="mt-8">
        <GlassButton href="/products">See every model</GlassButton>
      </div>
    </Section>
  );
}
