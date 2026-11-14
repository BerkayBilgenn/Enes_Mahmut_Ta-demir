import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import FAQSchema from '../components/FAQSchema';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
};

const faqData = [
  {
    question: "İlk görüşmede ne konuşulur?",
    answer: "İlk görüşmede davanızın genel durumunu değerlendirir, hukuki süreç hakkında bilgi verir ve size en uygun çözüm yolunu birlikte belirleriz. Bu görüşmede tüm sorularınızı sorabilirsiniz.",
    category: "Genel"
  },
  {
    question: "Dava süreçleri ne kadar sürer?",
    answer: "Dava süreleri, davanın türüne ve karmaşıklığına göre değişir. Basit davalar birkaç ay içinde sonuçlanabilirken, karmaşık davalar 1-3 yıl sürebilir. Her dava için size tahmini bir süre bildiririz.",
    category: "Genel"
  },
  {
    question: "Avukatlık ücretleri nasıl belirlenir?",
    answer: "Ücretlerimiz, davanın türü, karmaşıklığı ve tahmini iş yüküne göre belirlenir. İlk görüşmede şeffaf bir şekilde ücret bilgisi paylaşılır. Taksitlendirme seçenekleri de sunmaktayız.",
    category: "Ücretler"
  },
  {
    question: "Online danışmanlık hizmeti var mı?",
    answer: "Evet, video konferans aracılığıyla online danışmanlık hizmeti sunuyoruz. Türkiye'nin her yerinden ve yurt dışından müvekkillerimize bu şekilde hizmet verebiliyoruz.",
    category: "Hizmetler"
  },
  {
    question: "Acil durumlarda ulaşabilir miyim?",
    answer: "Evet, müvekkillerimize 7/24 acil iletişim hattı sunuyoruz. Tutuklama, gözaltı gibi acil durumlarda derhal müdahale ediyoruz.",
    category: "Genel"
  },
  {
    question: "Hangi şehirlerde hizmet veriyorsunuz?",
    answer: "Merkezimiz İstanbul'da olmasına rağmen, Türkiye genelinde tüm illerde dava takibi yapabiliyoruz. Gerektiğinde yerel mahkemelerde sizi temsil ediyoruz.",
    category: "Hizmetler"
  },
  {
    question: "Dava açmadan önce arabuluculuk zorunlu mu?",
    answer: "İş davaları, ticari davalar, tüketici davaları ve bazı kira uyuşmazlıklarında arabuluculuğa başvurmak dava şartıdır. Arabuluculuk sürecinde anlaşma sağlanamazsa dava yoluna gidilebilir.",
    category: "Hukuki Süreç"
  },
  {
    question: "İcra takibine nasıl itiraz edilir?",
    answer: "İcra takibine itiraz, ödeme emrinin tebliğinden itibaren 7 gün içinde yapılmalıdır. Borca, imzaya veya zamanaşımına itiraz gibi farklı itiraz türleri bulunmaktadır.",
    category: "Hukuki Süreç"
  },
  {
    question: "Ceza davasında avukat tutmak zorunlu mu?",
    answer: "Alt sınırı 5 yılı aşan suçlarda ve bazı özel durumlarda (tutuklu yargılama, çocuk sanıklar vb.) müdafi zorunludur. Diğer durumlarda zorunlu olmasa da avukat desteği şiddetle tavsiye edilir.",
    category: "Hukuki Süreç"
  },
  {
    question: "İş davalarında zamanaşımı süreleri nedir?",
    answer: "Kıdem ve ihbar tazminatı alacaklarında 5 yıl, ücret alacaklarında 5 yıl, yıllık izin ücretlerinde 5 yıllık zamanaşımı süresi uygulanır. Süre iş akdinin sona ermesinden itibaren başlar.",
    category: "Hukuki Süreç"
  },
  {
    question: "Gayrimenkul satışında nelere dikkat edilmeli?",
    answer: "Tapu kaydının incelenmesi, ipotek/haciz kontrolü, imar durumu araştırması, belediye borçları ve aidat durumu kontrol edilmelidir. Tapu devri mutlaka resmi şekilde yapılmalıdır.",
    category: "Hukuki Süreç"
  },
  {
    question: "Ticaret davalarında yetkili mahkeme nasıl belirlenir?",
    answer: "Genel yetkili mahkeme davalının yerleşim yeri mahkemesidir. Sözleşmeden doğan davalarda sözleşmenin ifa yeri, haksız fiil davalarında fiilin işlendiği yer mahkemesi de yetkili olabilir.",
    category: "Hukuki Süreç"
  }
];

function FAQItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-gold/10 rounded-xl overflow-hidden bg-navy-800/30 hover:border-gold/20 transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-gold font-semibold text-sm">{index + 1}</span>
          </div>
          <span className="font-medium text-white pr-4">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-gold/10 pt-4 ml-12">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(faqData.map(f => f.category))];
  
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || faq.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <FAQSchema faqs={faqData} />
      
      <PageHero
        subtitle="Sıkça Sorulan Sorular"
        title="Merak Edilenler"
        description="Hukuki süreçler hakkında sık sorulan soruların cevaplarını burada bulabilirsiniz."
        breadcrumbs={[{ label: "SSS" }]}
      />

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Soru ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-navy-800/50 border border-gold/20 rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? 'bg-gold text-navy'
                      : 'bg-navy-800/50 text-gray-400 border border-gold/20 hover:border-gold/40'
                  }`}
                >
                  {category === 'all' ? 'Tümü' : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mb-8"
          >
            {filteredFAQs.length} soru bulundu
          </motion.p>

          {/* FAQ List */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-4"
          >
            {filteredFAQs.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-2">
                "{searchTerm}" ile eşleşen soru bulunamadı.
              </p>
              <p className="text-gray-500 text-sm">
                Farklı anahtar kelimeler deneyin veya doğrudan bize ulaşın.
              </p>
            </motion.div>
          )}

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 border border-gold/10 rounded-2xl p-8">
              <HelpCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                Sorunuzu Bulamadınız mı?
              </h3>
              <p className="text-gray-400 mb-6">
                Aklınızdaki soruları yanıtlamaktan mutluluk duyarız.
              </p>
              <motion.a
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-6 py-3 rounded-full text-navy font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bize Sorun
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner variant="compact" />
    </>
  );
}
