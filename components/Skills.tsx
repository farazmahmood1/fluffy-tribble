
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="pt-20 pb-40 px-8 lg:px-24 bg-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-24 text-center"
        >
          TOOLKIT
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group p-10 border border-black/5 bg-white/40 backdrop-blur-sm rounded-3xl hover:bg-white transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <h4 className="font-syne font-bold text-2xl mb-10 border-b border-black/5 pb-6 text-black tracking-tight group-hover:pl-2 transition-all duration-500">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/60 hover:text-black transition-colors cursor-default text-sm font-medium tracking-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff3f] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
