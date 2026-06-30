/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data/projects';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          My Creative Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Specialized Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-8"
        />
        <p className="text-sm font-sans text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Blending raw imagination with structured digital metrics to engineer elite visual branding systems that demand immediate marketplace dominance.
        </p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_DATA.map((service, idx) => {
          // Resolve Lucide icons dynamically
          const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;
          
          // Custom accent classes depending on color definition
          const accentColorMap = {
            purple: {
              border: 'group-hover:border-violet-500/30',
              bgGlow: 'rgba(139, 92, 246, 0.08)',
              icon: 'text-violet-400 bg-violet-950/40 border-violet-800/30',
              bullet: 'bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]'
            },
            blue: {
              border: 'group-hover:border-blue-500/30',
              bgGlow: 'rgba(59, 130, 246, 0.08)',
              icon: 'text-blue-400 bg-blue-950/40 border-blue-800/30',
              bullet: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
            },
            pink: {
              border: 'group-hover:border-pink-500/30',
              bgGlow: 'rgba(236, 72, 153, 0.08)',
              icon: 'text-pink-400 bg-pink-950/40 border-pink-800/30',
              bullet: 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]'
            }
          };

          const accent = accentColorMap[service.accentColor];

          return (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={service.id}
              className={`group relative bg-neutral-900/45 border border-white/5 p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 flex flex-col justify-between h-full hover:bg-neutral-900/60 ${accent.border}`}
            >
              {/* Backglow Ambient Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${accent.bgGlow}, transparent 70%)`
                }}
              />

              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border flex items-center justify-center transition-all duration-500 ${accent.icon}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] text-neutral-600 font-bold tracking-widest">
                    CAPABILITY #{idx + 1}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Bullet Specifications */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5">
                {service.details.map((detail, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${accent.bullet}`} />
                    <span className="font-mono text-[10px] text-neutral-300 tracking-wide uppercase">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
