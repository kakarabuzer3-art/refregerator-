import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

/** Link styled as a glass button; the pressed state intensifies the blur. */
export function GlassButton({
  href,
  variant = "secondary",
  className,
  children,
}: GlassButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "glass glass-interactive inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-semibold text-white",
        variant === "primary" && "glass-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
