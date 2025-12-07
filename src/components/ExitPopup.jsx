import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const SERVICE_ID = "service_5np4b5k";
const TEMPLATE_ID = "template_odrnj08";
const PUBLIC_KEY = "EerUN7AXx0_VD65pV";

function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem('exitPopupShown');
    if (wasShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e) => {
      // Only trigger when mouse leaves from the top
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Also show after 30 seconds on mobile (no mouse)
    const mobileTimer = setTimeout(() => {
      if (!hasShown && window.innerWidth < 768) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setSuccess(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-gold/20 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-gold/20 to-transparent px-6 py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <MessageSquare className="w-8 h-8 text-gold" />
                </motion.div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  Bir Dakika!
                </h2>
                <p className="text-gray-400 text-sm">
                  Hukuki sorununuz için <span className="text-gold font-semibold">hemen iletişime geçin</span>
                </p>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Mesajınız Alındı!</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <button
                      onClick={handleClose}
                      className="text-gold text-sm hover:underline"
                    >
                      Pencereyi Kapat
                    </button>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Ad Soyad</label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={loading}
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                          placeholder="0538 853 99 44"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">E-posta</label>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <input type="hidden" name="subject" value="Website - Hızlı İletişim Formu" />

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Konu</label>
                      <textarea
                        name="message"
                        rows={2}
                        required
                        disabled={loading}
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-sm"
                        placeholder="Kısaca hukuki konunuzu belirtin..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-gold-600 to-gold text-navy font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
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
                          Hemen İletişime Geç
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-500">
                      Bilgileriniz gizli tutulacaktır
                    </p>
                  </form>
                )}
              </div>

              {/* Quick Contact */}
              <div className="bg-navy-900/50 px-6 py-4 border-t border-gold/10">
                <div className="flex items-center justify-center gap-6 text-sm">
                  <a href="tel:+905388539944" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                    <Phone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                  <a href="mailto:info@tasdemirlaw.com" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                    <Mail className="w-4 h-4" />
                    E-posta Gönder
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ExitPopup;
