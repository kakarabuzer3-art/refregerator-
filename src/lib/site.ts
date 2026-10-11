/**
 * Central site configuration.
 *
 * PLACEHOLDER: the brand name, URL, contact and business details below are
 * stand-ins until the client supplies real, verifiable values. Irish consumer
 * law requires marketing claims (warranty length, delivery, efficiency) to be
 * accurate, so do not ship the trust items without confirming each one.
 */
export const site = {
  name: "Aurora Refrigeration",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.ie",
  locale: "en_IE",
  description:
    "Premium refrigerators and fridge freezers designed for Irish kitchens. Explore the range, see the technology and find a dealer near you.",
} as const;

export type NavLink = { readonly label: string; readonly href: string };

/** PLACEHOLDER contact details. Replace with the client's real ones. */
export const contact = {
  email: "info@example.ie",
  phone: "+353 1 000 0000",
  phoneHref: "tel:+35310000000",
} as const;

/** PLACEHOLDER company details, shown in the footer and legal pages. Must match the CRO record and Google Business Profile exactly. */
export const business = {
  legalName: "[Company legal name] Limited",
  addressLines: ["[Street address]", "[Town], Co. [County]", "[Eircode]"],
  registration: "Registered in Ireland. Company number [CRO number].",
} as const;

export const navLinks: readonly NavLink[] = [
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Design", href: "/design" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
];

export type FooterGroup = { readonly title: string; readonly links: readonly NavLink[] };

export const footerGroups: readonly FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Collections", href: "/collections" },
      { label: "All products", href: "/products" },
      { label: "Compare models", href: "/compare" },
      { label: "Technology", href: "/technology" },
      { label: "Design", href: "/design" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", href: "/support" },
      { label: "Find a dealer", href: "/dealers" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

/** PLACEHOLDER trust signals shown under the hero call to action. */
export const heroTrust: readonly string[] = [
  "Free delivery and old-appliance recycling",
  "Long-term compressor warranty",
  "Energy-efficient range",
];
