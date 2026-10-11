import { GlassPanel } from "@/components/ui/GlassPanel";

/**
 * Slot for the legally required EU energy label and product information sheet.
 * Irish rules require the EU label (not the UK one) to be shown online. When
 * real label images and EPREL links exist, render them here.
 */
export function EnergyLabelBlock() {
  return (
    <GlassPanel className="p-5">
      <h3 className="text-lg font-semibold text-white">Energy label</h3>
      <p className="mt-2 text-[var(--ink-soft)]">
        The EU energy label and product information sheet for this model are
        shown here, with a link to the EU product database (EPREL).
      </p>
    </GlassPanel>
  );
}
