import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/** Top of every inner page. Renders the single h1. */
export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="px-4 pb-6 pt-14 sm:px-6 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extralight leading-[1] tracking-tight text-white">
          {title}
        </h1>
        {children ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
            {children}
          </p>
        ) : null}
      </div>
    </header>
  );
}
