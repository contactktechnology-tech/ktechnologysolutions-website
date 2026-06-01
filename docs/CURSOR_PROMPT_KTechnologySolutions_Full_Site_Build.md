# CURSOR AI AGENT — MASTER PROMPT
# KTechnology Solutions: Full Site Elevation — KABSolutions Design System
# Version: FINAL | Site: ktechnologysolutions.co.uk | Deployment: Vercel Static HTML/CSS/JS
# Audit basis: Live review of both kabsolutions.co.uk and ktechnologysolutions.co.uk — June 2026

---

## ROLE

You are a senior frontend engineer applying an established, audited design system from a live sister site (kabsolutions.co.uk) to a sister brand (ktechnologysolutions.co.uk). You do not invent new patterns. You port, adapt, and apply what already works — with precision — to the new context.

The goal is that a visitor who knows KABSolutions will immediately recognise this as a sibling of the same ecosystem. A visitor who does not will experience the same premium, calm, authoritative quality.

---

## GOVERNING PRINCIPLES — READ BEFORE TOUCHING ANY FILE

**1. Sister brand, not clone.**
KTechnology Solutions shares the same visual language as KABSolutions. It does not share the same content, tone, or accent use. KABSolutions is a strategy and analytics firm. KTechnology Solutions is a technical delivery company. The typography and layout system is identical. The emphasis colour accents (cyber blue, secure green) are new and specific to this brand — but used with the same restraint as gold on KABSolutions.

**2. The overbuilding rule applies here too.**
Do not add pages, sections, or components beyond those specified. Restraint is architecture.

**3. Every piece of copy in this prompt is final.**
Do not rewrite, summarise, or improve the content. Use it exactly as written.

---

## DESIGN SYSTEM — COMPLETE

### CSS Custom Properties
Add these to the `:root` of the global stylesheet. The KABSolutions variables are inherited for ecosystem alignment; the KT-specific extensions are new.

```css
:root {
  /* ── Shared ecosystem base ── */
  --kt-bg:             #050816;
  --kt-text-primary:   #f5f1e8;
  --kt-text-muted:     #9ca3af;
  --kt-gold:           #d2b77b;
  --kt-border:         rgba(210, 183, 123, 0.18);
  --kt-hover-bg:       rgba(210, 183, 123, 0.06);
  --kt-hover-glow:     rgba(210, 183, 123, 0.12);
  --kt-surface:        rgba(255, 255, 255, 0.025);
  --kt-text-dim:       rgba(245, 241, 232, 0.45);
  --kt-grid-line:      rgba(210, 183, 123, 0.07);

  /* ── KTechnology-specific accents ── */
  --kt-cyber-blue:     #1f6feb;
  --kt-secure-green:   #2f9e44;
  --kt-blue-border:    rgba(31, 111, 235, 0.2);
  --kt-blue-glow:      rgba(31, 111, 235, 0.08);
  --kt-green-border:   rgba(47, 158, 68, 0.2);

  /* ── Layout ── */
  --kt-section-gap:    120px;
  --kt-content-width:  1160px;
}
```

### Accent Colour Usage Rules

| Colour | Hex | Use for |
|---|---|---|
| Gold `--kt-gold` | `#d2b77b` | Primary CTA buttons, eyebrow labels, ecosystem brand marks, section separators, service number accents |
| Cyber Blue `--kt-cyber-blue` | `#1f6feb` | Cyber security service category, security-related tags, one accent per page maximum |
| Secure Green `--kt-secure-green` | `#2f9e44` | Operational resilience, uptime/reliability signals, one accent per page maximum |

**Rule:** Blue and green are contextual signals — they appear in service category labels and one or two icon/marker uses. They never appear in buttons, borders, or background fills. Gold remains the primary premium accent.

---

## TYPOGRAPHY SYSTEM

Add this Google Fonts import to the `<head>` of every HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bentham&family=Raleway:wght@300;400;500;600&family=Lato:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
```

### Typography Rules (identical to KABSolutions)

```css
/* ── DISPLAY: Bentham ── */
h1 {
  font-family: 'Bentham', Georgia, serif;
  font-weight: 400;
  font-size: clamp(2.8rem, 5.5vw, 4.6rem);
  letter-spacing: 0.01em;
  line-height: 1.12;
  color: var(--kt-text-primary);
  max-width: 820px;
}

h2 {
  font-family: 'Bentham', Georgia, serif;
  font-weight: 400;
  font-size: clamp(2rem, 3.5vw, 3rem);
  letter-spacing: 0.015em;
  line-height: 1.2;
  color: var(--kt-text-primary);
  max-width: 680px;
}

h1 em, h2 em {
  font-style: italic;
  color: var(--kt-gold);
  font-family: 'Bentham', Georgia, serif;
}

blockquote p {
  font-family: 'Bentham', Georgia, serif;
  font-size: clamp(1.25rem, 2.2vw, 1.6rem);
  font-style: italic;
  line-height: 1.65;
  color: var(--kt-text-primary);
}

/* ── UI: Raleway ── */
h3 {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--kt-gold);
  line-height: 1.4;
}

.eyebrow {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--kt-text-dim);
  display: block;
  margin-bottom: 16px;
}

nav a { font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; }
.cta-btn { font-family: 'Raleway', sans-serif; font-weight: 500; font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; }
.cta-secondary { font-family: 'Raleway', sans-serif; font-weight: 400; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; }

