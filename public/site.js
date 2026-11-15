const root = document.documentElement;
root.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const mobileMenu = document.querySelector('#mobile-menu');
const smallScreen = window.matchMedia('(max-width: 1023px)');
const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');

/* Mobile menu */
function setMenu(open, returnFocus = false) {
  if (!menuButton || !header || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Kapat' : 'Menü';
  header.classList.toggle('menu-open', open);
  if (open) header.classList.remove('is-hidden');
  root.classList.toggle('menu-scroll-locked', open);
  document.body.classList.toggle('menu-scroll-locked', open);
  document.querySelector('main').inert = open;
  document.querySelector('.site-footer').inert = open;
  mobileMenu.inert = !open;
  if (open) mobileMenu.querySelector('a')?.focus({ preventScroll: true });
  if (!open && returnFocus) menuButton.focus({ preventScroll: true });
}

setMenu(false);
menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true', true));
header?.addEventListener('keydown', event => {
  if (menuButton?.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') {
    event.preventDefault();
    setMenu(false, true);
  }
  if (event.key === 'Tab') {
    const links = [...mobileMenu.querySelectorAll('a[href]')];
    const first = links[0];
    const last = links.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      menuButton.focus();
    } else if (event.shiftKey && document.activeElement === menuButton) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      menuButton.focus();
    } else if (!event.shiftKey && document.activeElement === menuButton) {
      event.preventDefault();
      first.focus();
    }
  }
});
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
smallScreen.addEventListener('change', () => {
  const needsFocus = mobileMenu?.contains(document.activeElement) || document.activeElement === menuButton;
  setMenu(false);
  if (needsFocus) {
    const target = smallScreen.matches ? menuButton : header.querySelector('.desktop-nav a');
    target?.focus({ preventScroll: true });
  }
});

/* Article filters */
const filters = document.querySelector('[data-filters]');
if (filters) {
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    const selected = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => {
      const active = item === button;
      item.classList.toggle('filter-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    document.querySelectorAll('[data-article]').forEach(article => {
      article.hidden = selected !== 'all' && article.dataset.category !== selected;
      if (!article.hidden) count++;
    });
    document.querySelector('.filter-status').textContent = count + ' yazı gösteriliyor.';
  });
}

/* Scroll reveals. The head script adds .reveal-on before first paint; .reveal-ready turns off the CSS failsafe. */
const revealTargets = [...document.querySelectorAll('[data-reveal]')];
const revealAll = () => revealTargets.forEach(target => target.classList.add('is-in'));
if (root.classList.contains('reveal-on')) {
  root.classList.add('reveal-ready');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  revealTargets.forEach(target => observer.observe(target));
  window.addEventListener('beforeprint', revealAll);
} else {
  revealAll();
}

/* Header state, word-by-word statement and hero depth, all from one rAF-throttled scroll handler */
const statements = [...document.querySelectorAll('[data-words]')].map(element => ({ element, words: [...element.querySelectorAll('.w')], lit: -1 }));
const parallax = document.querySelector('.hero-parallax');
const hero = document.querySelector('.hero');
const wide = window.matchMedia('(min-width: 1024px)');
let lastY = window.scrollY;
let ticking = false;

function update() {
  ticking = false;
  const y = window.scrollY;
  const vh = window.innerHeight;
  if (header) {
    header.classList.toggle('is-scrolled', y > 24);
    const menuOpen = header.classList.contains('menu-open');
    const focusInside = header.contains(document.activeElement);
    if (menuOpen || focusInside || y < vh * 0.6 || y < lastY - 4) header.classList.remove('is-hidden');
    else if (y > lastY + 6) header.classList.add('is-hidden');
  }
  lastY = y;
  if (!motion.matches) return;
  for (const statement of statements) {
    const rect = statement.element.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (vh * 0.88 - rect.top) / (rect.height + vh * 0.38)));
    const lit = Math.round(progress * statement.words.length);
    if (lit === statement.lit) continue;
    statement.words.forEach((word, index) => word.classList.toggle('lit', index < lit));
    statement.lit = lit;
  }
  if (parallax && hero && wide.matches && y < hero.offsetHeight) parallax.style.transform = `translate3d(0, ${(y * 0.16).toFixed(1)}px, 0)`;
}
function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(update);
}
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
header?.addEventListener('focusin', () => header.classList.remove('is-hidden'));
update();
