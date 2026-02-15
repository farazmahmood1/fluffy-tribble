
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-20 px-8 lg:px-24 bg-[#111111] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center relative z-10">
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
        
        <div className="mt-12 opacity-10 text-[10px] uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Faysal Mahmood. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
