# KTechnology Solutions — Site Expansion Changelog

Branch: `cursor/site-expansion-2346` (draft PR against `main`; not merged, never pushed to `main`). Production release needs the owner's final go.

Standing "explicitly not changed" list for every phase unless stated: `vercel.json`, `robots.txt` rules, `package.json`, `package-lock.json`, legal page body content (`privacy-policy.html`, `terms-of-use.html`, `trading-terms.html` `<main>`), existing assets (nothing deleted or renamed), Formspree endpoint, contact email.

---

## Phase 0 — Scope & inventory (2026-09-26)

Read-only. Repo confirmed (`contactktechnology-tech/ktechnologysolutions-website`, `main`, clean tree, HEAD `d41ab70`). Report held in the Project store (`docs/phase-0-inventory-report.md`). Risks found: no `prefers-reduced-motion` handling; reveal-animated content invisible if JS or esm.sh fails; mobile overlay likely confined by the nav's `backdrop-filter`; public README/docs exposure; Trading Terms wording.

## Phase 1 — Information architecture (2026-09-26)

- Added: `docs/KTECH-IA-PROPOSAL.md`, `docs/KTECH-SITE-EXPANSION-CHANGELOG.md`
- Modified: none
- Owner decisions: recorded in the IA proposal §6 from the owner's Corporate Arm Expansion Plan.
- Open owner items: Trading Terms review; `.vercelignore` for public docs.

## Phase 2 — Foundations (2026-09-26)

- Added: `assets/ktechnology-solutions-logo.svg` — vector recreation of the owner's header image, named by the owner **"KTECHNOLOGY SOLUTIONS LOGO.SVG"** (stored under a URL-safe filename). Pillar linework on the light panel; dark panel with title, gold subtitle, gold rule and the tagline "BUSINESS SYSTEMS DEPLOYMENT - NETWORK ARCHITECTURE". Lettering is outlined (Bentham glyphs), so it renders identically as an `<img>` without web fonts. The logo's own panel colours (`#deded6`, `#404248`, pillar stroke `#6e7073`) are sampled from the owner's image and exist only inside the logo asset — they are not site tokens.
- Modified: all 8 existing pages — shared chrome only (head meta incl. Open Graph on every page, header, nav, footer). `<main>` content verified byte-identical to `main` for every page (diff check); legal body content untouched.
- Modified: `styles.css`
  - Removed the duplicate Google Fonts `@import` (fonts still load once per page via `<link>`, `display=swap`). Copyright header added.
  - Derived tokens (no new colours): `--kt-band` = `color-mix(cream 2.5%, void)`; `--kt-panel` = `color-mix(void 97%, cream)`; `--kt-gold-soft` = gold @ .35; `--kt-gold-line` = gold @ .28; `--kt-tint-ai` = `color-mix(cyber-blue 55%, gold)`; `--kt-tint-src` = `color-mix(gold 55%, secure-green)`; `--kt-tint-fld` = `color-mix(cyber-blue 45%, secure-green)`.
  - `--kt-text-dim` raised from cream @ .45 (4.1:1, fails AA for small text) to cream @ .58 (≈6.2:1).
  - Header: the single SVG logo, centred, max 720px wide (271px tall at desktop; ~147px on a 390px phone). Previously the PNG scaled to full viewport width (≈541px tall at 1440px).
  - Accessible dropdowns, rebuilt mobile overlay (full-screen, solid, close button fixed on top), hover lift + gold edge + whole-card click on discipline cards, discipline/sector template components, `prefers-reduced-motion` support, reveal animations moved to progressive enhancement (200–400ms).
- Modified: `script.js` — rewritten. Adds `.js` class; dropdowns (click/Enter/Space, Escape returns focus to trigger, outside click and focus-out close); mobile menu with Escape, focus containment and "Open/Close menu" label; reveal hides only below-the-fold elements and only when motion is allowed; Vercel Analytics loaded by a guarded dynamic `import()` so an esm.sh failure can no longer stop the script. Copyright header added.
- Modified: `sitemap.xml` (regenerated; same 8 URLs, lastmod updated).
- Nav links to pages built in Phases 3–7 resolve from those phases onward.
- Verified: keyboard open/Tab/Escape on dropdowns; mobile overlay covers the viewport with the close control on top; Escape closes it and returns focus to the toggle.

## Phase 3 — Discipline pages (2026-09-26)

- Added: `services/infrastructure.html`, `services/cyber-security.html`, `services/network.html`, `services/cloud-devices.html`, `services/business-systems.html`, `services/communications.html`, `services/support.html`, `services/resilience.html` (8 core) and `services/ai-readiness.html`, `services/sourcing.html`, `services/field-delivery.html` (3 expansion — owner-approved in the Plan). All use one shared structure: breadcrumb, eyebrow + heading with italic promise, the problem, scoped capabilities, engagement models, deliverables, related disciplines, consultation CTA.
- Modified: `services.html` → disciplines hub. Every old anchor (`#infrastructure #cyber #network #cloud #systems #comms #support #resilience`) is kept on its hub card, which links to the new page; new anchors `#ai-readiness #sourcing #field-delivery`.
- Modified: `sitemap.xml` (+11), `styles.css` (4-column discipline grid at desktop — the previous auto-fill grid left an empty cell for 8 cards at 1440px; card grids now draw per-card hairlines).
- Copy sources: existing `/services` copy for the core eight, the Plan's scopes for all eleven. AI page states the KABSolutions boundary; Sourcing states vendor neutrality with no partner claims. Capability "Cyber Essentials readiness" is worded as *preparation for assessment* (no certification claim).
- Copy change: Operational Resilience tagline "Always operational" → "Audited. Resilient. Prepared." (an absolute availability promise conflicts with the no-guarantee rule).
- Tints: AI = `--kt-tint-ai`, SRC = `--kt-tint-src`, FLD = `--kt-tint-fld` (derived; see Phase 2). The existing eight keep their mapping (gold default, SEC blue, RES green).

