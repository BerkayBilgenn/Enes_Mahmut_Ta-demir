import { motion } from 'framer-motion';

function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img 
            src="/logo-transparent.png" 
            alt="EMT Hukuk Logo" 
            className="h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="font-serif text-xl text-white mb-2">
            EMT <span className="text-gold">Hukuk</span>
          </h2>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Yükleniyor</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mt-6 w-48 h-1 bg-navy-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingSpinner;
