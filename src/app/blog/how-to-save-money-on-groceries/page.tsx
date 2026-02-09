import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Save $100/Month on Groceries – Menu Miser Blog",
  description: "Learn how smarter meal planning and using your pantry can save you $100 or more every month on groceries.",
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-[var(--orange)] hover:underline flex items-center gap-1 mb-8">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current">
          <path d="M9.25 10.25 6.75 8l2.5-2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to blog
      </Link>
      
      <header className="flex flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          How to Save $100/Month on Groceries with Smarter Planning
        </h1>
        <time dateTime="2026-02" className="order-first mb-4 text-base text-[var(--text-muted)]">
          February 4, 2026
        </time>
      </header>

      <div className="mt-8 space-y-6 text-[var(--text-muted)] leading-relaxed">
        <p>
          Grocery prices are rising, but your food bill doesn&apos;t have to. Most households throw away nearly 30% of the food they buy. By reducing waste and planning better, you can easily save $100 or more every single month.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Shop Your Pantry First</h2>
        <p>
          The most expensive meal is the one you buy ingredients for while your existing pantry items expire. Before going to the store, take 5 minutes to list what you already have. Use an app like <strong>Menu Miser</strong> to track these items and generate recipes that prioritize what you own.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. The Power of a Weekly Plan</h2>
        <p>
          Impulse buys are the enemy of your budget. When you walk into a grocery store without a plan, you&apos;re likely to buy things you don&apos;t need. A weekly meal plan ensures you only buy exactly what is required for your recipes.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Use a Kitchen Assistant</h2>
        <p>
          Don&apos;t know how to use that half-jar of tahini? Ask an AI kitchen assistant for a quick substitution or a small-scale recipe. Using every bit of what you buy is the secret to maximum savings.
        </p>

        <div className="mt-16 rounded-2xl glass p-8 border border-[var(--glass-border-orange)]">
          <h3 className="text-xl font-bold text-white">Ready to start saving?</h3>
          <p className="mt-2">
            Download Menu Miser today and let AI do the planning for you. Save time, reduce waste, and keep more money in your pocket.
          </p>
          <Link href="/" className="mt-6 inline-block rounded-xl bg-[var(--orange)] px-6 py-3 font-semibold text-white hover:bg-[var(--orange-dark)] transition-colors">
            Get the App
          </Link>
        </div>
      </div>
    </article>
  );
}
