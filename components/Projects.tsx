
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Magnetic from './Magnetic';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 group"
    >
      <div className="flex justify-between items-end px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">{project.category}</span>
        <span className="text-[10px] font-bold opacity-10">#{project.id}</span>
      </div>
      
      <div className="relative overflow-hidden aspect-[4/3] rounded-2xl bg-neutral-200">
        <motion.img 
          src={project.image} 
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
        
        {/* Hover View Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
            View Project
          </div>
        </div>
      </div>
      
      <div className="px-1 mt-4">
        <h3 className="text-2xl font-syne font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-black/50 font-light max-w-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="works" className="relative bg-[#e5e5e5] py-40 px-8 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-inter font-medium leading-tight text-black tracking-tight max-w-2xl"
          >
            Discover my latest work and performance solutions that bring growth to life.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
        
        <div className="mt-40 text-center">
          <Magnetic>
            <a href="#" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase group border-b border-black pb-2">
              View All Works
              <svg className="group-hover:translate-x-2 transition-transform" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Projects;
