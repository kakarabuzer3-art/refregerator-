import type { Metadata } from "next";
import { FinishSelector } from "@/components/design/FinishSelector";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Finishes, built-in and freestanding styles, and how to measure your space before choosing a refrigerator.",
  alternates: { canonical: "/design" },
};

const measureSteps: readonly string[] = [
  "Measure the width, height and depth of the space.",
  "Allow room for the door to open and for ventilation gaps.",
  "Check hallway and doorway widths for delivery.",
  "Note which side the door should hinge on.",
];

export default function DesignPage() {
  return (
    <>
      <PageIntro eyebrow="Design" title="Made to look at home">
        Choose a finish, then decide whether it should stand out or disappear
        into your cabinets.
      </PageIntro>

      <Section
        id="finishes"
        title="Pick a finish"
        intro="Tap an option to preview it."
      >
        <FinishSelector />
      </Section>

      <Section id="styles" title="Freestanding or built-in">
        <div className="grid gap-5 md:grid-cols-2">
          <GlassPanel className="p-6">
            <h3 className="text-2xl font-semibold text-white">Freestanding</h3>
            <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
              Sits anywhere there is space. Easy to install and easy to move if
              you change kitchen.
            </p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-2xl font-semibold text-white">Built-in</h3>
            <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
              Fits behind a cabinet door for a seamless look, in popular 70/30
              and 50/50 layouts.
            </p>
          </GlassPanel>
        </div>
      </Section>

      <Section id="measure" title="Measure your space first">
        <GlassPanel as="ol" className="grid max-w-2xl gap-3 p-6">
          {measureSteps.map((step, index) => (
            <li key={step} className="flex gap-4 text-[var(--ink-soft)]">
              <span className="font-semibold text-[var(--accent)]">{index + 1}</span>
              {step}
            </li>
          ))}
        </GlassPanel>
      </Section>
    </>
  );
}
