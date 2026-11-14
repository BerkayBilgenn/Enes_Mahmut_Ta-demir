import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner({ 
  title = "Hukuki Danışmanlık İçin Bizimle İletişime Geçin",
  subtitle = "Uzman kadromuz ile her türlü hukuki sorununuzda yanınızdayız.",
  primaryButton = { text: "İletişime Geç", href: "/iletisim" },
  secondaryButton = { text: "Hemen Ara", href: "tel:+905388539944" },
  variant = "default" // default, compact
}) {
  return (
    <section className={`relative overflow-hidden ${variant === 'compact' ? 'py-12' : 'py-20'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      {/* Border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`font-serif font-bold text-white mb-4 ${
            variant === 'compact' ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {title}
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={primaryButton.href}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-semibold text-lg shadow-xl shadow-gold/20 hover:shadow-gold/40 transition-all"
              >
                {primaryButton.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.a
              href={secondaryButton.href}
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              {secondaryButton.text}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
