# Architecture notes: homepage hero

Status: hero implemented, **not yet built or linted** (see "Verification status").

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, Organization JSON-LD, skip link, background layer
    page.tsx          composes Hero + Footer (Server Component)
    globals.css       tokens, background pattern, glass classes, hero + scroll animation
    robots.ts  sitemap.ts
  components/
    layout/   Header (server), MobileMenu (client leaf), Footer (server)
    sections/ Hero (server), HeroFridge (server, CSS-drawn product visual)
    ui/       GlassPanel, GlassButton
  lib/        site.ts (placeholder brand, nav, trust claims), cn.ts
```

Only `MobileMenu` is a Client Component. Everything else ships zero JS.

## Decisions and why (deviations from the earlier proposal are marked)

| Decision | Why |
|---|---|
| Background pattern in plain CSS on a `position: fixed` layer, not `styled-components` | Same pixels as the supplied snippet, but no extra dependency, no client-side CSS-in-JS, no hydration cost. A fixed layer is composited once and never repainted on scroll (unlike `background-attachment: fixed`). Colours and size stay as CSS variables (`--pattern-*`). |
| **Scroll animation in CSS (`animation-timeline: scroll()`), not Framer Motion / GSAP** *(deviation)* | The rules say avoid unnecessary dependencies. The hero needs one scroll-linked effect, which CSS handles with no JS. Wrapped in `@supports` and `prefers-reduced-motion: no-preference`, so other browsers get a static, slightly ajar door. Revisit if later sections need sequencing CSS cannot express. |
| Native `<dialog>` for the mobile menu | Focus trapping, Escape to close and an inert background for free. `::backdrop` gets a light blur so the pattern stays visible behind the glass sheet. |
| Hero visual drawn in CSS | No image request, so the `h1` is the LCP element. Swap for `next/image` (AVIF/WebP, `priority`) once real product renders exist. |
| Glass tokens in CSS variables; blur 12px desktop, 8px mobile, 16px/10px pressed | Matches current guidance: low blur, few glass surfaces per viewport, blur not animated. The pressed/open/current state raises blur slightly and adds an accent border, which is the requested "highlight on click". |
| Dark glass tint (`rgb(22 22 24 / .58)`) with white text | Text contrast must hold over every part of the pattern (lightest tile `#4e4f51`). A `@supports not (backdrop-filter)` fallback makes the surface near-opaque. |
| Placeholder brand and trust claims in `lib/site.ts` | Warranty, delivery and efficiency claims must be accurate under Irish consumer law. Replace with verified client claims before launch. |

## Verification status

The workspace's egress policy blocks `registry.npmjs.org`, so `npm install`, `next build`, `next lint` and Tailwind compilation could not run. What *was* checked:

- Real `globals.css` (Tailwind directives stripped) rendered in headless Chromium at 1280px and 375px: pattern, glass surfaces, pressed/open highlight, blurred dialog backdrop, and scroll-driven door animation (computed transform reached `rotateY(-78deg)`).
- `tsc` ran, but only reported missing `react`/`node`/`next` type packages (cascading errors), so it proves nothing about the code.

Run locally: `npm install && npm run typecheck && npm run lint && npm run build`.

## Background themes (added later)

Four selectable page backgrounds: Graphite (original, default), Midnight gold, Violet, Coral and sage. Only the background changes; sections, cards and buttons are untouched.

| Decision | Why |
|---|---|
| Patterns ported to plain CSS in `src/app/themes.css`, selected by `html[data-theme]`, not `styled-components` | Same pixels, no new dependency, no client-side CSS-in-JS, and the fixed `.site-bg` layer is still painted once. |
| Tinted scrim (`.site-bg::after`) on the three bright themes | Without it white text sits at contrast 1.0 to 1.3 on the light tiles (needs 4.5). Alphas 0.57 to 0.66 are the smallest that reach 4.5:1 on the brightest tile. Re-check if pattern colours change. |
| Tiny inline script in `<head>` (`themeInitScript`) plus `suppressHydrationWarning` on `<html>` | Applies the saved theme before first paint so the default never flashes. This is the one place an inline script is used. |
| `ThemeSwitcher` is a client leaf using `useSyncExternalStore` | Server and client first render agree, and the label updates instantly. localStorage access is wrapped in try/catch. |
| Theme registry in `src/lib/themes.ts` | One list drives the switcher, the swatches and the init script. Adding a theme = one entry plus one CSS block. |

Measured (Chromium render of each pattern with its scrim, brightest pixel): body text, accent blue and champagne gold all reach at least 4.6:1 on every theme, white text at least 7.1:1. The footer has extra bottom padding so the floating theme button never covers the "Back to top" link.
