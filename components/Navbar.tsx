
import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-8 flex justify-between items-center mix-blend-difference">
      <div className="text-2xl font-syne font-black tracking-tighter text-white">
        FM
      </div>
      
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8 items-center text-white">
          <Magnetic>
            <a href="#home" className="text-sm font-medium hover-target opacity-70 hover:opacity-100 transition-opacity">Home</a>
          </Magnetic>
          <Magnetic>
            <a href="#about" className="text-sm font-medium hover-target opacity-70 hover:opacity-100 transition-opacity">About</a>
          </Magnetic>
          <Magnetic>
            <a href="#experience" className="text-sm font-medium hover-target opacity-70 hover:opacity-100 transition-opacity">Works</a>
          </Magnetic>
        </div>
        
        <Magnetic>
          <div className="w-12 h-12 bg-neutral-900 border border-white/10 text-white flex flex-col gap-1.5 items-center justify-center rounded-full hover-target hover:bg-neutral-800 transition-all cursor-pointer">
            <div className="w-5 h-0.5 bg-white rounded-full" />
            <div className="w-5 h-0.5 bg-white rounded-full" />
            <div className="w-5 h-0.5 bg-white rounded-full" />
          </div>
        </Magnetic>
      </div>
    </nav>
  );
};

export default Navbar;
