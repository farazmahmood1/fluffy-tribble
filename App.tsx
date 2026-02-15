
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Services from './components/Services';
import Projects from './components/Projects';
import Journey from './components/Journey';
import ExperienceSection from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Lock scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`relative bg-[#e5e5e5] text-[#000000] selection:bg-black selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <CustomCursor />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[101]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-0"
        >
          <Hero />
          <About />
          <Values />
          <Services />
          <Projects />
          <Journey />
          <ExperienceSection />
          <Skills />
          <Reviews />
          <Ticker />
          <Contact />
          <Footer />
        </motion.div>

        {/* High-end decorative subtle mask */}
        <div className="fixed inset-0 pointer-events-none z-[50]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.02)_100%)]" />
        </div>

        {/* Floating squiggles button bottom right - constant across sections */}
        <div className="fixed bottom-10 right-10 z-[100]">
          <div className="w-16 h-16 bg-black/10 backdrop-blur-md border border-black/5 rounded-full flex items-center justify-center hover-target hover:bg-black/20 transition-all cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 12 7 9 12 12C17 15 20 12 20 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 17C4 17 7 14 12 17C17 20 20 17 20 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
