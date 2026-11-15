import { site, servicesData, blogData, featuredServices, faqs, formatDate, escapeHtml as e } from './content.js';
import { metadata } from './metadata.js';

const paths = {
  right: 'M4 12h15m-6-7 7 7-7 7',
  external: 'M5 19 19 5M6 5h13v13',
  plus: 'M12 4v16M4 12h16',
};
function icon(name) {
  const path = name === 'up' ? `<path d="${paths.right}" transform="rotate(-90 12 12)"/>` : `<path d="${paths[name]}"/>`;
  return `<svg class="icon icon-${name}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
}
function action(href, label, classes = 'text-link', direction = /^(tel:|mailto:|https:)/.test(href) ? 'external' : 'right') {
  const external = href.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="${classes}" href="${e(href)}"${external}><span class="action-label">${e(label)}</span>${icon(direction)}</a>`;
}
// Splits a heading at <br> into masked lines for the rise-in reveal. Text content stays identical.
const lines = html => html.split('<br>').map(part => `<span class="line"><span class="line-inner">${part}</span></span>`).join(' ');
// Wraps each word so the statement can light up word by word while it scrolls past.
const words = text => text.split(/(\s+)/).map(part => (/^\s*$/.test(part) ? part : `<span class="w">${part}</span>`)).join('');
const rule = '<span class="eyebrow-rule" aria-hidden="true"></span>';
const phoneHref = `tel:${site.phone}`;
const emailHref = `mailto:${site.email}`;
const navigation = [['/hakkimizda', 'Ofisimiz'], ['/hizmetlerimiz', 'Çalışma alanları'], ['/blog', 'Hukuk notları'], ['/iletisim', 'İletişim']];

