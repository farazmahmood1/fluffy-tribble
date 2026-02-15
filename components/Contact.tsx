
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-[#d9ff3f]/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          
          {/* Left Column: Heading & Socials */}
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#d9ff3f] mb-6 md:mb-8"
            >
              Contact
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-syne font-bold leading-[0.95] tracking-tighter mb-10 md:mb-12"
            >
              Let's scale <br />
              <span className="italic text-white/20">your brand.</span>
            </motion.h3>

            <div className="space-y-6 md:space-y-8 mt-12 md:mt-20">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 mb-2">Email Me</p>
                <Magnetic>
                  <a href="mailto:faysal.mahmood29@gmail.com" className="text-lg md:text-2xl font-medium hover:text-[#d9ff3f] transition-colors break-words">
                    faysal.mahmood29@gmail.com
                  </a>
                </Magnetic>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 mb-2">Location</p>
                <p className="text-lg md:text-2xl font-medium">Lahore, PK (GMT+5)</p>
              </div>
              <div className="flex flex-wrap gap-6 pt-6">
                <Magnetic>
                  <a href="https://www.linkedin.com/in/faysalmahmood1/" target="_blank" className="text-[10px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#d9ff3f] transition-all">LINKEDIN</a>
                </Magnetic>
                <Magnetic>
                  <a href="#" className="text-[10px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#d9ff3f] transition-all">UPWORK</a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  className="bg-transparent border-b border-white/10 py-4 focus:border-[#d9ff3f] outline-none transition-colors text-base md:text-lg font-light placeholder:opacity-10"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-white/10 py-4 focus:border-[#d9ff3f] outline-none transition-colors text-base md:text-lg font-light placeholder:opacity-10"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="I'm interested in..."
                  className="bg-transparent border-b border-white/10 py-4 focus:border-[#d9ff3f] outline-none transition-colors text-base md:text-lg font-light placeholder:opacity-10"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project"
                  className="bg-transparent border-b border-white/10 py-4 focus:border-[#d9ff3f] outline-none transition-colors text-base md:text-lg font-light resize-none placeholder:opacity-10"
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <Magnetic className="w-full md:w-auto">
                  <button 
                    type="submit"
                    className="w-full md:w-auto group relative px-12 py-5 bg-[#d9ff3f] text-black rounded-full overflow-hidden font-bold uppercase tracking-widest text-[10px] transition-transform hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div 
                      className="absolute inset-0 bg-white"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </button>
                </Magnetic>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
