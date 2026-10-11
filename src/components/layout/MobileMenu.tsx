"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { NavLink } from "@/lib/site";

/**
 * Off-canvas navigation using the native <dialog> element, which gives focus
 * trapping, Escape-to-close and inert background without extra dependencies.
 */
export function MobileMenu({ links }: { links: readonly NavLink[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className="glass glass-interactive inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold xl:hidden"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
      >
        Menu
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Main menu"
        className="glass glass-sheet"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Clicks on the dialog element itself (outside the inner wrapper) close it.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--ink-soft)]">
              Menu
            </span>
            <button
              type="button"
              className="glass glass-interactive min-h-11 rounded-full px-5 text-sm font-semibold"
              onClick={close}
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-3">
              {links.map((link) => {
                const current =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={current ? "page" : undefined}
                      className="glass glass-interactive flex min-h-14 items-center rounded-2xl px-5 text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/dealers"
            onClick={close}
            className="glass glass-interactive glass-primary mt-auto flex min-h-14 shrink-0 items-center justify-center rounded-full px-6 text-base font-semibold"
          >
            Find a dealer
          </Link>
        </div>
      </dialog>
    </>
  );
}
