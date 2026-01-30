"use client";

import { useEffect, useState } from "react";

export function MeshBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Subtle warm orange glow – veggies / groceries feel */}
      <div
        className="absolute -left-[15%] top-0 h-[60vmax] w-[60vmax] rounded-full opacity-[0.08] blur-[60px] md:blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
          animation: reduceMotion ? "none" : "warm-glow 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[10%] bottom-1/4 h-[40vmax] w-[40vmax] rounded-full opacity-[0.06] blur-[50px] md:blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
          animation: reduceMotion ? "none" : "warm-glow 12s ease-in-out infinite reverse",
          animationDelay: reduceMotion ? "0s" : "3s",
        }}
      />
    </div>
  );
}
