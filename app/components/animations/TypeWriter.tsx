"use client";

import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

interface TypeWriterProps {
  lines: string[];
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export default function TypeWriter({ 
  lines, 
  delay = 0.5,
  className = "",
  cursorClassName = "",
  showCursor = true
}: TypeWriterProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateText = async () => {
      // Wait for initial delay
      await new Promise(resolve => setTimeout(resolve, delay * 1000));
      
      // Animate each character
      animate(
        "span.char",
        { opacity: 1 },
        { duration: 0.05, delay: stagger(0.04) }
      );
    };

    animateText();
  }, [animate, delay]);

  return (
    <span ref={scope} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="inline">
          {line.split(/( )/).map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}-${charIndex}`}
                  className="char"
                  initial={{ opacity: 0 }}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          ))}
          {lineIndex < lines.length - 1 && <br className="hidden md:block" />}
          {lineIndex < lines.length - 1 && <span className="md:hidden"> </span>}
        </span>
      ))}
      {showCursor && (
        <motion.span 
          className={`inline-block ${cursorClassName}`}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