function navLinks(page, mobile = false) {
  return navigation.map(([url, label], index) => {
    const inSection = (url === '/blog' && page.kind === 'article') || (url === '/hizmetlerimiz' && page.kind === 'service');
    const current = page.path === url ? ' aria-current="page"' : inSection ? ' aria-current="location"' : '';
    return mobile
      ? `<a href="${url}"${current} style="--i:${index}"><span class="nav-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${label}</span>${icon('right')}</a>`
      : `<a href="${url}"${current}><span>${label}</span></a>`;
  }).join('\n');
}
function header(page) {
  return `<a class="skip-link" href="#icerik">İçeriğe geç</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="EMT Hukuk ana sayfa">
      <span class="brand-mark" aria-hidden="true">EMT<span>.</span></span>
      <span class="brand-description" aria-hidden="true">Hukuk &amp;<br>Danışmanlık</span>
    </a>
    <nav class="desktop-nav" aria-label="Ana menü">${navLinks(page)}</nav>
    <div class="header-actions">
      <a class="header-phone phone" href="${phoneHref}">${site.phoneDisplay}</a>
      ${action('/iletisim', 'Görüşme planlayın', 'button button-outline-light button-medium')}
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
      <span class="menu-label">Menü</span><span class="menu-lines" aria-hidden="true"><span></span><span></span></span>
    </button>
  </div>
  <nav id="mobile-menu" class="mobile-nav" aria-label="Mobil menü">
    <div class="container mobile-nav-inner">
      <div class="mobile-links">${navLinks(page, true)}</div>
      <div class="mobile-contact">
        <span class="eyebrow">İstanbul / Çağlayan</span>
        ${action(phoneHref, site.phoneDisplay, 'button button-gold button-medium phone')}
        ${action(emailHref, site.email)}
      </div>
    </div>
  </nav>
</header>`;
}
function introCurtain() {
  return `<div class="intro-curtain" aria-hidden="true"><div class="intro-stage">
  <span class="intro-mark"><span>E</span><span>M</span><span>T</span><span class="intro-dot">.</span></span>
  <span class="intro-rule"></span>
  <span class="intro-sub">Hukuk &amp; Danışmanlık</span>
</div></div>`;
}
function invitation() {
  return `<section class="footer-invitation">
    <span class="eyebrow" data-reveal>${rule}Birlikte değerlendirelim</span>
    <h2 class="split" data-reveal="lines">${lines('Her hukuki mesele,<br><em>özenle dinlenmeyi hak eder.</em>')}</h2>
    <div class="actions" data-reveal style="--i:2">
      ${action('/iletisim', 'Bizimle iletişime geçin', 'button button-gold button-large')}
      ${action(phoneHref, site.phoneDisplay, 'button button-outline-light button-large phone')}
    </div>
  </section>`;
}
function footer(page) {
  return `<footer class="site-footer on-dark"><div class="container">
  ${page.kind === 'contact' || page.kind === '404' ? '' : invitation()}
  <div class="footer-columns">
    <div class="footer-identity" data-reveal>
      <a href="/" aria-label="EMT Hukuk ana sayfa"><img src="/logo-transparent.png" width="112" height="64" alt="" loading="lazy"></a>
      <p>Hukuki süreçlere özenli ve açık bir yaklaşım.</p>
    </div>
    <div class="footer-office" data-reveal style="--i:1">
      <span class="eyebrow">Ofisimiz</span>
      <address>${e(site.street)}<br>${e(site.locality)} / ${e(site.region)}</address>
      ${action(site.maps, 'Yol tarifi alın')}
    </div>
    <div class="footer-contact" data-reveal style="--i:2">
      <span class="eyebrow">İletişim</span>
      <a class="footer-phone phone" href="${phoneHref}">${site.phoneDisplay}</a>
      <a class="footer-email" href="${emailHref}">${e(site.email)}</a>
      <p>Görüşme için lütfen randevu alınız.</p>
    </div>
    <nav class="footer-nav" aria-label="Alt menü" data-reveal style="--i:3">
      <span class="eyebrow">Keşfedin</span>
      <a href="/hakkimizda">Ofisimiz</a><a href="/hizmetlerimiz">Çalışma alanları</a>
      <a href="/blog">Hukuk notları</a><a href="/sss">Sık sorulan sorular</a><a href="/iletisim">İletişim</a>
    </nav>
  </div>
  <div class="footer-wordmark" aria-hidden="true">EMT<span>.</span></div>
  <div class="footer-bottom">
    <p>© ${new Date().getUTCFullYear()} EMT Hukuk &amp; Danışmanlık</p>
    <p>Bu sitedeki içerikler genel bilgilendirme amaçlıdır.</p>
    ${action('#sayfa-basi', 'Başa dön', 'text-link', 'up')}
  </div>
</div></footer>`;
}

