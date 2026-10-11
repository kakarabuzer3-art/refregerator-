import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { business, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us about a product, a dealer near you, or service and warranty. Email, phone and a simple enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Talk to us">
        Questions about a model, a dealer or your warranty? Send a message and
        we will help.
      </PageIntro>

      <Section id="get-in-touch" title="Get in touch">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm email={contact.email} />

          <div className="grid content-start gap-5">
            <GlassPanel className="grid gap-3 p-6">
              <h3 className="text-xl font-semibold text-white">Direct</h3>
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

            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Address</h3>
              <address className="mt-3 not-italic leading-relaxed text-[var(--ink-soft)]">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </GlassPanel>

            <GlassPanel className="grid gap-3 p-6">
              <h3 className="text-xl font-semibold text-white">Want to see it first?</h3>
              <p className="text-[var(--ink-soft)]">
                Visit a stockist near you.
              </p>
              <div>
                <GlassButton href="/dealers" variant="primary">
                  Find a dealer
                </GlassButton>
              </div>
            </GlassPanel>
          </div>
        </div>
      </Section>
    </>
  );
}
