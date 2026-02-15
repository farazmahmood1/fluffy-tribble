
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Experience } from '../types';

const ExperienceItem: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-b border-black/5 last:border-0 relative"
    >
      <div className="py-10 md:py-16 px-2 md:px-0 flex flex-col justify-between cursor-pointer transition-all duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 whitespace-nowrap">{exp.period}</span>
              <div className="hidden sm:block w-8 h-px bg-black/10" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 whitespace-nowrap">{exp.location}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-tight group-hover:pl-4 transition-all duration-500 leading-none break-words">
              {exp.role}
            </h3>
            <p className="text-base md:text-xl opacity-40 mt-4 font-medium tracking-tight italic">{exp.company}</p>
          </div>
          
          <div className="hidden md:block mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Details - Bullet Points */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 max-w-4xl border-l border-[#d9ff3f] pl-6 ml-1">
                {exp.description.map((bullet, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs sm:text-sm md:text-base text-black/60 font-light leading-relaxed flex items-start gap-3"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        className="absolute inset-0 bg-white/50 -z-10 rounded-2xl scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
      />
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="pt-24 md:pt-60 pb-16 px-6 md:px-12 lg:px-24 bg-[#e5e5e5] relative z-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end mb-24 md:mb-40 gap-y-10">
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 mb-8"
            >
              Selected Career
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl md:text-[11vw] font-syne font-bold tracking-tighter leading-[0.8]"
            >
              WORK
            </motion.h3>
          </div>
          <div className="md:col-span-4 md:text-right md:pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-medium max-w-[280px] md:ml-auto leading-tight"
            >
              Scaling performance for international brands across high-intent markets.
            </motion.p>
          </div>
        </div>

        <div className="border-t border-black/10">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