function breadcrumb(page, parent) {
  return `<nav class="breadcrumb" aria-label="Sayfa yolu"><a href="/">Ana sayfa</a><span aria-hidden="true">/</span>${parent ? `<a href="${parent[0]}">${parent[1]}</a><span aria-hidden="true">/</span>` : ''}<span aria-current="page">${e(page.label)}</span></nav>`;
}
function pageHeading(page, kicker, title, lead, parent) {
  const split = title.includes('<br>');
  return `<section class="page-heading on-dark"><div class="container">${breadcrumb(page, parent)}
  <div class="page-heading-grid"><span class="eyebrow">${rule}${e(kicker)}</span>
    <div><h1${split ? ' class="split"' : ''}>${split ? lines(title) : title}</h1>${lead ? `<p class="lead">${e(lead)}</p>` : ''}</div>
  </div></div></section>`;
}
function serviceRows(items, heading = 3) {
  return `<div class="practice-list">${items.map((item, index) => `
  <a class="practice-row ruled-row" href="/hizmet/${item.slug}" data-reveal style="--i:${index % 4}">
    <span class="row-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
    <h${heading} class="row-title">${e(item.title)}</h${heading}>
    <p class="row-description">${e(item.description)}</p>
    <span class="row-arrow" aria-hidden="true">${icon('right')}</span>
  </a>`).join('')}</div>`;
}
function articleCards(articles, heading = 3) {
  return `<div class="article-grid">${articles.map((article, index) => `
  <article class="article-card" data-article data-category="${e(article.category)}" data-reveal style="--i:${index % 3}">
    <div class="article-meta"><span class="eyebrow">${e(article.category)}</span><time datetime="${article.date}">${formatDate(article.date)}</time></div>
    <h${heading}><a class="article-title-link" href="/blog/${article.slug}">${e(article.title)}</a></h${heading}>
    <p>${e(article.excerpt)}</p>
    <span class="text-link card-read" aria-hidden="true"><span class="action-label">Yazıyı okuyun</span>${icon('right')}</span>
  </article>`).join('')}</div>`;
}
function principles() {
  return `<div class="principle" data-reveal><span class="principle-number" aria-hidden="true">01</span><span class="eyebrow">Özen</span><h3>Ayrıntıyı önemseriz.</h3><p>Her meseleyi kendi koşulları ve belgeleriyle birlikte değerlendiririz.</p></div>
  <div class="principle" data-reveal style="--i:1"><span class="principle-number" aria-hidden="true">02</span><span class="eyebrow">Açıklık</span><h3>Süreci anlaşılır kılarız.</h3><p>Hukuki seçenekleri ve atılabilecek adımları açık bir dille ele alırız.</p></div>
  <div class="principle" data-reveal style="--i:2"><span class="principle-number" aria-hidden="true">03</span><span class="eyebrow">İletişim</span><h3>Dinleyerek başlarız.</h3><p>İhtiyaçları anlamayı, çalışma sürecinin başlangıç noktası kabul ederiz.</p></div>`;
}
const bodyContent = html => html.replace(/<(\/?)h([3-6])(?=[\s>])/g, (_, close, level) => '<' + close + 'h' + (Number(level) - 1));

