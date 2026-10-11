import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

/** Sticky glass header. Server-rendered; only the nav highlight and mobile menu hydrate. */
export function Header() {
  const mobileLinks = [...navLinks, { label: "Contact", href: "/contact" }];

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pl-6 pr-2">
        <Link
          href="/"
          className="text-base font-semibold tracking-wide"
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <NavLinks links={navLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/dealers"
            className="glass glass-interactive glass-primary hidden min-h-11 items-center rounded-full px-5 text-sm font-semibold md:inline-flex"
          >
            Find a dealer
          </Link>
          <MobileMenu links={mobileLinks} />
        </div>
      </div>
    </header>
  );
}
