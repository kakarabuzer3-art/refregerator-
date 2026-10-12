/**
 * Background themes. Only the page background changes (see src/app/themes.css).
 * The first entry is the default and the original look.
 */
export const THEME_STORAGE_KEY = "aurora-theme";

export const themes = [
  {
    id: "graphite",
    label: "Graphite",
    note: "Original hexagon pattern",
    swatch: ["#1d1d1d", "#4e4f51", "#3c3c3c"],
  },
  {
    id: "midnight-gold",
    label: "Midnight gold",
    note: "Navy and pale gold",
    swatch: ["#000331", "#f8ffb6"],
  },
  {
    id: "violet",
    label: "Violet",
    note: "Layered purple facets",
    swatch: ["#4c2b87", "#aa79d5", "#cfa5f1"],
  },
  {
    id: "coral-sage",
    label: "Coral and sage",
    note: "Warm coral with sage",
    swatch: ["#ff847c", "#e84a5f", "#fecea8", "#99b898"],
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const defaultTheme: ThemeId = "graphite";

export function isThemeId(value: unknown): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

/** Hard-edged diagonal stripes of the theme colours, for the small preview dots. */
export function swatchBackground(colors: readonly string[]): string {
  const stops = colors.map(
    (color, index) =>
      `${color} ${(index * 100) / colors.length}% ${((index + 1) * 100) / colors.length}%`,
  );
  return `linear-gradient(135deg, ${stops.join(", ")})`;
}

/**
 * Runs in <head> before first paint so a saved theme never flashes the default
 * first. Wrapped in try/catch because storage can be blocked.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if([${themes
  .filter((theme) => theme.id !== defaultTheme)
  .map((theme) => JSON.stringify(theme.id))
  .join(",")}].indexOf(t)>-1){document.documentElement.dataset.theme=t}}catch(e){}})();`;
