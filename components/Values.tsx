
import React from 'react';
import { motion } from 'framer-motion';

const Values: React.FC = () => {
  return (
    <section className="relative bg-[#e5e5e5] py-40 px-8 lg:px-24 overflow-hidden">
      {/* Decorative Squiggle Line */}
      <svg className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-80" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          d="M1000,0 C800,200 600,600 400,400 C200,200 100,800 0,600"
          stroke="#d9ff3f"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-inter font-medium leading-[1.2] text-black tracking-tight"
          >
            Driving measurable growth and engagement through data-backed strategy and optimization.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-black/50 leading-relaxed font-light"
          >
            Every campaign I architect starts with understanding business goals and translating them into high-converting, high-performance ad structures. From setup to scale, I focus on meaningful results—boosting ROAS, LTV, and overall business impact.
          </motion.p>
        </div>

        <div className="border-t border-black/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 block mb-6">YEARS OF EXPERIENCE</span>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-8xl md:text-9xl font-syne font-bold tracking-tighter"
            >
              5+
            </motion.div>
          </div>
          <div className="md:border-l md:border-black/10 md:pl-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 block mb-6">ACCOUNTS SCALED</span>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-8xl md:text-9xl font-syne font-bold tracking-tighter"
            >
              60+
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
