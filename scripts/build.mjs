import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { pages, notFound, site, escapeHtml } from '../src/site/content.js';
import { renderPage } from '../src/site/render.js';
const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'public'), dist, { recursive: true });
for (const page of [...pages, notFound]) {
  const filename = page.path === '/' ? 'index.html' : page.path.slice(1) + '.html';
  const destination = join(dist, filename);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, renderPage(page));
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(page => '<url><loc>' + escapeHtml(site.origin + page.path) + '</loc></url>').join('\n') + '\n</urlset>\n';
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + site.origin + '/sitemap.xml\n');
console.log('Built ' + pages.length + ' public pages + 404. All content is rendered as HTML.');
