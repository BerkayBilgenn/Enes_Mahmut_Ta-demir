import { site, faqs, escapeHtml as e } from './content.js';

export function structuredData(page) {
  const officeId = site.origin + '/#office';
  const personId = site.origin + '/hakkimizda#avukat';
  const url = site.origin + page.path;
  const graph = [
    { '@type': 'LegalService', '@id': officeId, name: site.name, url: site.origin + '/', logo: site.origin + '/favicon-square.png', image: site.origin + '/favicon-square.png', telephone: site.phone, email: site.email,
      address: { '@type': 'PostalAddress', streetAddress: site.street, addressLocality: site.locality, addressRegion: site.region, addressCountry: 'TR' },
      founder: { '@id': personId }, areaServed: { '@type': 'City', name: 'İstanbul' } },
    { '@type': 'Person', '@id': personId, name: site.lawyer, jobTitle: 'Avukat', url: site.origin + '/hakkimizda', worksFor: { '@id': officeId } },
    { '@type': 'WebSite', '@id': site.origin + '/#website', url: site.origin + '/', name: site.name, inLanguage: 'tr-TR', publisher: { '@id': officeId } },
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'tr-TR', isPartOf: { '@id': site.origin + '/#website' }, about: { '@id': officeId } },
  ];
  if (page.path !== '/') {
    const items = [{ name: 'Ana sayfa', item: site.origin + '/' }];
    if (page.kind === 'service') items.push({ name: 'Çalışma alanları', item: site.origin + '/hizmetlerimiz' });
    if (page.kind === 'article') items.push({ name: 'Hukuk notları', item: site.origin + '/blog' });
    items.push({ name: page.label, item: url });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })) });
  }
  if (page.article) graph.push({
    '@type': 'Article', '@id': url + '#article', headline: page.article.title, description: page.description,
    datePublished: page.article.date, inLanguage: 'tr-TR',
    author: { '@type': 'Organization', '@id': officeId, name: site.name },
    publisher: { '@id': officeId }, mainEntityOfPage: { '@id': url + '#webpage' },
    image: page.article.image,
  });
  if (page.service) graph.push({ '@type': 'Service', name: page.service.title, description: page.description, url, provider: { '@id': officeId }, areaServed: { '@type': 'City', name: 'İstanbul' } });
  if (page.kind === 'faq') graph.push({ '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function metadata(page) {
  const title = page.title + ' | EMT Hukuk';
  const url = site.origin + page.path;
  const image = site.origin + '/favicon-square.png';
  const json = JSON.stringify(structuredData(page)).replaceAll('<', '\\u003c');
  return `<title>${e(title)}</title>
<meta name="description" content="${e(page.description)}">
<meta name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<link rel="canonical" href="${e(url)}">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${e(site.name)}">
<meta property="og:title" content="${e(title)}">
<meta property="og:description" content="${e(page.description)}">
<meta property="og:url" content="${e(url)}">
<meta property="og:image" content="${image}">
<meta property="og:image:alt" content="EMT Hukuk &amp; Danışmanlık — Avukat Enes Mahmut Taşdemir">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${e(title)}">
<meta name="twitter:description" content="${e(page.description)}">
<meta name="twitter:image" content="${image}">
${page.article ? '<meta property="article:published_time" content="' + page.article.date + '">' : ''}
<script type="application/ld+json">${json}</script>`;
}
