import type { Metadata } from "next";
import Link from "next/link";

const title = "The Real Cost of Not Having a Grocery Plan";
const description = "Impulse buys, food waste, and takeout add up fast. Learn how a smart meal plan with AI-generated shopping lists can slash your weekly grocery bills.";
const slug = "real-cost-of-no-grocery-plan";
const publishDate = "2026-02-16";

export const metadata: Metadata = {
  title: `${title} – Menu Miser Blog`,
  description,
  alternates: {
    canonical: `https://menumiser.co/blog/${slug}`,
  },
  openGraph: {
    title,
    description,
    url: `https://menumiser.co/blog/${slug}`,
    siteName: "Menu Miser",
    locale: "en_US",
    type: "article",
    publishedTime: publishDate,
    authors: ["Menu Miser"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: "Menu Miser",
      url: "https://menumiser.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Menu Miser",
      url: "https://menumiser.co",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://menumiser.co/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-[var(--orange)] hover:underline flex items-center gap-1 mb-8">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-current">
          <path d="M9.25 10.25 6.75 8l2.5-2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to blog
      </Link>
      
      <header className="flex flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The Real Cost of Not Having a Grocery Plan
        </h1>
        <time dateTime="2026-02" className="order-first mb-4 text-base text-[var(--text-muted)]">
          February 16, 2026
        </time>
      </header>

      <div className="mt-8 space-y-6 text-[var(--text-muted)] leading-relaxed">
        <p>
          You pop into the supermarket for &ldquo;a few things&rdquo; and walk out $80 lighter. At home, you realise you forgot the one ingredient you actually needed. So you order pizza instead. We&apos;ve all been there &mdash; and it&apos;s costing more than you think.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Impulse-Buy Trap (And How It Adds Up)</h2>
        <p>
          Studies show that unplanned grocery trips lead to 40&ndash;60% more spending than planned ones. Without a list, everything looks like a good idea. That fancy pasta sauce, the snack you might eat later, the bulk deal on something you already have two of at home.
        </p>
        <p>
          These small impulse buys compound fast. An extra $20 per trip, twice a week, adds up to over $2,000 a year in spending you never intended. The fix isn&apos;t willpower &mdash; it&apos;s having a plan before you walk through the door.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Food Waste: The Bill You Don&apos;t See</h2>
        <p>
          The average household wastes roughly 30% of the food it purchases. That&apos;s not just an environmental problem &mdash; it&apos;s a financial one. If you spend $600 a month on groceries, $180 of that is going straight into the bin.
        </p>
        <p>
          Most food waste happens because people buy ingredients without a concrete plan to use them. The bunch of coriander you grabbed &ldquo;just in case&rdquo; wilts in the back of the fridge. The chicken breasts you bought on sale sit in the freezer until they&apos;re unrecognisable. Without a plan connecting purchases to meals, waste is inevitable.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What a Weekly Plan Actually Saves You</h2>
        <p>
          A meal plan does three things: it tells you exactly what to buy, it ensures every ingredient has a purpose, and it removes the daily &ldquo;what&apos;s for dinner?&rdquo; decision that leads to expensive takeout orders.
        </p>
        <p>
          When your meals are mapped out for the week, there&apos;s no guessing. You buy what you need and nothing more. Ingredients overlap across recipes &mdash; the onions in Monday&apos;s soup also go into Wednesday&apos;s stir fry. Nothing sits unused.
        </p>
        <p>
          Households that meal plan consistently report saving anywhere from $50 to $150 per month. Over a year, that&apos;s enough for a holiday.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Smart Shopping Lists That Know Your Pantry</h2>
        <p>
          Here&apos;s where it gets even better. Menu Miser doesn&apos;t just generate a meal plan &mdash; it generates a shopping list that already knows what&apos;s in your pantry. If a recipe calls for olive oil and you&apos;ve got a bottle at home, it won&apos;t appear on your list.
        </p>
        <p>
          The app shows you exactly what you need to buy versus what you already own. You can see your pantry coverage at a glance &mdash; how much of your meal plan is covered by existing ingredients. The higher that number, the less you spend at the store.
        </p>
        <p>
          No more buying duplicates. No more forgetting items. No more wandering aisles hoping inspiration strikes. Just a clean, focused list that saves you time and money every single week.
        </p>

        <div className="mt-16 rounded-2xl glass p-8 border border-[var(--glass-border-orange)]">
          <h3 className="text-xl font-bold text-white">Take control of your grocery spending</h3>
          <p className="mt-2">
            Download Menu Miser and get AI-powered meal plans with smart shopping lists that cut waste and keep your budget on track.
          </p>
          <Link href="/" className="mt-6 inline-block rounded-xl bg-[var(--orange)] px-6 py-3 font-semibold text-white hover:bg-[var(--orange-dark)] transition-colors">
            Get the App
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
