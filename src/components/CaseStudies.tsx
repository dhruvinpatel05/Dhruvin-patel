/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { CASE_STUDIES_DATA } from '../data/projects';
import { ArrowRight, Compass, Layers, Check, Palette, Type, Award, ChevronRight, X } from 'lucide-react';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="featured" className="relative py-24 px-4 md:px-8 bg-neutral-950 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          Featured Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Aesthetic Masterpieces
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full mb-8"
        />
        <p className="text-sm font-sans text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Deep-dive audits into our elite visual rebrands, exploring materials science, grid physics, and timeless visual execution.
        </p>
      </div>

      {/* Case Studies Staggered Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {CASE_STUDIES_DATA.map((study, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            key={study.id}
            className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Visual Aspect Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
              <img
                src={study.heroImage}
                alt={study.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-wider bg-black/60 border border-white/10 text-violet-400 px-3 py-1 rounded-full backdrop-blur-md">
                  {study.category}
                </span>
                <span className="font-mono text-[9px] text-neutral-400 bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {study.year}
                </span>
              </div>
            </div>

            {/* Informational content */}
            <div className="p-8 relative">
              {/* Top border line glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

              <span className="font-mono text-xs text-neutral-500 mb-1 block">Client: {study.client}</span>
              <h3 className="text-2xl md:text-3xl font-bold font-sans text-white tracking-tight mb-3 group-hover:text-pink-400 transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans mb-6">
                {study.subtitle}
              </p>

              <button
                onClick={() => setActiveCase(study)}
                data-cursor="explore"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white hover:text-pink-400 group-hover:gap-3 transition-all duration-300"
              >
                EXPLORE CASE STUDY
                <ArrowRight className="w-4 h-4 text-violet-500 group-hover:text-pink-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLCASE IMMERSIVE DETAIL SCREEN */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-3xl overflow-y-auto"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full min-h-screen bg-transparent z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Back & Close Header */}
              <div className="sticky top-0 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 md:py-6 flex items-center justify-between z-40 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-violet-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">Dhruvin Patel / Featured Case Study</span>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/10 hover:border-violet-500 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  CLOSE STUDY
                </button>
              </div>

              {/* Case Contents Container */}
              <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 flex-1 space-y-16">
                {/* Hero section */}
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center gap-2 font-mono text-xs text-violet-400 uppercase">
                    <span>{activeCase.category}</span>
                    <span>•</span>
                    <span>{activeCase.year}</span>
                    <span>•</span>
                    <span>Client: {activeCase.client}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white leading-tight">
                    {activeCase.title}
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-400 font-sans max-w-3xl mx-auto leading-relaxed">
                    {activeCase.subtitle}
                  </p>
                </div>

                {/* Main Hero Image */}
                <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={activeCase.heroImage}
                    alt={activeCase.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overview, Challenge, and Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
                  <div className="space-y-3 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-400">
                      <Compass className="w-3.5 h-3.5 text-violet-400" />
                      The Overview
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                      {activeCase.overview}
                    </p>
                  </div>
                  <div className="space-y-3 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-pink-400">
                      <Layers className="w-3.5 h-3.5 text-pink-400" />
                      The Challenge
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                      {activeCase.challenge}
                    </p>
                  </div>
                  <div className="space-y-3 bg-neutral-900/30 border border-white/5 p-6 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-400">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      The Solution
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Typographic & Palette Boards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 md:p-12">
                  {/* Brand Color Theory */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        <Palette className="w-4 h-4 text-pink-500" />
                        COLOR SYSTEMS THEORY
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Exact physical and digital chromatics designed to elicit emotional brand resonance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {activeCase.palette.map((hex, i) => (
                        <div key={i} className="flex items-center gap-3 bg-neutral-950/60 border border-white/5 p-3 rounded-xl">
                          <div
                            className="w-10 h-10 rounded-lg border border-white/10 shadow-inner shrink-0"
                            style={{ backgroundColor: hex }}
                          />
                          <div>
                            <span className="font-mono text-xs text-white uppercase block">{hex}</span>
                            <span className="font-sans text-[9px] text-neutral-500 block">Brand Spec #{i+1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Pairing */}
                  <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12 flex flex-col justify-between">
                    <div>
                      <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        <Type className="w-4 h-4 text-violet-500" />
                        TYPOGRAPHY LOCKUPS
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Pairing sophisticated display serif with modern high-density tech monospaces.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      {activeCase.typography.map((font, i) => (
                        <div key={i} className="flex items-center justify-between bg-neutral-950/60 border border-white/5 p-4 rounded-xl">
                          <div>
                            <span className="font-mono text-[10px] text-violet-400 block mb-1">FONT SCALE #{i+1}</span>
                            <span className="text-lg font-semibold font-sans text-white">{font}</span>
                          </div>
                          <span className="font-mono text-[10px] text-neutral-500">W3C Compliant</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Staggered Multi-mockup presentation grid */}
                <div className="space-y-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 text-center">
                    HIGH-FIDELITY BRAND MOCKUPS
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeCase.mockups.map((mock, i) => (
                      <div
                        key={i}
                        className={`bg-neutral-900/20 border border-white/5 rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.4)] ${
                          mock.type === 'wide' ? 'md:col-span-2' : ''
                        }`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={mock.image}
                            alt={mock.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8 bg-neutral-950/40 border-t border-white/5">
                          <h5 className="font-sans font-bold text-lg text-white mb-1">{mock.title}</h5>
                          <p className="text-xs text-neutral-400 font-sans leading-relaxed">{mock.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process timeline milestones */}
                <div className="space-y-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 text-center">
                    PHASE-BY-PHASE REBRAND WORKFLOW
                  </h4>

                  <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12 max-w-3xl mx-auto">
                    {activeCase.process.map((p, i) => (
                      <div key={i} className="relative group">
                        {/* Bullet Circle */}
                        <div className="absolute -left-[35px] md:-left-[43px] w-6 h-6 rounded-full bg-neutral-900 border-2 border-violet-500 flex items-center justify-center text-[10px] font-mono font-bold text-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.5)] z-20">
                          {i + 1}
                        </div>

                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase text-violet-400 tracking-wider">
                            {p.phase}
                          </span>
                          <h5 className="font-sans font-bold text-lg text-white group-hover:text-pink-400 transition-colors">
                            {p.title}
                          </h5>
                          <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and Close Call */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 block">Dhruvin Patel Identity Archives</span>
                    <span className="text-xs text-neutral-400 font-sans">Designed and coded to modern digital and tactile standards.</span>
                  </div>
                  <button
                    onClick={() => setActiveCase(null)}
                    data-cursor="pointer"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-mono text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-[0_5px_15px_rgba(124,58,237,0.4)]"
                  >
                    RETURN TO ARCHIVE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
