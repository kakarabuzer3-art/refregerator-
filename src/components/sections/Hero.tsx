import { GlassButton } from "@/components/ui/GlassButton";
import { heroTrust } from "@/lib/site";
import { HeroFridge } from "./HeroFridge";

/**
 * Homepage hero. Server Component: zero client JS, and the h1 is the LCP element.
 *
 * Conversion design (principles, not guarantees):
 * - One bright primary action and one quiet secondary (Hick's law, isolation effect).
 * - Trust chips sit directly under the buttons, where hesitation happens (risk reversal).
 * - The door opens on load, which rewards attention and invites a look inside (curiosity).
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="px-4 pb-16 pt-10 sm:px-6 md:flex md:min-h-[calc(100svh-6rem)] md:items-center md:pb-10 md:pt-0"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-6">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-sm">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[var(--accent)]"
            />
            Premium refrigeration for Irish homes
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(3.25rem,10.5vw,8.5rem)] font-extralight leading-[0.92] tracking-tight text-white"
          >
            Fresher for
            <span className="accent-serif block">longer.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
            Quiet, efficient refrigerators and fridge freezers designed to keep
            food at its best and look beautiful in your kitchen.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlassButton href="/products" variant="primary">
              Explore the range
            </GlassButton>
            <GlassButton href="/dealers">Find a dealer</GlassButton>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2">
            {heroTrust.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--ink-soft)]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="size-4 shrink-0 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroFridge />
      </div>
    </section>
  );
}
