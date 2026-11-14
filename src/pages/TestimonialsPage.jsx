import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Quote } from 'lucide-react';
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

const testimonialsData = [
  {
    id: 1,
    name: "Mehmet Y.",
    role: "İşadamı",
    caseType: "Ticaret Hukuku",
    rating: 5,
    text: "Şirketimizin ticari davasında gösterdikleri profesyonel yaklaşım sayesinde davayı kazandık. Her aşamada bilgilendirildik ve süreç çok şeffaf yürütüldü.",
    date: "2024"
  },
  {
    id: 2,
    name: "Ayşe K.",
    role: "Öğretmen",
    caseType: "Aile Hukuku",
    rating: 5,
    text: "Boşanma sürecimde hem hukuki hem de insani açıdan büyük destek aldım. Çocuğumun velayeti konusunda haklarımı en iyi şekilde korudular.",
    date: "2024"
  },
  {
    id: 3,
    name: "Ali R.",
    role: "Yazılım Mühendisi",
    caseType: "İş Hukuku",
    rating: 5,
    text: "İş akdimin haksız feshi sonrası açtığımız davada tüm haklarımı aldım. Kıdem ve ihbar tazminatlarım eksiksiz ödendi. Teşekkürler!",
    date: "2024"
  },
  {
    id: 4,
    name: "Fatma S.",
    role: "Ev Hanımı",
    caseType: "Miras Hukuku",
    rating: 5,
    text: "Miras paylaşımı konusunda kardeşlerimle yaşadığımız anlaşmazlıkta arabuluculuk sürecini çok iyi yönettiler. Mahkemeye gitmeden çözüme ulaştık.",
    date: "2023"
  },
  {
    id: 5,
    name: "Hasan T.",
    role: "Şirket Müdürü",
    caseType: "Gayrimenkul",
    rating: 5,
    text: "Gayrimenkul satış işlemlerimizde yaşadığımız hukuki sorunları hızlıca çözdüler. Tapu devir sürecinde çok yardımcı oldular.",
    date: "2024"
  },
  {
    id: 6,
    name: "Zeynep A.",
    role: "Doktor",
    caseType: "Ceza Hukuku",
    rating: 5,
    text: "Malpraktis iddiasıyla karşı karşıya kaldığımda hemen harekete geçtiler. Beraat kararıyla sonuçlanan davada mükemmel bir savunma yaptılar.",
    date: "2024"
  },
  {
    id: 7,
    name: "Kemal B.",
    role: "Emekli",
    caseType: "İcra Hukuku",
    rating: 5,
    text: "Yıllardır tahsil edemediğim alacağımı icra takibi ile kısa sürede aldım. Süreç boyunca her adımda bilgilendirildim.",
    date: "2023"
  },
  {
    id: 8,
    name: "Selin D.",
    role: "Girişimci",
    caseType: "Şirket Hukuku",
    rating: 5,
    text: "Şirket kuruluşundan sözleşme hazırlamaya kadar tüm süreçlerde yanımızda oldular. Yatırımcılarla yapılan anlaşmalarda haklarımızı korudular.",
    date: "2024"
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 sm:p-8 hover:border-gold/30 transition-all h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-gold/30" />
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-300 leading-relaxed flex-grow mb-6">
        "{testimonial.text}"
      </blockquote>
      
      {/* Footer */}
      <div className="flex items-start gap-4 pt-4 border-t border-gold/10">
        {/* Avatar with Initials */}
        <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="font-serif font-semibold text-gold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
            <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
              {testimonial.caseType}
            </span>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} 
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">{testimonial.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all');
  
  const caseTypes = ['all', ...new Set(testimonialsData.map(t => t.caseType))];
  
  const filteredTestimonials = filter === 'all' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.caseType === filter);

  return (
    <>
      <PageHero
        subtitle="Referanslar"
        title="Müvekkillerimiz Ne Diyor?"
        description="Başarıyla sonuçlandırdığımız davalardan müvekkillerimizin görüşleri."
        breadcrumbs={[{ label: "Referanslar" }]}
      />

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {caseTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === type
                    ? 'bg-gold text-navy'
                    : 'bg-navy-800/50 text-gray-400 border border-gold/20 hover:border-gold/40'
                }`}
              >
                {type === 'all' ? 'Tümü' : type}
              </button>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-navy-800/60 to-navy-900/60 border border-gold/10 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-gradient-gold">500+</div>
                <div className="text-gray-400 text-sm">Mutlu Müvekkil</div>
              </div>
              <div className="w-px h-12 bg-gold/20" />
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-gradient-gold">4.9/5</div>
                <div className="text-gray-400 text-sm">Ortalama Puan</div>
              </div>
              <div className="w-px h-12 bg-gold/20" />
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-gradient-gold">%98</div>
                <div className="text-gray-400 text-sm">Memnuniyet Oranı</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Siz de Başarı Hikayemizin Parçası Olun"
        subtitle="Hukuki danışmanlık için hemen iletişime geçin."
      />
    </>
  );
}
