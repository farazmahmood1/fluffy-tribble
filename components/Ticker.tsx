
import React from 'react';
import { motion } from 'framer-motion';

// Fixed: Defined TickerText as a React.FC to properly handle React props like 'key'
const TickerText: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-8 px-4">
    <span className="text-2xl md:text-4xl font-syne font-bold uppercase tracking-tighter whitespace-nowrap text-white">
      {text}
    </span>
    <div className="flex-shrink-0">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M2 12H22M19.07 4.93L4.93 19.07M19.07 19.07L4.93 4.93" stroke="#d9ff3f" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

// Fixed: Defined Marquee as a React.FC for consistent typing and proper handling of component props
interface MarqueeProps {
  direction?: "left" | "right";
  phrases: string[];
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ direction = "left", phrases, speed = 20 }) => {
  return (
    <div className="flex overflow-hidden py-6">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex">
            {phrases.map((phrase, idx) => (
              <TickerText key={idx} text={phrase} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Ticker: React.FC = () => {
  const phrases1 = [
    "Performance Driven Growth",
    "Scalable Paid Media Architectures",
    "Conversion Rate Optimization",
    "Data-Backed Marketing Strategy"
  ];

  const phrases2 = [
    "ROI Focused Solutions",
    "Full-Funnel Acquisition",
    "Advanced Attribution Frameworks",
    "High-Intent Lead Generation"
  ];

  return (
    <section className="relative h-[60vh] bg-[#e5e5e5] flex items-center justify-center overflow-hidden">
      {/* Tape 1: Tilting Down Right */}
      <div className="absolute w-[150%] -rotate-6 z-10">
        <div className="bg-[#111111] py-2 shadow-2xl border-y border-white/5">
          <Marquee direction="left" phrases={phrases1} speed={25} />
        </div>
      </div>

      {/* Tape 2: Tilting Up Right */}
      <div className="absolute w-[150%] rotate-3 z-20">
        <div className="bg-[#111111] py-2 shadow-2xl border-y border-white/5">
          <Marquee direction="right" phrases={phrases2} speed={30} />
        </div>
      </div>

      {/* Subtle Glow at Intersection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d9ff3f]/10 blur-[120px] rounded-full z-0" />
    </section>
  );
};

export default Ticker;
