"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface DrawLineProps {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
  duration?: number;
  delay?: number;
}

export default function DrawLine({ 
  children, 
  className = "",
  lineClassName = "border-zinc-400",
  duration = 1.2,
  delay = 0.2
}: DrawLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* The animated line */}
      <motion.div
        className={`absolute left-0 top-0 w-[1px] ${lineClassName} bg-zinc-400`}
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ 
          duration, 
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
      />
      {/* Content */}
      <div className="pl-0">
        {children}
      </div>
    </div>
  );
}
