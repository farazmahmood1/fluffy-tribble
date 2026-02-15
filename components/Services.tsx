
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="relative bg-[#e5e5e5] py-40 px-8 lg:px-24 overflow-hidden border-t border-black/5">
      {/* Decorative Squiggle Line across grid */}
      <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none z-0 opacity-80" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          d="M0,500 C200,300 400,700 600,500 C800,300 1000,500 1200,700"
          stroke="#d9ff3f"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-inter font-medium leading-tight text-black tracking-tight mb-24 max-w-3xl"
        >
          Transforming brands into market leaders through data-driven innovation.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 border-r border-b border-black/10 group hover:bg-white/40 transition-colors relative"
            >
              <span className="absolute top-8 right-8 text-xs font-bold opacity-20">{service.id}</span>
              
              <div className="w-16 h-16 bg-[#d9ff3f] rounded-full flex items-center justify-center mb-12 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-syne font-bold mb-8 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-black/50 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
