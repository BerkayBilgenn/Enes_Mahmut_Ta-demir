import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Award,
  Clock,
  CheckCircle,
  Send,
  Users,
  Loader2,
  BookOpen,
  Calendar,
  ArrowRight,
  Star
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { servicesData } from './data/servicesData';
import { blogData } from './data/blogData';
import ServiceDetail from './components/ServiceDetail';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';
import LoadingSpinner from './components/LoadingSpinner';
import CookieConsent from './components/CookieConsent';
import FloatingCTA from './components/FloatingCTA';
import ExitPopup from './components/ExitPopup';
import FAQSchema from './components/FAQSchema';
import SignatureIntro from './components/SignatureIntro';
// New Page Imports
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import LocalBusinessSchema from './components/LocalBusinessSchema';

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

// Trust Guarantees Data
const guarantees = [
  { label: "Profesyonel Yaklaşım", icon: Award },
  { label: "Şeffaf Süreç Yönetimi", icon: CheckCircle },
  { label: "Müvekkil Odaklı Hizmet", icon: Users },
  { label: "Hızlı Geri Dönüş", icon: Clock }
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
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { name: 'Makaleler', href: '/blog' },
    { name: 'SSS', href: '/sss' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      navigate(href);
    }, 100);
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
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo-transparent.png" 
                alt="EMT Hukuk" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-xl font-semibold text-white">EMT</span>
                <span className="font-serif text-xl font-semibold text-gold ml-1">Hukuk</span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group cursor-pointer ${
                  location.pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.a
              href="tel:+902121234567"
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
            className="lg:hidden text-white p-2"
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
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === item.href 
                        ? 'text-gold bg-gold/10' 
                        : 'text-gray-300 hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+902121234567"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 rounded-full text-navy font-semibold mt-2"
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
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop" 
          alt="Law Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy" />
      </div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animated-gradient opacity-40" />
      
      {/* Gold Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
          
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/30 px-5 py-2.5 rounded-full">
            <Scale className="w-5 h-5 text-gold" />
            
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="text-white">Haklarınız İçin</span><br />
            <span className="text-gradient-gold">Güçlü Savunma</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300">
            Taşdemir Hukuk güvencesiyle her türlü hukuki uyuşmazlıkta yanınızdayız.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Primary CTA - Phone */}
            <motion.a 
              href="tel:+902121234567" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-600 to-gold px-8 py-5 rounded-full text-navy font-bold text-lg shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              <span>Hemen Ara</span>
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/iletisim" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Hemen İletişime Geçin
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span>Profesyonel Hizmet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span>Şeffaf Süreç</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span>İlk Görüşme</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Fixed at bottom */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5 }} 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <motion.div className="w-1.5 h-3 bg-gold rounded-full mt-2" />
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

// Quick Services Preview Section for HomePage
function QuickServices() {
  const featuredServices = servicesData.slice(0, 6);
  
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Services Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
      
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

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/hizmetlerimiz"
            className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all"
          >
            Tüm Hizmetlerimizi Görün
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Guarantee Card
function GuaranteeCard({ guarantee, index }) {
  const Icon = guarantee.icon;
  return (
    <motion.div variants={scaleIn} className="text-center p-6">
      <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
        <Icon className="w-8 h-8 text-gold" />
      </motion.div>
      <p className="text-white font-medium">{guarantee.label}</p>
    </motion.div>
  );
}

// Quick About Section for HomePage
function QuickAbout() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2000&auto=format&fit=crop" 
          alt="About Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-900/95" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-gold text-sm font-semibold tracking-wider uppercase">Neden Biz?</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Güven, <span className="text-gradient-gold">Tecrübe</span> ve Başarı
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-6 leading-relaxed">
              Taşdemir Hukuk olarak, yılların verdiği deneyim ve bilgi birikimimizi müvekkillerimizin hizmetine sunuyoruz.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-8 leading-relaxed">
              Modern hukuk dünyasının gerektirdiği yenilikçi yaklaşımlar ile geleneksel değerleri birleştirerek, size özel çözümler üretiyoruz.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4">
              {['Profesyonel hukuki danışmanlık', 'Hızlı geri dönüş ve iletişim', 'Şeffaf ve güvenilir süreç yönetimi', 'Müvekkil memnuniyeti odaklı yaklaşım'].map((feature, index) => (
                <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                to="/hakkimizda"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
              >
                Daha Fazla Bilgi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => (
              <motion.div key={guarantee.label} variants={scaleIn} className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all">
                <GuaranteeCard guarantee={guarantee} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section for HomePage
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hukuki Danışmanlık İçin Bizimle İletişime Geçin
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Uzman kadromuz ile her türlü hukuki sorununuzda yanınızdayız.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-semibold text-lg shadow-xl shadow-gold/20 hover:shadow-gold/40 transition-all"
              >
                İletişime Geç
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.a
              href="tel:+902121234567"
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    hizmetler: [
      { name: 'Yabancılar Hukuku', href: '/hizmet/yabancilar-ve-vatandaslik' },
      { name: 'Ticaret Hukuku', href: '/hizmet/sirketler-ve-ticaret' },
      { name: 'Aile Hukuku', href: '/hizmet/aile' },
      { name: 'Ceza Hukuku', href: '/hizmet/ceza-ve-infaz' },
    ],
    kurumsal: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'SSS', href: '/sss' },
      { name: 'Makaleler', href: '/blog' },
    ],
  };

  return (
    <footer className="relative bg-navy-950 py-16 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-lg font-semibold text-white">Taşdemir</span>
                <span className="font-serif text-lg font-semibold text-gold ml-1">Hukuk</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm mb-4">
              Güvenilir ve profesyonel hukuki danışmanlık hizmeti.
            </p>
            <motion.a 
              href="tel:+902121234567" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold-400 transition-colors" 
              whileHover={{ x: 5 }}
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Ara</span>
            </motion.a>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-gray-500 text-sm">Levent, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-gray-500 text-sm">info@tasdemirlaw.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-gray-500 text-sm">Pzt-Cum: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Taşdemir Hukuk. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link to="/iletisim" className="text-gray-500 hover:text-gold transition-colors text-sm">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// HomePage Component - Simplified with preview sections
function HomePage() {
  return (
    <>
      <Hero />
      <QuickAbout />
      <QuickServices />
      <CTASection />
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
      <FloatingCTA />
      <CookieConsent />
      <ExitPopup />
    </div>
  );
}

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Local Business Schema for Google Maps & Local SEO */}
      <LocalBusinessSchema />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sss" element={<FAQPage />} />
          <Route path="/hizmet/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
