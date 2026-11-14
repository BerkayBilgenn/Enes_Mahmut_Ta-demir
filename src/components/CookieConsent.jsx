import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, CheckCircle, Shield } from 'lucide-react';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 max-w-md"
        >
          <div className="bg-navy-900/95 backdrop-blur-xl border border-gold/20 rounded-2xl p-5 shadow-2xl shadow-black/50">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Çerez Politikası</h3>
                  <p className="text-xs text-gray-500">KVKK Uyumlu</p>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-gray-500 hover:text-white transition-colors p-1"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Web sitemizde deneyiminizi geliştirmek ve hizmetlerimizi sunmak için çerezler kullanıyoruz. 
              6698 sayılı KVKK kapsamında, çerez kullanımını kabul etmenizi rica ederiz.
            </p>

            {/* Features */}
            <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span>Güvenli</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-gold" />
                <span>KVKK Uyumlu</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={handleAccept}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-gold-600 to-gold text-navy font-semibold text-sm py-2.5 px-4 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                Kabul Et
              </motion.button>
              <motion.button
                onClick={handleDecline}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white/5 border border-white/10 text-gray-300 font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-white/10 transition-all"
              >
                Reddet
              </motion.button>
            </div>

            {/* Privacy Policy Link */}
            <p className="text-center mt-4 text-xs text-gray-600">
              Detaylı bilgi için{' '}
              <a href="#" className="text-gold hover:underline">
                Gizlilik Politikamızı
              </a>{' '}
              inceleyebilirsiniz.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
