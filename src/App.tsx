/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Instagram,
  Linkedin,
  Youtube,
  Dribbble,
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Terminal,
  Volume2,
  VolumeX,
  Compass,
  Award,
  ArrowRight
} from 'lucide-react';

import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import ProjectGrid from './components/ProjectGrid';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import { TESTIMONIALS_DATA } from './data/projects';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Scroll Progress indicator tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic Loading Counter Sequence
  useEffect(() => {
    if (loadPercent < 100) {
      const interval = setInterval(() => {
        setLoadPercent((prev) => {
          const increment = Math.floor(Math.random() * 8) + 3;
          const next = prev + increment;
          return next >= 100 ? 100 : next;
        });
      }, 70);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  }, [loadPercent]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-violet-500/35 overflow-hidden font-sans">
      
      {/* 1. LOADING SCREEN INTRO SEQUENCE */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col justify-between p-8 md:p-16 select-none"
          >
            {/* Top header loader metadata */}
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 tracking-widest">
              <span>DHRUVIN PATEL PORTFOLIO ENGINE v1.2</span>
              <span className="animate-pulse">● INITIALIZING SYSTEMS</span>
            </div>

            {/* Middle giant typographic splits */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-5xl md:text-8xl lg:text-[7vw] font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400"
                >
                  dhruvinpatel
                </motion.h1>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="font-mono text-xs text-neutral-400 tracking-wide uppercase">
                  Awwwards Inspired Creative Workspace © 2026
                </p>
                <div className="h-px bg-white/10 flex-1 mx-4 hidden md:block" />
                <span className="font-mono text-xs text-pink-400">BRANDING • PACKAGING • DIGITAL</span>
              </div>
            </div>

            {/* Bottom percentage loading track counter */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="w-full md:w-1/3 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>LOADING SHADERS & MATRICES</span>
                  <span>{loadPercent}%</span>
                </div>
                <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
                    style={{ width: `${loadPercent}%` }}
                  />
                </div>
              </div>
              
              {/* Giant numeral */}
              <div className="text-8xl md:text-[12vw] font-bold font-display text-neutral-900/40 select-none leading-none">
                {String(loadPercent).padStart(3, '0')}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CUSTOM MOUSE TRACKER */}
      <CustomCursor />

      {/* CORE INTERACTIVE CANVAS PARTICLES */}
      <BackgroundCanvas />

      {/* SCROLL DEPTH PROGRESS INDICATOR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 2. PREMIUM NAV HEADER */}
      <header className="fixed top-0 inset-x-0 bg-[#050505]/65 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between z-40 select-none">
        <a href="#" className="flex items-center gap-1 text-xl font-bold font-display tracking-tight text-white hover:opacity-85 transition-opacity" data-cursor="pointer">
          dhruvinpatel<span className="text-pink-500 text-2xl leading-none font-bold">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-neutral-400 uppercase">
          <a href="#portfolio" className="hover:text-white transition-colors" data-cursor="pointer">Portfolio</a>
          <a href="#featured" className="hover:text-white transition-colors" data-cursor="pointer">Featured</a>
          <a href="#services" className="hover:text-white transition-colors" data-cursor="pointer">Services</a>
          <a href="#skills" className="hover:text-white transition-colors" data-cursor="pointer">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors" data-cursor="pointer">Journey</a>
          <a href="#contact" className="hover:text-white transition-colors" data-cursor="pointer">Hire Me</a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            data-cursor="pointer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:brightness-110 font-mono text-[10px] font-bold tracking-widest uppercase transition-all shadow-[0_4px_12px_rgba(168,85,247,0.3)]"
          >
            START PROJECT
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 lg:hidden text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full transition-colors cursor-pointer"
          data-cursor="pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* MOBILE MENU NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full md:w-80 bg-neutral-950 border-l border-white/10 p-8 z-50 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <span className="font-display font-bold text-lg">dhruvinpatel.</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-sm font-mono tracking-widest uppercase text-neutral-400">
                <a onClick={() => setMobileMenuOpen(false)} href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#featured" className="hover:text-white transition-colors">Featured</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#services" className="hover:text-white transition-colors">Services</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="hover:text-white transition-colors">Journey</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="hover:text-white transition-colors">Hire Me</a>
              </nav>
            </div>

            <div className="space-y-4">
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 block text-xs font-mono font-bold tracking-widest uppercase text-white shadow-lg"
              >
                START A PROJECT
              </a>
              <span className="font-mono text-[9px] text-neutral-600 text-center block">Dhruvin Patel Design Suite © 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 max-w-7xl mx-auto z-10 select-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Heading, CTA Buttons */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/30 font-mono text-[10px] text-violet-300 font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              PORTFOLIO OF DHRUVIN PATEL
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-[5.5vw] font-display font-bold tracking-tighter text-white leading-[1.05]"
              >
                I Design Brands <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400">
                  That People Remember.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg text-neutral-400 font-sans max-w-xl leading-relaxed"
              >
                Creative Graphic Designer specializing in Branding, Social Media Design, Logo Design, Posters, Packaging and Digital Experiences.
              </motion.p>
            </div>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#portfolio"
                data-cursor="pointer"
                className="magnetic-btn px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 hover:brightness-110 font-mono text-xs font-bold tracking-widest uppercase text-white shadow-[0_6px_25px_rgba(124,58,237,0.45)] transition-all"
              >
                VIEW PORTFOLIO
              </a>
              <a
                href="#contact"
                data-cursor="pointer"
                className="magnetic-btn px-8 py-4 rounded-full bg-neutral-900 border border-white/10 hover:border-violet-500/50 hover:bg-neutral-900/60 font-mono text-xs font-semibold text-neutral-300 hover:text-white tracking-widest uppercase transition-all"
              >
                HIRE ME
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-end Geometric 3D Digital Sculpture (CSS / SVG Animation) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Spinning particle halo ring background */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_50s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-4 border border-violet-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
              <div className="absolute inset-12 border-dashed border-pink-500/15 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />

              {/* Central glowing core cube sculpture */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    y: [-12, 12, -12],
                  }}
                  transition={{
                    rotateX: { duration: 15, repeat: Infinity, ease: 'linear' },
                    rotateY: { duration: 25, repeat: Infinity, ease: 'linear' },
                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-32 h-32 md:w-44 md:h-44 relative"
                >
                  {/* SVG Geometric Prism Sculpture */}
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <defs>
                      <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="none" stroke="url(#prismGrad)" strokeWidth="1.5" />
                    <polygon points="50,5 50,95" fill="none" stroke="url(#prismGrad)" strokeWidth="1" />
                    <polygon points="5,30 95,30" fill="none" stroke="url(#prismGrad)" strokeWidth="1" />
                    <polygon points="5,70 95,70" fill="none" stroke="url(#prismGrad)" strokeWidth="1" />
                    <polygon points="50,5 95,70" fill="none" stroke="url(#prismGrad)" strokeWidth="0.5" />
                    <polygon points="50,5 5,70" fill="none" stroke="url(#prismGrad)" strokeWidth="0.5" />
                    <polygon points="50,95 95,30" fill="none" stroke="url(#prismGrad)" strokeWidth="0.5" />
                    <polygon points="50,95 5,30" fill="none" stroke="url(#prismGrad)" strokeWidth="0.5" />
                  </svg>
                </motion.div>
              </div>

              {/* Overlay small floating tags */}
              <div className="absolute top-10 left-0 bg-neutral-900/80 border border-white/10 px-4 py-1.5 rounded-full font-mono text-[9px] tracking-widest text-violet-400 shadow-md">
                BRANDING DESIGN
              </div>
              <div className="absolute bottom-10 right-0 bg-neutral-900/80 border border-white/10 px-4 py-1.5 rounded-full font-mono text-[9px] tracking-widest text-pink-400 shadow-md">
                PACKAGING MOCKUP
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* INFINITE SCROLLING TYPOGRAPHIC MARQUEE */}
      <Marquee texts={['CREATIVE DIRECTION', 'BRAND IDENTITY SYSTEM', 'TACTILE PACKAGING', 'SWISS TYPOGRAPHY', 'SOCIAL MEDIA DESIGN', 'LOGO DESIGN', 'MODERN MINIMALISM']} />

      {/* 4. ABOUT ME SECTION */}
      <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait and visual stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-neutral-900 aspect-[3/4]">
              {/* Display portrait / graphic illustration */}
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Dhruvin Patel Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Inner floating title card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest block">FOUNDER & CHIEF CREATIVE</span>
                <span className="font-display font-bold text-lg text-white">Dhruvin Patel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase text-violet-400 tracking-widest block">Aesthetic Narrative</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Dhruvin Patel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400">
                Graphic Designer & Creative.
              </span>
            </h2>

            <div className="w-20 h-1 bg-violet-500 rounded-full my-4" />

            <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed">
              I create visually stunning brand identities, social media creatives and marketing designs that help businesses stand out. My focus is creating premium visuals with clean aesthetics and modern design trends.
            </p>

            <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
              Based on materials science, math coordinates, and Swiss-style column grids, my work spans from high-end corporate letterheads to intricate textured cardboard packaging structures. I believe a good brand mark should be timeless, simple, and command attention.
            </p>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 font-mono text-center md:text-left">
              <div>
                <span className="text-3xl md:text-4xl font-bold font-display text-pink-400">45+</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-1">Brands Standardized</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold font-display text-violet-400">350+</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-1">Logo Marks Scribed</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold font-display text-blue-400">6+</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-1">Design Awards</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <Services />

      {/* 6. PORTFOLIO GRID SECTION (40 PROJECTS) */}
      <ProjectGrid />

      {/* 7. FEATURED CASE STUDIES */}
      <CaseStudies />

      {/* 8. SKILLS SECTION */}
      <Skills />

      {/* 9. TIMELINE EXPERIENCES */}
      <Timeline />

      {/* 10. TESTIMONIALS SLIDER CAROUSEL */}
      <section className="relative py-24 px-4 md:px-8 bg-neutral-950/80 border-y border-white/5 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">Social Proof</span>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Client Commendations
            </h3>
          </div>

          <div className="relative w-full h-auto min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {TESTIMONIALS_DATA.map((test, index) => {
                if (index !== activeTestimonial) return null;
                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center space-y-6 px-4"
                  >
                    {/* Stars Rating Row */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: test.rating }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-pink-500 text-pink-500" />
                      ))}
                    </div>

                    {/* Recommendation Quotation Text */}
                    <blockquote className="text-lg md:text-2xl font-sans text-neutral-200 font-light leading-relaxed italic max-w-3xl">
                      "{test.text}"
                    </blockquote>

                    {/* Writer Block */}
                    <div className="flex items-center gap-3">
                      <img
                        src={test.avatar}
                        alt={test.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full border border-violet-500 object-cover shrink-0"
                      />
                      <div className="text-left">
                        <span className="font-sans font-bold text-white block">{test.name}</span>
                        <span className="font-mono text-[10px] text-neutral-500 uppercase block">
                          {test.role} / {test.company}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Testimonial Nav Triggers */}
          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              data-cursor="pointer"
              className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-violet-500 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-neutral-500">
              {String(activeTestimonial + 1).padStart(2, '0')} / {String(TESTIMONIALS_DATA.length).padStart(2, '0')}
            </span>
            <button
              onClick={nextTestimonial}
              data-cursor="pointer"
              className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-violet-500 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 11. CONTACT INTEGRATION FORM */}
      <ContactForm />

      {/* INFINITE FOOTER MARQUEE REVERSE */}
      <Marquee texts={['LAUNCH A PROJECT TODAY', 'LET\'S COLLABORATE', 'EMAIL: DVAGADIYA097@RKU.AC.IN', 'AWARDS WINNING PORTFOLIO', 'dhruvinpatel']} speed={22} reverse={true} />

      {/* 12. footer */}
      <footer className="relative py-12 px-6 md:px-12 bg-[#050505] border-t border-white/5 z-10 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="space-y-1">
            <a href="#" className="font-display font-bold text-xl text-white">
              dhruvinpatel<span className="text-pink-500 text-xl font-bold">.</span>
            </a>
            <p className="font-sans text-xs text-neutral-500">
              Designed & Crafted by Dhruvin Patel © 2026
            </p>
          </div>

          {/* Social Icons Links list */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/5 hover:border-pink-500 text-neutral-400 hover:text-pink-400 transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/5 hover:border-violet-500 text-neutral-400 hover:text-violet-400 transition-all cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/5 hover:border-pink-500 text-neutral-400 hover:text-pink-400 transition-all cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="p-3 rounded-xl bg-neutral-900 border border-white/5 hover:border-blue-500 text-neutral-400 hover:text-blue-400 transition-all cursor-pointer"
            >
              <Dribbble className="w-4 h-4" />
            </a>
          </div>

          <div className="text-neutral-500 font-mono text-[10px] uppercase">
            <span>Scroll back to top ↑</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
