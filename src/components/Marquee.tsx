/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface MarqueeProps {
  texts: string[];
  speed?: number; // duration in seconds for a full loop
  reverse?: boolean;
}

export default function Marquee({ texts, speed = 25, reverse = false }: MarqueeProps) {
  // We duplicate the array to ensure continuous flow
  const content = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-neutral-950/80 border-y border-white/5 backdrop-blur-md flex items-center">
      {/* Decorative gradient shadows at edges */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-12 text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold tracking-widest text-white/40 uppercase font-sans select-none"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {content.map((text, idx) => (
          <div key={idx} className="flex items-center gap-12 shrink-0">
            <span>{text}</span>
            <span className="w-3 h-3 rounded-full bg-violet-500 opacity-60 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
