
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Namaste",
  "Salam",
  "Zdravo",
  "Privet",
  "Bella Ciao"
];

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      // Pause on the final word to let it sink in
      const finalTimeout = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(finalTimeout);
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1200 : 250); // Slower initial word and rhythmic middle transition

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-[99999] bg-[#111111] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Decorative Dot - Pulses with life */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4], 
            scale: [0.8, 1.2, 0.8] 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-3 h-3 bg-[#d9ff3f] rounded-full mb-10"
        />
        
        <div className="h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] // Super smooth deceleration curve
              }}
              className="text-4xl md:text-7xl font-syne font-bold text-white tracking-tighter"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* SVG Path for a "curved" exit effect */}
      <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#111111]">
        <motion.path
          initial={{ d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z" }}
          exit={{ 
            d: "M0 0 L100 0 L100 100 Q50 0 0 100 Z",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="w-full h-full"
        />
      </svg>
    </motion.div>
  );
};

export default Preloader;
