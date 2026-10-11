import type { CSSProperties } from "react";
import type { ProductType } from "@/lib/products";
import { cn } from "@/lib/cn";

type ProductVisualProps = {
  type: ProductType;
  /** Surface colours; defaults to brushed steel. */
  finish?: { readonly a: string; readonly b: string };
  large?: boolean;
  label: string;
};

const shape: Record<ProductType, string> = {
  american: "pv-wide",
  integrated: "pv-tall",
  freestanding: "pv-tall",
  undercounter: "pv-small",
};

/** CSS-drawn stand-in for a product render. Swap for next/image when photography exists. */
export function ProductVisual({ type, finish, large, label }: ProductVisualProps) {
  const style = finish
    ? ({ "--finish-a": finish.a, "--finish-b": finish.b } as CSSProperties)
    : undefined;

  return (
    <div
      role="img"
      aria-label={label}
      className={cn("product-visual", shape[type], large && "pv-large")}
      style={style}
    />
  );
}
