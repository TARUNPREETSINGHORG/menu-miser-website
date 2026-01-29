import Link from "next/link";
import Image from "next/image";
import { AppDownloadButtons } from "./AppDownloadButtons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function CTASection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <AnimateOnScroll animation="fade-in-scale">
        <div className="mx-auto max-w-3xl rounded-3xl glass-strong p-12 text-center sm:p-16">
          <div className="mb-6 flex justify-center">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
              <Image src="/icon.png" alt="Menu Miser" fill className="object-contain" sizes="64px" />
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to save time and money?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-muted)]">
            Download Menu Miser and turn your pantry into a week of great meals.
          </p>
          <div className="mt-10">
            <AppDownloadButtons />
          </div>
          <p className="mt-10 text-sm text-[var(--text-muted)]">
            <Link href="/faq-s" className="underline hover:text-[var(--orange)] transition-colors">
              FAQs
            </Link>
            {" · "}
            <Link href="/contact" className="underline hover:text-[var(--orange)] transition-colors">
              Contact us
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
