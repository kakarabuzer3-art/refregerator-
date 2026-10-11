import type { Faq } from "@/components/ui/FaqList";

/** Shared by the support page and the home page preview. */
export const faqs: readonly Faq[] = [
  {
    question: "Where do I find my model number?",
    answer:
      "It is usually printed on the rating label inside the fridge compartment. It is also in the manual and on your purchase receipt.",
  },
  {
    question: "What does the EU energy label tell me?",
    answer:
      "It rates the appliance from A (most efficient) to G and shows yearly energy use, noise level and storage volumes, so you can compare similar appliances.",
  },
  {
    question: "Do I need to defrost a frost-free fridge freezer?",
    answer:
      "No. Frost-free models stop ice building up, so manual defrosting is not needed. Models that are not frost free need defrosting from time to time.",
  },
  {
    question: "What temperature should my fridge and freezer be?",
    answer:
      "Food safety guidance in Ireland is a fridge at 5 degrees Celsius or colder and a freezer at minus 18 degrees Celsius.",
  },
  {
    question: "Can I recycle my old fridge?",
    answer:
      "Yes. Retailers selling a new appliance are generally required to take back your old one like for like, and recycling centres also accept them. Ask your retailer when you buy.",
  },
  {
    question: "How do I arrange a service or repair?",
    answer:
      "Contact us with your model number, serial number and proof of purchase and we will point you to the right next step.",
  },
];
