import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { heroTrust } from "@/lib/site";
import { HeroFridge } from "./HeroFridge";

/**
 * Homepage hero. Server Component: zero client JS, and the h1 is the LCP element.
 *
 * Conversion design: one primary action (explore the range), one low-commitment
 * secondary action (find a dealer), and risk-reducing trust signals directly
 * beneath the buttons, where hesitation happens.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-track">
      <div className="hero-stage flex items-center px-4 pb-12 pt-10 sm:px-6 md:pb-0 md:pt-0">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-6">
          <div className="hero-copy">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              Premium refrigeration for Irish homes
            </p>

            <h1
              id="hero-title"
              className="text-[clamp(3rem,10vw,8rem)] font-extralight leading-[0.95] tracking-tight text-white"
            >
              Fresher for
              <span className="block font-semibold">longer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
              Quiet, efficient refrigerators and fridge freezers designed to keep
              food at its best and look beautiful in your kitchen.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlassButton href="/products" variant="primary">
                Explore the range
              </GlassButton>
              <GlassButton href="/dealers">Find a dealer</GlassButton>
            </div>

            <GlassPanel as="ul" className="mt-8 grid max-w-xl gap-2 p-4 sm:grid-cols-1">
              {heroTrust.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                  <span
                    aria-hidden="true"
                    className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)]"
                  />
                  {item}
                </li>
              ))}
            </GlassPanel>
          </div>

          <HeroFridge />
        </div>
      </div>
    </section>
  );
}
