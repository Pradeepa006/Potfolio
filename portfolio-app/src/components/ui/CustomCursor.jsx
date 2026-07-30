import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // default | link | button | text
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (!el) { setCursorType('default'); return; }
      const type = el.getAttribute('data-cursor') || (el.tagName === 'A' || el.tagName === 'BUTTON' ? 'link' : 'default');
      setCursorType(type);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  const isLink = cursorType === 'link';
  const ringSize = isClicking ? 28 : isLink ? 44 : 36;
  const dotSize = isClicking ? 4 : isLink ? 3 : 5;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full rounded-full border"
          style={{
            borderColor: isLink ? '#3b82f6' : 'rgba(255,255,255,0.4)',
            transition: 'border-color 0.2s ease',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isLink ? '#3b82f6' : '#ffffff',
          opacity: isVisible ? 1 : 0,
          width: dotSize,
          height: dotSize,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
