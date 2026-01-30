"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProblemSolution() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimateOnScroll animation="fade-in-up" delay={0}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Stop wasting food.{" "}
              <span className="text-orange-accent">Start eating smarter.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
              Planning meals is tedious. You buy too much, forget what’s in the fridge, and end up
              throwing food away. Menu Miser turns your pantry into a plan: add what you have, get
              AI-generated meal plans and recipes, and shop only for what you need.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
              One app for pantry, meal plans, quick recipes, and a kitchen assistant—so you save
              time, cut waste, and eat well every week.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" delay={120}>
          <div className="relative overflow-hidden rounded-2xl glass glass-hover p-1 transition-all duration-300">
            <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-xl bg-[var(--bg-elevated)] mx-auto lg:max-w-none">
              {!imgError ? (
                <Image
                  src="/problem-solution-screenshot.png"
                  alt="Menu Miser app showing meal plan from pantry"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : null}
              {imgError && (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-[var(--text-muted)]">
                  [IMAGE: Add problem-solution-screenshot.png to /public]
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