function home() {
  const marqueeGroup = `<div class="marquee-group">${servicesData.map(item => `<span>${e(item.title)}</span><i></i>`).join('')}</div>`;
  return `<section class="hero on-dark">
  <div class="hero-media"><div class="hero-parallax">
    <img class="hero-photo" src="/img/mimari-1280.webp" srcset="./img/mimari-640.webp 640w, ./img/mimari-960.webp 960w, ./img/mimari-1280.webp 1280w" sizes="(min-width: 1024px) 46vw, 100vw" width="960" height="1200" alt="Gökyüzüne uzanan çağdaş mimari cepheler" fetchpriority="high">
  </div></div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <span class="eyebrow hero-eyebrow">${rule}Av. Enes Mahmut Taşdemir</span>
      <h1 class="hero-title split">${lines('Hukuki bakış.<br><em>Özenli yaklaşım.</em>')}</h1>
      <p class="lead hero-lead">Bireyler ve kurumlar için hukuki danışmanlık.<br> Her adımda açık iletişim, her ayrıntıda özen.</p>
      <div class="actions hero-actions">${action('/iletisim', 'Görüşme planlayın', 'button button-gold button-large')}${action('/hizmetlerimiz', 'Çalışma alanlarımız', 'button button-outline-light button-large')}</div>
    </div>
    <div class="hero-bottom">
      <ul class="hero-facts"><li>İstanbul, Çağlayan</li><li><a class="phone" href="${phoneHref}">${site.phoneDisplay}</a></li><li>Görüşmeler randevu ile planlanır</li></ul>
      <a class="scroll-cue" href="#ofis"><span>Keşfedin</span><span class="scroll-line" aria-hidden="true"></span></a>
    </div>
  </div>
  <div class="marquee" aria-hidden="true"><div class="marquee-track">${marqueeGroup}${marqueeGroup}</div></div>
</section>
<section class="intro-section section" id="ofis"><div class="container">
  <div class="intro-grid">
    <span class="eyebrow">${rule}Ofisimiz</span>
    <div class="intro-copy"><h2 class="split" data-reveal="lines">${lines('Hukuku anlamak.<br><em>Doğru adımı birlikte belirlemek.</em>')}</h2>
      <p class="statement" data-words>${words('Avukat Enes Mahmut Taşdemir’in İstanbul Çağlayan’daki ofisinde; hukuki ihtiyaçlarınızı kendi koşulları içinde değerlendiriyor, danışmanlık ve dava süreçlerini açık bir iletişimle ele alıyoruz.')}</p>
      ${action('/hakkimizda', 'Ofisimizi tanıyın')}
    </div>
  </div>
  <div class="principles-section">${principles()}</div>
</div></section>
<section class="practice-section section on-dark"><div class="container">
  <div class="section-heading"><div><span class="eyebrow">${rule}Çalışma alanları</span><h2 class="split" data-reveal="lines">${lines('İhtiyacınıza odaklanan<br><em>hukuki çalışma alanları.</em>')}</h2></div><p data-reveal style="--i:1">Gündelik hayattan ticari ilişkilere, her meselenin kendine özgü bir karşılığı var.</p></div>
  ${serviceRows(featuredServices)}<div class="section-end">${action('/hizmetlerimiz', 'Tüm çalışma alanları', 'button button-outline-light button-medium')}</div>
</div></section>
<section class="notes-section section"><div class="container">
  <div class="section-heading"><div><span class="eyebrow">${rule}Hukuk notları</span><h2 class="split" data-reveal="lines">${lines('Hukuka dair<br><em>biraz daha açıklık.</em>')}</h2></div>${action('/blog', 'Tüm yazılar')}</div>
  ${articleCards([blogData[2], blogData[0], blogData[7]])}
</div></section>`;
}
function about(page) {
  return pageHeading(page, 'Ofisimiz', 'Hukukun merkezinde,<br><em>insana odaklı bir yaklaşım.</em>', 'Avukat Enes Mahmut Taşdemir · EMT Hukuk & Danışmanlık') + `
<section class="about-section section container">
  <div class="emblem-panel on-dark" data-reveal><img src="/logo-transparent.png" width="220" height="125" alt="EMT Hukuk &amp; Danışmanlık"><p>İstanbul / Çağlayan</p></div>
  <div class="about-copy" data-reveal style="--i:1"><span class="eyebrow">${rule}Av. Enes Mahmut Taşdemir</span><h2>Her ayrıntıya <em>aynı özen.</em></h2>
    <p>EMT Hukuk &amp; Danışmanlık, Avukat Enes Mahmut Taşdemir’in İstanbul Çağlayan’daki hukuk ofisidir. Bireylerin ve kurumların hukuki ihtiyaçlarına yönelik danışmanlık, dava ve uyuşmazlık süreçlerinin takibi alanlarında çalışır.</p>
    <p>Hukuki bir meseleyi değerlendirirken ilk adım, olayın koşullarını ve beklentileri anlamaktır. Belgelerin incelenmesinden izlenecek yolun belirlenmesine kadar, süreci açık ve anlaşılır biçimde ele alıyoruz.</p>
    <p>Çalışma alanlarımız ve ofisimiz hakkında bilgi almak veya bir görüşme planlamak için bizimle iletişime geçebilirsiniz.</p>
    ${action('/iletisim', 'Görüşme planlayın')}
  </div>
</section>
<section class="principles-band section"><div class="container principles-section">${principles()}</div></section>`;
}
function services(page) {
  return pageHeading(page, 'Çalışma alanları', 'Hukuki ihtiyacınız,<br><em>çalışmamızın odağında.</em>', 'Bireysel ve kurumsal hukuki ihtiyaçlara yönelik danışmanlık, dava ve uyuşmazlık takibi.') + `
<section class="list-section section container">${serviceRows(servicesData, 2)}</section>`;
}
function serviceDetail(page) {
  return pageHeading(page, 'Çalışma alanı', e(page.service.title), page.description, ['/hizmetlerimiz', 'Çalışma alanları']) + `
<section class="reading-layout container">
  <div class="article-body">${bodyContent(page.service.content)}<p class="article-note">Bu sayfa genel bilgilendirme amaçlıdır. Somut durumunuza ilişkin değerlendirme için ofisimizle görüşebilirsiniz.</p></div>
  <aside class="reading-aside service-aside"><span class="eyebrow">Hukuki danışmanlık</span>
    <p>Konunuzu kendi koşulları içinde birlikte değerlendirelim.</p>
    ${action('/iletisim', 'Ofisle iletişime geçin', 'button button-primary button-medium')}
    ${action(phoneHref, site.phoneDisplay, 'text-link phone')}
  </aside>
</section>
<section class="related-section section container"><div class="section-heading"><h2>Diğer <em>çalışma alanları.</em></h2>${action('/hizmetlerimiz', 'Tüm alanlar')}</div>
  ${serviceRows(featuredServices.filter(item => item.slug !== page.service.slug).slice(0, 2))}
</section>`;
}
function blog(page) {
  const categories = [...new Set(blogData.map(article => article.category))];
  return pageHeading(page, 'Hukuk notları', 'Bilgiyle başlayan,<br><em>daha net bir bakış.</em>', 'Hukuki konulara ilişkin genel bilgilendirme yazıları. Makalelerin ilk yayımlanma tarihleri belirtilmiştir.') + `
<section class="list-section section container">
  <div class="article-filters" data-filters hidden role="group" aria-label="Yazı kategorileri"><button class="button button-small filter-active" type="button" data-filter="all" aria-pressed="true">Tüm yazılar</button>
    ${categories.map(category => `<button class="button button-small" type="button" data-filter="${e(category)}" aria-pressed="false">${e(category)}</button>`).join('\n')}
  </div>
  <p class="filter-status visually-hidden" role="status" aria-live="polite"></p>
  ${articleCards([...blogData].sort((a, b) => b.date.localeCompare(a.date)), 2)}
</section>`;
}
function articleDetail(page) {
  const article = page.article;
  return pageHeading(page, article.category, e(article.title), article.excerpt, ['/blog', 'Hukuk notları']) + `
<section class="reading-layout container">
  <aside class="reading-aside article-aside"><span class="eyebrow">Yayın bilgisi</span>
    <p class="article-publisher">EMT Hukuk &amp; Danışmanlık</p>
    <time datetime="${article.date}">${formatDate(article.date)}</time>
    <p class="reading-time">Okuma süresi: ${e(article.readTime)}</p>
    <p class="archive-note">Arşiv yazısı<br>Yayımlandığı tarihteki içeriktir; güncel durum ayrıca değerlendirilmelidir.</p>
    ${action('/hakkimizda', 'Ofis hakkında')}
  </aside>
  <article class="article-body"><div class="article-summary"><span class="eyebrow">Bu yazıda</span><p>${e(article.excerpt)}</p></div>
    ${bodyContent(article.content)}
    <p class="article-note">Bu yazı genel bilgilendirme amaçlıdır ve kişisel hukuki görüş yerine geçmez. Mevzuat ve uygulama değişebilir; somut olayınıza ilişkin değerlendirme için hukuki destek alınız.</p>
    <div class="article-sources"><span class="eyebrow">Resmî kaynaklar</span><p>Güncel düzenlemeleri incelemek için <a href="https://www.mevzuat.gov.tr/" target="_blank" rel="noopener noreferrer">Mevzuat Bilgi Sistemi</a> ve <a href="https://www.resmigazete.gov.tr/" target="_blank" rel="noopener noreferrer">Resmî Gazete</a> sitelerine ulaşabilirsiniz.</p></div>
  </article>
</section>
<section class="related-section section container"><div class="section-heading"><h2>Okumaya <em>devam edin.</em></h2>${action('/blog', 'Tüm yazılar')}</div>
  ${articleCards(blogData.filter(item => item.slug !== article.slug).slice(0, 3))}
</section>`;
}
function contact(page) {
  return pageHeading(page, 'İletişim', 'İlk adım,<br><em>bir görüşmeyle başlar.</em>', 'Hukuki ihtiyacınızı değerlendirmek veya görüşme planlamak için bize ulaşabilirsiniz.') + `
<section class="contact-section section container"><div class="contact-options">
  <a class="contact-option ruled-row" href="${phoneHref}" data-reveal><span class="eyebrow">Telefon</span><span class="contact-value phone">${site.phoneDisplay}</span>${icon('external')}</a>
  <a class="contact-option ruled-row" href="${emailHref}" data-reveal style="--i:1"><span class="eyebrow">E-posta</span><span class="contact-value contact-email">${e(site.email)}</span>${icon('external')}</a>
  <div class="contact-option contact-address" data-reveal style="--i:2"><span class="eyebrow">Ofis adresi</span><address>${e(site.street)}<br>${e(site.locality)} / ${e(site.region)}</address>${action(site.maps, 'Yol tarifi alın', 'button button-secondary button-medium')}</div>
</div><aside class="visit-card on-dark" data-reveal style="--i:1"><span class="eyebrow">${rule}İstanbul / Çağlayan</span><h2>Ofisimizde<br><em>görüşelim.</em></h2>
  <p>Görüşmeler randevu ile planlanır. Gelmeden önce telefon veya e-posta ile iletişime geçmenizi rica ederiz.</p>
  <p>İlk görüşmede, konunuzla ilgili belgeleri yanınızda bulundurabilirsiniz.</p>
  ${action('/sss', 'Görüşme öncesi sorular')}
</aside></section>`;
}
function faq(page) {
  return pageHeading(page, 'Sık sorulan sorular', 'Görüşme öncesi,<br><em>birkaç kısa yanıt.</em>', 'Ofisimize ulaşma ve ilk görüşmenize hazırlanma hakkında.') + `
<section class="faq-section section container">${faqs.map((item, index) => `
  <details class="faq-item"${index === 0 ? ' open' : ''} data-reveal style="--i:${index}"><summary>
    <span class="row-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${e(item.question)}</span><span class="faq-toggle" aria-hidden="true">${icon('plus')}</span>
  </summary><p>${e(item.answer)}</p></details>`).join('')}
</section>`;
}
function missing(page) {
  return pageHeading(page, '404 / Sayfa bulunamadı', 'Bu sayfa artık<br><em>burada değil.</em>', 'Adresi kontrol edebilir veya aşağıdaki bağlantıdan ana sayfaya dönebilirsiniz.') + `
<div class="container missing-layout section"><div class="actions missing-actions">${action('/', 'Ana sayfaya dönün', 'button button-primary button-medium')}${action('/hizmetlerimiz', 'Çalışma alanlarımız')}</div></div>`;
}

