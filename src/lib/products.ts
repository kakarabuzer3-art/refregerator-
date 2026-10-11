/**
 * PLACEHOLDER CATALOGUE.
 *
 * Every name, dimension, capacity and noise figure below is sample data so the
 * pages can be built and styled. Replace with the client's real model data
 * before launch. Do not publish an energy class here until it matches the
 * product's registered EU energy label (EPREL).
 */
export type ProductType =
  | "american"
  | "integrated"
  | "freestanding"
  | "undercounter";

export type Collection = {
  readonly slug: ProductType;
  readonly name: string;
  readonly blurb: string;
  readonly description: string;
};

export const collections: readonly Collection[] = [
  {
    slug: "american",
    name: "American style",
    blurb: "Wide, generous and made for big households.",
    description:
      "Side-by-side and wide-door refrigerators with space for large shops, party platters and plenty of frozen storage.",
  },
  {
    slug: "integrated",
    name: "Integrated",
    blurb: "Hidden behind your cabinet doors.",
    description:
      "Built-in fridge freezers that disappear into the kitchen, available in popular 70/30 and 50/50 layouts.",
  },
  {
    slug: "freestanding",
    name: "Freestanding",
    blurb: "Tall, frost free and easy to place.",
    description:
      "Freestanding fridge freezers that slot into most kitchens without any building work.",
  },
  {
    slug: "undercounter",
    name: "Under-counter",
    blurb: "Compact cooling for small spaces.",
    description:
      "Space-saving models for utility rooms, small kitchens, apartments and home bars.",
  },
];

export type Product = {
  readonly slug: string;
  readonly name: string;
  readonly type: ProductType;
  readonly tagline: string;
  readonly description: string;
  readonly capacityLitres: number;
  readonly widthCm: number;
  readonly heightCm: number;
  readonly depthCm: number;
  readonly noiseDb: number;
  readonly features: readonly string[];
};

export const products: readonly Product[] = [
  {
    slug: "grand-90-american",
    name: "Grand 90",
    type: "american",
    tagline: "Wide American style fridge freezer",
    description:
      "A wide-door fridge freezer with room for the weekly family shop and a generous freezer.",
    capacityLitres: 560,
    widthCm: 90,
    heightCm: 178,
    depthCm: 68,
    noiseDb: 40,
    features: ["Frost free", "Adjustable glass shelves", "Humidity-controlled drawers"],
  },
  {
    slug: "grand-80-american",
    name: "Grand 80",
    type: "american",
    tagline: "Slimmer American style option",
    description:
      "The American style layout in a slightly narrower body for tighter kitchens.",
    capacityLitres: 490,
    widthCm: 80,
    heightCm: 178,
    depthCm: 66,
    noiseDb: 40,
    features: ["Frost free", "Door storage bins", "Quick-cool mode"],
  },
  {
    slug: "built-in-70-30",
    name: "Built-in 70/30",
    type: "integrated",
    tagline: "Integrated fridge freezer, 70/30 split",
    description:
      "A tall integrated model with a larger fridge section for fresh food.",
    capacityLitres: 250,
    widthCm: 56,
    heightCm: 177,
    depthCm: 55,
    noiseDb: 36,
    features: ["Frost free", "Sliding-door fitting", "Fresh-food drawer"],
  },
  {
    slug: "built-in-50-50",
    name: "Built-in 50/50",
    type: "integrated",
    tagline: "Integrated fridge freezer, 50/50 split",
    description:
      "An even split between fridge and freezer for households that freeze a lot.",
    capacityLitres: 240,
    widthCm: 56,
    heightCm: 177,
    depthCm: 55,
    noiseDb: 36,
    features: ["Frost free", "Sliding-door fitting", "Large freezer drawers"],
  },
  {
    slug: "tall-60-frost-free",
    name: "Tall 60",
    type: "freestanding",
    tagline: "Freestanding frost free fridge freezer",
    description:
      "A 60 cm freestanding fridge freezer that fits standard kitchen gaps.",
    capacityLitres: 340,
    widthCm: 60,
    heightCm: 185,
    depthCm: 65,
    noiseDb: 38,
    features: ["Frost free", "Reversible doors", "Holiday mode"],
  },
  {
    slug: "compact-60-undercounter",
    name: "Compact 60",
    type: "undercounter",
    tagline: "Under-counter fridge",
    description:
      "A compact under-counter fridge for small kitchens, utility rooms and bars.",
    capacityLitres: 130,
    widthCm: 60,
    heightCm: 82,
    depthCm: 58,
    noiseDb: 37,
    features: ["Reversible door", "Interior light", "Adjustable shelves"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function productsInCollection(type: ProductType): readonly Product[] {
  return products.filter((product) => product.type === type);
}
