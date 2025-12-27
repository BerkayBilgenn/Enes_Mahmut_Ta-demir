import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, Share2, BookOpen, Facebook, Twitter, Linkedin, Mail, ArrowLeft, User, Sparkles, TrendingUp } from 'lucide-react';
import { blogData } from '../data/blogData';
import SEO from './SEO';
import { useEffect, useState } from 'react';

function BlogDetail() {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);
  const [readProgress, setReadProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setReadProgress(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!post) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Makale Bulunamadı</h1>
          <p className="text-gray-400 mb-8">Aradığınız makale mevcut değil.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors">
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData.filter(p => p.id !== post.id).sort((a, b) => (a.category === post.category ? -1 : 1)).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`
    };
    if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-navy">
      <SEO title={post.title} description={post.excerpt} image={post.image} url={`/blog/${post.slug}`} type="article" article={{ date: post.date, category: post.category }} />
      
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-400 to-gold z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Cinematic Hero */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/70 to-navy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-purple-900/20" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end pb-20 z-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Back Button */}
              <motion.div className="mb-8" whileHover={{ x: -5 }}>
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Tüm Makaleler</span>
                </Link>
              </motion.div>

              {/* Category Badge */}
              <motion.div 
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-400 text-navy px-6 py-2.5 rounded-full font-bold text-sm shadow-2xl shadow-gold/50">
                  <Sparkles className="w-4 h-4" />
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {post.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div 
                className="flex flex-wrap items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-600 rounded-full flex items-center justify-center shadow-xl shadow-gold/30">
                    <User className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Taşdemir Hukuk</div>
                    <div className="text-gray-400 text-sm">Hukuk Danışmanı</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center p-2">
            <motion.div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Article Content */}
            <motion.article
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Premium Content Card */}
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
                
                <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Top Accent */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  
                  <div className="p-8 sm:p-12 lg:p-16">
                    {/* Excerpt */}
                    <div className="mb-12 pb-12 border-b border-white/10">
                      <p className="text-2xl text-gray-200 leading-relaxed font-light italic">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Content */}
                    <div 
                      className="
                        prose prose-invert prose-xl max-w-none
                        
                        [&>h3]:font-serif [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-8 [&>h3]:mt-16 first:[&>h3]:mt-0
                        [&>h3]:flex [&>h3]:items-center [&>h3]:gap-4
                        [&>h3]:before:content-[''] [&>h3]:before:w-2 [&>h3]:before:h-10 [&>h3]:before:bg-gradient-to-b [&>h3]:before:from-gold [&>h3]:before:to-gold/30 [&>h3]:before:rounded-full [&>h3]:before:shadow-lg [&>h3]:before:shadow-gold/50
                        
                        [&>p]:text-gray-300 [&>p]:leading-[2] [&>p]:text-lg [&>p]:mb-8
                        
                        [&>ul]:my-10 [&>ul]:space-y-5 [&>ul]:pl-0
                        [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:gap-4 [&>ul>li]:text-gray-300 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
                        [&>ul>li]:bg-gradient-to-r [&>ul>li]:from-white/[0.05] [&>ul>li]:to-transparent [&>ul>li]:rounded-2xl [&>ul>li]:p-6 [&>ul>li]:border [&>ul>li]:border-white/5
                        [&>ul>li]:hover:from-white/[0.08] [&>ul>li]:hover:border-gold/20 [&>ul>li]:transition-all [&>ul>li]:duration-300
                        [&>ul>li]:before:content-['✓'] [&>ul>li]:before:text-gold [&>ul>li]:before:font-bold [&>ul>li]:before:text-2xl [&>ul>li]:before:mt-0.5 [&>ul>li]:before:drop-shadow-lg
                        [&>ul>li]:list-none
                        
                        [&_strong]:text-gold [&_strong]:font-semibold [&_strong]:drop-shadow-lg
                      "
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>

                  {/* Social Sharing Footer */}
                  <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 sm:px-12 lg:px-16 py-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <p className="text-sm text-gray-400 mb-3 font-medium">Bu makaleyi paylaşın:</p>
                        <div className="flex items-center gap-3">
                          {[
                            { icon: Facebook, color: 'blue-500', name: 'facebook' },
                            { icon: Twitter, color: 'sky-400', name: 'twitter' },
                            { icon: Linkedin, color: 'blue-600', name: 'linkedin' },
                            { icon: Mail, color:' gold', name: 'email' }
                          ].map(({ icon: Icon, color, name }) => (
                            <motion.button
                              key={name}
                              onClick={() => handleShare(name)}
                              className={`group relative w-12 h-12 bg-white/5 hover:bg-${color}/20 border border-white/10 hover:border-${color}/50 rounded-xl flex items-center justify-center transition-all duration-300`}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Icon className={`w-5 h-5 text-gray-400 group-hover:text-${color} transition-colors`} />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      
                      <motion.button 
                        onClick={() => navigator.share?.({ title: post.title, url: shareUrl })}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-gold/10 hover:from-gold/30 hover:to-gold/20 text-gold px-6 py-3 rounded-xl font-semibold border border-gold/30 hover:border-gold/50 transition-all shadow-lg shadow-gold/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-5 h-5" />
                        <span>Paylaş</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-purple-600/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-black border border-gold/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    </div>
                    
                    {/* Accent glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-sm border border-gold/30 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                        <BookOpen className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-4">
                        Hukuki Danışmanlık
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Profesyonel destek almak ister misiniz? Uzman ekibimiz yanınızda.
                      </p>
                      <Link
                        to="/iletisim"
                        className="block text-center bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold text-navy px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-gold/20 hover:shadow-gold/40"
                      >
                        İletişime Geç →
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
                    <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-gold to-gold/50 rounded-full" />
                      İlgili Makaleler
                    </h3>
                    <div className="space-y-5">
                      {relatedPosts.map((relatedPost, i) => (
                        <motion.div
                          key={relatedPost.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Link to={`/blog/${relatedPost.slug}`} className="group block">
                            <div className="flex gap-4">
                              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                <img 
                                  src={relatedPost.image} 
                                  alt={relatedPost.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs text-gold font-semibold mb-1 block">{relatedPost.category}</span>
                                <h4 className="font-semibold text-white group-hover:text-gold transition-colors line-clamp-2 text-sm leading-snug mb-2">
                                  {relatedPost.title}
                                </h4>
                                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                  <Clock className="w-3.5 h-3.5" />
                                  {relatedPost.readTime}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
