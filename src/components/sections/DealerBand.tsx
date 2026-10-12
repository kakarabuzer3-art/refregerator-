import { GlassButton } from "@/components/ui/GlassButton";
import { GlassPanel } from "@/components/ui/GlassPanel";

/** Closing call to action: the low-commitment next step after browsing. */
export function DealerBand() {
  return (
    <section aria-labelledby="dealer-band-title" className="px-4 py-14 sm:px-6 md:py-20">
      <GlassPanel className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2
            id="dealer-band-title"
            className="text-3xl font-light tracking-tight text-white md:text-4xl"
          >
            See it <span className="accent-serif">in person</span>
          </h2>
          <p className="mt-3 max-w-xl text-lg text-[var(--ink-soft)]">
            Visit a stockist near you, or ask us anything before you decide.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <GlassButton href="/dealers" variant="primary">
            Find a dealer
          </GlassButton>
          <GlassButton href="/support">Get help</GlassButton>
        </div>
      </GlassPanel>
    </section>
  );
}
