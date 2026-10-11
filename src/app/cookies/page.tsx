import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Which cookies this website uses.",
  alternates: { canonical: "/cookies" },
};

const sections: readonly LegalSection[] = [
  {
    heading: "What are cookies",
    paragraphs: [
      "Cookies are small files a website saves on your device. Some are essential for the site to work. Others measure use or personalise content.",
    ],
  },
  {
    heading: "Cookies we use today",
    paragraphs: [
      "This site currently sets no analytics, advertising or other non-essential cookies, so there is no cookie banner.",
    ],
  },
  {
    heading: "If this changes",
    paragraphs: [
      "If we add analytics or marketing tools, we will ask for your consent before they set cookies, list them here, and let you change your mind at any time. [Add a consent banner at that point.]",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="What this site stores on your device, and what we will ask before changing it."
      sections={sections}
    />
  );
}
