import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Calendar, ChevronRight, Send, Loader2, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { servicesData } from '../data/servicesData';

// EmailJS Configuration
const SERVICE_ID = "service_5np4b5k";
const TEMPLATE_ID = "template_odrnj08";
const PUBLIC_KEY = "EerUN7AXx0_VD65pV";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.slug === slug);
  const form = useRef();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Sayfa Bulunamadı</h1>
          <Link to="/" className="text-gold hover:underline">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

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
      setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Back Button */}
            <motion.button
              variants={fadeInUp}
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-400 mb-6 sm:mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Ana Sayfaya Dön</span>
            </motion.button>

            {/* Icon */}
            <motion.div
              variants={fadeInUp}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl"
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Improved Grid Layout */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
            
            {/* Main Content - 70% on desktop */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              {/* Rich Content with Better Typography */}
              <div className="bg-gradient-to-br from-navy-800/40 to-navy-900/40 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div 
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:font-serif prose-headings:text-gold prose-headings:font-semibold
                    prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-0 prose-h3:mb-4 prose-h3:pb-3 prose-h3:border-b prose-h3:border-gold/20
                    prose-h4:text-lg sm:prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-white prose-h4:flex prose-h4:items-center prose-h4:gap-2
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base
                    prose-ul:text-gray-300 prose-ul:space-y-2 prose-ul:my-4
                    prose-li:mb-0 prose-li:pl-2
                    prose-strong:text-gold prose-strong:font-semibold
                    [&_h4]:before:content-['◆'] [&_h4]:before:text-gold [&_h4]:before:text-sm [&_h4]:before:mr-2"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {/* Related Services */}
              <div className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-gold/10">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-6">İlgili Hizmetler</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {servicesData
                    .filter(s => s.id !== service.id)
                    .slice(0, 4)
                    .map((relatedService) => {
                      const RelatedIcon = relatedService.icon;
                      return (
                        <Link
                          key={relatedService.id}
                          to={`/hizmet/${relatedService.slug}`}
                          className="group flex items-center gap-3 sm:gap-4 p-4 bg-navy-800/50 border border-gold/10 rounded-xl hover:border-gold/30 hover:bg-navy-800/70 transition-all"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                            <RelatedIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm sm:text-base text-white group-hover:text-gold transition-colors truncate">
                              {relatedService.title}
                            </h4>
                          </div>
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </motion.article>

            {/* Sticky Sidebar - 30% on desktop */}
            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Appointment Form Card */}
                <div className="bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                      Hemen Randevu Al
                    </h3>
                  </div>

                  {success ? (
                    /* Success Message */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                      </motion.div>
                      <h4 className="font-serif text-lg font-semibold text-white mb-2">
                        Teşekkürler!
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        En kısa sürede sizinle iletişime geçeceğiz.
                      </p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="text-gold text-sm hover:underline"
                      >
                        Yeni mesaj gönder
                      </button>
                    </motion.div>
                  ) : (
                    /* Contact Form */
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs sm:text-sm"
                        >
                          {error}
                        </motion.div>
                      )}

                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Ad Soyad"
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Telefon"
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="E-posta"
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm disabled:opacity-50"
                        />
                      </div>
                      {/* Hidden subject field with service title */}
                      <input type="hidden" name="subject" value={service.title} />
                      <div>
                        <textarea
                          name="message"
                          placeholder="Hukuki sorununuzu kısaca açıklayın..."
                          rows={4}
                          required
                          disabled={loading}
                          className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-sm disabled:opacity-50"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-3 rounded-lg text-navy font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Gönder
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-5 sm:p-6">
                  <h4 className="font-serif text-lg font-semibold text-white mb-4">
                    Hızlı İletişim
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+905551234567"
                      className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-sm sm:text-base">+90 555 123 45 67</span>
                    </a>
                    <a
                      href="mailto:info@tasdemirlaw.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-sm sm:text-base">info@tasdemirlaw.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
