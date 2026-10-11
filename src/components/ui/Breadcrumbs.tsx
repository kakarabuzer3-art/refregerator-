import Link from "next/link";

export type Crumb = { readonly label: string; readonly href?: string };

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-4 pt-8 sm:px-6">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-[var(--ink-soft)]">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-white hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {item.label}
              </span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
