"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function RevealOnScroll({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  once = false
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const slideDirections = {
    up: { y: "100%", x: 0 },
    down: { y: "-100%", x: 0 },
    left: { y: 0, x: "100%" },
    right: { y: 0, x: "-100%" },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ 
          y: slideDirections[direction].y, 
          x: slideDirections[direction].x 
        }}
        animate={isInView ? { y: 0, x: 0 } : { 
          y: slideDirections[direction].y, 
          x: slideDirections[direction].x 
        }}
        transition={{ 
          duration, 
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
      
      {/* Reveal overlay that slides away */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0B] z-10"
        initial={{ 
          y: 0, 
          x: 0 
        }}
        animate={isInView ? { 
          y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
          x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0
        } : { y: 0, x: 0 }}
        transition={{ 
          duration: duration * 0.8, 
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
      />
    </div>
  );
}
