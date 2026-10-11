import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassPanelProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Static frosted-glass surface. Use sparingly: each one costs a blur pass. */
export function GlassPanel({
  as: Tag = "div",
  className,
  children,
}: GlassPanelProps) {
  return <Tag className={cn("glass rounded-2xl", className)}>{children}</Tag>;
}
