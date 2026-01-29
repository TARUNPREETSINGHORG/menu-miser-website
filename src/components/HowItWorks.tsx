"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Add your pantry", text: "Type ingredients or snap a photo of your fridge." },
    { num: "02", title: "Get your meal plan", text: "AI generates a weekly plan using what you have." },
    { num: "03", title: "Shop & cook", text: "Use the shopping list, then follow step-by-step recipes." },
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--text-muted)]">
            Three steps to smarter meals.
          </p>
        </AnimateOnScroll>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} animation="fade-in-up" delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-8 text-center transition-all duration-300" data-cursor-hover>
                <span className="text-4xl font-extrabold text-orange-accent">{step.num}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{step.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
