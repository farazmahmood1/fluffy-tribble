
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const JourneyItem: React.FC<{ exp: typeof EXPERIENCES[0]; index: number }> = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center py-16 md:py-40 first:pt-0">
      {/* Central Axis Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#d9ff3f] border-4 border-[#111111] ring-1 ring-[#d9ff3f]/50 shadow-[0_0_15px_rgba(217,255,63,0.3)]"
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className={`w-full max-w-5xl flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-left pl-14 md:px-6`}
      >
        <div className="relative inline-block">
          <h3 className="text-3xl sm:text-4xl md:text-8xl font-syne font-extrabold text-white leading-[0.9] tracking-tighter mb-4 break-words max-w-[80vw]">
            {exp.company}
          </h3>
          <span className={`absolute -top-6 ${isEven ? 'md:right-0' : 'left-0'} text-[10px] font-mono font-bold text-[#d9ff3f] opacity-40 tracking-[0.5em]`}>
            {exp.period.split(' – ')[0]}
          </span>
        </div>

        <h4 className="text-base md:text-2xl font-inter font-light text-neutral-400 mb-6 md:mb-8 uppercase tracking-[0.2em]">
          {exp.role}
        </h4>

        <div className={`max-w-lg ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <p className="text-xs md:text-base text-neutral-500 font-light leading-relaxed mb-6 md:mb-8">
            {exp.description[0]}
          </p>
          <div className="flex items-center gap-4 opacity-30 justify-start md:justify-start">
            <span className="h-px w-6 md:w-8 bg-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap">
              {exp.period}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const flowX = useTransform(scrollYProgress, [0.8, 1], ["-100%", "0%"]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#111111] pt-32 md:pt-60 pb-40 md:pb-80 overflow-hidden"
    >
      {/* Elegant Background Flow Path */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 2000" preserveAspectRatio="none">
          <motion.path
            d="M 500 0 C 200 400, 800 800, 500 1200 C 200 1600, 800 2000, 500 2400"
            stroke="#d9ff3f"
            strokeWidth="80"
            fill="none"
            style={{ pathLength }}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Continuous Vertical Axis - Adjusted for Mobile */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 z-20">
        <motion.div 
          style={{ height: useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]) }}
          className="absolute top-0 left-0 w-full bg-[#d9ff3f] origin-top shadow-[0_0_15px_rgba(217,255,63,0.5)]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-40">
        <div className="text-center mb-32 md:mb-60 px-6">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#d9ff3f] block mb-8 md:mb-12"
          >
            THE EVOLUTION
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-syne font-medium text-white max-w-3xl mx-auto leading-[1.2] tracking-tight"
          >
            Explore my journey and the technologies that define my craft.
          </motion.h2>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, idx) => (
            <JourneyItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>

      {/* Fixed Horizontal "Flow" Line at bottom transition */}
      <motion.div 
        style={{ x: flowX }}
        className="absolute bottom-10 md:bottom-20 left-0 w-full h-px z-10"
      >
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d9ff3f]/40 to-transparent shadow-[0_0_20px_rgba(217,255,63,0.2)]" />
      </motion.div>
    </section>
  );
};

export default Journey;