// Runs before first paint: marks JS as present and decides whether the home intro plays
// (arriving from outside the site or on reload; never on internal navigation or reduced motion).
const bootScript = `(()=>{const d=document.documentElement;d.classList.add('js');try{if(!matchMedia('(prefers-reduced-motion: no-preference)').matches)return;if('IntersectionObserver' in window)d.classList.add('reveal-on');if(d.dataset.page!=='home')return;const n=performance.getEntriesByType('navigation')[0];let inside=false;try{inside=!!document.referrer&&new URL(document.referrer).origin===location.origin}catch(_){}if(!inside||(n&&n.type==='reload'))d.classList.add('intro')}catch(_){}})();`;

const renderers = { home, about, services, service: serviceDetail, blog, article: articleDetail, contact, faq, '404': missing };
export function renderPage(page) {
  return `<!doctype html>
<html lang="tr" data-page="${page.kind}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<script>${bootScript}</script>
${metadata(page)}
<meta name="theme-color" content="#0e1513"><link rel="icon" href="/favicon-square.png" type="image/png"><link rel="apple-touch-icon" href="/favicon-square.png"><link rel="manifest" href="/manifest.json">
<link rel="preload" href="/fonts/cormorant-garamond-400-regular-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/manrope-400-600-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/fonts/fonts.css"><link rel="stylesheet" href="/site.css"><script src="/site.js" defer></script>
</head><body id="sayfa-basi" class="page-${page.kind}">
${page.kind === 'home' ? introCurtain() : ''}${header(page)}<main id="icerik" tabindex="-1">${renderers[page.kind](page)}</main>${footer(page)}
</body></html>`;
}
