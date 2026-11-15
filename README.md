# EMT Hukuk & Danışmanlık

Light, editorial law-office site for https://www.emtasdemirhukuk.com.

## Development

Node.js 20.11 or later is required. There are no third-party runtime or build dependencies.

```sh
npm ci
npm run build
npm test
npm run dev
```

Development serves http://localhost:4173 and rebuilds source changes. Refresh the page after rebuilding. Change the port using the PORT environment variable. Preview a completed build using `npm run preview`.

If local servers are unavailable, `node scripts/file-preview.mjs` creates a portable `preview` folder whose relative links open directly as files in an ordinary browser. Do not deploy that folder; production output is `dist`.

## Content and structure

- `src/site/content.js`: office facts, routes, FAQ and selected practices.
- `src/site/render.js`: shared semantic layouts and page renderers.
- `src/site/metadata.js`: canonical URLs, sharing tags and JSON-LD.
- `src/data/servicesData.js`: the 16 existing practice-area entries.
- `src/data/blogData.js`: the 13 existing articles, including original historical publication dates.
- `public/site.css` and `public/site.js`: responsive visual system and progressive enhancement.
- `scripts/build.mjs`: generates all HTML, sitemap.xml and robots.txt from the actual routes.
- `vercel.json`: framework-independent static deployment, clean URLs and 404 handling.

Do not add ratings, credentials, office hours or geographical coordinates unless verified. Existing articles contain legal information from 2024; their substantive content has been retained and has not undergone a current legal review. Dates must reflect actual publication/review, not deployment.

## Deployment

Push the approved source to the existing GitHub repository connected to Vercel. The repository configuration runs `npm run build` and publishes `dist`. It replaces the old catch-all SPA rewrite so each known page is served as HTML and unknown paths return 404. No environment variables are required.

Use a Vercel preview deployment before promoting production. Confirm the home page, a service, an article, contact links, mobile navigation, social image and unknown-route status. This checkout was prepared from the public archive at upstream commit `f360c37185ee15d4d2fce323283d0181a1036a31`; fetch and compare the live repository before integration if upstream has changed.

Search ranking and AI citations are not guaranteed. Crawlable HTML, accurate structured data, visible office facts and clear article summaries form the technical foundation.
