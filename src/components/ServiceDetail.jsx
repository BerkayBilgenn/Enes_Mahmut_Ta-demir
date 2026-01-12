import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Calendar, ChevronRight, Send, Loader2, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { servicesData } from '../data/servicesData';
import SEO from './SEO';
import Breadcrumb from './Breadcrumb';

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
      {/* Dynamic SEO */}
      <SEO
        title={service.title}
        description={service.description}
        image={service.image}
        url={`/hizmet/${service.slug}`}
        schema={{
          type: 'Service',
          name: service.title
        }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
        
        {/* Background Image */}
        {service.image && (
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image} 
              alt={`${service.title} - Hukuki danışmanlık hizmeti görseli`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
          </div>
        )}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Breadcrumb Navigation */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Breadcrumb 
                items={[
                  { name: 'Hizmetler', path: '/#services' },
                  { name: service.title, path: `/hizmet/${service.slug}` }
                ]} 
              />
            </motion.div>

            {/* Hero Content with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div>
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
              </div>

              {/* Featured Image - Desktop */}
              {service.image && (
                <motion.div
                  variants={fadeInUp}
                  className="relative hidden lg:block"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[300px] xl:h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
                </motion.div>
              )}
            </div>

            {/* Mobile Featured Image */}
            {service.image && (
              <motion.div
                variants={fadeInUp}
                className="lg:hidden mt-8"
              >
                <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[200px] sm:h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section - Professional Layout */}
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Professional Content Card */}
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              
              {/* Content Header */}
              <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent px-6 sm:px-8 lg:px-10 py-5 border-b border-gold/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl text-white font-semibold">Hizmet Detayları</h2>
                    <p className="text-xs sm:text-sm text-gray-400">Profesyonel hukuki çözümler</p>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
                <div 
                  className="
                    [&>h3]:font-serif [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-8 first:[&>h3]:mt-0
                    [&>h3]:flex [&>h3]:items-center [&>h3]:gap-3
                    [&>h3]:before:content-[''] [&>h3]:before:w-1 [&>h3]:before:h-6 [&>h3]:before:bg-gradient-to-b [&>h3]:before:from-gold [&>h3]:before:to-gold/50 [&>h3]:before:rounded-full
                    
                    [&>p]:text-gray-300 [&>p]:leading-[1.8] [&>p]:text-[15px] sm:[&>p]:text-base [&>p]:mb-5
                    
                    [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:pl-0
                    [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:gap-3 [&>ul>li]:text-gray-300 [&>ul>li]:text-[15px] sm:[&>ul>li]:text-base [&>ul>li]:leading-relaxed
                    [&>ul>li]:bg-white/[0.02] [&>ul>li]:rounded-xl [&>ul>li]:p-4 [&>ul>li]:border [&>ul>li]:border-white/5
                    [&>ul>li]:before:content-['✓'] [&>ul>li]:before:text-gold [&>ul>li]:before:font-bold [&>ul>li]:before:text-lg
                    [&>ul>li]:list-none
                    
                    [&_strong]:text-gold [&_strong]:font-semibold
                  "
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {/* Content Footer */}
              <div className="bg-gradient-to-r from-gold/5 to-transparent px-6 sm:px-8 lg:px-10 py-5 border-t border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-gray-400">
                    <span className="text-gold font-medium">EMT Hukuk</span> ile hemen iletişime geçin
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm bg-gold/10 text-gold px-4 py-2 rounded-full hover:bg-gold/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                </div>
              </div>
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

            {/* Appointment Form Section - Below Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 sm:mt-16"
            >
              <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-navy-800/80 backdrop-blur-sm border border-gold/20 rounded-3xl p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  
                  {/* Left: Form */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                          Randevu Talebi
                        </h3>
                        <p className="text-sm text-gray-400">Hukuki sorununuz için hemen randevu alın</p>
                      </div>
                    </div>

                    {success ? (
                      /* Success Message */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                          className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <CheckCircle className="w-10 h-10 text-emerald-400" />
                        </motion.div>
                        <h4 className="font-serif text-xl font-semibold text-white mb-2">
                          Teşekkürler!
                        </h4>
                        <p className="text-gray-400 mb-4">
                          En kısa sürede sizinle iletişime geçeceğiz.
                        </p>
                        <button
                          onClick={() => setSuccess(false)}
                          className="text-gold hover:underline"
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
                            className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                          >
                            {error}
                          </motion.div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="Ad Soyad"
                            required
                            disabled={loading}
                            className="w-full bg-navy-900/50 border border-gold/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all disabled:opacity-50"
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Telefon"
                            required
                            disabled={loading}
                            className="w-full bg-navy-900/50 border border-gold/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all disabled:opacity-50"
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="E-posta"
                          required
                          disabled={loading}
                          className="w-full bg-navy-900/50 border border-gold/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all disabled:opacity-50"
                        />
                        {/* Hidden subject field with service title */}
                        <input type="hidden" name="subject" value={service.title} />
                        <textarea
                          name="message"
                          placeholder="Hukuki sorununuzu kısaca açıklayın..."
                          rows={4}
                          required
                          disabled={loading}
                          className="w-full bg-navy-900/50 border border-gold/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none disabled:opacity-50"
                        />
                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={!loading ? { scale: 1.02 } : {}}
                          whileTap={!loading ? { scale: 0.98 } : {}}
                          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-4 rounded-xl text-navy font-semibold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Gönderiliyor...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Randevu Talebi Gönder
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </div>

                  {/* Right: Contact Info */}
                  <div className="flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-white mb-4">
                          Hızlı İletişim
                        </h4>
                        <p className="text-gray-400 text-sm mb-6">
                          Acil hukuki danışmanlık için bizi hemen arayabilir veya e-posta gönderebilirsiniz.
                        </p>
                      </div>
                      
                      <a
                        href="#"
                        className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 hover:bg-white/10 transition-all group"
                      >
                        <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                          <Phone className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Telefon</p>
                          <p className="text-white font-medium">-------------</p>
                        </div>
                      </a>
                      
                      <a
                        href="mailto:emtasdemirhukuk@gmail.com"
                        className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 hover:bg-white/10 transition-all group"
                      >
                        <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                          <Mail className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">E-posta</p>
                          <p className="text-white font-medium">emtasdemirhukuk@gmail.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
