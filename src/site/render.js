import { site, servicesData, blogData, featuredServices, faqs, formatDate, escapeHtml as e } from './content.js';
import { metadata } from './metadata.js';

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7"/></svg>';
const diagonal = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const logo = '<span class="brand-mark" aria-hidden="true">EMT<span>•</span></span><span class="brand-description">HUKUK &amp;<br>DANIŞMANLIK</span>';
const bodyContent = html => html.replace(/<(\/?)h([3-6])(?=[\s>])/g, (_, close, level) => '<' + close + 'h' + (Number(level) - 1));
const link = (href, label, cls = 'text-link') => `<a class="${cls}" href="${href}">${label}${arrow}</a>`;
const navItems = [['/hakkimizda', 'Ofisimiz'], ['/hizmetlerimiz', 'Çalışma alanları'], ['/blog', 'Hukuk notları'], ['/iletisim', 'İletişim']];

function header(page) {
  return `<a class="skip-link" href="#icerik">İçeriğe geç</a>
<header class="site-header"><div class="container header-inner">
  <a class="brand" href="/" aria-label="EMT Hukuk ana sayfa">${logo}</a>
  <nav class="desktop-nav" aria-label="Ana menü">${navItems.map(([url, label]) => `<a href="${url}"${page.path === url || (url === '/blog' && page.kind === 'article') || (url === '/hizmetlerimiz' && page.kind === 'service') ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
  ${link('/iletisim', 'Görüşme planlayın', 'header-contact')}
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"><span class="menu-label">Menü</span><span class="menu-icon" aria-hidden="true"></span></button>
</div><nav id="mobile-menu" class="mobile-nav" aria-label="Mobil menü">${navItems.map(([url, label]) => `<a href="${url}">${label}${arrow}</a>`).join('')}<a href="tel:${site.phone}">${site.phoneDisplay}</a></nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container">
<div class="footer-top"><a class="brand" href="/" aria-label="EMT Hukuk ana sayfa">${logo}</a><p>Hukuki süreçlere<br>özenli ve açık bir yaklaşım.</p><a class="footer-phone" href="tel:${site.phone}">${site.phoneDisplay}${diagonal}</a></div>
<div class="footer-columns"><div><span class="eyebrow">OFİSİMİZ</span><address>${e(site.street)}<br>Kağıthane / İstanbul</address><a class="small-link" href="${e(site.maps)}" target="_blank" rel="noopener noreferrer">Yol tarifi alın ↗</a></div><div><span class="eyebrow">İLETİŞİM</span><a href="mailto:${site.email}">${site.email}</a><p>Görüşme için lütfen randevu alınız.</p></div><div><span class="eyebrow">KEŞFEDİN</span><a href="/hakkimizda">Ofisimiz</a><a href="/hizmetlerimiz">Çalışma alanları</a><a href="/blog">Hukuk notları</a><a href="/sss">Sık sorulan sorular</a></div></div>
<div class="footer-bottom"><p>© ${new Date().getUTCFullYear()} EMT Hukuk &amp; Danışmanlık</p><p>Bu sitedeki içerikler genel bilgilendirme amaçlıdır.</p><a href="#sayfa-basi">Başa dön ↑</a></div></div></footer>`;
}

function contactBand() {
  return `<section class="contact-band"><div class="container contact-band-inner"><div><span class="eyebrow">BİRLİKTE DEĞERLENDİRELİM</span><h2>Her hukuki mesele,<br>özenle dinlenmeyi hak eder.</h2></div>${link('/iletisim', 'Bizimle iletişime geçin', 'light-link')}</div></section>`;
}

function breadcrumb(page, parent) {
  return `<nav class="breadcrumb" aria-label="Sayfa yolu"><a href="/">Ana sayfa</a><span aria-hidden="true">/</span>${parent ? `<a href="${parent[0]}">${parent[1]}</a><span aria-hidden="true">/</span>` : ''}<span aria-current="page">${e(page.label)}</span></nav>`;
}
function pageHeading(page, kicker, title, description, parent) {
  return `<section class="page-heading container">${breadcrumb(page, parent)}<div class="page-heading-grid"><span class="eyebrow">${kicker}</span><div><h1>${title}</h1>${description ? `<p class="page-lead">${description}</p>` : ''}</div></div></section>`;
}
function serviceRows(services, all = false) {
  return `<div class="practice-list${all ? ' practice-list-all' : ''}">${services.map((service, index) => `<a class="practice-row" href="/hizmet/${service.slug}"><span class="practice-number">${String(index + 1).padStart(2, '0')}</span><div><${all ? 'h2' : 'h3'}>${e(service.title)}</${all ? 'h2' : 'h3'}><p>${e(service.description)}</p></div><span class="row-arrow">${diagonal}</span></a>`).join('')}</div>`;
}
function articleCards(articles, heading = 3) {
  return `<div class="article-grid">${articles.map((article, index) => `<article class="article-card" data-article data-category="${e(article.category)}"><a class="article-image" href="/blog/${article.slug}" tabindex="-1" aria-hidden="true"><img src="${e(article.image.replace('w=1200', 'w=720'))}" alt="" loading="lazy" decoding="async" width="720" height="480"><span class="image-index">${String(index + 1).padStart(2, '0')}</span></a><div class="article-meta"><span>${e(article.category)}</span><time datetime="${article.date}">${formatDate(article.date)}</time></div><h${heading}><a href="/blog/${article.slug}">${e(article.title)}</a></h${heading}><p>${e(article.excerpt)}</p>${link('/blog/' + article.slug, 'Yazıyı okuyun', 'article-read')}</article>`).join('')}</div>`;
}

function home() {
  return `<section class="hero container"><div class="hero-copy"><span class="eyebrow hero-eyebrow"><span class="tiny-line"></span> AV. ENES MAHMUT TAŞDEMİR</span><h1>Hukuki bakış.<br><em>Özenli yaklaşım.</em></h1><p class="hero-intro">Bireyler ve kurumlar için hukuki danışmanlık.<br class="desktop-break"> Her adımda açık iletişim, her ayrıntıda özen.</p>${link('/hizmetlerimiz', 'Çalışma alanlarımız', 'button-dark')}<div class="hero-location"><span class="location-dot"></span> İSTANBUL, ÇAĞLAYAN <span class="location-divider">/</span> HUKUK &amp; DANIŞMANLIK</div></div>
<div class="hero-visual"><div class="hero-image-frame"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="Gökyüzüne uzanan çağdaş mimari cepheler" width="900" height="1100" fetchpriority="high"><div class="image-shade"></div><span class="image-caption">DÜŞÜNCEDE NETLİK.<br>YAKLAŞIMDA ÖZEN.</span><span class="image-corner" aria-hidden="true">${diagonal}</span></div><span class="vertical-caption">EMT HUKUK &amp; DANIŞMANLIK — İSTANBUL</span></div></section>
<section class="intro-section container"><span class="eyebrow section-index">01 / OFİSİMİZ</span><div class="intro-content"><h2>Hukuku anlamak.<br><em>Doğru adımı birlikte belirlemek.</em></h2><div class="intro-bottom"><p>Avukat Enes Mahmut Taşdemir’in İstanbul Çağlayan’daki ofisinde; hukuki ihtiyaçlarınızı kendi koşulları içinde değerlendiriyor, danışmanlık ve dava süreçlerini açık bir iletişimle ele alıyoruz.</p>${link('/hakkimizda', 'Ofisimizi tanıyın')}</div></div></section>
<section class="practice-section"><div class="container"><div class="section-heading"><div><span class="eyebrow">02 / ÇALIŞMA ALANLARI</span><h2>İhtiyacınıza odaklanan<br><em>hukuki çalışma alanları.</em></h2></div><p>Gündelik hayattan ticari ilişkilere,<br>her meselenin kendine özgü bir karşılığı var.</p></div>${serviceRows(featuredServices)}<div class="section-end">${link('/hizmetlerimiz', 'Tüm çalışma alanları')}</div></div></section>
<section class="notes-section container"><div class="section-heading"><div><span class="eyebrow">03 / HUKUK NOTLARI</span><h2>Hukuka dair<br><em>biraz daha açıklık.</em></h2></div>${link('/blog', 'Tüm yazılar')}</div>${articleCards([blogData[2], blogData[0], blogData[7]])}</section>${contactBand()}`;
}

function about(page) {
  return pageHeading(page, 'OFİSİMİZ', 'Hukukun merkezinde,<br><em>insana odaklı bir yaklaşım.</em>', 'Avukat Enes Mahmut Taşdemir · EMT Hukuk & Danışmanlık') +
    `<section class="about-section container"><div class="about-monogram"><span>EMT<span class="bronze">.</span></span><small>HUKUK &amp; DANIŞMANLIK</small><div class="monogram-rule"></div><p>İstanbul / Çağlayan</p></div><div class="about-text"><span class="eyebrow">AV. ENES MAHMUT TAŞDEMİR</span><h2>Her ayrıntıya aynı özen.</h2><p>EMT Hukuk &amp; Danışmanlık, Avukat Enes Mahmut Taşdemir’in İstanbul Çağlayan’daki hukuk ofisidir. Bireylerin ve kurumların hukuki ihtiyaçlarına yönelik danışmanlık, dava ve uyuşmazlık süreçlerinin takibi alanlarında çalışır.</p><p>Hukuki bir meseleyi değerlendirirken ilk adım, olayın koşullarını ve beklentileri anlamaktır. Belgelerin incelenmesinden izlenecek yolun belirlenmesine kadar, süreci açık ve anlaşılır biçimde ele alıyoruz.</p><p>Çalışma alanlarımız ve ofisimiz hakkında bilgi almak veya bir görüşme planlamak için bizimle iletişime geçebilirsiniz.</p>${link('/iletisim', 'Görüşme planlayın')}</div></section>
<section class="principles-section container"><div class="principle"><span class="eyebrow">01 / ÖZEN</span><h3>Ayrıntıyı önemseriz.</h3><p>Her meseleyi kendi koşulları ve belgeleriyle birlikte değerlendiririz.</p></div><div class="principle"><span class="eyebrow">02 / AÇIKLIK</span><h3>Süreci anlaşılır kılarız.</h3><p>Hukuki seçenekleri ve atılabilecek adımları açık bir dille ele alırız.</p></div><div class="principle"><span class="eyebrow">03 / İLETİŞİM</span><h3>Dinleyerek başlarız.</h3><p>İhtiyaçları anlamayı, çalışma sürecinin başlangıç noktası kabul ederiz.</p></div></section>` + contactBand();
}

function services(page) {
  return pageHeading(page, 'ÇALIŞMA ALANLARI', 'Hukuki ihtiyacınız,<br><em>çalışmamızın odağında.</em>', 'Bireysel ve kurumsal hukuki ihtiyaçlara yönelik danışmanlık, dava ve uyuşmazlık takibi.') +
    `<section class="container all-practices">${serviceRows(servicesData, true)}</section>` + contactBand();
}

function serviceDetail(page) {
  return pageHeading(page, 'ÇALIŞMA ALANI', e(page.service.title), e(page.description), ['/hizmetlerimiz', 'Çalışma alanları']) +
    `<section class="container reading-layout"><aside class="reading-aside"><span class="eyebrow">HUKUKİ DANIŞMANLIK</span><p>Konunuzu kendi koşulları içinde birlikte değerlendirelim.</p>${link('/iletisim', 'Ofisle iletişime geçin')}<a class="aside-phone" href="tel:${site.phone}">${site.phoneDisplay}</a></aside><div class="article-body">${bodyContent(page.service.content)}<div class="article-note">Bu sayfa genel bilgilendirme amaçlıdır. Somut durumunuza ilişkin değerlendirme için ofisimizle görüşebilirsiniz.</div></div></section><section class="container related-section"><div class="section-heading"><h2>Diğer çalışma alanları.</h2>${link('/hizmetlerimiz', 'Tüm alanlar')}</div>${serviceRows(featuredServices.filter(s => s.slug !== page.service.slug).slice(0, 2))}</section>` + contactBand();
}

function blog(page) {
  const categories = [...new Set(blogData.map(article => article.category))];
  return pageHeading(page, 'HUKUK NOTLARI', 'Bilgiyle başlayan,<br><em>daha net bir bakış.</em>', 'Hukuki konulara ilişkin genel bilgilendirme yazıları. Makalelerin ilk yayımlanma tarihleri belirtilmiştir.') +
    `<section class="container blog-section"><div class="article-filters" data-filters hidden aria-label="Yazı kategorileri"><button type="button" class="filter-active" data-filter="all" aria-pressed="true">Tüm yazılar</button>${categories.map(category => `<button type="button" data-filter="${e(category)}" aria-pressed="false">${e(category)}</button>`).join('')}</div><p class="filter-status visually-hidden" role="status" aria-live="polite"></p>${articleCards([...blogData].sort((a, b) => b.date.localeCompare(a.date)), 2)}</section>` + contactBand();
}

function articleDetail(page) {
  const a = page.article;
  return pageHeading(page, e(a.category), e(a.title), e(a.excerpt), ['/blog', 'Hukuk notları']) +
    `<section class="container reading-layout"><aside class="reading-aside"><span class="eyebrow">YAYIN BİLGİSİ</span><p class="article-publisher">EMT Hukuk &amp; Danışmanlık</p><time datetime="${a.date}">${formatDate(a.date)}</time><p class="archive-note">Arşiv yazısı<br>Yayımlandığı tarihteki içeriktir; güncel durum ayrıca değerlendirilmelidir.</p>${link('/hakkimizda', 'Ofis hakkında')}</aside><article class="article-body"><div class="article-summary"><span class="eyebrow">BU YAZIDA</span><p>${e(a.excerpt)}</p></div>${bodyContent(a.content)}<div class="article-note">Bu yazı genel bilgilendirme amaçlıdır ve kişisel hukuki görüş yerine geçmez. Mevzuat ve uygulama değişebilir; somut olayınıza ilişkin değerlendirme için hukuki destek alınız.</div><div class="article-sources"><span class="eyebrow">RESMÎ KAYNAKLAR</span><p>Güncel düzenlemeleri incelemek için <a href="https://www.mevzuat.gov.tr/" target="_blank" rel="noopener noreferrer">Mevzuat Bilgi Sistemi</a> ve <a href="https://www.resmigazete.gov.tr/" target="_blank" rel="noopener noreferrer">Resmî Gazete</a> sitelerine ulaşabilirsiniz.</p></div></article></section><section class="container related-section"><div class="section-heading"><h2>Okumaya devam edin.</h2>${link('/blog', 'Tüm yazılar')}</div>${articleCards(blogData.filter(item => item.slug !== a.slug).slice(0, 3))}</section>` + contactBand();
}

function contact(page) {
  return pageHeading(page, 'İLETİŞİM', 'İlk adım,<br><em>bir görüşmeyle başlar.</em>', 'Hukuki ihtiyacınızı değerlendirmek veya görüşme planlamak için bize ulaşabilirsiniz.') +
    `<section class="container contact-section"><div class="contact-options"><a class="contact-option" href="tel:${site.phone}"><span class="eyebrow">01 / TELEFON</span><span class="contact-value">${site.phoneDisplay}</span>${diagonal}</a><a class="contact-option" href="mailto:${site.email}"><span class="eyebrow">02 / E-POSTA</span><span class="contact-value contact-email">${site.email}</span>${diagonal}</a><div class="contact-option contact-address"><span class="eyebrow">03 / OFİS ADRESİ</span><address>${e(site.street)}<br>Kağıthane / İstanbul</address>${link(e(site.maps), 'Yol tarifi alın')}</div></div><aside class="visit-card"><span class="eyebrow">İSTANBUL / ÇAĞLAYAN</span><h2>Ofisimizde<br><em>görüşelim.</em></h2><div class="visit-line"></div><p>Görüşmeler randevu ile planlanır. Gelmeden önce telefon veya e-posta ile iletişime geçmenizi rica ederiz.</p><p class="visit-note">İlk görüşmede, konunuzla ilgili belgeleri yanınızda bulundurabilirsiniz.</p>${link('/sss', 'Görüşme öncesi sorular')}</aside></section>`;
}
function faq(page) {
  return pageHeading(page, 'SIK SORULAN SORULAR', 'Görüşme öncesi,<br><em>birkaç kısa yanıt.</em>', 'Ofisimize ulaşma ve ilk görüşmenize hazırlanma hakkında.') +
    `<section class="container faq-section">${faqs.map((faq, index) => `<details class="faq-item"${index === 0 ? ' open' : ''}><summary><span class="faq-number">${String(index + 1).padStart(2, '0')}</span>${e(faq.question)}<span class="faq-symbol" aria-hidden="true">+</span></summary><p>${e(faq.answer)}</p></details>`).join('')}</section>` + contactBand();
}
function missing(page) {
  return pageHeading(page, '404 / SAYFA BULUNAMADI', 'Bu sayfa artık<br><em>burada değil.</em>', 'Adresi kontrol edebilir veya aşağıdaki bağlantıdan ana sayfaya dönebilirsiniz.') +
    `<div class="container missing-actions">${link('/', 'Ana sayfaya dönün', 'button-dark')}${link('/hizmetlerimiz', 'Çalışma alanlarımız')}</div>`;
}

export function renderPage(page) {
  const renderers = { home, about, services, service: serviceDetail, blog, article: articleDetail, contact, faq, '404': missing };
  return `<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
${metadata(page)}
<meta name="theme-color" content="#f7f5f0"><link rel="icon" href="/favicon-square.png" type="image/png"><link rel="apple-touch-icon" href="/favicon-square.png"><link rel="manifest" href="/manifest.json">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650&amp;family=Manrope:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="/site.css"><script src="/site.js" defer></script></head><body id="sayfa-basi" class="page-${page.kind}">
${header(page)}<main id="icerik">${renderers[page.kind](page)}</main>${footer()}</body></html>`;
}
