"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppDownloadButtons } from "./AppDownloadButtons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true); // Start with true to load immediately

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                            window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      // Always load video, but we'll optimize autoplay and preload based on device
      setShouldLoadVideo(true);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <AnimateOnScroll animation="fade-in-up" delay={0}>
        <div className="mb-6 flex justify-center">
          <span className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
            <Image src="/icon.png" alt="Menu Miser" fill className="object-contain" sizes="96px" priority />
          </span>
        </div>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your pantry.{" "}
          <span className="text-orange-accent">One app.</span>
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up" delay={80}>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
          Save time, money, and stress. AI-powered meal plans from what you already have—quick
          recipes, shopping lists, and a kitchen assistant in one place.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up" delay={160}>
        <div className="mt-10">
          <AppDownloadButtons variant="hero" />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in-up" delay={280}>
        {/* Hero App Demo Video – add hero-demo.mp4 to /public */}
        <div className="mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-2xl glass glass-hover border-[var(--glass-border-orange)] p-1 transition-all duration-300">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-xl bg-[var(--bg-elevated)] sm:max-w-[320px]">
            {!videoError ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload={isMobile ? "metadata" : "auto"}
                aria-label="App demo"
                onError={() => setVideoError(true)}
              >
                <source src="/hero-demo.MP4" type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-[var(--text-muted)]">
                [VIDEO: Add hero-demo.mp4 (15–30s) to /public]
              </div>
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
