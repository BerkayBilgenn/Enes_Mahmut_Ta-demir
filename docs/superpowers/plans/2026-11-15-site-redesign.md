# EMT Hukuk Redesign Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver the approved light boutique redesign, remove the announcement, preserve URLs and make every page crawlable as HTML.

**Architecture:** Dependency-free Node static generation from existing content data. Shared semantic templates produce all pages and metadata. Small browser script handles only the mobile menu and article filtering.

**Tech Stack:** Node >=20, HTML, CSS, vanilla JavaScript, Vercel static hosting.

**Spec:** docs/superpowers/specs/2026-11-15-site-redesign-design.md

## Global Constraints
- Keep https://www.emtasdemirhukuk.com and all existing real service/article routes.
- No announcement or other interruptive popup.
- No fabricated credentials, rating or career facts.
- Preserve historical article dates and existing substantive content.
- Real link actions and real not-found status.

## Review Focus
- Direct deep links render useful HTML without JavaScript.
- Unknown paths return 404 rather than the home page.
- Phone, email, maps and related-page links resolve correctly.
- Mobile menu and article filtering work with keyboard and small screens.
- Metadata and structured data match visible page facts and historical dates.

### Task 1: Crawlable route generation
Files: scripts/build.mjs, scripts/serve.mjs, src/site/{content,metadata,render}.js, tests/site.test.mjs, package.json, vercel.json.
Interfaces: content exports site info, page registry and existing data; renderPage(page) returns complete HTML; build writes registry routes and 404.
- [ ] Write output-contract tests, run against the original and observe failures for empty initial HTML and route metadata.
- [ ] Implement real static routes, consistent schema, canonical metadata and a route-driven sitemap.
- [ ] Run node --test and npm run build; expect all checks to pass.

### Task 2: Complete visual system and pages
Files: src/site/render.js, public/site.css, public/site.js, existing content data.
Interfaces: layout and page renderers consume registry; browser script enhances existing semantic HTML.
- [ ] Implement approved header/footer, home, about, practices, practice details, articles, article detail, contact, FAQ and 404.
- [ ] Remove retired React runtime files and announcement component; keep existing useful content and assets.
- [ ] Inspect desktop and mobile, navigation, filtering, focus and no-JS content.

### Task 3: Review and delivery
Files: README.md, docs/delivery.md.
- [ ] Run whole-site build, rendered route checks, internal-link audit and server HTTP checks.
- [ ] Request independent code review and address material findings.
- [ ] Prepare source/patch for existing repository; report exact publication status.
