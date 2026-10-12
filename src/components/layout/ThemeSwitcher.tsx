"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  THEME_STORAGE_KEY,
  defaultTheme,
  isThemeId,
  swatchBackground,
  themes,
  type ThemeId,
} from "@/lib/themes";

/*
 * The active theme lives on <html data-theme>, set before first paint by the
 * inline script in layout.tsx. This component reads it through
 * useSyncExternalStore, so server and client first render agree (no hydration
 * mismatch) and the label updates the moment a theme is picked.
 */
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): ThemeId {
  const value = document.documentElement.dataset.theme;
  return isThemeId(value) ? value : defaultTheme;
}

function getServerSnapshot(): ThemeId {
  return defaultTheme;
}

function applyTheme(id: ThemeId) {
  document.documentElement.dataset.theme = id;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    // Storage blocked (private window): the choice simply will not persist.
  }
  listeners.forEach((listener) => listener());
}

/** Small glass control that changes the page background only. */
export function ThemeSwitcher() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = themes.find((theme) => theme.id === current) ?? themes[0];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus(); // keep keyboard focus on a visible control
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <div
        id="theme-panel"
        role="group"
        aria-label="Background theme"
        hidden={!open}
        className="glass glass-blur w-64 rounded-3xl p-3"
      >
        <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)]">
          Background
        </p>
        <ul className="grid gap-2">
          {themes.map((theme) => (
            <li key={theme.id}>
              <button
                type="button"
                aria-pressed={current === theme.id}
                onClick={() => {
                  applyTheme(theme.id);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className="glass glass-interactive flex min-h-12 w-full items-center gap-3 rounded-2xl px-3 text-left text-sm font-medium text-white"
              >
                <span
                  aria-hidden="true"
                  className="size-8 shrink-0 rounded-full border border-white/40"
                  style={{ background: swatchBackground(theme.swatch) }}
                />
                <span className="grid">
                  <span>{theme.label}</span>
                  <span className="text-xs font-normal text-[var(--ink-soft)]">
                    {theme.note}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="theme-panel"
        onClick={() => setOpen((value) => !value)}
        className="glass glass-interactive inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-semibold text-white"
      >
        <span
          aria-hidden="true"
          className="size-5 rounded-full border border-white/40"
          style={{ background: swatchBackground(active.swatch) }}
        />
        Theme
        <span className="sr-only">: {active.label}</span>
      </button>
    </div>
  );
}
