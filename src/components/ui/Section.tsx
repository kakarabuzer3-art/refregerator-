import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  children: ReactNode;
};

/** Page section with a consistent container, heading and spacing. */
export function Section({ id, title, intro, className, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 px-4 py-14 sm:px-6 md:py-20", className)}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={headingId}
          className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {intro}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
