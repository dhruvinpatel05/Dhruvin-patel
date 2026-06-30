/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/projects';
import { Calendar, Briefcase, Award, ArrowUpRight } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          My Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Experience Timeline
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-8"
        />
      </div>

      {/* Experience Journey layout */}
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-12 border-l border-white/10 space-y-16">
        {/* Glow track bar decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-transparent pointer-events-none" />

        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            key={exp.id}
            className="relative group"
          >
            {/* Pulsing visual core node pin */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-violet-500 flex items-center justify-center text-[10px] text-violet-400 font-bold shadow-[0_0_12px_rgba(168,85,247,0.5)] z-20 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
              {EXPERIENCE_DATA.length - idx}
            </div>

            {/* Content card */}
            <div className="relative bg-neutral-900/40 border border-white/5 hover:border-violet-500/20 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300">
              {/* Internal backglow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase text-violet-400 tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.year}
                  </span>
                  <h3 className="text-2xl font-bold font-sans text-white group-hover:text-pink-400 transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <span className="font-mono text-xs text-neutral-500 uppercase block">Company</span>
                  <span className="text-sm font-semibold text-white flex items-center gap-1 md:justify-end">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                    {exp.company}
                  </span>
                </div>
              </div>

              {/* Main Description text */}
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-sans mb-6">
                {exp.description}
              </p>

              {/* Achievements Highlight blocks */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] uppercase text-neutral-500 tracking-widest flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-violet-500" />
                  KEY ACHIEVEMENTS
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 bg-neutral-950/60 border border-white/5 p-4 rounded-xl hover:bg-neutral-950 transition-colors"
                    >
                      <span className="font-mono text-[10px] text-pink-400 bg-pink-500/10 border border-pink-500/20 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
