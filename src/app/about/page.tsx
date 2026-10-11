import type { Metadata } from "next";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and what we believe about refrigeration: fresher food, quieter kitchens and honest efficiency.",
  alternates: { canonical: "/about" },
};

/**
 * PLACEHOLDER COPY. Deliberately generic: it states beliefs, not facts such as
 * founding year, factory location or awards. Replace with the client's real
 * story and only claims they can prove.
 */
const values: ReadonlyArray<{ readonly title: string; readonly body: string }> = [
  {
    title: "Fresher food",
    body: "Steady temperatures and well-planned interiors help food last longer and taste better.",
  },
  {
    title: "Quieter kitchens",
    body: "Modern kitchens are open and social. A refrigerator should be felt, not heard.",
  },
  {
    title: "Honest efficiency",
    body: "We show the EU energy label for every model so you can compare running costs before you buy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={`About ${site.name}`}>
        We make refrigeration that looks good, runs quietly and keeps food at
        its best in Irish homes.
      </PageIntro>

      <Section id="values" title="What we believe">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <GlassPanel key={value.title} as="article" className="p-6">
              <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{value.body}</p>
            </GlassPanel>
          ))}
        </div>
      </Section>

      <Section id="next-step" title="See it for yourself">
        <div className="flex flex-col gap-3 sm:flex-row">
          <GlassButton href="/products" variant="primary">
            Explore the range
          </GlassButton>
          <GlassButton href="/contact">Contact us</GlassButton>
        </div>
      </Section>
    </>
  );
}
