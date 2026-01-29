"use client";

import { useEffect, useRef, useState } from "react";

const LAG = 0.15;
const SIZE = 16;
const SIZE_HOVER = 24;

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const hasPointer = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
    setMounted(hasPointer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.add("custom-cursor-active");
    return () => document.body.classList.remove("custom-cursor-active");
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMove);

    let rafId: number;
    const tick = () => {
      setPos((p) => ({
        x: p.x + (targetRef.current.x - p.x) * LAG,
        y: p.y + (targetRef.current.y - p.y) * LAG,
      }));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const clickables = document.querySelectorAll("a, button, [role='button'], [data-cursor-hover]");
    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [mounted]);

  if (!mounted || typeof window === "undefined") return null;

  const size = isHover ? SIZE_HOVER : SIZE;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-screen"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        width: size,
        height: size,
      }}
      aria-hidden
    >
      <div
        className="h-full w-full rounded-full transition-all duration-200"
        style={{
          background: "var(--orange)",
          boxShadow: isHover
            ? "0 0 24px rgba(255, 107, 74, 0.6)"
            : "0 0 16px rgba(255, 107, 74, 0.4)",
        }}
      />
    </div>
  );
}
