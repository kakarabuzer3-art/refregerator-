import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms for using this website.",
  alternates: { canonical: "/terms" },
};

const sections: readonly LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      `This website is operated by ${business.legalName}. By using it you agree to these terms.`,
    ],
  },
  {
    heading: "Product information",
    paragraphs: [
      "We try to keep product information accurate, but specifications can change. Check the details with your dealer before you buy.",
      "This website does not currently sell products directly. Products are bought through our stockists, whose own terms apply to your purchase.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content, design and images on this site belong to us or our licensors. You may view and print pages for personal use, but not copy or reuse them commercially without permission.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "We are not liable for losses from relying on this website beyond what the law allows. Nothing here limits your statutory consumer rights or any liability that cannot be excluded by law.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of Ireland, and Irish courts have jurisdiction, subject to any mandatory consumer protections that apply to you.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      intro="The ground rules for using this website."
      sections={sections}
    />
  );
}
