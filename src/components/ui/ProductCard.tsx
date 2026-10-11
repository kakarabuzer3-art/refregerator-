import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";

/** Whole card is clickable through a stretched link; pressing it intensifies the glass. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="glass glass-interactive relative flex flex-col gap-5 rounded-3xl p-5">
      <div className="flex h-60 items-end justify-center">
        <ProductVisual
          type={product.type}
          label={`${product.name} ${product.tagline}`}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-[var(--ink-soft)]">{product.tagline}</p>
        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          {product.capacityLitres} L &middot; {product.widthCm} cm wide
        </p>
      </div>
    </article>
  );
}
