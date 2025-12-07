import { motion } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Signature Intro - Sadece el yazısı ile isim animasyonu
 * Otomatik olarak ana sayfaya geçer
 */
function SignatureIntro({ onComplete }) {
  // 3 saniye sonra otomatik geçiş
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Her harf için animasyon
  const text = "Enes Mahmut Taşdemir";
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center"
    >
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Av. Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gold/70 text-xs sm:text-sm tracking-[0.4em] uppercase font-light">
            Avukat
          </span>
        </motion.div>

        {/* El yazısı isim - harf harf animasyon */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          style={{ 
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontStyle: 'italic'
          }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-400 to-gold"
              style={{ 
                whiteSpace: char === ' ' ? 'pre' : 'normal'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Alt çizgi animasyonu */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="mt-4 sm:mt-6 mx-auto w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-center"
        />

        {/* Hukuk Bürosu alt yazısı */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="mt-4 sm:mt-6"
        >
          <span className="text-gray-500 text-xs sm:text-sm tracking-[0.3em] uppercase">
            Hukuk Bürosu
          </span>
        </motion.div>

        {/* Yükleniyor göstergesi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.3 }}
          className="mt-8 sm:mt-12"
        >
          <div className="flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-1.5 h-1.5 bg-gold/50 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SignatureIntro;
