
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Magnetic from './Magnetic';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-start justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-4 my-8 md:my-12 bg-[#111111] rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute bottom-8 left-8 md:left-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 md:px-12 pb-12">
          {/* Title & Meta */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-6 leading-tight">
              {project.title}
            </h2>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Project Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-white/10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-2">Client</span>
              <span className="text-sm font-medium text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-2">Year</span>
              <span className="text-sm font-medium text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-2">Duration</span>
              <span className="text-sm font-medium text-white">{project.duration}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-2">Project ID</span>
              <span className="text-sm font-medium text-white">#{project.id}</span>
            </div>
          </div>

          {/* Tools & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Tools */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Key Results</h3>
              <div className="space-y-3">
                {project.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d9ff3f] mt-1.5 shrink-0" />
                    <span className="text-sm text-white/70 font-light leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800"
                >
                  <img
                    src={img}
                    alt={`${project.title} - Gallery ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => setSelectedProject(project)}
            />
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