/* ── BODY: Lato ── */
body { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1.05rem; line-height: 1.8; color: var(--kt-text-muted); -webkit-font-smoothing: antialiased; }
p { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1.05rem; line-height: 1.8; color: var(--kt-text-muted); }
li { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1rem; line-height: 1.75; }
.hero-sub, .page-hero-sub { font-family: 'Lato', sans-serif; font-weight: 300; font-size: clamp(1.05rem, 1.6vw, 1.2rem); line-height: 1.78; }
.service-desc, .resource-desc { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1rem; line-height: 1.78; }
```

---

## GLOBAL COMPONENTS (port from KABSolutions exactly)

### CTA Button System

```css
.cta-btn {
  display: inline-block;
  padding: 13px 28px;
  background: transparent;
  color: var(--kt-gold);
  border: 1px solid var(--kt-gold);
  border-radius: 3px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.cta-btn:hover, .cta-btn:focus {
  background: var(--kt-hover-bg);
  box-shadow: 0 0 18px var(--kt-hover-glow);
  color: var(--kt-gold);
  outline: none;
}
.cta-btn:focus-visible {
  outline: 2px solid var(--kt-gold);
  outline-offset: 3px;
}
.cta-secondary {
  color: var(--kt-text-muted);
  text-decoration: none;
  border-bottom: 1px solid rgba(156, 163, 175, 0.3);
  padding-bottom: 2px;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.cta-secondary:hover { color: var(--kt-gold); border-color: var(--kt-gold); }
```

### Section Separator

```css
.section-sep { width: 48px; height: 1px; background: var(--kt-gold); margin: 0 auto 48px; opacity: 0.6; }
.section-sep--left { margin: 0 0 48px; }
```

### Global Section Spacing

```css
section, .page-section { padding: var(--kt-section-gap) 0; }
.section-inner { max-width: var(--kt-content-width); margin: 0 auto; padding: 0 40px; }
@media (max-width: 768px) { section, .page-section { padding: 72px 0; } .section-inner { padding: 0 24px; } }
```

### Page Hero Pattern

```css
.page-hero { padding: 100px 0 72px; border-bottom: 1px solid var(--kt-border); }
.page-hero h1 { max-width: 720px; }
.page-hero-sub { max-width: 560px; margin-top: 24px; font-size: clamp(1.05rem, 1.6vw, 1.2rem); line-height: 1.75; }
```

---

## PART 1 — NAVIGATION (all pages)

### Navigation HTML

```html
<header class="site-header" role="banner">
  <div class="header-inner">
    <a href="/" class="site-logo" aria-label="KTechnology Solutions — Home">
      <img src="/assets/ktechnology-header-logo.png" alt="KTechnology Solutions" width="180" height="auto">
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/approach">Approach</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact" class="cta-btn nav-cta">Request a Consultation</a></li>
      </ul>
    </nav>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

### Navigation CSS

```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--kt-border);
  background: rgba(5, 8, 22, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.header-inner {
  max-width: var(--kt-content-width);
  margin: 0 auto;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo img { height: 36px; width: auto; display: block; }

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-family: 'Raleway', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--kt-text-muted);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-links a:hover,
.nav-links a[aria-current="page"] { color: var(--kt-text-primary); }

.nav-cta { padding: 9px 20px; margin-left: 8px; }

/* Mobile toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 22px;
  height: 1px;
  background: var(--kt-text-muted);
  transition: all 0.25s ease;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  /* Mobile nav open state */
  .site-header.nav-open .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 72px; left: 0; right: 0;
    background: var(--kt-bg);
    border-bottom: 1px solid var(--kt-border);
    padding: 32px 40px;
    gap: 24px;
  }
  .nav-cta { margin-left: 0; }
}

@media (max-width: 640px) {
  .site-header.nav-open .nav-links { padding: 24px; }
}
```

### Nav Toggle JS (add to `scripts.js`)

```javascript
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
if (toggle && header) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open.toString());
  });
}
```

---

## PART 2 — HOMEPAGE (index.html)

Replace the existing homepage content entirely with the following structure. Preserve all existing `<head>` metadata (title, canonical, OG, schema).

### 2A — Hero Section

```html
<section class="hero" aria-label="Homepage hero">
  <div class="hero-grid-overlay" aria-hidden="true"></div>
  <div class="hero-inner">
    <span class="eyebrow">Technology Infrastructure &amp; Cyber Security</span>
    <h1>Technology Infrastructure Built for<br><em>Secure, Scalable</em> Business Operations</h1>
    <p class="hero-sub">
      KTechnology Solutions helps businesses design, deploy, secure, and maintain the technology infrastructure that supports modern operations, productivity, communication, and growth.
    </p>
    <div class="hero-actions">
      <a href="/contact" class="cta-btn">Request a Consultation</a>
      <a href="/services" class="cta-secondary">Explore Our Services</a>
    </div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 160px 0 100px;
  overflow: hidden;
}

.hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--kt-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--kt-grid-line) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

.hero::before {
  content: '';
  position: absolute;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(31, 111, 235, 0.03) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
}

.hero-sub {
  max-width: 620px;
  margin: 28px auto 48px;
}

.hero-actions {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hero { min-height: 80vh; padding: 120px 0 72px; }
  .hero-inner { padding: 0 24px; }
}
```

### 2B — Authority Strip

```html
<div class="authority-strip" aria-label="Positioning signals">
  <div class="authority-inner">
    <div class="authority-item">
      <span class="authority-label">Discipline</span>
      <span class="authority-value">Infrastructure Before Improvisation</span>
    </div>
    <div class="authority-divider" aria-hidden="true"></div>
    <div class="authority-item">
      <span class="authority-label">Focus</span>
      <span class="authority-value">Secure, Reliable UK Operations</span>
    </div>
    <div class="authority-divider" aria-hidden="true"></div>
    <div class="authority-item">
      <span class="authority-label">Delivery</span>
      <span class="authority-value">Design, Deploy, Protect, Support</span>
    </div>
    <div class="authority-divider" aria-hidden="true"></div>
    <div class="authority-item">
      <span class="authority-label">Ecosystem</span>
      <span class="authority-value">K Gabriel Kaseke Group</span>
    </div>
  </div>
</div>
```

```css
.authority-strip { border-top: 1px solid var(--kt-border); border-bottom: 1px solid var(--kt-border); padding: 32px 0; }
.authority-inner { max-width: var(--kt-content-width); margin: 0 auto; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
.authority-item { display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 160px; }
.authority-label { font-family: 'Raleway', sans-serif; font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--kt-text-dim); }
.authority-value { font-family: 'Bentham', Georgia, serif; font-size: clamp(1rem, 1.4vw, 1.1rem); font-weight: 400; color: var(--kt-text-primary); }
.authority-divider { width: 1px; height: 36px; background: var(--kt-border); flex-shrink: 0; }
@media (max-width: 768px) { .authority-divider { display: none; } .authority-inner { gap: 32px; } }
```

### 2C — Services Overview (Homepage)

```html
<section class="page-section" aria-label="Services overview">
  <div class="section-inner">
    <span class="eyebrow">Services</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h2>Corporate Technology Capability.<br><em>Eight Disciplines. One Partner.</em></h2>
    <p class="section-intro">Technology infrastructure without the noise of generic IT templates. Eight focused disciplines delivered with professional precision.</p>

    <div class="services-grid">

      <article class="service-card">
        <span class="service-code">01</span>
        <h3 class="service-title">IT Infrastructure</h3>
        <p class="service-desc">Servers, endpoints, and core systems planned for stability, scale, and clear ownership.</p>
        <p class="service-tagline">Stable. Scalable. Owned.</p>
        <a href="/services#infrastructure" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code sec">SEC</span>
        <h3 class="service-title">Cyber Security</h3>
        <p class="service-desc">Practical protection, policy alignment, and guidance that respects operational reality.</p>
        <p class="service-tagline">Protected. Policy-aligned. Practical.</p>
        <a href="/services#cyber" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code">NET</span>
        <h3 class="service-title">Network Architecture</h3>
        <p class="service-desc">Business networks, Wi-Fi, and connectivity designed for multi-site and office environments.</p>
        <p class="service-tagline">Connected. Resilient. Designed to scale.</p>
        <a href="/services#network" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code">CLD</span>
        <h3 class="service-title">Cloud &amp; Devices</h3>
        <p class="service-desc">Microsoft 365, cloud migration, device management, backup, and recovery you can trust.</p>
        <p class="service-tagline">Migrated. Managed. Recoverable.</p>
        <a href="/services#cloud" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code">SYS</span>
        <h3 class="service-title">Business Systems</h3>
        <p class="service-desc">Deployment and integration of operational systems that teams actually use.</p>
        <p class="service-tagline">Deployed. Integrated. Adopted.</p>
        <a href="/services#systems" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code">COM</span>
        <h3 class="service-title">Communications</h3>
        <p class="service-desc">Voice, collaboration, and connectivity infrastructure for distributed teams.</p>
        <p class="service-tagline">Clear. Reliable. Built for distributed work.</p>
        <a href="/services#comms" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code">SUP</span>
        <h3 class="service-title">Corporate Support</h3>
        <p class="service-desc">Managed IT and technology support structured for professional service standards.</p>
        <p class="service-tagline">Responsive. Structured. Professional.</p>
        <a href="/services#support" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

      <article class="service-card">
        <span class="service-code res">RES</span>
        <h3 class="service-title">Operational Resilience</h3>
        <p class="service-desc">Audits, continuity thinking, and infrastructure that keeps working under pressure.</p>
        <p class="service-tagline">Audited. Resilient. Always operational.</p>
        <a href="/services#resilience" class="service-link">Explore Service <span aria-hidden="true">→</span></a>
      </article>

    </div>
  </div>
</section>
```

```css
/* ── Service card system — identical structure to KABSolutions ── */
.section-intro {
  font-family: 'Lato', sans-serif;
  font-size: 1.05rem;
  line-height: 1.78;
  color: var(--kt-text-muted);
  max-width: 560px;
  margin: 20px 0 56px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: var(--kt-border);
  border: 1px solid var(--kt-border);
}

.service-card {
  background: var(--kt-bg);
  padding: 48px 40px;
  position: relative;
  transition: background 0.35s ease;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: var(--kt-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover { background: var(--kt-surface); }
.service-card:hover::before { transform: scaleX(1); }

.service-code {
  font-family: 'Bentham', Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  color: var(--kt-gold);
  opacity: 0.3;
  line-height: 1;
  display: block;
  letter-spacing: 0.05em;
}

/* Cyber security code — subtle blue tint */
.service-code.sec {
  color: var(--kt-cyber-blue);
  opacity: 0.5;
}

/* Resilience code — subtle green tint */
.service-code.res {
  color: var(--kt-secure-green);
  opacity: 0.5;
}

.service-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--kt-text-primary);
  margin: 0;
}

.service-tagline {
  font-family: 'Bentham', Georgia, serif;
  font-size: 1rem;
  font-style: italic;
  color: var(--kt-gold);
  opacity: 0.75;
  margin: 0;
}

.service-link {
  font-family: 'Raleway', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--kt-text-muted);
  text-decoration: none;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--kt-border);
  transition: color 0.25s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.service-link:hover { color: var(--kt-gold); }

@media (max-width: 768px) { .services-grid { grid-template-columns: 1fr 1fr; } .service-card { padding: 36px 28px; } }
@media (max-width: 480px) { .services-grid { grid-template-columns: 1fr; } }
```

### 2D — Ecosystem Section (Homepage — unique to KTechnology)

This section is one of KTechnology's most important trust signals — it anchors the brand within the K Gabriel Kaseke group. It must be architecturally elegant.

```html
<section class="page-section ecosystem-section" aria-label="Business ecosystem">
  <div class="section-inner">
    <span class="eyebrow">The Ecosystem</span>
    <div class="section-sep" aria-hidden="true"></div>
    <h2>Part of a Disciplined<br><em>Business Ecosystem</em></h2>
    <p class="section-intro" style="margin: 20px auto 56px; text-align: center;">KTechnology Solutions is the practical technology engine — distinct from strategic authority and business intelligence, but aligned in standards and intent.</p>

    <div class="ecosystem-grid">

      <div class="ecosystem-card">
        <span class="ecosystem-label">Strategic Authority</span>
        <h3 class="ecosystem-brand">K Gabriel Kaseke</h3>
        <p class="ecosystem-desc">Executive direction, thought leadership, and strategic positioning across the group.</p>
        <a href="https://kgabrielkaseke.com" class="ecosystem-link" target="_blank" rel="noopener">kgabrielkaseke.com <span aria-hidden="true">→</span></a>
      </div>

      <div class="ecosystem-card">
        <span class="ecosystem-label">Business Intelligence &amp; Analytics</span>
        <h3 class="ecosystem-brand">KABSolutions</h3>
        <p class="ecosystem-desc">Data, analytics, and intelligence that turn fragmented information into commercial decisions and measurable growth.</p>
        <a href="https://www.kabsolutions.co.uk" class="ecosystem-link" target="_blank" rel="noopener">kabsolutions.co.uk <span aria-hidden="true">→</span></a>
      </div>

      <div class="ecosystem-card ecosystem-card--current">
        <span class="ecosystem-label">Technology Infrastructure</span>
        <h3 class="ecosystem-brand">KTechnology Solutions</h3>
        <p class="ecosystem-desc">Builds, secures, and supports the systems businesses rely on — from infrastructure to operational resilience.</p>
        <span class="ecosystem-current-mark">You are here</span>
      </div>

    </div>
  </div>
</section>
```

```css
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--kt-border);
  border: 1px solid var(--kt-border);
}

.ecosystem-card {
  background: var(--kt-bg);
  padding: 52px 44px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: background 0.3s ease;
}

.ecosystem-card:hover { background: var(--kt-surface); }

/* Current page card — subtly highlighted */
.ecosystem-card--current {
  background: rgba(210, 183, 123, 0.03);
  border-top: 2px solid var(--kt-gold);
}

.ecosystem-label {
  font-family: 'Raleway', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--kt-text-dim);
}

.ecosystem-brand {
  font-family: 'Bentham', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--kt-text-primary);
  text-transform: none;
  letter-spacing: 0.02em;
  line-height: 1.2;
}

.ecosystem-desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--kt-text-muted);
  flex-grow: 1;
}

.ecosystem-link {
  font-family: 'Raleway', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--kt-text-muted);
  text-decoration: none;
  padding-top: 16px;
  border-top: 1px solid var(--kt-border);
  transition: color 0.25s ease;
  margin-top: auto;
}
.ecosystem-link:hover { color: var(--kt-gold); }

.ecosystem-current-mark {
  font-family: 'Raleway', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--kt-gold);
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--kt-border);
}

@media (max-width: 768px) { .ecosystem-grid { grid-template-columns: 1fr; } .ecosystem-card { padding: 40px 28px; } .ecosystem-card--current { border-top-width: 2px; } }
```

### 2E — Who We Work With (Homepage)

```html
<section class="page-section" style="border-top: 1px solid var(--kt-border);">
  <div class="section-inner">
    <span class="eyebrow">Clients</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h2>Who We Work With</h2>
    <p class="section-intro">UK organisations that need dependable infrastructure — not consumer repair rhetoric.</p>

    <div class="client-grid">
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>SMEs &amp; professional service firms</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Facilities management companies</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Clinics &amp; care providers</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Hospitality &amp; retail businesses</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Offices &amp; multi-site businesses</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Local authorities</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Subcontract &amp; project delivery partners</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Larger organisations needing regional technical delivery</p></div>
    </div>
  </div>
</section>
```

```css
.client-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--kt-border);
  max-width: var(--kt-content-width);
  margin: 0 auto;
}

.client-item {
  padding: 28px 36px;
  border-right: 1px solid var(--kt-border);
  border-bottom: 1px solid var(--kt-border);
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.client-item:nth-child(even) { border-right: none; }

.client-mark {
  color: var(--kt-gold);
  font-family: 'Bentham', Georgia, serif;
  font-size: 1.2rem;
  line-height: 1.75;
  flex-shrink: 0;
  opacity: 0.5;
}

.client-item p { font-size: 1rem; line-height: 1.7; margin: 0; }

@media (max-width: 640px) { .client-grid { grid-template-columns: 1fr; } .client-item { border-right: none; } }
```

### 2F — Homepage CTA

```html
<section class="page-section cta-section" style="border-top: 1px solid var(--kt-border);">
  <div class="section-inner" style="text-align: center;">
    <span class="eyebrow">Technology Consultation</span>
    <div class="section-sep" aria-hidden="true"></div>
    <h2>Ready to Strengthen Your<br><em>Technology Foundation?</em></h2>
    <p style="max-width: 520px; margin: 0 auto 48px; font-size: 1.05rem;">Whether you need managed support, a network deployment, or a structured technology audit, we will respond with clear, proportionate next steps.</p>
    <div style="display: flex; gap: 24px; justify-content: center; align-items: center; flex-wrap: wrap;">
      <a href="/contact" class="cta-btn">Request a Consultation</a>
      <a href="/services" class="cta-secondary">View All Services</a>
    </div>
  </div>
</section>
```

---

## PART 3 — SERVICES PAGE (services.html)

### Page Hero

```html
<section class="page-hero">
  <div class="section-inner">
    <span class="eyebrow">Services</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h1>Eight Disciplines.<br><em>One Technology Partner.</em></h1>
    <p class="page-hero-sub">Technology infrastructure delivered without the noise of generic IT templates. From cyber security to operational resilience — every service structured for professional organisations.</p>
  </div>
</section>
```

### Service Detail Sections

For each of the eight services, create a detailed section using this structure. All eight are below.

```html
<section class="service-detail page-section" id="infrastructure">
  <div class="section-inner">
    <div class="service-detail-layout">
      <div class="service-detail-header">
        <span class="service-code-large">01</span>
        <span class="eyebrow">IT Infrastructure</span>
        <div class="section-sep section-sep--left" aria-hidden="true"></div>
        <h2>Servers, Endpoints,<br><em>and Core Systems</em></h2>
      </div>
      <div class="service-detail-body">
        <p>Reliable technology infrastructure begins with a clear understanding of what the business actually needs — not what a vendor template suggests. We assess, design, and deploy server environments, endpoint configurations, and core business systems built for the scale and operational demands of your organisation.</p>
        <p>Infrastructure that is poorly specified costs more to maintain, fails more frequently, and limits growth. Infrastructure that is designed with clear ownership, documented configuration, and appropriate redundancy becomes a business asset.</p>
        <div class="service-detail-points">
          <div class="detail-point"><span class="point-mark" aria-hidden="true">—</span><p>Server environment design and deployment</p></div>
          <div class="detail-point"><span class="point-mark" aria-hidden="true">—</span><p>Endpoint configuration and management</p></div>
          <div class="detail-point"><span class="point-mark" aria-hidden="true">—</span><p>Core business system installation and integration</p></div>
          <div class="detail-point"><span class="point-mark" aria-hidden="true">—</span><p>Infrastructure documentation and ownership planning</p></div>
          <div class="detail-point"><span class="point-mark" aria-hidden="true">—</span><p>Scalability and upgrade pathway design</p></div>
        </div>
        <a href="/contact" class="cta-btn" style="margin-top: 32px; display: inline-block;">Request a Consultation</a>
      </div>
    </div>
  </div>
</section>
```

Repeat this structure for all eight services using the content below:

**Service 02 — Cyber Security** (`id="cyber"`) — `service-code-large` text: `SEC`
- Eyebrow: `Cyber Security`
- Heading: `Practical Protection, <em>Policy-Led</em>`
- Para 1: Cyber security that respects operational reality is more effective than theoretical compliance. We help businesses understand their actual threat exposure, implement proportionate controls, and build policies that teams will follow because they make operational sense.
- Para 2: Security posture is not achieved through a single audit or a purchased product. It develops through structured assessment, practical guidance, clear policy, and ongoing attention. We work alongside your team to make security a managed discipline rather than an afterthought.
- Points: Threat exposure assessment / Policy development and alignment / Staff awareness and guidance / Email security and access control / Endpoint protection configuration / Incident response preparation

**Service 03 — Network Architecture** (`id="network"`) — code: `NET`
- Eyebrow: `Network Architecture`
- Heading: `Business Networks Built for <em>Reliability</em>`
- Para 1: Network infrastructure is the foundation everything else depends on. When it is poorly designed, every other system underperforms. We design and deploy business networks, Wi-Fi environments, and connectivity infrastructure that are proportionate to the organisation, properly segmented, and built to handle real operational load.
- Para 2: Multi-site and office environments require different approaches. We assess connectivity requirements, design appropriate network architecture, and deploy infrastructure that gives your business reliable, fast, and secure connectivity across every location it operates from.
- Points: Business network design and deployment / Wi-Fi survey, design, and installation / Multi-site connectivity planning / Network segmentation and access control / VPN and remote access configuration / Connectivity performance assessment

**Service 04 — Cloud & Devices** (`id="cloud"`) — code: `CLD`
- Eyebrow: `Cloud & Devices`
- Heading: `Microsoft 365, Cloud Migration, <em>and Device Management</em>`
- Para 1: Cloud adoption done well reduces complexity and improves operational flexibility. Done poorly, it creates fragmented access, unclear ownership, and significant security exposure. We plan and execute cloud migrations that are structured, documented, and tested before they go live.
- Para 2: Device management across a growing business requires clear policy and consistent configuration. We deploy Microsoft 365, manage device enrolment and policy, configure backup and recovery, and ensure every device connected to your systems meets the same baseline standard.
- Points: Microsoft 365 deployment and configuration / Cloud migration planning and execution / Device enrolment and management (MDM) / Backup and recovery configuration / Data retention and policy alignment / Licensing review and optimisation

**Service 05 — Business Systems** (`id="systems"`) — code: `SYS`
- Eyebrow: `Business Systems`
- Heading: `Operational Systems That <em>Teams Actually Use</em>`
- Para 1: Technology deployment succeeds when it is matched to how the business actually operates. We assess the operational systems a business needs, select appropriate solutions, and deploy and integrate them in a way that reduces friction rather than creating it.
- Para 2: Implementation without adoption is wasted investment. We work with your team through deployment to ensure the systems are configured correctly, staff are able to use them effectively, and the integration between systems reflects how the business actually works.
- Points: Operational system selection and deployment / CRM and business application integration / Workflow configuration and optimisation / System integration and data flow design / Staff onboarding and adoption support / Ongoing system review and improvement

**Service 06 — Communications** (`id="comms"`) — code: `COM`
- Eyebrow: `Communications`
- Heading: `Voice and Collaboration Infrastructure <em>for Distributed Teams</em>`
- Para 1: Communication infrastructure that does not work reliably is a direct operational cost — in time, productivity, and client experience. We design and deploy voice, collaboration, and connectivity systems that give your team reliable communication tools, regardless of where they are working from.
- Para 2: Distributed working requires communication infrastructure that is both dependable and appropriately controlled. We configure systems that maintain call quality, collaboration capability, and data security across all the environments your team operates in.
- Points: VoIP and business telephony deployment / Microsoft Teams and collaboration platform configuration / Call routing and hunt group configuration / Video conferencing infrastructure / Remote and hybrid working connectivity / Communication system documentation and support

**Service 07 — Corporate Support** (`id="support"`) — code: `SUP`
- Eyebrow: `Corporate Support`
- Heading: `Managed IT Support for <em>Professional Organisations</em>`
- Para 1: Technology support for professional organisations requires response standards, clear communication, and structured escalation — not a helpdesk queue. We provide managed IT support designed for businesses that cannot afford extended downtime and need issues resolved without excessive delay.
- Para 2: Support relationships work best when the technology is well-documented and the support team has a clear understanding of how the business operates. We invest time at the start of every support engagement to understand your infrastructure, your priorities, and your operational dependencies.
- Points: Managed IT support and helpdesk / Proactive monitoring and maintenance / Patch management and update scheduling / Incident response and escalation / IT documentation and asset management / Regular service review and reporting

**Service 08 — Operational Resilience** (`id="resilience"`) — code: `RES`
- Eyebrow: `Operational Resilience`
- Heading: `Infrastructure That Keeps Working <em>Under Pressure</em>`
- Para 1: Operational resilience is not about preventing every failure — it is about ensuring the business can continue operating when something goes wrong. We audit the current state of your technology infrastructure, identify single points of failure, and design proportionate redundancy and recovery arrangements.
- Para 2: Business continuity thinking applied to technology infrastructure produces clearer recovery plans, better-documented systems, and a more confident leadership team. We work through audit, design, and implementation to make resilience a practical reality rather than a documented intention.
- Points: Technology infrastructure audit / Single point of failure identification / Business continuity planning / Disaster recovery design and testing / Backup verification and recovery testing / Continuity documentation and team briefing

### Service Detail CSS

```css
.service-detail {
  border-top: 1px solid var(--kt-border);
}

.service-detail-layout {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px;
  align-items: start;
}

.service-code-large {
  font-family: 'Bentham', Georgia, serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--kt-gold);
  opacity: 0.2;
  display: block;
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.service-detail-body p { font-size: 1.02rem; line-height: 1.82; margin-bottom: 24px; }

.service-detail-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--kt-border);
}

.detail-point { display: flex; gap: 16px; align-items: flex-start; }
.point-mark { color: var(--kt-gold); font-family: 'Bentham', serif; font-size: 1.1rem; line-height: 1.6; flex-shrink: 0; opacity: 0.5; }
.detail-point p { font-size: 0.98rem; line-height: 1.7; margin: 0; }

@media (max-width: 900px) { .service-detail-layout { grid-template-columns: 1fr; gap: 40px; } }
```

---

## PART 4 — APPROACH PAGE (approach.html)

```html
<section class="page-hero">
  <div class="section-inner">
    <span class="eyebrow">Our Approach</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h1>How We Work.<br><em>What You Can Expect.</em></h1>
    <p class="page-hero-sub">Technology infrastructure engagements succeed when they are structured, documented, and aligned to how the business actually operates. This is how we deliver.</p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <span class="eyebrow">Delivery Process</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h2>A Structured Approach to<br><em>Technology Delivery</em></h2>

    <div class="approach-timeline">

      <div class="approach-step">
        <div class="step-marker">
          <span class="step-number">01</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3>Discovery &amp; Infrastructure Assessment</h3>
          <p>We assess the current state of your technology environment — existing infrastructure, connectivity, devices, systems, security posture, and any known constraints or vulnerabilities. We ask questions that matter and document what we find.</p>
        </div>
      </div>

      <div class="approach-step">
        <div class="step-marker">
          <span class="step-number">02</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3>Design &amp; Specification</h3>
          <p>We design the right solution for your operational requirements — not the most complex, not the cheapest, but the most appropriate. Every design decision is documented and explained so your team understands what is being built and why.</p>
        </div>
      </div>

      <div class="approach-step">
        <div class="step-marker">
          <span class="step-number">03</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3>Deployment &amp; Configuration</h3>
          <p>Implementation is managed with minimal disruption to operations. We configure, test, and verify every component before handover. Where migration is involved, we plan the transition carefully to protect continuity and data integrity.</p>
        </div>
      </div>

      <div class="approach-step">
        <div class="step-marker">
          <span class="step-number">04</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3>Handover &amp; Documentation</h3>
          <p>Every engagement concludes with clear documentation — what was built, how it is configured, and what your team needs to know. You own the knowledge, not just the hardware. Ongoing support arrangements are agreed separately.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="page-section" style="border-top: 1px solid var(--kt-border);">
  <div class="section-inner">
    <span class="eyebrow">Standards</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h2>What We Will Never Do</h2>
    <div class="client-grid" style="margin-top: 40px;">
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Recommend more complexity than the situation requires</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Deploy without testing and verification</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Leave a system undocumented at handover</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Propose solutions that create unnecessary vendor dependency</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Use technical language to obscure rather than clarify</p></div>
      <div class="client-item"><span class="client-mark" aria-hidden="true">—</span><p>Disappear after deployment without a clear next step</p></div>
    </div>
  </div>
</section>
```

```css
.approach-timeline { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 56px auto 0; }
.approach-step { display: grid; grid-template-columns: 56px 1fr; gap: 32px; }
.step-marker { display: flex; flex-direction: column; align-items: center; }
.step-number { font-family: 'Bentham', Georgia, serif; font-size: 1.1rem; font-weight: 400; color: var(--kt-gold); width: 40px; height: 40px; border: 1px solid var(--kt-border); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: var(--kt-bg); position: relative; z-index: 1; }
.step-line { width: 1px; flex-grow: 1; min-height: 40px; background: linear-gradient(to bottom, var(--kt-gold), transparent); opacity: 0.25; margin-top: 4px; }
.approach-step:last-child .step-line { display: none; }
.step-content { padding-bottom: 52px; }
.step-content h3 { margin-bottom: 12px; color: var(--kt-text-primary); font-size: 0.85rem; }
.step-content p { font-size: 1rem; line-height: 1.78; }
```

---

## PART 5 — ABOUT PAGE (about.html)

```html
<section class="page-hero">
  <div class="section-inner">
    <span class="eyebrow">About</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h1>Technology Infrastructure<br><em>Built to a Standard.</em></h1>
    <p class="page-hero-sub">KTechnology Solutions is the technology infrastructure and cyber security arm of the K Gabriel Kaseke business ecosystem — built to serve organisations that require professional delivery, not generic IT support.</p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <div class="founder-layout">
      <div class="founder-quote-col">
        <blockquote class="founder-quote">
          <p>Technology infrastructure either works or it does not. The difference between organisations that experience it as a foundation and those that experience it as a liability is almost always the quality of the original design, the discipline of the deployment, and the clarity of the documentation.</p>
          <footer class="founder-attribution">
            <span class="founder-name">K. Gabriel Kaseke</span>
            <span class="founder-title">Founder, KTechnology Solutions &amp; KABSolutions</span>
          </footer>
        </blockquote>
      </div>
      <div class="founder-bio-col">
        <p>KTechnology Solutions was established to address a gap in the UK market for technology infrastructure delivery that meets the standards professional organisations actually require. Most IT support providers serve the consumer market poorly adapted for business. Most enterprise providers are inaccessible to SMEs and growing organisations.</p>
        <p>KTechnology Solutions occupies the space between: professional delivery standards, proportionate solutions, and a commitment to documentation and transparency that larger organisations take for granted but most growing businesses never receive.</p>
        <p>As part of the K Gabriel Kaseke ecosystem, KTechnology Solutions operates alongside KABSolutions — the Business Intelligence and Analytics arm — to serve organisations that need both the intelligence layer and the infrastructure layer built to the same standard.</p>
      </div>
    </div>
  </div>
</section>

<section class="page-section" style="border-top: 1px solid var(--kt-border);">
  <div class="section-inner">
    <span class="eyebrow">Operating Principles</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h2>How We Think.<br><em>How We Work.</em></h2>
    <div class="principles-grid">
      <div class="principle">
        <span class="principle-mark" aria-hidden="true">I</span>
        <h3>Infrastructure Before Improvisation</h3>
        <p>We design before we deploy. Every engagement begins with understanding before recommendation.</p>
      </div>
      <div class="principle">
        <span class="principle-mark" aria-hidden="true">II</span>
        <h3>Documentation Is Deliverable</h3>
        <p>A system that cannot be understood by your team is a system you do not fully own. We document everything.</p>
      </div>
      <div class="principle">
        <span class="principle-mark" aria-hidden="true">III</span>
        <h3>Proportionate. Not Oversold.</h3>
        <p>We recommend what your business needs, at the scale it needs it, without unnecessary complexity or vendor pressure.</p>
      </div>
    </div>
  </div>
</section>
```

```css
.founder-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.founder-quote { border-left: 1px solid var(--kt-gold); padding-left: 36px; margin: 0; }
.founder-quote p { font-family: 'Bentham', Georgia, serif; font-size: clamp(1.15rem, 2vw, 1.4rem); font-weight: 400; font-style: italic; line-height: 1.65; color: var(--kt-text-primary); margin-bottom: 28px; }
.founder-attribution { display: flex; flex-direction: column; gap: 4px; }
.founder-name { font-family: 'Raleway', sans-serif; font-size: 0.82rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--kt-text-primary); }
.founder-title { font-family: 'Raleway', sans-serif; font-size: 0.72rem; letter-spacing: 0.08em; color: var(--kt-text-dim); }
.founder-bio-col p { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 1.02rem; line-height: 1.82; margin-bottom: 20px; }
.principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--kt-border); border: 1px solid var(--kt-border); margin-top: 48px; }
.principle { background: var(--kt-bg); padding: 52px 40px; transition: background 0.3s ease; }
.principle:hover { background: var(--kt-surface); }
.principle-mark { font-family: 'Bentham', Georgia, serif; font-size: 1.8rem; font-weight: 400; font-style: italic; color: var(--kt-gold); opacity: 0.4; display: block; margin-bottom: 20px; }
.principle h3 { color: var(--kt-text-primary); font-size: 0.8rem; letter-spacing: 0.12em; margin-bottom: 14px; }
.principle p { font-size: 0.98rem; line-height: 1.75; }
@media (max-width: 900px) { .founder-layout { grid-template-columns: 1fr; gap: 48px; } .principles-grid { grid-template-columns: 1fr; } }
```

---

## PART 6 — CONTACT PAGE (contact.html)

```html
<section class="page-hero">
  <div class="section-inner">
    <span class="eyebrow">Technology Consultation</span>
    <div class="section-sep section-sep--left" aria-hidden="true"></div>
    <h1>Request a<br><em>Technology Consultation</em></h1>
    <p class="page-hero-sub">Tell us about your organisation and the technology challenge you are working through. We will respond with clear, proportionate next steps — no sales script, no pressure.</p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <div class="contact-layout">

      <div class="contact-form-col">
        <form class="consultation-form" action="[FORMSPREE_ENDPOINT]" method="POST" novalidate>
          <div class="form-field">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" autocomplete="name" required>
          </div>
          <div class="form-field">
            <label for="organisation">Organisation</label>
            <input type="text" id="organisation" name="organisation" autocomplete="organization" required>
          </div>
          <div class="form-field">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" autocomplete="email" required>
          </div>
          <div class="form-field">
            <label for="phone">Phone Number (optional)</label>
            <input type="tel" id="phone" name="phone" autocomplete="tel">
          </div>
          <div class="form-field">
            <label for="service">Primary Area of Interest</label>
            <select id="service" name="service">
              <option value="">Select a service area</option>
              <option>IT Infrastructure</option>
              <option>Cyber Security</option>
              <option>Network Architecture</option>
              <option>Cloud &amp; Devices</option>
              <option>Business Systems</option>
              <option>Communications</option>
              <option>Corporate Support</option>
              <option>Operational Resilience</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div class="form-field">
            <label for="message">Tell us about your technology challenge</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="cta-btn">Send Enquiry</button>
          </div>
        </form>
      </div>

      <div class="contact-info-col">
        <div class="contact-info-block">
          <span class="eyebrow">What Happens Next</span>
          <div class="section-sep section-sep--left" aria-hidden="true"></div>
          <div class="approach-timeline" style="max-width: none; margin-top: 24px;">
            <div class="approach-step">
              <div class="step-marker"><span class="step-number">01</span><div class="step-line" aria-hidden="true"></div></div>
              <div class="step-content"><h3>We Review Your Enquiry</h3><p>Every enquiry is read by a member of the team — not triaged by automated process. We assess your situation and determine the right first response.</p></div>
            </div>
            <div class="approach-step">
              <div class="step-marker"><span class="step-number">02</span><div class="step-line" aria-hidden="true"></div></div>
              <div class="step-content"><h3>We Respond With Clarity</h3><p>Our response will be direct and specific to your situation — outlining what we can do, what the next step looks like, and what you should expect from us.</p></div>
            </div>
            <div class="approach-step">
              <div class="step-marker"><span class="step-number">03</span></div>
              <div class="step-content"><h3>We Agree a Starting Point</h3><p>If there is a good fit, we will agree a structured starting point — whether that is a technology audit, a consultation, or a defined project scope.</p></div>
            </div>
          </div>
        </div>
        <div class="contact-direct" style="margin-top: 48px; padding-top: 48px; border-top: 1px solid var(--kt-border);">
          <span class="eyebrow">Direct Contact</span>
          <a href="mailto:info@ktechnologysolutions.co.uk" class="contact-email-link">info@ktechnologysolutions.co.uk</a>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.contact-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; align-items: start; }

/* Form styling — identical to KABSolutions */
.consultation-form { padding: 52px 48px; border: 1px solid var(--kt-border); background: var(--kt-surface); }
.form-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; }
.form-field label { font-family: 'Raleway', sans-serif; font-weight: 400; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--kt-text-dim); }
.form-field input, .form-field textarea, .form-field select { background: transparent; border: none; border-bottom: 1px solid var(--kt-border); padding: 12px 0; color: var(--kt-text-primary); font-family: 'Lato', sans-serif; font-size: 1rem; font-weight: 300; outline: none; transition: border-color 0.25s ease; width: 100%; -webkit-appearance: none; border-radius: 0; }
.form-field input:focus, .form-field textarea:focus, .form-field select:focus { border-bottom-color: var(--kt-gold); }
.form-field textarea { resize: vertical; min-height: 120px; }
.form-field select option { background: var(--kt-bg); color: var(--kt-text-primary); }
.form-submit { margin-top: 40px; }
.form-submit .cta-btn { width: 100%; text-align: center; justify-content: center; display: block; }

.contact-email-link { font-family: 'Bentham', Georgia, serif; font-size: 1.1rem; font-style: italic; color: var(--kt-text-primary); text-decoration: none; display: block; margin-top: 12px; transition: color 0.25s ease; }
.contact-email-link:hover { color: var(--kt-gold); }

@media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; gap: 56px; } .consultation-form { padding: 40px 28px; border-left: none; border-right: none; } }
```

---

## PART 7 — FOOTER (all pages)

```html
<footer class="site-footer" role="contentinfo">
  <div class="footer-main">
    <div class="footer-inner">

      <div class="footer-brand">
        <p class="footer-brand-name">KTECHNOLOGY SOLUTIONS</p>
        <p class="footer-brand-sub">Technology Infrastructure &amp; Cyber Security</p>
        <p class="footer-brand-desc">Designing, deploying, securing, and supporting the technology infrastructure that UK businesses rely on.</p>
        <div class="footer-ecosystem-links">
          <span class="footer-ecosystem-label">Part of the K Gabriel Kaseke ecosystem</span>
          <div class="footer-eco-row">
            <a href="https://kgabrielkaseke.com" target="_blank" rel="noopener" class="footer-eco-link">kgabrielkaseke.com</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.kabsolutions.co.uk" target="_blank" rel="noopener" class="footer-eco-link">kabsolutions.co.uk</a>
          </div>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/approach">Approach</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div class="footer-cta">
        <a href="/contact" class="cta-btn">Request a Consultation</a>
        <p class="footer-email">
          <a href="mailto:info@ktechnologysolutions.co.uk">info@ktechnologysolutions.co.uk</a>
        </p>
      </div>

    </div>
  </div>

  <div class="footer-legal">
    <div class="footer-legal-inner">
      <p class="footer-copyright">&copy; 2026 KTechnology Solutions &mdash; Technology Infrastructure &amp; Cyber Security</p>
      <nav class="footer-legal-links" aria-label="Legal navigation">
        <a href="/terms-of-use">Terms of Use</a>
        <span aria-hidden="true">|</span>
        <a href="/privacy-policy">Privacy &amp; Cookie Policy</a>
        <span aria-hidden="true">|</span>
        <a href="/trading-terms">Trading Terms</a>
      </nav>
    </div>
  </div>
</footer>
```

```css
.site-footer { background: var(--kt-bg); border-top: 1px solid var(--kt-border); }
.footer-main { padding: 80px 0 60px; }
.footer-inner { max-width: var(--kt-content-width); margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1.6fr 1fr 1.2fr; gap: 60px; align-items: start; }
.footer-brand-name { font-family: 'Raleway', sans-serif; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--kt-text-primary); margin: 0 0 8px; }
.footer-brand-sub { font-family: 'Raleway', sans-serif; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--kt-gold); margin: 0 0 20px; }
.footer-brand-desc { font-family: 'Lato', sans-serif; font-size: 0.9rem; font-weight: 300; color: var(--kt-text-muted); line-height: 1.7; max-width: 280px; margin: 0 0 24px; }
.footer-ecosystem-label { font-family: 'Raleway', sans-serif; font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--kt-text-dim); display: block; margin-bottom: 8px; }
.footer-eco-row { display: flex; align-items: center; gap: 10px; }
.footer-eco-link { font-family: 'Raleway', sans-serif; font-size: 0.72rem; letter-spacing: 0.06em; color: var(--kt-text-muted); text-decoration: none; transition: color 0.25s ease; }
.footer-eco-link:hover { color: var(--kt-gold); }
.footer-eco-row span { color: var(--kt-border); font-size: 0.8rem; }
.footer-nav ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.footer-nav a { font-family: 'Raleway', sans-serif; font-size: 0.78rem; letter-spacing: 0.08em; color: var(--kt-text-muted); text-decoration: none; text-transform: uppercase; transition: color 0.25s ease; }
.footer-nav a:hover { color: var(--kt-gold); }
.footer-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }
.footer-email { margin: 0; }
.footer-email a { font-family: 'Lato', sans-serif; font-size: 0.82rem; color: var(--kt-text-muted); text-decoration: none; transition: color 0.25s ease; }
.footer-email a:hover { color: var(--kt-gold); }
.footer-legal { border-top: 1px solid var(--kt-border); padding: 28px 0; }
.footer-legal-inner { max-width: var(--kt-content-width); margin: 0 auto; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
.footer-copyright { font-family: 'Raleway', sans-serif; font-size: 0.78rem; color: var(--kt-text-muted); letter-spacing: 0.04em; margin: 0; }
.footer-legal-links { display: flex; align-items: center; gap: 16px; }
.footer-legal-links a { font-family: 'Raleway', sans-serif; font-size: 0.78rem; color: var(--kt-text-muted); text-decoration: none; letter-spacing: 0.04em; transition: color 0.25s ease; }
.footer-legal-links a:hover { color: var(--kt-gold); }
.footer-legal-links span { color: var(--kt-border); font-size: 0.65rem; }
@media (max-width: 900px) { .footer-inner { grid-template-columns: 1fr 1fr; gap: 48px; } .footer-brand { grid-column: 1 / -1; } }
@media (max-width: 600px) { .footer-inner { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; } .footer-legal-inner { flex-direction: column; text-align: center; padding: 0 24px; } .footer-legal-links { flex-wrap: wrap; justify-content: center; } .footer-main { padding: 60px 0 48px; } }
```

---

## PART 8 — LEGAL PAGES

Create three legal pages: `privacy-policy.html`, `terms-of-use.html`, `trading-terms.html`.

Apply the same page hero pattern. All three pages must reference KTechnology Solutions (not KABSolutions). Adapt the KABSolutions legal pages already built, replacing all brand references, email addresses, and service descriptions for KTechnology Solutions. Contact email: `info@ktechnologysolutions.co.uk`. Domain: `ktechnologysolutions.co.uk`.

---

## PART 9 — SCROLL REVEAL

Add `scripts.js` to all pages and include this scroll reveal system:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open.toString());
    });
  }

  // Scroll reveal
  const targets = document.querySelectorAll(
    '.service-card, .principle, .approach-step, .ecosystem-card, ' +
    '.authority-item, .client-item, .detail-point, .founder-quote'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 55}ms`;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(el => observer.observe(el));
});
```

