import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";
import { business, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy" },
};

const sections: readonly LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${business.legalName} is the controller of personal data collected through this website. ${business.registration}`,
      `You can contact us about your data at ${contact.email}.`,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "If you use the contact form, your email app sends us your name, email address, message and any model number you give. We only receive this when you send the email.",
      "Our hosting provider may keep standard server logs, such as IP address and pages requested, for security and to keep the site running. [Confirm with the hosting provider and update.]",
    ],
  },
  {
    heading: "Why we use it and our legal basis",
    paragraphs: [
      "We use your message to reply to you. Our legal basis is our legitimate interest in answering enquiries, or steps you ask us to take before a purchase or service request.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiries only as long as needed to deal with them and any follow-up, then delete them. [State the actual retention period.]",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Under data protection law you can ask to see, correct or delete your personal data, restrict or object to how we use it, and in some cases receive it in a portable format. Contact us to use these rights.",
      "You can also complain to the Data Protection Commission in Ireland at dataprotection.ie.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: ["We will update this page if how we handle data changes."],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="What personal data we collect through this site, and what you can do about it."
      sections={sections}
    />
  );
}
