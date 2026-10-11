import type { Metadata } from "next";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { dealers } from "@/lib/dealers";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find a dealer",
  description:
    "Find a stockist near you in Ireland, or contact us and we will point you to your nearest dealer.",
  alternates: { canonical: "/dealers" },
};

export default function DealersPage() {
  return (
    <>
      <PageIntro eyebrow="Dealers" title="Find a dealer near you">
        See the range in person and get advice from a local stockist.
      </PageIntro>

      <Section id="stockists" title="Stockists in Ireland">
        {dealers.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dealers.map((dealer) => (
              <li key={`${dealer.name}-${dealer.county}`}>
                <GlassPanel className="h-full p-6">
                  <h3 className="text-xl font-semibold text-white">{dealer.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-widest text-[var(--accent)]">
                    {dealer.county}
                  </p>
                  <p className="mt-3 text-[var(--ink-soft)]">{dealer.address}</p>
                  <p className="mt-1 text-[var(--ink-soft)]">{dealer.phone}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        ) : (
          <GlassPanel className="grid max-w-xl gap-3 p-6">
            <p className="text-[var(--ink-soft)]">
              Our stockist list is being finalised. Contact us and we will point
              you to your nearest dealer.
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
        )}
      </Section>
    </>
  );
}
