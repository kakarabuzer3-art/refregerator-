"use client";

import { useState } from "react";
import { ProductVisual } from "@/components/ui/ProductVisual";

const finishes = [
  { id: "steel", label: "Brushed steel", a: "#d9dadd", b: "#8e9096" },
  { id: "graphite", label: "Graphite", a: "#4a4c52", b: "#1c1d20" },
  { id: "white", label: "Arctic white", a: "#f4f5f7", b: "#c7cad1" },
] as const;

/**
 * Pick-a-finish preview. Each option is a glass toggle button: pressing it
 * highlights the glass (aria-pressed) and swaps the preview colour.
 */
export function FinishSelector() {
  const [selected, setSelected] = useState<(typeof finishes)[number]["id"]>("steel");
  const active = finishes.find((finish) => finish.id === selected) ?? finishes[0];

  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="flex justify-center">
        <ProductVisual
          type="freestanding"
          large
          finish={{ a: active.a, b: active.b }}
          label={`Refrigerator preview in ${active.label}`}
        />
      </div>

      <div>
        <div role="group" aria-label="Choose a finish" className="grid gap-3">
          {finishes.map((finish) => (
            <button
              key={finish.id}
              type="button"
              aria-pressed={selected === finish.id}
              onClick={() => setSelected(finish.id)}
              className="glass glass-interactive flex min-h-14 items-center gap-4 rounded-2xl px-5 text-left text-lg font-medium text-white"
            >
              <span
                aria-hidden="true"
                className="size-6 shrink-0 rounded-full border border-white/40"
                style={{
                  background: `linear-gradient(135deg, ${finish.a}, ${finish.b})`,
                }}
              />
              {finish.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-[var(--ink-soft)]">
          Selected finish: {active.label}
        </p>
      </div>
    </div>
  );
}
