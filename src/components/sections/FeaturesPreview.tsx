import { features } from "@/content/features";
import { GlassButton } from "@/components/ui/GlassButton";
import { Section } from "@/components/ui/Section";

export function FeaturesPreview() {
  return (
    <Section
      id="technology"
      deferRender
      title={<>Cooling, engineered <span className="accent-serif">quietly</span></>}
      intro="The details behind the door that keep food fresh and bills low."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.slice(0, 3).map((feature) => (
          <article
            key={feature.title}
            className="glass glass-interactive rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
              {feature.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <GlassButton href="/technology">Explore the technology</GlassButton>
      </div>
    </Section>
  );
}
