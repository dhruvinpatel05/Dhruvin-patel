/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data/projects';
import { Skill } from '../types';
import * as Icons from 'lucide-react';

export default function Skills() {
  const softwareSkills = SKILLS_DATA.filter((s) => s.category === 'Software');
  const creativeSkills = SKILLS_DATA.filter((s) => s.category === 'Creative');
  const coreSkills = SKILLS_DATA.filter((s) => s.category === 'Core');

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          My Technical Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Creative & Software Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Creative & Core Principles (Radial Glow Circles) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-neutral-900/35 border border-white/5 p-8 rounded-3xl backdrop-blur-xl">
            <h3 className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-6 flex items-center gap-2">
              <Icons.Compass className="w-4 h-4" />
              Creative & Brand Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...creativeSkills, ...coreSkills].map((skill, idx) => {
                const IconComponent = (Icons as any)[skill.iconName || 'HelpCircle'] || Icons.Compass;
                return (
                  <div
                    key={skill.name}
                    className="group relative bg-neutral-950/60 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background light glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="p-3 bg-violet-950/40 border border-violet-800/30 text-violet-400 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-sans font-bold text-sm text-white truncate">{skill.name}</span>
                        <span className="font-mono text-xs text-pink-400 font-semibold shrink-0">{skill.level}%</span>
                      </div>
                      
                      {/* Interactive sleek progress line */}
                      <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Heavy Software Trackers (Progress Rings & Charts) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-neutral-900/35 border border-white/5 p-8 rounded-3xl backdrop-blur-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-pink-400 mb-6 flex items-center gap-2">
                <Icons.Cpu className="w-4 h-4" />
                Software Competencies
              </h3>
              <p className="text-xs text-neutral-500 mb-8 leading-relaxed">
                Expert mastery of core industry standard engines. Operating with precise pixel grids, dieline vectors, and digital lookbooks.
              </p>
            </div>

            <div className="space-y-6">
              {softwareSkills.map((skill, idx) => {
                const colors = ['#8B5CF6', '#3B82F6', '#EC4899', '#06B6D4'];
                const color = colors[idx % colors.length];

                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-neutral-300 font-sans font-semibold text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                        {skill.name}
                      </span>
                      <span className="text-white font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar with glow */}
                    <div className="h-2 bg-neutral-950 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 10px ${color}`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>W3C DIGITAL DESIGN</span>
              <span>CMYK PRE-FLIGHT OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
