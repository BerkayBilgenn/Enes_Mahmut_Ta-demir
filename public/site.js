document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  header.classList.toggle('menu-open', open);
  menuButton.querySelector('.menu-label').textContent = open ? 'Kapat' : 'Menü';
}
menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
header?.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => setMenu(false)));
const smallScreen = window.matchMedia('(max-width: 860px)');
smallScreen.addEventListener('change', () => setMenu(false));
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
