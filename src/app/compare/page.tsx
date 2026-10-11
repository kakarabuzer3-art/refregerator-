import type { Metadata } from "next";
import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { collections, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Compare models",
  description:
    "Compare every refrigerator model side by side: type, capacity, dimensions, noise level and key features.",
  alternates: { canonical: "/compare" },
};

const headers = [
  "Model",
  "Type",
  "Capacity",
  "Width",
  "Height",
  "Depth",
  "Noise",
  "Key features",
] as const;

export default function ComparePage() {
  const typeName = (slug: string) =>
    collections.find((collection) => collection.slug === slug)?.name ?? slug;

  return (
    <>
      <PageIntro eyebrow="Compare" title="Every model, side by side">
        Scroll sideways on a small screen. Tap a model name for full details.
      </PageIntro>

      <Section id="table" title="Comparison">
        <div
          role="region"
          aria-label="Model comparison table, scrolls sideways"
          tabIndex={0}
          className="glass overflow-x-auto rounded-2xl"
        >
          <table className="w-full min-w-[56rem] border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of all refrigerator models</caption>
            <thead>
              <tr className="border-b border-white/15">
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-4 py-4 font-semibold uppercase tracking-wider text-white"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {products.map((product) => (
                <tr key={product.slug}>
                  <th
                    scope="row"
                    className="sticky left-0 bg-[rgb(22_22_24/0.96)] px-4 py-4 font-semibold"
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-[var(--accent)] underline-offset-4 hover:underline"
                    >
                      {product.name}
                    </Link>
                  </th>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{typeName(product.type)}</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.capacityLitres} L</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.widthCm} cm</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.heightCm} cm</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.depthCm} cm</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.noiseDb} dB</td>
                  <td className="px-4 py-4 text-[var(--ink-soft)]">{product.features.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <GlassButton href="/dealers" variant="primary">
            Find a dealer
          </GlassButton>
        </div>
      </Section>
    </>
  );
}
