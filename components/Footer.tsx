
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  return (
    <footer className="pt-40 pb-20 px-8 lg:px-24 bg-[#1a1a1a] text-white rounded-t-[60px] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-white/5 blur-[120px] rounded-full" />
      
      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-16">READY TO GROW?</h2>
        
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[12vw] font-syne font-bold tracking-tighter leading-none mb-16 flex flex-col"
          >
            <span>LET'S</span>
            <span className="italic text-white/20">CONNECT</span>
          </motion.h3>
          
          <div className="flex flex-col gap-10 items-center">
            <Magnetic>
              <a 
                href="mailto:faysal.mahmood29@gmail.com" 
                className="text-3xl md:text-5xl font-syne font-medium tracking-tight hover:opacity-50 transition-all"
              >
                faysal.mahmood29@gmail.com
              </a>
            </Magnetic>
            
            <div className="flex gap-12 mt-4">
              <Magnetic>
                <a href="https://www.linkedin.com/in/faysalmahmood1/" target="_blank" className="text-xs font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity">LINKEDIN</a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="text-xs font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity">RESUME</a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="text-xs font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity">WHATSAPP</a>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-20 border-t border-white/5">
          <div className="text-left">
            <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-30 mb-4">Location</h4>
            <p className="text-sm font-medium opacity-60">Lahore, Punjab, PK</p>
          </div>
          
          <div className="flex justify-center items-center">
             <div className="text-2xl font-syne font-black tracking-tighter">FM</div>
          </div>

          <div className="text-right">
             <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-30 mb-4">Clock</h4>
             <p className="text-sm font-medium opacity-60">{new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })} GMT+5</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
