import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Menu Miser",
  description: "Learn about Menu Miser and our mission to help you save time, money, and stress with smarter meal planning.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">About Menu Miser</h1>
      <p className="mt-4 text-[var(--text-muted)]">
        Menu Miser is your personal meal planning assistant. We built it because we were tired of
        wasting food, overspending at the grocery store, and staring at the fridge wondering what to
        cook.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">Our mission</h2>
      <p className="mt-2 text-[var(--text-muted)]">
        We want to help you eat well without the stress. By starting with what you already have in
        your pantry, AI-generated meal plans, and a kitchen assistant that answers your questions
        while you cook, Menu Miser makes it easier to plan meals, reduce waste, and save money.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">What we offer</h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[var(--text-muted)]">
        <li>Pantry tracking—add ingredients or snap a photo of your fridge</li>
        <li>AI weekly meal plans tailored to your ingredients and dietary needs</li>
        <li>Quick recipe generator for instant meal ideas</li>
        <li>Kitchen assistant for cooking tips and substitutions</li>
        <li>Smart shopping lists and step-by-step recipes</li>
      </ul>

      <p className="mt-10 text-[var(--text-muted)]">
        Thank you for using Menu Miser. If you have feedback or questions, we&apos;d love to hear from you—visit our{" "}
        <a href="/contact" className="text-[var(--orange)] underline hover:no-underline" aria-label="Contact page">Contact</a> page.
      </p>
    </div>
  );
}
