import Link from "next/link";
import { business, footerGroups, site } from "@/lib/site";

/** Site footer, rendered on every page from the root layout. */
export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-10 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-3xl p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="text-xl font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
              {site.description}
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-[var(--ink-soft)]">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-[var(--ink-soft)] underline-offset-4 hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.legalName}. {business.registration}
          </p>
          <a
            href="#main"
            className="glass glass-interactive inline-flex min-h-11 items-center self-start rounded-full px-5 font-semibold text-white md:self-auto"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
