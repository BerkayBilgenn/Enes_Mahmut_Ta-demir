import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { servicesData } from '../data/servicesData';
import PageHero from '../components/PageHero';

// EmailJS Configuration  
const SERVICE_ID = "service_5np4b5k";
const TEMPLATE_ID = "template_odrnj08";
const PUBLIC_KEY = "EerUN7AXx0_VD65pV";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '+90 538 853 99 44', href: 'tel:+905388539944' },
  { icon: Mail, label: 'E-posta', value: 'emtasdemirhukuk@gmail.com', href: 'mailto:emtasdemirhukuk@gmail.com' },
  { icon: MapPin, label: 'Adres', value: 'Çağlayan Mah. Vatan Cad. No:8 D:12 Orhan Pınar İş Merkezi (Çağlayan Adliyesi Karşısı) Kağıthane/ İstanbul', href: '#' }
];

export default function ContactPage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

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
      setError('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        subtitle="İletişim"
        title="İstanbul Çağlayan Hukuk Ofisimiz"
        description="İstanbul Çağlayan Adliyesi'ne yürüme mesafesindeki ofisimizde sizi ağırlamaktan mutluluk duyarız."
        breadcrumbs={[{ label: "İletişim" }]}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Main Contact Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-3"
            >
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl p-12 text-center h-full flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Mesajınız Başarıyla İletildi!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <motion.button
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium hover:bg-gold/10 transition-all mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Yeni Mesaj Gönder
                  </motion.button>
                </motion.div>
              ) : (
                <form 
                  ref={form} 
                  onSubmit={handleSubmit} 
                  className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-8"
                >
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">
                    Bize Ulaşın
                  </h3>
                  
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                        placeholder="Adınız Soyadınız"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                        placeholder="+90 5XX XXX XX XX"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="ornek@email.com"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      required
                      disabled={loading}
                    >
                      <option value="">Konu Seçiniz</option>
                      {servicesData.slice(0, 8).map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                      placeholder="Hukuki sorununuzu kısaca açıklayın..."
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-lg text-navy font-semibold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
                        Gönder
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">{info.label}</h4>
                      <p className="text-white font-medium group-hover:text-gold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}


              {/* Quick Call CTA */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6 text-center"
              >
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Acil Durumlar İçin
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  7/24 acil hukuki destek hattımız ile size yardımcı olmaya hazırız.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-3 rounded-full text-navy font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
