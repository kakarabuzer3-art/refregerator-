import { FaqList } from "@/components/ui/FaqList";
import { GlassButton } from "@/components/ui/GlassButton";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/content/faqs";

export function FaqPreview() {
  return (
    <Section id="faq" title="Quick answers">
      <div className="max-w-3xl">
        <FaqList items={faqs.slice(0, 3)} />
      </div>
      <div className="mt-8">
        <GlassButton href="/support">More help</GlassButton>
      </div>
    </Section>
  );
}
