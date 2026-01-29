"use client";

export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Subtle warm orange glow – veggies / groceries feel */}
      <div
        className="absolute -left-[15%] top-0 h-[60vmax] w-[60vmax] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
          animation: "warm-glow 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[10%] bottom-1/4 h-[40vmax] w-[40vmax] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)",
          animation: "warm-glow 12s ease-in-out infinite reverse",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}
