import { GlassPanel } from "./GlassPanel";
import { PageIntro } from "./PageIntro";

export type LegalSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
};

/**
 * Shared layout for legal pages. The banner is deliberate: this text is a
 * starting template, not legal advice, and must be reviewed before launch.
 */
export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageIntro eyebrow="Legal" title={title}>
        {intro}
      </PageIntro>

      <div className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-3xl gap-6">
          <GlassPanel className="p-5">
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              <strong className="text-white">Template notice.</strong> This is a
              starting draft with bracketed placeholders. Fill in the brackets
              and have a solicitor review it before the site goes live.
            </p>
          </GlassPanel>

          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={slug(section.heading)}>
              <h2 id={slug(section.heading)} className="text-2xl font-semibold text-white">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-[var(--ink-soft)]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function slug(text: string): string {
  return `legal-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
