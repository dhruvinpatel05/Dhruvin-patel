/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { X, Search, Grid, Eye, Compass, Layers, Palette, Type, CheckCircle } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Logo Design',
  'Branding',
  'Social Media',
  'Posters',
  'Packaging',
  'Business Cards',
  'Restaurant Branding',
  'Fashion Branding',
  'Technology Branding',
  'Coffee Branding',
  'Real Estate Branding',
  'Fitness Branding',
  'Luxury Branding',
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredProjects.length));
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          Curated Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Selected Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400">({PROJECTS_DATA.length} Projects)</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8"
        />
      </div>

      {/* Filter and Search Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
        {/* Category horizontal scrolling bar */}
        <div className="w-full lg:w-3/4 overflow-x-auto no-scrollbar flex items-center gap-2 py-1 select-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(12);
              }}
              data-cursor="pointer"
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-pink-600 border-transparent text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-neutral-950/40 border-white/5 hover:border-violet-500/40 text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-1/4">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(12);
            }}
            className="w-full bg-neutral-950/60 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
        </div>
      </div>

      {/* Projects Grid with Framer Motion Stagger */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-neutral-900/10 border border-white/5 rounded-2xl">
          <p className="font-mono text-neutral-400">No matching projects found. Try resetting the filters.</p>
        </div>
      ) : (
        <>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(0, visibleCount).map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  key={project.id}
                  className="group relative bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  data-cursor="view"
                >
                  {/* Aspect-Ratio Outer Wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Dark gradient gloss overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                    
                    {/* Glowing highlight ring */}
                    <div className="absolute inset-0 border border-white/0 group-hover:border-violet-500/20 rounded-2xl transition-colors duration-300 pointer-events-none" />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-semibold px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        <Eye className="w-3.5 h-3.5 text-pink-400" />
                        <span>PREVIEW</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Card Section */}
                  <div className="p-6 relative bg-gradient-to-b from-neutral-950/20 to-neutral-950">
                    {/* Top glow decoration */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase text-violet-400 tracking-wider bg-violet-950/30 border border-violet-800/20 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-sans text-white group-hover:text-pink-400 transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-neutral-400 font-sans line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                      <span>Client: {project.client}</span>
                      <span className="group-hover:translate-x-1 group-hover:text-violet-400 transition-all duration-300">
                        Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Trigger */}
          {filteredProjects.length > visibleCount && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoadMore}
                data-cursor="pointer"
                className="px-8 py-3.5 rounded-full bg-neutral-900 border border-white/10 hover:border-violet-500/50 hover:bg-neutral-900/60 font-mono text-xs font-semibold text-white tracking-widest uppercase transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
              >
                LOAD MORE WORKS
              </motion.button>
            </div>
          )}
        </>
      )}

      {/* FULLSCREEN DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-neutral-950/95 backdrop-blur-2xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-5xl bg-neutral-900/70 border border-white/10 rounded-3xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.8)] z-50 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top ambient color splashes */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Actions */}
              <div className="sticky top-0 right-0 left-0 p-4 md:p-6 flex items-center justify-between border-b border-white/10 bg-neutral-900/80 backdrop-blur-md z-30">
                <div className="flex items-center gap-2">
                  <Grid className="w-4 h-4 text-violet-400" />
                  <span className="font-mono text-xs text-neutral-400">PROJECT METADATA EXPLORER</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-neutral-850 hover:bg-neutral-800 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  data-cursor="pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Contents */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Side: Massive Image Frame */}
                <div className="lg:col-span-7 bg-black flex flex-col justify-center">
                  <div className="relative aspect-auto w-full max-h-[500px] lg:max-h-[650px] overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mx-auto"
                    />
                  </div>
                </div>

                {/* Right Side: Details & Presentations */}
                <div className="lg:col-span-5 p-6 md:p-8 max-h-[650px] overflow-y-auto custom-scrollbar flex flex-col justify-between">
                  <div>
                    {/* Brand Meta */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-pink-500/20 border border-pink-500/30 text-pink-400 px-2 py-0.5 rounded">
                        {selectedProject.category}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-500">
                        {selectedProject.year}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold font-sans text-white tracking-tight mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="font-mono text-xs text-violet-400 mb-6">
                      Client: <span className="text-white font-sans font-medium">{selectedProject.client}</span>
                    </p>

                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-300 mb-2">
                          <Compass className="w-3.5 h-3.5 text-pink-500" />
                          Project Overview
                        </h4>
                        <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Mockup Presentation System */}
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                        <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-300 mb-3">
                          <Layers className="w-3.5 h-3.5 text-blue-400" />
                          Production & Spec Sheets
                        </h4>

                        <div className="space-y-4">
                          {/* Color Palette Spec */}
                          <div>
                            <span className="font-mono text-[10px] text-neutral-500 block mb-1.5 uppercase">
                              Brand Color Spec
                            </span>
                            <div className="flex items-center gap-1.5">
                              {selectedProject.mockupPresentation.palette.map((hex, i) => (
                                <div key={i} className="flex items-center gap-1 bg-neutral-900/80 border border-white/5 py-0.5 pl-0.5 pr-2 rounded-full">
                                  <div
                                    className="w-4 h-4 rounded-full border border-white/10 shrink-0"
                                    style={{ backgroundColor: hex }}
                                  />
                                  <span className="font-mono text-[9px] text-neutral-400 uppercase">{hex}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Typography Spec */}
                          <div>
                            <span className="font-mono text-[10px] text-neutral-500 block mb-1 uppercase">
                              Typography Core
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.mockupPresentation.typography.map((font, i) => (
                                <span key={i} className="font-mono text-[9px] text-neutral-300 bg-neutral-950 px-2 py-0.5 rounded border border-white/5">
                                  {font}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Dieline & Finishing Details */}
                          <div>
                            <span className="font-mono text-[10px] text-neutral-500 block mb-1 uppercase">
                              Print Finishing & Dieline
                            </span>
                            <ul className="space-y-1 font-sans text-xs text-neutral-400">
                              {selectedProject.mockupPresentation.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-pink-500 mt-0.5">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Creative Process */}
                      <div>
                        <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-300 mb-2">
                          <CheckCircle className="w-3.5 h-3.5 text-violet-400" />
                          Creative Milestones
                        </h4>
                        <ul className="space-y-2 font-sans text-xs text-neutral-400 pl-1">
                          {selectedProject.creativeProcess.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="font-mono text-[10px] text-violet-400 bg-violet-950/40 border border-violet-800/30 w-5 h-5 shrink-0 rounded-full flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Close */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-neutral-500">Dhruvin Patel Design Suite</span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      data-cursor="pointer"
                      className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
