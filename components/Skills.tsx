
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-32 px-8 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-[0.4em] opacity-40 mb-20 text-center">Toolkit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-neutral-900 bg-neutral-950/50 rounded-2xl"
            >
              <h4 className="font-syne font-bold text-xl mb-8 border-b border-neutral-800 pb-4">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-neutral-500 hover:text-white transition-colors cursor-default text-sm tracking-wide">
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
