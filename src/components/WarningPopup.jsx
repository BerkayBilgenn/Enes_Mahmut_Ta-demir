import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Scale } from 'lucide-react';

export default function WarningPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(true);
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            {/* Header */}
            <div className="px-6 py-5 flex items-center justify-between border-b border-gold/10">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                </span>
                <div>
                  <h2 className="font-serif text-xl font-bold text-white leading-tight">ÖNEMLİ UYARI</h2>
                  <span className="text-gold text-xs font-semibold tracking-wider uppercase">Kamuoyu Duyurusu</span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gold hover:bg-gold/10 p-1.5 rounded-lg transition-colors"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto">
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Son günlerde bazı kişilere, avukatlık ofisimin adı kullanılarak SMS mesajları gönderildiği ve haklarında icra dosyası, dava dosyası veya benzeri hukuki süreçler bulunduğu yönünde yanıltıcı bildirimlerde bulunulduğu tespit edilmiştir.
                </p>

                <p>
                  Tarafımdan bu içerikte herhangi bir SMS gönderimi yapılmamaktadır. Söz konusu mesajlar ve içeriklerinde yer alan yönlendirmeler benimle hiçbir şekilde bağlantılı olmayıp, üçüncü kişiler tarafından gerçekleştirilen dolandırıcılık girişimleridir.
                </p>

                <p>
                  Vatandaşlarımızın bu tür mesajlara itibar etmemeleri, mesajlarda yer alan bağlantılara tıklamamaları, kişisel bilgilerini paylaşmamaları ve herhangi bir işlem yapmadan önce doğrudan benimle iletişime geçmeleri önemle rica olunur.
                </p>

                <p>
                  Ofisimin adı ve mesleki kimliğimin izinsiz kullanılması nedeniyle gerekli hukuki ve cezai süreçler başlatılmış olup, konu tarafımdan takip edilmektedir.
                </p>

                <p>Kamuoyuna saygıyla duyurulur.</p>

                <div className="pt-4 mt-4 border-t border-gold/10 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-gold flex-shrink-0" />
                  <p className="font-serif text-white">
                    <span className="font-semibold">EMT Hukuk &amp; Danışmanlık</span><br />
                    <span className="text-gold">Av. Enes Mahmut TAŞDEMİR</span><br />
                    <span className="text-gray-500 text-sm">25.06.2026</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gold/10 flex justify-end">
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-7 py-2.5 rounded-full text-navy font-semibold shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all"
              >
                Anladım
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
