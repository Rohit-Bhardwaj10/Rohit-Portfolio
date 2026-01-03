"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedTimelineProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedTimeline({ children, className = "" }: AnimatedTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative ml-8 md:ml-10 my-8 flex flex-col gap-10 pr-6 ${className}`}>
      {/* Animated vertical line */}
      <motion.div
        className="absolute left-0 top-0 w-[1px] bg-zinc-400"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TimelineItem({ children, index, isFirst = false, isLast = false }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="relative pl-6 md:pl-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
    >
      {/* Line Mask Top - only for first item */}
      {isFirst && (
        <div className="absolute -left-[1px] top-0 h-2 w-1 bg-[#C4BCB2]"></div>
      )}
      
      {/* Line Mask Bottom - only for last item */}
      {isLast && (
        <div className="absolute -left-[1px] top-2 bottom-0 w-1 bg-[#C4BCB2]"></div>
      )}
      
      {/* Animated Dot */}
      <motion.div 
        className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-900 outline outline-4 outline-[#C4BCB2] z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
      />
      
      {children}
    </motion.div>
  );
}
