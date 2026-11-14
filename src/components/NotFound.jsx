import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Scale, Search, ArrowLeft } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-900 to-navy-950" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <motion.div 
        variants={staggerContainer} 
        initial="initial" 
        animate="animate" 
        className="relative z-10 max-w-2xl mx-auto px-4 text-center"
      >
        {/* 404 Number with Scale Icon */}
        <motion.div variants={fadeInUp} className="relative mb-8">
          <div className="flex items-center justify-center gap-4">
            <span className="font-serif text-[120px] sm:text-[180px] font-bold text-gradient-gold leading-none">4</span>
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="relative"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center border-2 border-gold/30">
                <Scale className="w-12 h-12 sm:w-16 sm:h-16 text-gold" />
              </div>
            </motion.div>
            <span className="font-serif text-[120px] sm:text-[180px] font-bold text-gradient-gold leading-none">4</span>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.h1 variants={fadeInUp} className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Sayfa <span className="text-gradient-gold">Bulunamadı</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Lütfen ana sayfaya dönün veya aşağıdaki bağlantıları kullanın.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-bold shadow-xl shadow-gold/20 hover:shadow-gold/40 transition-all"
            >
              <Home className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/#services"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              <Search className="w-5 h-5" />
              Hizmetleri Keşfet
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-gold/10">
          <p className="text-gray-500 text-sm mb-4">Popüler Sayfalar</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Hizmetlerimiz', href: '/#services' },
              { name: 'Blog', href: '/blog' },
              { name: 'İletişim', href: '/#contact' },
              { name: 'Hakkımızda', href: '/#about' }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div variants={fadeInUp} className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri Dön
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default NotFound;
