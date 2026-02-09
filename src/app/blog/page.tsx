import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Menu Miser",
  description: "Learn how to save money on groceries, reduce food waste, and master meal planning with AI.",
};

const blogPosts = [
  {
    title: "How to Save $100/Month on Groceries with Smarter Planning",
    slug: "how-to-save-money-on-groceries",
    date: "February 2026",
    description: "Discover simple tips and tricks to slash your grocery bill by using what you already have in your pantry.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Menu Miser Blog</h1>
      <p className="mt-4 text-[var(--text-muted)]">
        Tips, tricks, and guides for smarter meal planning and sustainable living.
      </p>

      <div className="mt-12 space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start">
            <h2 className="text-xl font-semibold text-white group-hover:text-[var(--orange)] transition-colors">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{post.title}</span>
              </Link>
            </h2>
            <time className="relative z-10 order-first mb-3 flex items-center text-sm text-[var(--text-muted)] pl-3.5" dateTime="2026-02">
              <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span className="h-4 w-0.5 rounded-full bg-[var(--orange)]" />
              </span>
              {post.date}
            </time>
            <p className="relative z-10 mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              {post.description}
            </p>
            <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-[var(--orange)]">
              Read article
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
