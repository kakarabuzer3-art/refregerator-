# 90-Day SEO Plan: Irish Refrigerator Manufacturer

Prepared for: agency delivery to client. Market: Republic of Ireland (google.ie).
Constraint: limited budget, so every task is ranked **P1** (do first, high impact), **P2** (do if time allows) or **P3** (defer if budget runs out).

> Keyword volumes are **not verified**. No keyword-data tool was available during research. Validate every cluster in Google Keyword Planner and Search Console before committing content budget (Week 2).

---

## 1. What the research says (and what it means for strategy)

**Retailers own the generic queries.** Harvey Norman, Currys, DID Electrical, PowerCity, Euronics and Electrocity are the sites competing for Irish appliance searches. Ahrefs showed harveynorman.ie at roughly 362K monthly visits (June 2025), about 95% from Ireland, driven mostly by branded searches. DID's fridge freezer category pages target 70/30 and 50/50 layouts, American style, integrated, frost-free, "sale" and brand names.
**Strategy:** a manufacturer should not fight retailers for "fridge freezer sale Ireland". Win on **brand + model, specifications, comparison and buying guidance, "where to buy", and after-sales support**, then send shoppers to stockists.

**Energy-label compliance is both a legal duty and an SEO opportunity.** SEAI is Ireland's market surveillance authority. Its 2025 campaign found refrigeration products broadly compliant (over 90%), but missing labels and product information were the main failures, it reviewed 55 consumer websites, and only one in three retail promotional materials complied. The UK energy label must not be shown in Ireland, including alongside the EU label. Online sellers must display the EU label and product information sheet in the required way. New ecodesign functional requirements for refrigerating appliances applied from 1 March 2024.
**Strategy:** show the correct EU label, product fiche and EPREL link on every product page. It builds trust, supports rich product pages and avoids enforcement risk.

**Local signals matter even for a manufacturer.** Google treats the Republic and the UK (including Northern Ireland) as separate targets. A `.ie` domain is a strong Irish-relevance signal but not a ranking boost on its own. Consistent name, address, phone and Eircode across the site, Google Business Profile, Companies Registration Office records and Irish directories (Golden Pages, YourLocal.ie) are what count. A business with no public showroom can still run a Google Business Profile as a service-area business.

**Seasonality (retailer-reported, dated).** DID's buying guide says fridge and fridge-freezer purchases peak in July and cites over 151,000 units sold in Ireland in 2019. Treat both as directional; plan content to publish before the summer peak.

**Glass UI constraints that affect SEO.** Glassmorphism is GPU-heavy. Guidance is to limit glass surfaces per viewport, use less blur on mobile, avoid animating blurred elements, and keep 4.5:1 text contrast. Slow or low-contrast pages hurt Core Web Vitals and accessibility, so the design rules are part of the technical SEO plan (see Phase 1).

---

## 2. Targets and measurement

| Metric | Day 30 | Day 60 | Day 90 |
|---|---|---|---|
| Indexed key pages (Search Console) | 100% of launched pages | 100% | 100% |
| Core Web Vitals (mobile, field/lab) | LCP < 2.5s, CLS < 0.1, INP < 200ms | held | held |
| Brand + model queries ranking #1 | baseline recorded | most models | all models |
| Non-brand impressions (Search Console) | baseline | measurable growth | clear growth trend |
| Google Business Profile complete + verified | yes | reviews flowing | steady |
| Dealer-locator and enquiry conversions tracked | set up | baseline | improving |

Ranking outcomes for competitive terms take longer than 90 days. This plan targets **indexation, brand dominance, long-tail and support queries** within 90 days, and lays the foundation for competitive terms afterwards.

Tools (low or no cost): Google Search Console, GA4, Google Business Profile, PageSpeed Insights / Lighthouse, Screaming Frog free tier (500 URLs).

---

## 3. Keyword targeting framework

| Cluster | Example targets (validate volumes) | Page type | Priority |
|---|---|---|---|
| Brand + model | `[brand]`, `[brand] [model]`, `[model] review/manual/size` | Home, product pages | P1 |
| Product type (commercial) | American style fridge freezer Ireland, integrated fridge freezer 70/30, 50/50 fridge freezer, frost free fridge freezer, built-in fridge, under counter fridge | Collection pages | P1 |
| Where to buy | `[brand] stockists Ireland`, `[brand] dealer Cork/Dublin/Galway/Limerick` | Dealer locator + city pages | P1 |
| After-sales (high intent, low competition) | `[brand] fridge service Ireland`, spare parts, warranty registration, manual download, fault codes | Support hub | P1 |
| Buying guides | fridge freezer sizes (cm), how to choose a fridge freezer, fridge freezer energy rating explained, quietest fridge freezer | Guides | P2 |
| Problem and how-to | fridge not cooling, how to defrost, fridge noise causes | Support articles | P2 |
| Seasonal | fridge freezer for Christmas, summer food storage | Guides, refreshed annually | P3 |

Irish spelling and phrasing throughout (litres, cm, euro pricing, "fridge freezer", "kitchen appliance"). Do not adapt UK pages wholesale.

