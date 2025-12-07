import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Share2, BookOpen } from 'lucide-react';
import { blogData } from '../data/blogData';
import SEO from './SEO';
import Breadcrumb from './Breadcrumb';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Makale Bulunamadı</h1>
          <p className="text-gray-400 mb-8">Aradığınız makale mevcut değil veya kaldırılmış olabilir.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors"
          >
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts - filtered by same category first
  const relatedPosts = blogData
    .filter(p => p.id !== post.id)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-navy pt-24">
      {/* Dynamic SEO */}
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={`/blog/${post.slug}`}
        type="article"
        article={{
          date: post.date,
          category: post.category
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={`${post.title} - ${post.category} hakkında makale görseli`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Breadcrumb Navigation */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Breadcrumb 
                items={[
                  { name: 'Blog', path: '/blog' },
                  { name: post.title, path: `/blog/${post.slug}` }
                ]} 
              />
            </motion.div>

            {/* Category Badge */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="bg-gold/90 text-navy text-sm font-semibold px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp} 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                {new Date(post.date).toLocaleDateString('tr-TR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {post.readTime} okuma
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Content Card */}
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              <div className="px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
                <div 
                  className="
                    [&>h3]:font-serif [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-10 first:[&>h3]:mt-0
                    [&>h3]:flex [&>h3]:items-center [&>h3]:gap-3
                    [&>h3]:before:content-[''] [&>h3]:before:w-1 [&>h3]:before:h-6 [&>h3]:before:bg-gradient-to-b [&>h3]:before:from-gold [&>h3]:before:to-gold/50 [&>h3]:before:rounded-full
                    
                    [&>p]:text-gray-300 [&>p]:leading-[1.9] [&>p]:text-base sm:[&>p]:text-lg [&>p]:mb-6
                    
                    [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:pl-0
                    [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:gap-3 [&>ul>li]:text-gray-300 [&>ul>li]:text-base sm:[&>ul>li]:text-lg [&>ul>li]:leading-relaxed
                    [&>ul>li]:bg-white/[0.02] [&>ul>li]:rounded-xl [&>ul>li]:p-4 [&>ul>li]:border [&>ul>li]:border-white/5
                    [&>ul>li]:before:content-['✓'] [&>ul>li]:before:text-gold [&>ul>li]:before:font-bold [&>ul>li]:before:text-lg
                    [&>ul>li]:list-none
                    
                    [&_strong]:text-gold [&_strong]:font-semibold
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent px-6 sm:px-8 lg:px-12 py-6 border-t border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-gray-400">
                    Bu makale faydalı olduysa paylaşın
                  </p>
                  <button 
                    className="inline-flex items-center gap-2 text-sm bg-gold/10 text-gold px-4 py-2 rounded-full hover:bg-gold/20 transition-colors"
                    onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  >
                    <Share2 className="w-4 h-4" />
                    Paylaş
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="font-serif text-2xl text-white mb-8">İlgili Makaleler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group flex items-start gap-4 p-4 bg-navy-800/50 border border-gold/10 rounded-xl hover:border-gold/30 transition-all"
                    >
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <span className="text-xs text-gold font-medium">{relatedPost.category}</span>
                        <h4 className="font-medium text-white group-hover:text-gold transition-colors line-clamp-2 mt-1">
                          {relatedPost.title}
                        </h4>
                        <span className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-navy-800/80 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 sm:p-10 text-center">
                <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                  Hukuki Danışmanlık Alın
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Bu konuda profesyonel destek almak ister misiniz? Hemen iletişime geçin.
                </p>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold px-8 py-4 rounded-full text-navy font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all"
                >
                  İletişime Geç
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
