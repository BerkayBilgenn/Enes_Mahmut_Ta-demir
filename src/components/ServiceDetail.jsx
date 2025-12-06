import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Calendar, ChevronRight, Send } from 'lucide-react';
import { useState } from 'react';
import { servicesData } from '../data/servicesData';

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
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Sayfa Bulunamadı</h1>
          <Link to="/" className="text-gold hover:underline">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              className="inline-flex items-center gap-2 text-gold hover:text-gold-400 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Ana Sayfaya Dön</span>
            </motion.button>

            {/* Icon */}
            <motion.div
              variants={fadeInUp}
              className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6"
            >
              <Icon className="w-10 h-10 text-gold" />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-2xl"
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:font-serif prose-headings:text-gold
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-white
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-gray-300 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {/* Related Services */}
              <div className="mt-16 pt-12 border-t border-gold/10">
                <h3 className="font-serif text-2xl text-white mb-6">İlgili Hizmetler</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {servicesData
                    .filter(s => s.id !== service.id)
                    .slice(0, 4)
                    .map((relatedService) => {
                      const RelatedIcon = relatedService.icon;
                      return (
                        <Link
                          key={relatedService.id}
                          to={`/hizmet/${relatedService.slug}`}
                          className="group flex items-center gap-4 p-4 bg-navy-800/50 border border-gold/10 rounded-xl hover:border-gold/30 transition-all"
                        >
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <RelatedIcon className="w-6 h-6 text-gold" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-white group-hover:text-gold transition-colors truncate">
                              {relatedService.title}
                            </h4>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </motion.article>

            {/* Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Appointment Form Card */}
                <div className="bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-gold" />
                    <h3 className="font-serif text-xl font-semibold text-white">
                      Hemen Randevu Al
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ad Soyad"
                        required
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefon"
                        required
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-posta"
                        required
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Kısa açıklama..."
                        rows={3}
                        className="w-full bg-navy-800/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none text-sm"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-3 rounded-lg text-navy font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Gönder
                    </motion.button>
                  </form>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6">
                  <h4 className="font-serif text-lg font-semibold text-white mb-4">
                    Hızlı İletişim
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+905551234567"
                      className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Phone className="w-5 h-5 text-gold" />
                      <span>+90 555 123 45 67</span>
                    </a>
                    <a
                      href="mailto:info@tasdemirlaw.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gold" />
                      <span>info@tasdemirlaw.com</span>
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
