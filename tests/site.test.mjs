import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const htmlAt = (path = '') => readFileSync(existsSync(join(dist, path ? `${path}.html` : 'index.html')) ? join(dist, path ? `${path}.html` : 'index.html') : join(root, 'index.html'), 'utf8');
const schema = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m => { const value = JSON.parse(m[1]); return value['@graph'] || [value]; });

test('the initial HTML exposes the office and navigation without JavaScript', () => {
  const html = htmlAt();
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'one readable page heading');
  assert.match(html, /<main[\s>]/);
  assert.match(html, /href="tel:\+905388539944"/);
  assert.match(html, /href="\/hizmetlerimiz"/);
  assert.doesNotMatch(html, /KAMUOYU DUYURUSU|Yükleniyor|ExitPopup/);
});

test('deep links carry distinct metadata and their own content', () => {
  const html = htmlAt('hizmet/aile');
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.emtasdemirhukuk\.com\/hizmet\/aile"/);
  assert.match(html, /<h1[^>]*>Aile Hukuku<\/h1>/);
  assert.match(html, /<title>Aile Hukuku/);
});

test('structured entity facts do not invent ratings, office hours or coordinates', () => {
  const graph = schema(htmlAt());
  const office = graph.find(x => x['@type'] === 'LegalService');
  assert.ok(office);
  assert.equal(office.telephone, '+905388539944');
  assert.equal(office.address.addressLocality, 'Kağıthane');
  assert.equal(office.aggregateRating, undefined);
  assert.equal(office.geo, undefined);
  assert.equal(office.openingHours, undefined);
});

test('historical articles retain historical publication dates and accurate canonicals', () => {
  const html = htmlAt('blog/bosanma-davalarinda-mal-paylasimi');
  const article = schema(html).find(x => x['@type'] === 'Article');
  assert.ok(article, 'article schema exists');
  assert.equal(article.datePublished, '2024-12-01');
  assert.match(html, /<time datetime="2024-12-01">/);
  assert.match(html, /href="https:\/\/www\.emtasdemirhukuk\.com\/blog\/bosanma-davalarinda-mal-paylasimi"/);
});

test('the sitemap lists generated practice and article pages and no stale aliases', () => {
  const file = join(dist, 'sitemap.xml');
  const xml = readFileSync(existsSync(file) ? file : join(root, 'public/sitemap.xml'), 'utf8');
  assert.match(xml, /\/hizmet\/fikri-mulkiyet</);
  assert.match(xml, /\/hizmet\/rekabet</);
  assert.doesNotMatch(xml, /\/hizmet\/fikri-sinai-mulkiyet</);
  for (const match of xml.matchAll(/<loc>https:\/\/www\.emtasdemirhukuk\.com([^<]*)<\/loc>/g)) {
    const path = match[1] === '/' ? 'index.html' : `${match[1].slice(1)}.html`;
    assert.ok(existsSync(join(dist, path)), `sitemap destination exists: ${path}`);
  }
});

test('every rendered page has complete metadata, one H1 and resolvable local links', () => {
  assert.ok(existsSync(dist), 'built HTML exists');
  const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(x => x.isDirectory() ? walk(join(dir, x.name)) : [join(dir, x.name)]);
  const pages = walk(dist).filter(x => x.endsWith('.html'));
  assert.equal(pages.length, 36, '6 core pages, 16 services, 13 articles and a 404');
  const canonicals = new Set();
  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<meta property="og:image" content="https:/);
    schema(html);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.ok(!canonicals.has(canonical), `unique canonical: ${canonical}`);
    canonicals.add(canonical);
    for (const [, target] of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^\"]*"/g)) {
      const path = target === '/' ? join(dist, 'index.html') : join(dist, target);
      assert.ok(existsSync(path) || existsSync(`${path}.html`), `${file}: ${target}`);
    }
  }
});

test('FAQ schema contains exactly the questions visible on its page', () => {
  const html = htmlAt('sss');
  const faq = schema(html).find(x => x['@type'] === 'FAQPage');
  assert.ok(faq);
  assert.equal(faq.mainEntity.length, (html.match(/<summary>/g) || []).length);
  for (const item of faq.mainEntity) {
    assert.ok(html.includes(item.name));
    assert.ok(html.includes(item.acceptedAnswer.text));
  }
});
