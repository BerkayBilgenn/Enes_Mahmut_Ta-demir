import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Award,
  Clock,
  CheckCircle,
  Send,
  Users,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { servicesData } from './data/servicesData';
import ServiceDetail from './components/ServiceDetail';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Stats Data
const stats = [
  { number: "15+", label: "Yıllık Deneyim", icon: Award },
  { number: "1000+", label: "Başarılı Dava", icon: CheckCircle },
  { number: "500+", label: "Mutlu Müvekkil", icon: Users },
  { number: "24/7", label: "Destek", icon: Clock }
];

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', href: '/#hero' },
    { name: 'Hizmetlerimiz', href: '/#services' },
    { name: 'Hakkımızda', href: '/#about' },
    { name: 'İletişim', href: '/#contact' }
  ];

  const handleNavClick = (e, href) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-gold" />
              <div className="hidden sm:block">
                <span className="font-serif text-xl font-semibold text-white">Av. Enes Mahmut</span>
                <span className="font-serif text-xl font-semibold text-gold ml-1">Taşdemir</span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.a
              href="tel:+905551234567"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-2.5 rounded-full text-navy font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Hemen Ara
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-gold transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 rounded-full text-navy font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Hemen Ara
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(180, 155, 102, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(180, 155, 102, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 px-4 py-2 rounded-full">
            <Scale className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-300">Profesyonel Hukuki Danışmanlık</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Hukuki Süreçlerinizde</span><br />
            <span className="text-gradient-gold">Güvenilir ve Profesyonel</span><br />
            <span className="text-white">Çözüm Ortağınız</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Av. Enes Mahmut Taşdemir güvencesiyle haklarınız emin ellerde.<br className="hidden sm:block" />
            Her türlü hukuki sorununuzda yanınızdayız.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-semibold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Ücretsiz Ön Görüşme Yapın
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a href="#services" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-medium hover:bg-gold/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Hizmetlerimizi Keşfedin
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <motion.div className="w-1.5 h-3 bg-gold rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  const Icon = service.icon;
  
  return (
    <motion.article variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
      <Link
        to={`/hizmet/${service.slug}`}
        className="group block relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:border-gold/40 transition-all duration-500 card-glow overflow-hidden h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div className="relative w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" whileHover={{ rotate: 5 }}>
          <Icon className="w-7 h-7 text-gold" />
        </motion.div>

        <h3 className="relative font-serif text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
          {service.title}
        </h3>
        <p className="relative text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        <div className="relative mt-4 flex items-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Detaylı Bilgi</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
        </div>
      </Link>
    </motion.article>
  );
}

// Services Section
function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-800 to-navy" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4">Uzmanlık Alanlarımız</motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hukuki <span className="text-gradient-gold">Hizmetlerimiz</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-400">
            Geniş bir yelpazede sunduğumuz profesyonel hukuki danışmanlık hizmetleri ile her türlü ihtiyacınıza çözüm üretiyoruz.
          </motion.p>
        </motion.div>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Stat Card
function StatCard({ stat, index }) {
  const Icon = stat.icon;
  return (
    <motion.div variants={scaleIn} className="text-center p-6">
      <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
        <Icon className="w-8 h-8 text-gold" />
      </motion.div>
      <motion.div className="font-serif text-4xl lg:text-5xl font-bold text-gradient-gold mb-2" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
        {stat.number}
      </motion.div>
      <p className="text-gray-400 font-medium">{stat.label}</p>
    </motion.div>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-gold text-sm font-semibold tracking-wider uppercase">Neden Biz?</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Güven, <span className="text-gradient-gold">Tecrübe</span> ve Başarı
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-6 leading-relaxed">
              Av. Enes Mahmut Taşdemir olarak, yılların verdiği deneyim ve bilgi birikimimizi müvekkillerimizin hizmetine sunuyoruz.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-8 leading-relaxed">
              Modern hukuk dünyasının gerektirdiği yenilikçi yaklaşımlar ile geleneksel değerleri birleştirerek, size özel çözümler üretiyoruz.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4">
              {['Ücretsiz ön görüşme hizmeti', '7/24 acil hukuki destek', 'Şeffaf ve güvenilir süreç yönetimi', 'Müvekkil memnuniyeti odaklı yaklaşım'].map((feature, index) => (
                <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={scaleIn} className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all">
                <StatCard stat={stat} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// EmailJS Configuration
const SERVICE_ID = "service_5np4b5k";
const TEMPLATE_ID = "template_odrnj08";
const PUBLIC_KEY = "EerUN7AXx0_VD65pV";

// Contact Section
function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+90 555 123 45 67', href: 'tel:+905551234567' },
    { icon: Mail, label: 'E-posta', value: 'info@tasdemirlaw.com', href: 'mailto:info@tasdemirlaw.com' },
    { icon: MapPin, label: 'Adres', value: 'Levent, İstanbul, Türkiye', href: '#' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-gold text-sm font-semibold tracking-wider uppercase">Bizimle İletişime Geçin</motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Hukuki <span className="text-gradient-gold">Danışmanlık</span> İçin
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-400">
            Size yardımcı olmaktan mutluluk duyarız. Formu doldurun veya doğrudan bizi arayın.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-3">
            {success ? (
              /* Success Message Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Mesajınız Başarıyla İletildi!
                </h3>
                <p className="text-gray-400 mb-6">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <motion.button
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium hover:bg-gold/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yeni Mesaj Gönder
                </motion.button>
              </motion.div>
            ) : (
              /* Contact Form */
              <form ref={form} onSubmit={handleSubmit} className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-8">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ad Soyad</label>
                    <input type="text" id="name" name="name" className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Adınız Soyadınız" required disabled={loading} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefon</label>
                    <input type="tel" id="phone" name="phone" className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="+90 5XX XXX XX XX" required disabled={loading} />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta</label>
                  <input type="email" id="email" name="email" className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="ornek@email.com" required disabled={loading} />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Konu</label>
                  <select id="subject" name="subject" className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" required disabled={loading}>
                    <option value="">Konu Seçiniz</option>
                    {servicesData.slice(0, 8).map((service) => (<option key={service.id} value={service.title}>{service.title}</option>))}
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mesajınız</label>
                  <textarea id="message" name="message" rows={5} className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none" placeholder="Hukuki sorununuzu kısaca açıklayın..." required disabled={loading} />
                </div>
                <motion.button 
                  type="submit" 
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-lg text-navy font-semibold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed" 
                  whileHover={!loading ? { scale: 1.02 } : {}} 
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Gönder
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.a key={info.label} href={info.href} variants={fadeInUp} className="flex items-start gap-4 bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all group" whileHover={{ x: 5 }}>
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">{info.label}</h4>
                    <p className="text-white font-medium group-hover:text-gold transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6">
              <h4 className="text-lg font-serif font-semibold text-white mb-4">Çalışma Saatleri</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between"><span>Pazartesi - Cuma</span><span className="text-gold">09:00 - 18:00</span></div>
                <div className="flex justify-between"><span>Cumartesi</span><span className="text-gold">10:00 - 14:00</span></div>
                <div className="flex justify-between"><span>Pazar</span><span className="text-gray-500">Kapalı</span></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative bg-navy-950 py-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <Link to="/" className="flex items-center gap-2 justify-center md:justify-start">
            <Scale className="w-8 h-8 text-gold" />
            <div>
              <span className="font-serif text-lg font-semibold text-white">Av. Enes Mahmut</span>
              <span className="font-serif text-lg font-semibold text-gold ml-1">Taşdemir</span>
            </div>
          </Link>
          <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
          <div className="flex justify-center md:justify-end">
            <motion.a href="tel:+905551234567" className="inline-flex items-center gap-2 text-gold hover:text-gold-400 transition-colors" whileHover={{ x: 5 }}>
              <Phone className="w-4 h-4" /><span>+90 555 123 45 67</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// HomePage Component
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

// Layout Component
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