---

## 4. Conversion psychology (ethical levers only)

| Lever | Where it goes | Note |
|---|---|---|
| **Clarity / single primary CTA** | Hero: "Explore the range", with "Find a dealer" as the low-commitment second step | Fewer choices means more clicks |
| **Risk reversal** | Warranty and free recycling beside CTAs | Only claims the client can prove |
| **Authority** | EU energy label, EPREL link, SEAI-aligned specs, certifications | Doubles as compliance |
| **Social proof** | Real reviews and dealer logos, `Review` schema only for genuine, visible reviews | Never invent testimonials |
| **Anchoring / comparison** | Compare-models table: step-up model shown beside the base model | Helps shoppers justify the premium |
| **Commitment ladder** | Guide, compare, dealer locator, enquiry | Match content to buying stage |
| **Avoided on purpose** | Fake countdowns, fake "only 2 left", fake discounts | Misleading urgency can breach Irish consumer-protection rules and damages a premium brand. Not legal advice; client should confirm with their solicitor |

---

## 5. The 90-day plan

Roles: **A** = agency, **C** = client input needed, **D** = developer.

### Phase 1: Foundation (Weeks 1-4)

| Week | Task | Priority | Expected purpose |
|---|---|---|---|
| 1 | Kickoff with client (A, C): confirm brand, domain (`.ie` recommended), product range, stockists, showroom/service centre, warranty terms, certifications, WEEE/packaging registration status | P1 | Every later task depends on real facts; avoids shipping unverified claims |
| 1 | Set up Search Console, GA4, conversion events (dealer-locator click, enquiry, phone tap, manual download) (A) | P1 | Baseline and proof of ROI from day one |
| 1 | Competitor snapshot: DID, Harvey Norman, Currys, PowerCity, and 2-3 other fridge brands sold in Ireland. Record titles, category structure, content depth (A) | P1 | Find gaps to beat instead of copying retailers |
| 2 | Keyword validation in Keyword Planner and Search Console; finalise cluster-to-page map (A) | P1 | Replaces assumptions with data before content spend |
| 2 | Site architecture and URL plan: `/products/[slug]`, `/collections/[type]`, `/support`, `/dealers`, `/guides` (A, D) | P1 | Clean crawl paths and topical clusters |
| 2 | Glass UI performance and accessibility budget agreed with design: max 2-3 glass surfaces per viewport, blur 12px desktop / 8px mobile, no animated blur, 4.5:1 text contrast, solid fallback via `@supports` (A, D) | P1 | Protects Core Web Vitals and readability while keeping the glass look |
| 3 | Technical build rules (D): server-rendered pages, `next/image` with AVIF/WebP and explicit dimensions, `next/font` self-hosting, canonical tags, `robots.ts`, `sitemap.ts`, HTTPS, 301 plan if migrating | P1 | Fast, crawlable, indexable site |
| 3 | Structured data templates: `Organization`, `BreadcrumbList`, `Product` (with EU energy class where available), `FAQPage` only where FAQs are visible (D) | P1 | Rich results eligibility; clearer entity signals |
| 3 | Energy-label block on every product page: EU label, product information sheet, EPREL link; **no UK label** (D, C) | P1 | Legal compliance (SEAI) and shopper trust |
| 4 | Title/meta/H1 templates per page type; one H1 per page; Irish English (A) | P1 | Click-through and relevance |
| 4 | Pre-launch audit: Lighthouse mobile, Screaming Frog crawl, keyboard and screen-reader pass on nav and menu (A, D) | P1 | Catch issues before Google does |
| 4 | Redirect map and staging `noindex` removal checklist (D) | P1 | Prevents the classic launch-day indexing mistake |

### Phase 2: Launch and local authority (Weeks 5-8)

| Week | Task | Priority | Expected purpose |
|---|---|---|---|
| 5 | Launch; submit sitemap; inspect and request indexing for key URLs (A) | P1 | Fast discovery |
| 5 | Product pages for the full range: unique descriptions, dimensions in cm, capacity in litres, noise (dB), energy data, manuals (PDF), alt text (C, A) | P1 | Captures brand + model and spec queries |
| 5 | Collection pages for each product type (American, integrated, frost-free, under-counter, etc.) with short intro copy and comparison table (A) | P1 | Ranks for commercial type queries without competing with retailer promo pages |
| 6 | Google Business Profile: claim, verify, categories, service area (or showroom), hours, photos, products, Eircode (C, A) | P1 | Local pack eligibility; fastest local win |
| 6 | NAP and Eircode consistency across site, GBP, CRO record and directories (A) | P1 | Local trust signal |
| 6 | Citations: Golden Pages, YourLocal.ie, Local Enterprise Office (if eligible), Irish industry bodies, key Irish business directories (A) | P2 | Local authority and backlinks |
| 7 | Dealer locator and stockist pages: one indexable page per county or major city with real stockists, opening hours, map, click-to-call (D, C) | P1 | Captures "where to buy" intent and routes sales to retailers |
| 7 | Support hub: warranty registration, manuals, spare parts, service request, fault guides (A, C) | P1 | High-intent, low-competition after-sales traffic; reduces support load |
| 8 | Review process: ask satisfied customers and dealers for Google reviews via QR card and email template (C) | P1 | Reviews drive local ranking and conversion |
| 8 | Compliance trust page: energy labelling, ecodesign, WEEE/recycling, warranty terms (C, A) | P2 | Authority signal; answers common objections |

