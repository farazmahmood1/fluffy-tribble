
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#111111] pt-40 pb-32 pt-20 px-8 lg:px-24">
      {/* Concave Curved Top Edge Transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#e5e5e5] rounded-b-[100%] z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 mt-16"
        >
          <h2 className="text-3xl md:text-5xl font-inter font-normal leading-[1.3] text-white tracking-tight">
            I'm Faysal – a <span className="text-neutral-400">Performance Marketing Specialist</span> crafting high-ROI, scalable, and conversion-driven digital experiences that merge data with creative strategy.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-4xl mx-auto">
            I specialize in scaling DTC, B2B, and SaaS brands across US and UK markets using advanced architectures in Google Ads, Meta Ads, and end-to-end conversion tracking via GA4.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <Magnetic>
            <a 
              href="#experience" 
              className="bg-[#d9ff3f] text-black px-10 py-5 rounded-full text-sm font-bold hover:scale-105 transition-transform inline-block"
            >
              Learn More
            </a>
          </Magnetic>
          <Magnetic>
            <div className="w-14 h-14 bg-[#d9ff3f] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
