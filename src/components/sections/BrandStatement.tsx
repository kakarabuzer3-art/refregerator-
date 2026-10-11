import type { CSSProperties } from "react";

const statement =
  "Food stays fresher, kitchens stay quieter and running costs stay clear. That is what good refrigeration should do.";

/** Large statement whose words fade in as it scrolls into view (CSS only, see globals.css). */
export function BrandStatement() {
  const words = statement.split(" ");

  return (
    <section aria-label="Our promise" className="px-4 py-16 sm:px-6 md:py-28">
      <p className="mx-auto max-w-5xl text-[clamp(1.75rem,4.5vw,3.5rem)] font-light leading-tight tracking-tight text-white">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="reveal-word"
            style={{ "--i": index } as CSSProperties}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
