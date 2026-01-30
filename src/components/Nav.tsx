"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-6", label: "About" },
  { href: "/faq-s", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] glass-strong">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white">
          <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg">
            <Image src="/icon.png" alt="Menu Miser" fill className="object-contain" sizes="32px" />
          </span>
          <span><span className="text-orange-accent">Menu</span> Miser</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-[var(--orange)] ${
                  pathname === href ? "text-[var(--orange)] opacity-100" : "text-[var(--text-muted)] opacity-90"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/privacy-policy"
            className="hidden sm:inline text-sm text-[var(--text-muted)] hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hidden sm:inline text-sm text-[var(--text-muted)] hover:text-white transition-colors"
          >
            Terms
          </Link>
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--glass-border)] bg-[var(--bg-elevated)]/95 backdrop-blur-xl px-4 py-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 text-sm font-medium ${
                    pathname === href ? "text-[var(--orange)]" : "text-[var(--text-muted)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy-policy" className="block py-2 text-sm text-[var(--text-muted)]" onClick={() => setOpen(false)}>Privacy Policy</Link></li>
            <li><Link href="/terms" className="block py-2 text-sm text-[var(--text-muted)]" onClick={() => setOpen(false)}>Terms</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
