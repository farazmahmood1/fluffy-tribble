
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
      className="group border-b border-black/5 last:border-0 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-16 px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-500">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">{exp.period}</span>
            <div className="w-8 h-px bg-black/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">{exp.location}</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-syne font-bold tracking-tight group-hover:pl-4 transition-all duration-500">
            {exp.role}
          </h3>
          <p className="text-xl opacity-40 mt-3 font-medium tracking-tight italic">{exp.company}</p>
        </div>
        
        <div className="mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 bg-white/50 -z-10 rounded-2xl scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
      />
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-8 lg:px-24 bg-[#e5e5e5] relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-8">Selected Career</h2>
            <h3 className="text-6xl md:text-9xl font-syne font-bold tracking-tighter leading-none">WORK</h3>
          </div>
          <div className="text-right">
            <p className="text-lg opacity-40 font-medium max-w-xs leading-tight">
              Scaling performance for international brands across high-intent markets.
            </p>
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
