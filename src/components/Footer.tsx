import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-elevated)]/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="relative block h-7 w-7 shrink-0 overflow-hidden rounded-lg">
                <Image src="/icon.png" alt="Menu Miser" fill className="object-contain" sizes="28px" />
              </span>
              <span><span className="text-orange-accent">Menu</span> Miser</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-[var(--text-muted)]">
              Your personal meal planning assistant. Save time, money, and stress.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-10">
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/about-6" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/faq-s" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/contact" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--glass-border)] pt-8 text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Menu Miser. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