```css
.service-card, .principle, .approach-step, .ecosystem-card,
.authority-item, .client-item, .detail-point, .founder-quote {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.revealed { opacity: 1; transform: translateY(0); }
```

---

## SITEMAP

Create `sitemap.xml` at the project root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.ktechnologysolutions.co.uk/</loc><lastmod>2026-06-01</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/services</loc><lastmod>2026-06-01</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/approach</loc><lastmod>2026-06-01</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/about</loc><lastmod>2026-06-01</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/contact</loc><lastmod>2026-06-01</lastmod><changefreq>yearly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/privacy-policy</loc><lastmod>2026-06-01</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/terms-of-use</loc><lastmod>2026-06-01</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.ktechnologysolutions.co.uk/trading-terms</loc><lastmod>2026-06-01</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
```

---

## ABSOLUTE SAFETY CONSTRAINTS

- Do NOT convert to React, Next.js, or any framework
- Do NOT introduce npm, webpack, or any build pipeline
- Do NOT add a CMS or server-side runtime
- Do NOT break Vercel static deployment
- Do NOT alter kabsolutions.co.uk in any way — this is a separate site
- Do NOT use `--kt-cyber-blue` or `--kt-secure-green` for buttons, backgrounds, or borders
- Do NOT generate placeholder or filler copy — all text is specified above
- Do NOT add pages beyond those specified

---

## IMPLEMENTATION ORDER

1. Create global stylesheet with all CSS variables and typography
2. Create `scripts.js` with nav toggle + scroll reveal
3. Update Google Fonts import in every HTML file
4. Build `index.html` (Parts 2A–2F)
5. Build `services.html` (Part 3)
6. Build `approach.html` (Part 4)
7. Build `about.html` (Part 5)
8. Build `contact.html` (Part 6)
9. Apply footer to all pages (Part 7)
10. Create three legal pages (Part 8)
11. Create `sitemap.xml`
12. Add scroll reveal CSS to global stylesheet

---

## VALIDATION CHECKLIST

- [ ] Bentham loads and renders on `h1`, `h2`, blockquote on all pages
- [ ] Raleway renders on nav, h3, eyebrows, CTA buttons, all labels
- [ ] Lato renders on all body copy, descriptions, form inputs
- [ ] Hero: precision grid overlay visible, gold italic on `h1 em`
- [ ] Authority strip: four items, correct at all viewports
- [ ] Service cards: 8 cards, gold sweep-line on hover
- [ ] `SEC` and `RES` service codes tinted blue/green respectively
- [ ] Ecosystem section: three cards, gold top-border on current card
- [ ] Client grid: 2-column desktop, 1-column mobile
- [ ] Approach timeline: gold connecting thread visible
- [ ] Principles grid: 3-column desktop, 1-column mobile
- [ ] Founder quote: gold left border, italic Bentham, correct attribution
- [ ] Contact form: bottom-border fields, gold on focus, select dropdown styled
- [ ] Footer: 3-column desktop, stacks at mobile
- [ ] Ecosystem links in footer link to kgabrielkaseke.com and kabsolutions.co.uk
- [ ] Legal pages: correct brand name, email, and domain throughout
- [ ] Sitemap contains all 8 URLs
- [ ] Nav toggle works on mobile
- [ ] Scroll reveal: 12px offset, staggered, smooth
- [ ] Form inputs: `1rem` minimum (iOS no auto-zoom)
- [ ] No console errors on any page
- [ ] No horizontal overflow at any viewport
- [ ] Vercel deployment succeeds

---

## DEPLOYMENT

```bash
git add .
git commit -m "Full site build: KTechnology Solutions — KABSolutions design system applied"
git push
```

Confirm all pages return HTTP 200 on production and typography renders correctly across desktop, tablet, and mobile.
