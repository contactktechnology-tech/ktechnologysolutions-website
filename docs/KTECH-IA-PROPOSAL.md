# KTechnology Solutions — Information Architecture Proposal

Phase 1 of the site expansion. Status: **owner decisions recorded** (source: owner-supplied *Corporate Arm Expansion Plan*, 26 Sep 2026, referred to below as "the Plan"). Where the Plan conflicts with earlier conservative defaults, the Plan wins.

## 1. Offering architecture

Three propositions, as stated in the Plan: **Disciplines** (what we do) · **Engagement Models** (how clients buy) · **Sectors** (who we serve).

## 2. Full sitemap and URL list

Indexable pages (all listed in `sitemap.xml`):

| URL | File | Status |
|---|---|---|
| `/` | `index.html` | Existing — refreshed (Phase 8) |
| `/services` | `services.html` | Existing — becomes the disciplines hub (Phase 3) |
| `/services/infrastructure` | `services/infrastructure.html` | New (Phase 3) |
| `/services/cyber-security` | `services/cyber-security.html` | New |
| `/services/network` | `services/network.html` | New |
| `/services/cloud-devices` | `services/cloud-devices.html` | New |
| `/services/business-systems` | `services/business-systems.html` | New |
| `/services/communications` | `services/communications.html` | New |
| `/services/support` | `services/support.html` | New |
| `/services/resilience` | `services/resilience.html` | New |
| `/services/ai-readiness` | `services/ai-readiness.html` | New — expansion discipline |
| `/services/sourcing` | `services/sourcing.html` | New — expansion discipline |
| `/services/field-delivery` | `services/field-delivery.html` | New — expansion discipline |
| `/engagement` | `engagement.html` | New (Phase 4) |
| `/sectors` | `sectors.html` | New hub (Phase 5) |
| `/sectors/professional-services` … `/sectors/delivery-partners` (7) | `sectors/*.html` | New (Phase 5) |
| `/approach` | `approach.html` | Existing — lifecycle + engagement pipeline added (Phase 6) |
| `/about` | `about.html` | Existing — "Why KTechnology" + group architecture added (Phase 6) |
| `/insights` | `insights.html` | New hub, empty state (Phase 7) |
| `/contact` | `contact.html` | Existing — consultation form extended into a qualification gateway |
| `/privacy-policy`, `/terms-of-use`, `/trading-terms` | existing | Legal body content **not edited**; shared header/footer/meta only |

Non-indexable (noindex, excluded from nav and sitemap):

| URL | File | Purpose |
|---|---|---|
| `/case-studies/template` | `case-studies/template.html` | Case-study capture template (Plan fields) |
| `/insights/template` | `insights/template.html` | Shared article template for owner-written field notes |

Clean URLs are served by the existing `vercel.json` (`"cleanUrls": true`, `"trailingSlash": false`) — `vercel.json` is not changed. `services.html` and the `services/` folder coexist: `/services` resolves to the hub, `/services/<slug>` to the discipline page.

## 3. Navigation

Primary: **Services ▾** (8 core disciplines · 3 expansion disciplines · View all services · How we engage) · **Sectors ▾** (7 sectors · View all sectors) · **Approach** · **Insights** · **About** · **Request a Consultation** (button). The logo links to `/`.

Dropdowns are a single restrained panel: a `<button>` trigger with `aria-expanded`/`aria-controls`, opened by click/Enter/Space (never hover-only), closed by Escape (focus returns to the trigger), outside click, or focus leaving. Without JavaScript the panels open on `:focus-within`/hover so every link remains reachable. On ≤900px they collapse into the existing mobile menu as accordions.

Footer: brand + group links · Explore column (Services, Engagement Models, Approach, Insights, About, Contact) · **Sectors column** · consultation CTA + existing email · legal links.

## 4. Redirect / anchor plan for existing URLs

No URL is removed and `vercel.json` is not changed, so no redirects are required.

| Existing URL | Behaviour after expansion |
|---|---|
| `/services#infrastructure` | Lands on the IT Infrastructure summary block on the `/services` hub, which links to `/services/infrastructure` |
| `/services#cyber` | Cyber Security block → `/services/cyber-security` |
| `/services#network` | Network Architecture block → `/services/network` |
| `/services#cloud` | Cloud & Devices block → `/services/cloud-devices` |
| `/services#systems` | Business Systems block → `/services/business-systems` |
| `/services#comms` | Communications block → `/services/communications` |
| `/services#support` | Corporate Support block → `/services/support` |
| `/services#resilience` | Operational Resilience block → `/services/resilience` |
| `/`, `/approach`, `/about`, `/contact`, legal pages | Unchanged URLs |

New hub anchors added for the expansion disciplines: `/services#ai-readiness`, `/services#sourcing`, `/services#field-delivery`.

## 5. Page templates

