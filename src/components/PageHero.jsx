import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  breadcrumbs = [],
  backgroundImage = null 
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-800" />
      )}
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      {/* Gold line accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
              Ana Sayfa
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-gray-400 hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        
        {/* Title Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {subtitle && (
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4"
            >
              {subtitle}
            </motion.span>
          )}
          
          <motion.h1 
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-lg text-gray-400"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
