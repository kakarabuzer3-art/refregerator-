import Link from "next/link";
import type { Collection } from "@/lib/products";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="glass glass-interactive relative flex min-h-48 flex-col justify-between gap-6 rounded-3xl p-6">
      <div>
        <h3 className="text-2xl font-semibold text-white">
          <Link
            href={`/collections/${collection.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl"
          >
            {collection.name}
          </Link>
        </h3>
        <p className="mt-2 text-[var(--ink-soft)]">{collection.blurb}</p>
      </div>
      <span
        aria-hidden="true"
        className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]"
      >
        View range
      </span>
    </article>
  );
}
