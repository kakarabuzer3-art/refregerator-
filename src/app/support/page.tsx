import type { Metadata } from "next";
import { FaqList } from "@/components/ui/FaqList";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/content/faqs";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with your refrigerator: finding your model number, energy labels, defrosting, service and recycling.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <PageIntro eyebrow="Support" title="Help when you need it">
        Quick answers below. For anything else, get in touch.
      </PageIntro>

      <Section id="faq" title="Common questions">
        <div className="max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <Section id="contact" title="Contact us">
        <GlassPanel className="grid max-w-xl gap-3 p-6">
          <p className="text-[var(--ink-soft)]">
            Have your model and serial number ready.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-lg font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="text-lg font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {contact.phone}
          </a>
        </GlassPanel>
      </Section>
    </>
  );
}
