# Deploying

The site is a standard Next.js app, so any Next-capable host works. Vercel is the simplest.

## Before the first deploy
1. Run locally: `npm install && npm run typecheck && npm run lint && npm run build && npm start`
   (judge speed with `npm start`, not `npm run dev`: dev mode compiles on demand and is much slower.)
2. Fix any error the build prints.

## Vercel (free plan is fine for a first version)
1. Put the project in a GitHub repository (do not commit `node_modules` or `.next`; `.gitignore` already excludes them).
2. vercel.com, Add New, Project, import the repository. Framework is detected as Next.js. Keep the defaults.
3. Environment variables: add `NEXT_PUBLIC_SITE_URL` (your real address) and `NEXT_PUBLIC_ALLOW_INDEXING=false`.
4. Deploy. You get a `.vercel.app` preview address to show the client.

Without GitHub: install the CLI with `npm i -g vercel`, then run `vercel` in the project folder and follow the prompts.

## Launch checklist (in this order)
1. Replace placeholder content: `src/lib/products.ts`, `src/lib/site.ts`, `src/lib/dealers.ts`, `src/content/features.ts`, the three hero trust claims, and the `[bracketed]` text in the legal pages.
2. Replace the CSS product drawings with real photos (`next/image`).
3. Have a solicitor review Privacy, Terms and Cookies.
4. Connect the client domain in the host settings; set `NEXT_PUBLIC_SITE_URL` to it.
5. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and redeploy, then submit `/sitemap.xml` in Google Search Console.
