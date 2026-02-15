
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Experience', href: '#experience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-syne font-black tracking-tighter text-white">
          FM
        </div>
        
        <div className="flex gap-8 items-center">
          <div className="hidden lg:flex gap-8 items-center text-white">
            {menuItems.slice(0, 3).map((item) => (
              <Magnetic key={item.label}>
                <a href={item.href} className="text-sm font-medium hover-target opacity-70 hover:opacity-100 transition-opacity">
                  {item.label}
                </a>
              </Magnetic>
            ))}
          </div>
          
          <Magnetic>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col gap-1.5 items-center justify-center rounded-full hover-target hover:bg-white/20 transition-all cursor-pointer relative z-[110]"
            >
              <motion.div 
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center" 
              />
              <motion.div 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white rounded-full transition-opacity" 
              />
              <motion.div 
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full transition-transform origin-center" 
              />
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[105] bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                >
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-syne font-bold text-white/50 hover:text-[#d9ff3f] transition-colors tracking-tighter"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="mt-20 flex gap-8"
              >
                <a href="#" className="text-[#d9ff3f] text-xs font-bold tracking-widest uppercase">LinkedIn</a>
                <a href="#" className="text-[#d9ff3f] text-xs font-bold tracking-widest uppercase">Upwork</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
