"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-in-up" | "fade-in" | "fade-in-scale";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={`animate-entrance animate-${animation} ${visible ? "animate-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
