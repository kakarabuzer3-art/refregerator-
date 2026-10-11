import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnergyLabelBlock } from "@/components/product/EnergyLabelBlock";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Section } from "@/components/ui/Section";
import { getCollection, getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.tagline}`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const collection = getCollection(product.type);

  const specs: ReadonlyArray<readonly [string, string]> = [
    ["Capacity", `${product.capacityLitres} litres`],
    ["Width", `${product.widthCm} cm`],
    ["Height", `${product.heightCm} cm`],
    ["Depth", `${product.depthCm} cm`],
    ["Noise level", `${product.noiseDb} dB`],
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          category: collection?.name,
          url: `${site.url}/products/${product.slug}`,
          brand: { "@type": "Brand", name: site.name },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />
      <PageIntro eyebrow={collection?.name ?? "Product"} title={product.name}>
        {product.tagline}. {product.description}
      </PageIntro>

      <Section id="overview" title="At a glance">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <GlassPanel className="flex justify-center p-8">
            <ProductVisual
              type={product.type}
              large
              label={`${product.name} ${product.tagline}`}
            />
          </GlassPanel>

          <div className="grid gap-5">
            <GlassPanel className="p-5">
              <h3 className="text-lg font-semibold text-white">Specifications</h3>
              <dl className="mt-3 divide-y divide-white/10">
                {specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 py-2">
                    <dt className="text-[var(--ink-soft)]">{label}</dt>
                    <dd className="font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </GlassPanel>

            <GlassPanel className="p-5">
              <h3 className="text-lg font-semibold text-white">Features</h3>
              <ul className="mt-3 grid gap-2 text-[var(--ink-soft)]">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassPanel>

            <EnergyLabelBlock />

            <div className="flex flex-col gap-3 sm:flex-row">
              <GlassButton href="/dealers" variant="primary">
                Find a dealer
              </GlassButton>
              <GlassButton href="/support">Ask a question</GlassButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
