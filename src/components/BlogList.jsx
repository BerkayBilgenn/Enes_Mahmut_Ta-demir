import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import SEO from './SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

function BlogList() {
  return (
    <div className="min-h-screen bg-navy pt-24">
      {/* Dynamic SEO */}
      <SEO
        title="Hukuk Blogu - Güncel Makaleler"
        description="Hukuki konularda bilgilendirici içerikler, güncel gelişmeler ve uzman görüşleri. Aile hukuku, iş hukuku, ticaret hukuku ve daha fazlası."
        url="/blog"
      />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop" 
            alt="Hukuk makaleleri ve blog yazıları arkaplan görseli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/30 px-5 py-2.5 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-white">Hukuk Blogu</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Güncel <span className="text-gradient-gold">Makaleler</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg text-gray-300">
              Hukuki konularda bilgilendirici içerikler, güncel gelişmeler ve uzman görüşleri.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogData.map((post) => (
              <motion.article 
                key={post.id} 
                variants={fadeInUp}
                className="group bg-gradient-to-br from-navy-800/60 to-navy-900/60 backdrop-blur-sm border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold/90 text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('tr-TR', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Hukuki Danışmanlık Alın
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Makalelerimizde okudunuz konularla ilgili profesyonel destek almak için bizimle iletişime geçin.
            </p>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#contact';
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-semibold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              Hemen İletişime Geçin
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogList;
