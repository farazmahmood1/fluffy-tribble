
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#e5e5e5]">
      {/* Side Decoration - Hidden on small mobile */}
      <div className="hidden sm:flex absolute left-6 md:left-10 top-24 bottom-24 flex-col items-center justify-between pointer-events-none z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center mb-4">
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
          <div className="w-px h-32 md:h-64 bg-black/10 relative">
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full mt-2" />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center pointer-events-auto">
          <a href="https://www.linkedin.com/in/faysalmahmood1/" target="_blank" className="hover-target opacity-40 hover:opacity-100 transition-opacity">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>

      {/* Iridescent Blob Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-full max-w-[800px] pointer-events-none opacity-40 sm:opacity-100">
        <div className="relative aspect-square blob-float">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" 
            alt="Glass Blob"
            className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-30 grayscale blur-sm"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 via-blue-200/20 to-yellow-200/20 mix-blend-overlay" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-lg font-medium opacity-60 mb-4 md:mb-6"
        >
          Hi! I'm Faysal
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[12vw] sm:text-[7vw] md:text-[6.5vw] font-syne font-medium leading-[0.95] tracking-tight text-black max-w-[1200px]">
            Performance <br className="hidden sm:block" />
            Marketing <br />
            Specialist.
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">scroll down</span>
        <div className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
