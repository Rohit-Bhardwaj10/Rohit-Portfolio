"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  scrambleSpeed?: number;
  characterSet?: string;
  autoStart?: boolean;
  startDelay?: number;
}

const defaultChars = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const japaneseChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";

export default function TextScramble({
  text,
  className = "",
  duration = 0.8,
  scrambleSpeed = 30,
  characterSet = defaultChars + japaneseChars,
  autoStart = false,
  startDelay = 0,
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
        .map((char) => (char === " " ? " " : characterSet[Math.floor(Math.random() * characterSet.length)]))
        .join("")
    );

    // Continue scrambling unrevealed chars
    intervalRefs.current.scramble = setInterval(() => {
      setDisplayText(
        textArray
          .map((char, index) => {
            if (index < currentIndex) return char;
            if (char === " ") return " ";
            return characterSet[Math.floor(Math.random() * characterSet.length)];
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
  }, [text, duration, scrambleSpeed, characterSet]);

  useEffect(() => {
    if (autoStart) {
      // Small delay to ensure client-side hydration doesn't mismatch instantly or looks better
      const timer = setTimeout(() => {
        scramble();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoStart, scramble]);

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
