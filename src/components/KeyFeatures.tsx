"use client";

import { useState } from "react";
import {
  ShoppingBasket,
  Sparkles,
  Zap,
  MessageCircle,
  ListChecks,
  PiggyBank,
} from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const features = [
  { id: "1", title: "Start with Your Pantry", description: "Add ingredients you have at home or snap a photo of your fridge. We use what you have first so nothing goes to waste.", icon: ShoppingBasket, image: "/feature-1.png" },
  { id: "2", title: "AI Meal Plans", description: "Get weekly meal plans tailored to your pantry and dietary needs. Choose chef personas for unique cooking styles.", icon: Sparkles, image: "/feature-2.png" },
  { id: "3", title: "Quick Recipe Generator", description: "Need a meal idea right now? Pick ingredients, set preferences, and get instant recipe suggestions.", icon: Zap, image: "/feature-3.png" },
  { id: "4", title: "Kitchen Assistant", description: "Your AI cooking companion. Ask questions, get substitutions, and follow step-by-step instructions while you cook.", icon: MessageCircle, image: "/feature-4.png" },
  { id: "5", title: "Smart Shopping List", description: "Auto-generated list from your meal plan. Check off items as you shop, then cook with detailed recipes.", icon: ListChecks, image: "/feature-5.png" },
  { id: "6", title: "Save Money Every Week", description: "Use what you own, buy only what you need. Less waste and lower grocery bills—every week.", icon: PiggyBank, image: "/feature-6.png" },
];

export function KeyFeatures() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const setError = (id: string) => setImageErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to eat well
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--text-muted)]">
            From pantry to plate—meal planning that actually works.
          </p>
        </AnimateOnScroll>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, title, description, icon: Icon, image }, i) => (
            <AnimateOnScroll key={id} animation="fade-in-up" delay={i * 60}>
              <div className="glass glass-hover flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300" data-cursor-hover>
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-[var(--bg-elevated)]">
                  {!imageErrors[id] ? (
                    <img src={image} alt="" className="h-full w-full object-cover object-top" onError={() => setError(id)} />
                  ) : null}
                  {imageErrors[id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-12 w-12 text-[var(--text-muted)]/50" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--orange-muted)] text-[var(--orange)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-2 flex-1 leading-relaxed text-[var(--text-muted)]">{description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
