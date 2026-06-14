"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDragHandle, setIsDragHandle] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Check if device has touch (mobile devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e);
      
      // Check what element we're hovering over
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const isPointerCursor = computedStyle.cursor === 'pointer';
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' ||
                           target.closest('a') ||
                           target.closest('button');
      const onDragHandle = !!target.closest('[data-drag-handle]');
      
      setIsDragHandle(onDragHandle);
      setIsPointer(isPointerCursor || !!isInteractive);
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [moveCursor]);

  if (isHidden || isDragHandle) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isPointer ? 2.5 : 1,
            opacity: isPointer ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className={`rounded-full bg-white ${isPointer ? 'w-4 h-4' : 'w-3 h-3'}`} />
        </motion.div>
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 rounded-full border border-zinc-900/50" />
        </motion.div>
      </motion.div>

      {/* Trail particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[99997]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          transition={{ delay: i * 0.02 }}
        >
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: 0.1 - i * 0.02,
              scale: 1 - i * 0.15,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-zinc-900" />
          </motion.div>
        </motion.div>
      ))}

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        [data-drag-handle] {
          cursor: grab !important;
        }
        [data-drag-handle]:active {
          cursor: grabbing !important;
        }
      `}</style>
    </>
  );
}
