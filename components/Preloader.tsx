
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const words = [
  "Hello",
  "Bonjour",
  "Hola",
  "Olá",
  "Namaste",
  "Salam",
  "Bella Ciao"
];

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index === words.length - 1) {
      const finalTimeout = setTimeout(() => setIsDone(true), 800);
      return () => clearTimeout(finalTimeout);
    }

    const timeout = setTimeout(() => {
      setIndex((i) => i + 1);
    }, index === 0 ? 900 : 300);

    return () => clearTimeout(timeout);
  }, [index]);

  const handleExitComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (isDone) {
      const t = setTimeout(handleExitComplete, 900);
      return () => clearTimeout(t);
    }
  }, [isDone, handleExitComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
      className="fixed inset-0 z-[99999] overflow-hidden"
    >
      {/* Main panel */}
      <motion.div
        animate={{ y: isDone ? "-100vh" : "0vh" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[#111111]"
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* Decorative Dot */}
          <motion.div
            animate={isDone
              ? { opacity: 0 }
              : { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-3 h-3 bg-[#d9ff3f] rounded-full"
            style={{ top: "calc(50% - 70px)" }}
          />

          {/* Word display — no AnimatePresence, just swap with CSS */}
          <div className="h-24 w-full flex items-center justify-center overflow-hidden relative">
            {words.map((word, i) => (
              <span
                key={word}
                className="absolute text-4xl md:text-7xl font-syne font-bold text-white tracking-tighter transition-all duration-300 ease-out"
                style={{
                  opacity: i === index && !isDone ? 1 : 0,
                  transform: i === index && !isDone
                    ? "translateY(0px)"
                    : i < index || isDone
                      ? "translateY(-30px)"
                      : "translateY(30px)",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Curved bottom edge */}
      <motion.div
        animate={{ y: isDone ? "-100vh" : "0vh" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-0 w-full pointer-events-none"
        style={{ top: "100%", height: "150px" }}
      >
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L0,0 Q720,150 1440,0 L1440,0 Z" fill="#111111" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
