import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  
  return (
    <motion.article 
      variants={fadeInUp} 
      whileHover={{ scale: 1.02, y: -5 }}
      className="h-full"
    >
      <Link
        to={`/hizmet/${service.slug}`}
        className="group block relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:border-gold/40 transition-all duration-500 card-glow overflow-hidden h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          className="relative w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" 
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-7 h-7 text-gold" />
        </motion.div>

        <h3 className="relative font-serif text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors">
          {service.title}
        </h3>
        <p className="relative text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4 line-clamp-3">
          {service.description}
        </p>

        <div className="relative flex items-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Detaylı Bilgi</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
        </div>
      </Link>
    </motion.article>
  );
}

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageHero
        subtitle="Hizmetlerimiz"
        title="Hukuki Hizmetlerimiz"
        description="Geniş bir yelpazede sunduğumuz profesyonel hukuki danışmanlık hizmetleri ile her türlü ihtiyacınıza çözüm üretiyoruz."
        breadcrumbs={[{ label: "Hizmetlerimiz" }]}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Services Grid Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Hizmet ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-navy-800/50 border border-gold/20 rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Services Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mb-8"
          >
            {filteredServices.length} hizmet listeleniyor
          </motion.p>

          {/* Services Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                "{searchTerm}" ile eşleşen hizmet bulunamadı.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Neden <span className="text-gradient-gold">Bizi Tercih Etmelisiniz?</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              15+ yıllık deneyimimiz, 1000+ başarılı dava geçmişimiz ve müvekkil odaklı yaklaşımımızla 
              hukuki süreçlerinizde en güvenilir partneriniz oluyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-navy-800/50 border border-gold/10 rounded-full px-4 py-2">
                <span className="text-gold font-semibold">15+</span>
                <span className="text-gray-400 text-sm">Yıllık Deneyim</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-800/50 border border-gold/10 rounded-full px-4 py-2">
                <span className="text-gold font-semibold">1000+</span>
                <span className="text-gray-400 text-sm">Başarılı Dava</span>
              </div>
              <div className="flex items-center gap-2 bg-navy-800/50 border border-gold/10 rounded-full px-4 py-2">
                <span className="text-gold font-semibold">500+</span>
                <span className="text-gray-400 text-sm">Mutlu Müvekkil</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner 
        title="İhtiyacınıza Uygun Hizmet mi Arıyorsunuz?"
        subtitle="Hukuki danışmanlık için bizimle iletişime geçin."
      />
    </>
  );
}
