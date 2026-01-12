import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, Clock, Scale, Target, Shield, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const guarantees = [
  { label: "Profesyonel Yaklaşım", icon: Award },
  { label: "Şeffaf Süreç Yönetimi", icon: CheckCircle },
  { label: "Müvekkil Odaklı Hizmet", icon: Users },
  { label: "Hızlı Geri Dönüş", icon: Clock }
];

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Müvekkil sırlarınız bizimle güvende. Meslek etiği kurallarına sıkı sıkıya bağlıyız."
  },
  {
    icon: Target,
    title: "Sonuç Odaklılık",
    description: "Her davada en iyi sonucu elde etmek için stratejik ve kararlı bir yaklaşım sergiliyoruz."
  },
  {
    icon: Sparkles,
    title: "Yenilikçilik",
    description: "Hukuk dünyasındaki gelişmeleri yakından takip eder, modern çözümler sunarız."
  },
  {
    icon: Users,
    title: "Müvekkil Odaklılık",
    description: "Her müvekkilimiz bizim için eşsizdir. Kişiselleştirilmiş hizmet anlayışıyla çalışıyoruz."
  }
];

const features = [
  "Profesyonel hukuki danışmanlık",
  "Hızlı geri dönüş ve iletişim",
  "Şeffaf ve güvenilir süreç yönetimi",
  "Müvekkil memnuniyeti odaklı yaklaşım",
  "Uzman hukuki kadro",
  "Rekabetçi ücret politikası"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        subtitle="Hakkımızda"
        title="Güven, Tecrübe ve Başarı"
        description="EMT Hukuk olarak, yılların verdiği deneyim ve bilgi birikimimizi müvekkillerimizin hizmetine sunuyoruz."
        breadcrumbs={[{ label: "Hakkımızda" }]}
        backgroundImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Main About Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="text-gold text-sm font-semibold tracking-wider uppercase"
              >
                Neden Biz?
              </motion.span>
              
              <motion.h2 
                variants={fadeInUp}
                className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4 mb-6"
              >
                Modern Hukuk Anlayışı ile <span className="text-gradient-gold">Geleneksel Değerler</span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 mb-6 leading-relaxed"
              >
                EMT Hukuk olarak, müvekkillerimize en kaliteli hizmeti sunmayı hedefliyoruz. Modern hukuk dünyasının gerektirdiği yenilikçi yaklaşımlar ile geleneksel değerleri birleştirerek, size özel çözümler üretiyoruz.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                Her dava ve her müvekkil bizim için özeldir. Kişiselleştirilmiş hizmet anlayışımız ile hukuki süreçlerinizi en verimli şekilde yönetiyoruz.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  alt="Hukuk Bürosu"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-navy-800 to-navy-900 border border-gold/20 rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <Scale className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-gold">Profesyonel</div>
                    <div className="text-gray-400 text-sm">Hukuki Danışmanlık</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={guarantee.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-gold" />
                  </motion.div>
                  <p className="text-white font-medium">{guarantee.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Değerlerimiz
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl font-bold text-white"
            >
              Bizi <span className="text-gradient-gold">Farklı Kılan</span> Ne?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="group bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
