import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel";
import {
  collections,
  products,
  productsInCollection,
  type ProductType,
} from "@/lib/products";

type SidebarProps = { current?: ProductType };

/**
 * Glass sidebar for browsing by collection. A wrapping row of pills on phones,
 * a sticky column from lg up. The current collection is marked aria-current.
 */
export function CollectionSidebar({ current }: SidebarProps) {
  const items = [
    {
      href: "/products",
      label: "All models",
      count: products.length,
      active: current === undefined,
    },
    ...collections.map((collection) => ({
      href: `/collections/${collection.slug}`,
      label: collection.name,
      count: productsInCollection(collection.slug).length,
      active: current === collection.slug,
    })),
  ];

  return (
    <aside aria-label="Browse the range" className="lg:sticky lg:top-28 lg:self-start">
      <GlassPanel className="p-3">
        <nav aria-label="Collections">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className="glass-interactive flex min-h-11 items-center justify-between gap-4 rounded-xl border border-transparent px-4 text-sm font-medium text-[var(--ink-soft)] hover:text-white aria-[current=page]:text-white"
                >
                  {item.label}
                  <span className="text-xs opacity-80">{item.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-3 border-t border-white/10 pt-3">
          <Link
            href="/compare"
            className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Compare all models
          </Link>
        </div>
      </GlassPanel>
    </aside>
  );
}
