# EMT Hukuk site redesign

## Intent and approved direction
Remove the phishing announcement overlay and redesign the whole existing law-office site with restrained, premium, light editorial styling. The user selected “Açık, butik ve prestijli”: warm ivory, ink typography, large serif headings and restrained bronze accents. Keep the experience simple and improve crawlability and clear entity information for search and AI retrieval.

## Constraints
- Keep https://www.emtasdemirhukuk.com and all existing real service/article routes.
- Reuse verified name, telephone, email and address from the existing site; no invented lawyers, awards, client counts, reviews, opening hours or credentials.
- Preserve existing substantive article content and historical publication dates. Do not relabel 2024 articles as current guidance.
- No announcement, exit-intent popup, timed loader, fake chat, carousel or unsolicited marketing widgets.
- Native links for phone, email and map. Do not claim to send a form when no backend has confirmed delivery.
- Mobile accessible navigation, keyboard focus, readable contrast, reduced-motion support, real 404 response.

## Approaches
The chosen visual direction is a light, editorial boutique practice. A dark corporate treatment was offered and declined. For implementation, retain the repository and Vercel hosting contract but replace the client-rendered presentation with dependency-free static page generation: the site is informational and needs no application runtime. This is an implementation decision to expose meaningful HTML, make metadata deterministic and reduce payload. Keep the original content data, without icon-library coupling.

## Pages and appearance
Shared ivory header with an EMT monogram, restrained navigation and a “Görüşme planlayın” contact link. Home: asymmetric serif hero, architectural image, short practice introduction, six numbered practice-area rows, selected articles, compact contact band and grounded footer. Inner pages reuse the same spacing and type system. About describes the named lawyer and existing office without unverified career claims. All 16 practice pages have a summary, preserved detail and related navigation. All 13 articles have a historical date, category, short answer/excerpt, readable body and related content. Contact uses working telephone, email and directions links. FAQ uses short office-process answers rather than adding new legal advice. Preserve /sss as a direct page but keep primary navigation compact.

## SEO/GEO
Every route gets an H1, unique title/description, canonical, Open Graph and Twitter metadata. Build a consistent JSON-LD graph for LegalService, Person, WebSite, WebPage, BreadcrumbList and Article where applicable. Remove unverified aggregateRating and guessed coordinates. Generate sitemap from real routes and robots.txt from the canonical origin. Match FAQ schema to visible FAQ content. Explicit authorship/organization, accessible paragraphs, meaningful section headings and concise summaries assist retrieval; no ranking or AI citation guarantees.

## Delivery and validation
Node build produces static dist files for the existing Vercel repository, with extensionless paths and genuine 404 handling. Automated checks validate rendered HTML, route completeness, metadata, schema and internal links. Inspect desktop/mobile layouts and real navigation in a browser. Try to use the existing GitHub/Vercel publication path; if credentials or network restrictions block it, deliver verified source and patch without claiming a live update.