## Phase 4 — Engagement Models (2026-09-26)

- Added: `engagement.html` (`/engagement`). All five models (Managed Support, Project Delivery, Advisory & Audit, Technology Sourcing, Partner & Subcontract Delivery) in a comparison layout — what it is, typical work, best suited when, usual starting point. Stable anchors: `#managed-support #project-delivery #advisory-audit #technology-sourcing #partner-delivery #ladder`.
- The Plan's commercial ladder shown as a clean five-step progression: Entry → Diagnostic → Project → Recurring → Strategic, with the principle "assessment, recommendation, implementation, management, improvement" linked to `/approach`. States there is no obligation to move beyond the first step.
- No prices, no SLA or response figures.
- Modified: `sitemap.xml` (+1).

## Phase 5 — Sectors (2026-09-26)

- Added: `sectors.html` (`/sectors` hub) and seven sector pages: `sectors/professional-services.html`, `healthcare-care.html`, `hospitality-retail.html`, `facilities-management.html`, `multi-site.html`, `public-sector.html`, `delivery-partners.html`.
- Each sector page is built from the Plan's "primary opportunity" line (shown as the "Where we help most" statement), plus general typical pressures (no statistics, no named clients), the disciplines that apply and the engagement models that suit. The public-sector page states that we take part only where procurement conditions permit a provider of our size.
- Card link text shortened to "Explore Service" / "View Sector" / "Model Details", with the full name as screen-reader-only text (unique accessible names; restores the original short label style).
- Modified: `sitemap.xml` (+8).

## Phase 6 — Approach lifecycle + About "Why KTechnology" (2026-09-26)

- Modified: `approach.html`
  - The four-step timeline is replaced by the six-stage lifecycle (Assess → Design → Deploy → Protect → Support → Improve) as an inline SVG: gold linework, Raleway labels, a text title and description for assistive technology, plus a text list of every stage. Stage copy reuses the existing four step descriptions.
  - Added "How an engagement progresses", the Plan's pipeline: Consultation → Discovery → Assessment → Scope → Proposal → Delivery → Review → Ongoing Relationship.
  - The existing "What We Will Never Do" section is kept verbatim.
- Modified: `about.html`
  - Hero and founder section kept verbatim.
  - The three "Operating Principles" are replaced by "Why KTechnology", using the four locked pillars exactly: Infrastructure before improvisation · Documented, not dependent · Proportionate, not oversold · Outcomes, not activity. Pillar wording comes from the Plan.
  - Added a group-architecture panel covering kgabrielkaseke.com (Strategic Authority), KABSolutions (Business Intelligence & Analytics) and KTechnology Solutions (Technology Infrastructure & Cyber Security, "You are here"). It uses the existing ecosystem-card pattern and the existing external-link attributes.
- Modified: `styles.css`. The "You are here" card background is now solid (`color-mix(gold 4%, void)`); it previously showed the grid's hairline colour through a transparent fill and read as brown. Lifecycle labels are enlarged on phones.
- No technology list, accreditations or product names added.

## Phase 7 — Insights, hidden templates, consultation gateway (2026-09-26)

- Added: `insights.html` (`/insights`). Launches with the honest empty state ("Field notes are in preparation") and lists the Plan's eleven topic areas, each tagged "In preparation". No articles and no filler.
- Added: `case-studies/template.html` (`/case-studies/template`). Uses the Plan's capture fields: client situation, initial problem, constraints, assessment, solution architecture, work completed, technology involved, operational result, handover, ongoing relationship. `noindex, nofollow`; excluded from nav, footer and sitemap. Contains `[OWNER TO CONFIRM: …]` placeholders by design; it is not an indexable page.
- Added: `insights/template.html` (`/insights/template`). Shared article template for owner-written field notes. `noindex, nofollow`; not linked; not in the sitemap. Placeholders by design.
- Modified: `contact.html`. The existing Formspree form (same endpoint, same `_subject`/`_next`) is extended into a qualification gateway. It asks for the Plan's fields: organisation, sector, number of locations, approximate user/device estate, current IT arrangement, existing provider or internal IT status, primary problem, required outcome, urgency, relevant infrastructure, security concerns, and project or ongoing requirement. The same list is shown as a "What we will ask" checklist. The primary problem keeps `name="message"` for continuity. The existing "What happens next" steps and direct email are kept. No backend added and no new contact details. The area-of-interest list now includes the three expansion disciplines.
- Modified: `sitemap.xml` (+1: `/insights`). Templates are excluded.

## Phase 8 — Home page refresh (2026-09-26)

- Modified: `index.html`
  - Hero and authority strip kept verbatim (headline structure unchanged). The ambient cyber-blue glow is deepened in CSS.
  - Discipline grid: the eight core cards now link to their own pages (whole card clickable), followed by the three expansion disciplines. The heading reads "Eleven Disciplines. One Partner."
  - Added an Engagement Models strip (five models linked to `/engagement` anchors) and a Sectors strip (seven sectors plus "All Sectors"), which replaces the "Who We Work With" list.
  - Ecosystem panel and consultation CTA kept.
  - JSON-LD: the existing `ProfessionalService` block is kept, and an `Organization` block is added (name, url, logo, email only; no ratings or reviews). This block has been present since Phase 2.
- Modified: `styles.css`. The ecosystem section's eyebrow and heading are now centred to match its rule and intro. Section rhythm alternates the void background with the derived `--kt-band` surface.
