"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/site";

/** Desktop navigation. The current section gets aria-current, which the glass CSS highlights. */
export function NavLinks({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {links.map((link) => {
        const current =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={current ? "page" : undefined}
              className="glass-interactive inline-flex min-h-11 items-center rounded-full border border-transparent px-4 text-sm font-medium text-[var(--ink-soft)] hover:text-white aria-[current=page]:text-white"
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
