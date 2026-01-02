"use client";

import { useEffect, useState } from "react";

export default function Stamp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full rotate-12">
        <defs>
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[8px] font-bold fill-green-600 uppercase tracking-wider">
          <textPath href="#circle">
            OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • 
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-green-600 flex items-center justify-center bg-transparent">
          <span className="text-green-600 font-bold text-sm md:text-xl rotate-[-12deg]">HIRE<br/>ME</span>
        </div>
      </div>
    </div>
  );
}
