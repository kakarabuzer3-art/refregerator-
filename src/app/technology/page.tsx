import type { Metadata } from "next";
import { features } from "@/content/features";
import { GlassButton } from "@/components/ui/GlassButton";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Frost-free cooling, quiet running, efficient design and flexible interiors: the technology inside every refrigerator.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageIntro eyebrow="Technology" title="Cooling, engineered quietly">
        What sits behind the door: the features that keep food fresh, bills low
        and the kitchen calm.
      </PageIntro>

      <Section id="features" title="What makes the difference">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass glass-interactive rounded-3xl p-6"
            >
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="energy"
        title="Understanding the energy label"
        intro="Every refrigerator sold in Ireland carries the EU energy label. It uses a scale from A (most efficient) to G and shows yearly energy use, so you can compare running costs."
      >
        <GlassButton href="/products" variant="primary">
          Compare models
        </GlassButton>
      </Section>
    </>
  );
}
