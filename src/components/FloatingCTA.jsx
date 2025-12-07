import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, ChevronUp, Plus } from 'lucide-react';

function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      // Close expanded menu when scrolling
      if (isExpanded && window.scrollY > 100) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isExpanded && !e.target.closest('.floating-cta-container')) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isExpanded]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumber = '905388539944'; // WhatsApp için
  const whatsappMessage = encodeURIComponent('Merhaba, hukuki danışmanlık hakkında bilgi almak istiyorum.');

  return (
    <>
      {/* Floating Buttons - Both Mobile and Desktop */}
      <div className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-3 floating-cta-container">
        {/* Scroll to Top - Desktop only */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="hidden md:flex w-12 h-12 bg-navy-800/90 backdrop-blur-sm border border-gold/20 rounded-full items-center justify-center text-gold hover:bg-navy-700 transition-colors shadow-lg"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expandable CTA */}
        <div className="relative">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute bottom-16 md:bottom-16 right-0 flex flex-col gap-3 mb-2"
              >
                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all whitespace-nowrap text-sm md:text-base"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">WhatsApp ile Yaz</span>
                  <span className="sm:hidden">WhatsApp</span>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+905388539944"
                  className="flex items-center gap-3 bg-gradient-to-r from-gold-600 to-gold text-navy pl-4 pr-5 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all whitespace-nowrap text-sm md:text-base"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className={`w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all ${
              isExpanded 
                ? 'bg-navy-800 text-white border border-gold/30' 
                : 'bg-gradient-to-r from-gold-600 to-gold text-navy'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isExpanded ? 45 : 0 }}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Plus className="w-7 h-7" />
            )}
          </motion.button>

          {/* Pulse animation when not expanded */}
          {!isExpanded && (
            <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping pointer-events-none" />
          )}
        </div>
      </div>
    </>
  );
}

export default FloatingCTA;

