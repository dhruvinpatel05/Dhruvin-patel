/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics config for lag-behind effect
  const springConfig = { damping: 30, stiffness: 220, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }

      // Check what element the mouse is currently hovering
      const target = e.target as HTMLElement;
      if (!target) return;

      // Traversing up the tree to find any interactive element with data-cursor attributes
      const hoverable = target.closest('[data-cursor]');
      if (hoverable) {
        const type = hoverable.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorText('VIEW');
          setIsHovered(true);
        } else if (type === 'explore') {
          setCursorText('EXPLORE');
          setIsHovered(true);
        } else if (type === 'pointer') {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      } else {
        // Fallback for standard buttons and links
        const standardLink = target.closest('a, button, [role="button"]');
        if (standardLink) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        id="custom-cursor-follower"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/80 pointer-events-none z-50 flex items-center justify-center font-mono text-[9px] font-bold tracking-wider text-white select-none mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 48) : 32,
          height: isHovered ? (cursorText ? 80 : 48) : 32,
          backgroundColor: isHovered 
            ? 'rgba(124, 58, 237, 0.15)' 
            : 'rgba(124, 58, 237, 0.0)',
          borderColor: isHovered 
            ? 'rgba(236, 72, 153, 0.8)' 
            : 'rgba(124, 58, 237, 0.8)',
          boxShadow: isHovered 
            ? '0 0 15px rgba(236, 72, 153, 0.4), inset 0 0 10px rgba(124, 58, 237, 0.3)' 
            : 'none',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-white drop-shadow-md"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Pinpoint Dot */}
      <motion.div
        id="custom-cursor-pinpoint"
        className="fixed top-0 left-0 w-2 h-2 bg-pink-500 rounded-full pointer-events-none z-50 select-none mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#EC4899' : '#8B5CF6',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </>
  );
}
