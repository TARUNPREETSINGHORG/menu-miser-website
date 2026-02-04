import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – Menu Miser",
  description: "Get in touch with the Menu Miser team for support, feedback, or partnership.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact us</h1>
      <p className="mt-4 text-[var(--text-muted)]">
        Have a question, feedback, or want to say hello? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 rounded-2xl glass rounded-2xl border border-[var(--glass-border)] p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Ways to reach us</h2>
        <ul className="mt-4 space-y-3 text-[var(--text-muted)]">
          <li>
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:info@jimmystudio.dev" className="text-[var(--orange)] underline hover:no-underline">info@jimmystudio.dev</a>
          </li>
          <li>
            <strong className="text-white">App support:</strong> Email us or use the
            in-app feedback option (Settings → Feedback) for the fastest response.
          </li>
          <li>
            <strong className="text-white">General inquiries:</strong> You can reach
            us at the email address below or the contact method listed in the app store listing.
          </li>
        </ul>
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          We typically respond within a few business days. For app issues, email us or submit
          feedback through the app.
        </p>
      </div>

      <p className="mt-10 text-[var(--text-muted)]">
<Link href="/faq-s" className="text-[var(--orange)] underline hover:no-underline">
              Check our FAQs
            </Link>{" "}
        for answers to common questions.
      </p>
    </div>
  );
}
