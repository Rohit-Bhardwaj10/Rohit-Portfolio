"use client";

import { useState, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  scrambleSpeed?: number;
}

const chars = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function TextScramble({
  text,
  className = "",
  duration = 0.8,
  scrambleSpeed = 30,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);
  const intervalRefs = useRef<{ scramble?: NodeJS.Timeout; reveal?: NodeJS.Timeout }>({});

  const clearIntervals = () => {
    if (intervalRefs.current.scramble) clearInterval(intervalRefs.current.scramble);
    if (intervalRefs.current.reveal) clearInterval(intervalRefs.current.reveal);
  };

  const scramble = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const textArray = text.split("");
    const totalChars = textArray.length;
    const revealPerChar = (duration * 1000) / totalChars;
    
    let currentIndex = 0;

    // Start with scrambled text
    setDisplayText(
      textArray
        .map((char) => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
        .join("")
    );

    // Continue scrambling unrevealed chars
    intervalRefs.current.scramble = setInterval(() => {
      setDisplayText(
        textArray
          .map((char, index) => {
            if (index < currentIndex) return char;
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
    }, scrambleSpeed);

    // Reveal characters one by one
    intervalRefs.current.reveal = setInterval(() => {
      currentIndex++;
      if (currentIndex >= totalChars) {
        clearIntervals();
        setDisplayText(text);
        isAnimating.current = false;
      }
    }, revealPerChar);
  }, [text, duration, scrambleSpeed]);

  const handleMouseEnter = () => {
    scramble();
  };

  return (
    <span 
      className={`cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
