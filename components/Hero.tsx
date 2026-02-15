
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#e5e5e5]">
      {/* Side Decoration Left */}
      <div className="absolute left-10 top-24 bottom-24 flex flex-col items-center justify-between pointer-events-none z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center mb-4">
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
          <div className="w-px h-64 bg-black/10 relative">
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full mt-2" />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center pointer-events-auto">
          <a href="https://www.linkedin.com/in/faysalmahmood1/" target="_blank" className="hover-target opacity-40 hover:opacity-100 transition-opacity">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com" target="_blank" className="hover-target opacity-40 hover:opacity-100 transition-opacity">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      {/* Iridescent Blob Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] pointer-events-none">
        <div className="relative aspect-square blob-float">
          {/* Using a high-quality iridescent sphere image matching the aesthetic */}
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
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg font-medium opacity-60 mb-6"
        >
          Hi! I'm Faysal
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[7vw] md:text-[6.5vw] font-syne font-medium leading-[1.05] tracking-tight text-black max-w-[1200px] px-4">
            Performance Marketing <br />
            Specialist.
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">scroll down</span>
      </motion.div>

      {/* Floating squiggles button bottom right */}
      <div className="absolute bottom-10 right-10 z-30">
        <div className="w-16 h-16 bg-black/10 backdrop-blur-md border border-black/5 rounded-full flex items-center justify-center hover-target hover:bg-black/20 transition-all cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C4 12 7 9 12 12C17 15 20 12 20 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 17C4 17 7 14 12 17C17 20 20 17 20 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
