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
