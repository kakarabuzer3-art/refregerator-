import Link from "next/link";
import { Section } from "@/components/ui/Section";

const steps: ReadonlyArray<{
  readonly title: string;
  readonly body: string;
  readonly href: string;
  readonly cta: string;
}> = [
  {
    title: "Measure your space",
    body: "Width, height, depth and room for the door to open. It takes two minutes.",
    href: "/design#measure",
    cta: "How to measure",
  },
  {
    title: "Pick a layout",
    body: "American style, built-in, freestanding or under-counter. Choose by how you cook and shop.",
    href: "/collections",
    cta: "See collections",
  },
  {
    title: "See it in person",
    body: "Visit a stockist, compare finishes and ask questions before you decide.",
    href: "/dealers",
    cta: "Find a dealer",
  },
];

export function HowToChoose() {
  return (
    <Section
      id="how-to-choose"
      deferRender
      title={<>Choosing is <span className="accent-serif">simple</span></>}
      intro="Three steps from not sure to sorted."
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="glass glass-interactive relative flex flex-col gap-4 rounded-3xl p-6"
          >
            <span
              aria-hidden="true"
              className="text-4xl font-extralight text-[var(--accent)]"
            >
              {index + 1}
            </span>
            <h3 className="text-2xl font-semibold text-white">
              <Link
                href={step.href}
                className="after:absolute after:inset-0 after:rounded-3xl"
              >
                {step.title}
              </Link>
            </h3>
            <p className="leading-relaxed text-[var(--ink-soft)]">{step.body}</p>
            <span
              aria-hidden="true"
              className="mt-auto text-sm font-semibold uppercase tracking-widest text-[var(--accent)]"
            >
              {step.cta}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