### Phase 3: Content and links (Weeks 9-12)

| Week | Task | Priority | Expected purpose |
|---|---|---|---|
| 9 | Guide 1: "How to choose a fridge freezer in Ireland" (sizes, 70/30 vs 50/50, energy label explained) (A) | P1 | Top-of-funnel traffic; internal links to collections |
| 9 | Internal linking pass: guides to collections to products to dealers (A, D) | P1 | Distributes authority; builds the commitment ladder |
| 10 | Guide 2: "Fridge freezer energy ratings explained (EU label)" with a worked running-cost example using verified model data (A) | P1 | Differentiating, compliance-aligned authority content |
| 10 | Compare-models tables for the top 3 collections (A) | P2 | Anchoring and decision support |
| 11 | Guide 3 and 4 from keyword validation (for example sizing in cm for Irish kitchens; quietest models) (A) | P2 | Long-tail growth |
| 11 | Digital PR and links, low cost: Irish home and lifestyle blogs, kitchen designers and fitters, builder and architect directories, local press for any Irish manufacturing story (A, C) | P2 | Authority; the biggest gap versus retailers |
| 12 | Kitchen designers and installers outreach: trade page with spec downloads (CAD/dimension sheets) (C, A) | P2 | Earns relevant links; adds a B2B channel |
| 12 | Seasonal brief for the July peak: buying-guide refresh scheduled for early summer (A) | P3 | Be ranked before demand peaks |

### Phase 4: Optimise and hand over (Week 13)

| Week | Task | Priority | Expected purpose |
|---|---|---|---|
| 13 | Review Search Console: queries, pages, CTR, indexation issues; rewrite titles on high-impression low-CTR pages (A) | P1 | Cheapest incremental gains |
| 13 | Core Web Vitals field-data check; fix any glass-effect jank on low-end phones (reduce blur or remove on affected devices) (D) | P1 | Keeps the premium look from hurting speed |
| 13 | 90-day report and next-quarter roadmap: what moved, what to repeat, which content to scale (A) | P1 | Client confidence and renewal |

---

## 6. If the budget tightens

Keep: Weeks 1-3 technical foundation, energy-label blocks, product and collection pages, GBP, dealer locator, support hub, reviews, Week 13 review.
Cut first: Digital PR (Week 11), trade outreach (Week 12), compare tables (Week 10), seasonal brief (Week 12).

## 7. Open questions for the client

1. Are there showrooms or a service centre, or is this online and dealer-only? (Decides GBP setup.)
2. Do you sell in Northern Ireland? (Decides hreflang and a separate UK-facing approach.)
3. Which claims can you prove today: warranty length, delivery, recycling, efficiency classes?
4. Is the producer registered for WEEE and packaging obligations, and can that be shown on the site?
5. Is there existing photography and product data, and where does the data live (spreadsheet, ERP, PIM)?

## Sources

- [DID Electrical: fridge freezers](https://www.did.ie/collections/fridge-freezers) and [DID fridge buying guide](https://did.ie/pages/how-to-buy-a-fridge)
- [Ahrefs: harveynorman.ie traffic](https://ahrefs.com/websites/harveynorman.ie) and [currys.ie competitors](https://ahrefs.com/websites/currys.ie/competitors)
- [SEAI: 2025 retailer energy-labelling findings](https://www.seai.ie/news-and-events/news/seai-review-finds-mixed-energy-labelling-compliance-across-irish-retail)
- [SEAI: UK energy labels in Ireland](https://www.seai.ie/home-energy/energy-labelling-and-ecodesign/energy-labelling/Statement-on-UK-energy-labels-in-Ireland-and-the-EU-25.11.21.pdf)
- [SEAI: retailer guide to online energy labelling](https://www.seai.ie/publications/A-Retailers-Guide-to-Online-Energy-Labelling.pdf)
- [SEAI: refrigerating appliance requirements from 1 March 2024](https://seai.ie/sites/default/files/publications/Placement-on-the-market-of-refrigerating-appliances-dishwashers-washing-machines-and-washer-dryers-from-the-1st-March-2024.pdf)
- ProfileTree: [SEO in Ireland](https://profiletree.com/seo-ireland/), [local SEO for Irish businesses](https://profiletree.com/irish-businesses-local-seo/), [local SEO for e-commerce](https://profiletree.com/local-seo-for-ecommerce/), [AI and local search in Ireland](https://profiletree.com/the-future-of-seo-in-ireland-ai-voice-search/)
- [OpenReplay: glassmorphic UI in CSS](https://blog.openreplay.com/create-glassmorphic-ui-css/) and [Axess Lab: glassmorphism and accessibility](https://axesslab.com/?p=5111)
