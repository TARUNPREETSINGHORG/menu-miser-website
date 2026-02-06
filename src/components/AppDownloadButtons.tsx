"use client";

import Link from "next/link";

const APPLE_LINK = "https://apps.apple.com/us/app/menu-miser/id6758177930"; // Replace with your App Store link

type Variant = "default" | "hero";

export function AppDownloadButtons({ variant = "default" }: { variant?: Variant }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link
        href={APPLE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] btn-orange"
      >
        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        Download on App Store
      </Link>
    </div>
  );
}
