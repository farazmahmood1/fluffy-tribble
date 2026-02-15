
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const JourneyItem: React.FC<{ exp: typeof EXPERIENCES[0]; index: number }> = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center mb-32 group">
      {/* Content Area */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={`w-full md:w-1/2 px-8 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center`}
      >
        <h3 className="text-5xl md:text-7xl font-syne font-bold text-white mb-4 tracking-tighter">
          {exp.company}
        </h3>
        <h4 className="text-xl md:text-2xl font-inter font-light text-neutral-400 mb-6 uppercase tracking-widest">
          {exp.role}
        </h4>
        <div className={`max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
          <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed mb-6">
            {exp.description[0]}
          </p>
          <span className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest">
            {exp.period}
          </span>
        </div>
      </motion.div>

      {/* Central Line & Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full hidden md:flex flex-col items-center">
        <div className="w-px h-full bg-white/10 relative">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#d9ff3f] border-4 border-black ring-1 ring-white/20" 
          />
          {/* Highlight line portion */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '40%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#d9ff3f]"
          />
        </div>
      </div>
    </div>
  );
};

const Journey: React.FC = () => {
  return (
    <section className="relative bg-[#111111] py-40 px-8 lg:px-24 overflow-hidden">
      {/* Background Squiggle/Curve Bottom Left */}
      <svg className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] pointer-events-none z-0 opacity-100" viewBox="0 0 500 500" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          d="M0,500 C100,450 200,480 300,500 S400,300 500,100"
          stroke="#d9ff3f"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-inter font-medium text-white max-w-2xl mx-auto leading-relaxed"
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

      {/* Side Decoration from Ref */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center z-20 pointer-events-none">
        <div className="bg-[#111111] text-white px-3 py-10 flex flex-col items-center rounded-l-xl border border-white/5 shadow-sm">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 whitespace-nowrap mb-12">W.</span>
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold rotate-90 whitespace-nowrap">Honors</span>
        </div>
      </div>
    </section>
  );
};

export default Journey;
