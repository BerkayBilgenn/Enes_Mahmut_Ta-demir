import { servicesData } from '../data/servicesData.js';
import { blogData } from '../data/blogData.js';

export { servicesData, blogData };
export const site = {
  origin: 'https://www.emtasdemirhukuk.com',
  name: 'EMT Hukuk & Danışmanlık',
  lawyer: 'Enes Mahmut Taşdemir',
  phone: '+905388539944',
  phoneDisplay: '+90 538 853 99 44',
  email: 'emtasdemirhukuk@gmail.com',
  street: 'Çağlayan Mah. Vatan Cad. No:8 D:12 Orhan Pınar İş Merkezi',
  locality: 'Kağıthane',
  region: 'İstanbul',
  get address() { return this.street + ', ' + this.locality + ' / ' + this.region; },
  get maps() { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.name + ' ' + this.address); },
};

export const faqs = [
  { question: 'İlk görüşme için nasıl randevu alabilirim?', answer: 'Telefon veya e-posta üzerinden ofisle iletişime geçerek görüşme talebinizi iletebilirsiniz. Görüşmenin zamanı ve kapsamı karşılıklı olarak belirlenir.' },
  { question: 'Görüşmeye hangi belgeleri getirmeliyim?', answer: 'Konunuzla ilgili sözleşme, tebligat, yazışma ve diğer belgeleri yanınızda bulundurmanız değerlendirmeyi kolaylaştırır. Gerekli belgeleri görüşme öncesinde ofise sorabilirsiniz.' },
  { question: 'Ofisiniz nerede?', answer: 'Ofisimiz İstanbul, Kağıthane ilçesi Çağlayan Mahallesi, Vatan Caddesi No:8 D:12, Orhan Pınar İş Merkezi adresindedir.' },
  { question: 'Avukatlık ücreti hakkında nasıl bilgi alabilirim?', answer: 'Yapılacak işin kapsamı değerlendirildikten sonra ücret ve çalışma koşulları hakkında ofisten bilgi alabilirsiniz.' },
  { question: 'Sitedeki yazılar kişisel hukuki görüş yerine geçer mi?', answer: 'Yazılar genel bilgilendirme amacı taşır. Her olayın koşulları ve uygulanacak hükümler farklı olabileceğinden, durumunuza özel değerlendirme için doğrudan hukuki destek almanız gerekir.' },
];

const corePages = [
  { path: '/', kind: 'home', label: 'Ana sayfa', title: 'Avukat Enes Mahmut Taşdemir | İstanbul Çağlayan', description: 'Avukat Enes Mahmut Taşdemir. İstanbul Çağlayan’daki EMT Hukuk & Danışmanlık ofisinde hukuki danışmanlık, dava ve uyuşmazlık süreçlerinin takibi.' },
  { path: '/hakkimizda', kind: 'about', label: 'Ofisimiz', title: 'Avukat Enes Mahmut Taşdemir ve Ofisimiz', description: 'EMT Hukuk & Danışmanlık ve Avukat Enes Mahmut Taşdemir. İstanbul Çağlayan ofisi, hukuki çalışma yaklaşımı ve iletişim bilgileri.' },
  { path: '/hizmetlerimiz', kind: 'services', label: 'Çalışma alanları', title: 'Hukuki Çalışma Alanlarımız', description: 'EMT Hukuk & Danışmanlık çalışma alanları: ceza, aile, iş, ticaret, gayrimenkul, sözleşmeler ve diğer hukuki uyuşmazlıklar.' },
  { path: '/blog', kind: 'blog', label: 'Hukuk notları', title: 'Hukuk Notları ve Makaleler', description: 'Aile, iş, gayrimenkul ve ticaret hukuku başta olmak üzere hukuki konulara ilişkin genel bilgilendirme yazıları ve arşiv makaleleri.' },
  { path: '/iletisim', kind: 'contact', label: 'İletişim', title: 'İletişim | İstanbul Çağlayan Hukuk Ofisi', description: 'EMT Hukuk & Danışmanlık iletişim: +90 538 853 99 44. Çağlayan Mahallesi, Vatan Caddesi No:8 D:12, Orhan Pınar İş Merkezi, Kağıthane, İstanbul.' },
  { path: '/sss', kind: 'faq', label: 'Sık sorulan sorular', title: 'Görüşme Öncesi Sık Sorulan Sorular', description: 'EMT Hukuk ofisine ulaşma, ilk görüşme, gerekli belgeler ve randevu süreci hakkında sık sorulan sorular.' },
];
export const pages = [
  ...corePages,
  ...servicesData.map(service => ({ path: '/hizmet/' + service.slug, kind: 'service', label: service.title, title: service.title + ' | İstanbul Çağlayan', description: service.description, service })),
  ...blogData.map(article => ({ path: '/blog/' + article.slug, kind: 'article', label: article.title, title: article.title, description: article.excerpt, article })),
];
export const notFound = { path: '/404', kind: '404', label: 'Sayfa bulunamadı', title: 'Sayfa Bulunamadı', description: 'Aradığınız sayfa bulunamadı. EMT Hukuk ana sayfasına veya çalışma alanlarına ulaşabilirsiniz.', noindex: true };
export const featuredSlugs = ['ceza-ve-infaz', 'aile', 'is-ve-sosyal-guvenlik', 'sirketler-ve-ticaret', 'gayrimenkul', 'sozlesmeler'];
export const featuredServices = featuredSlugs.map(slug => servicesData.find(service => service.slug === slug));
export const formatDate = date => new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T12:00:00Z'));
export const escapeHtml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