**Discipline page** (one shared structure): eyebrow + Bentham heading with italic promise → the problem in the client's terms → what we do (scoped capabilities) → how it's delivered (engagement models) → what you receive (deliverables) → related disciplines → consultation CTA.

**Sector page**: the sector's typical technology pressures (general, no statistics) → primary opportunity (from the Plan) → disciplines that apply → engagement models that suit → consultation CTA.

## 6. Owner decisions (Section 8 of the brief)

All decisions below are taken from the Plan unless marked *default*.

| # | Decision | Recorded answer | Source |
|---|---|---|---|
| 1 | Candidate disciplines | **Add all three**: AI Readiness & Governance (`/services/ai-readiness`), Technology Sourcing & Lifecycle (`/services/sourcing`), Field & Project Delivery (`/services/field-delivery`). Total: 8 core + 3 expansion = 11 | Plan — "Expansion disciplines (owner direction: add all three)" |
| 1a | AI boundary | AI page states: KTechnology covers infrastructure, security, governance and readiness — **not AI development**. KABSolutions covers intelligence, analytics, decision systems and business performance | Plan — AI Readiness boundary |
| 1b | Tints for new disciplines | Derived from existing tints with `color-mix()` — AI: cyber-blue × gold; SRC: gold × secure-green; FLD: cyber-blue × secure-green (see changelog, Phase 2) | Brief §2 rule 3 |
| 2 | Engagement models | **All five**: Managed Support · Project Delivery · Advisory & Audit · Technology Sourcing · Partner & Subcontract Delivery. Commercial ladder shown: Entry → Diagnostic → Project → Recurring → Strategic. No prices, no SLAs | Plan — Engagement models; Commercial ladder |
| 3 | Geographic wording | Generic: "onsite across the region, remote support UK-wide". No named regions | Plan — Still-open decisions (default) |
| 4 | Accreditations / certifications / insurance | **None shown** | Plan — Still-open decisions |
| 5 | Technologies-we-work-with list | **Omitted** | Plan — Still-open decisions |
| 6 | Group software product | **Not shown.** No proprietary tooling is named or described anywhere on the site | Plan — "NO product claims on the site until production-ready" |
| 7 | Four "Why KTechnology" pillars | **Locked**: Infrastructure before improvisation · Documented, not dependent · Proportionate, not oversold · Outcomes, not activity | Plan — Four operating principles |
| 8 | Response times / support hours | **Omitted** | Plan — Still-open decisions |
| 9 | Insights | **Launch empty** ("Field notes are in preparation") with the Plan's topic areas listed as *in preparation*. No articles | Plan — Insights; Still-open decisions |
| 10 | Sectors | Seven pages, each built from the Plan's "primary opportunity" line | Plan — Sectors |
| 11 | Consultation | The existing Formspree form on `/contact` is extended into a qualification gateway capturing the Plan's fields; the same fields are shown as a checklist. No backend added; contact details unchanged (`info@ktechnologysolutions.co.uk`) | Plan — Sales engine |
| 12 | Engagement pipeline | Shown on `/approach`: Consultation → Discovery → Assessment → Scope → Proposal → Delivery → Review → Ongoing Relationship | Plan — Sales engine |
| 13 | Case-study template | Plan capture fields; hidden, `noindex`, excluded from nav and sitemap | Plan — Case studies |
| 14 | Group architecture | Short panel on `/about`: KTechnology Solutions (Technology Infrastructure & Cyber Security) · KABSolutions (Business Intelligence & Analytics) · kgabrielkaseke.com (Strategic Authority). Uses the site's existing external-link pattern | Plan — Group architecture |

## 7. Header logo

The owner's single header image — named by the owner **"KTECHNOLOGY SOLUTIONS LOGO.SVG"** — is recreated as a vector at the URL-safe path `assets/ktechnology-solutions-logo.svg` (784×295 viewBox; pillar linework on the light panel; dark panel with title, gold subtitle, gold rule and the tagline "BUSINESS SYSTEMS DEPLOYMENT - NETWORK ARCHITECTURE"; lettering converted to outlines so it renders identically without web fonts). It is the only header image on every page, with `alt="KTechnology Solutions"`. The existing `assets/ktechnology-header-logo.png` is kept as the Open Graph image, JSON-LD logo and favicon fallback.

## 8. Items flagged, not changed

- **Trading Terms wording** — `trading-terms.html` describes "professional advisory and analytical services" and "revenue increases, cost savings", which reads as KABSolutions wording and does not mention sourcing/procurement or partner delivery. Legal pages are not edited; owner/legal review required.
- **Public exposure of repo docs** — `outputDirectory: "."` means `README.md`, `package.json`, `docs/*.md` (including this file) and `.cursor/` rules are publicly served. Not changed (no `vercel.json` change permitted); a `.vercelignore` is recommended for the owner to approve.
