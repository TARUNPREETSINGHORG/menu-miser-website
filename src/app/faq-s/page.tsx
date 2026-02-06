import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs – Menu Miser",
  description: "Frequently asked questions about Menu Miser: features, pricing, meal planning, and support.",
};

const sections: { title: string; faqs: { q: string; a: string | string[] }[] }[] = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "What is Menu Miser?",
        a: "Menu Miser is an AI-powered meal planning app that generates personalized weekly meal plans based on your pantry items, dietary preferences, and budget. It helps you save time, reduce food waste, and make meal planning easier.",
      },
      {
        q: "How does Menu Miser work?",
        a: [
          "Add your pantry items (manually or via photo)",
          "Set dietary preferences, allergies, and chef persona",
          "Generate a personalized weekly meal plan",
          "Get shopping lists and recipe instructions",
          "Use the kitchen assistant for cooking help",
        ],
      },
      {
        q: "Is Menu Miser free?",
        a: "Menu Miser offers a free tier with limited meal plan generations. Pro subscriptions include unlimited generations, quick meal features, dietary personalization, premium chef personas, and advanced pantry management.",
      },
      {
        q: "What platforms is Menu Miser available on?",
        a: "Menu Miser is available on iOS.",
      },
    ],
  },
  {
    title: "Features & Functionality",
    faqs: [
      {
        q: "How does the AI meal planning work?",
        a: "Our AI analyzes your pantry items, dietary restrictions, allergies, and preferences to generate personalized meal plans. It considers what you already have, suggests budget-friendly recipes, and creates balanced weekly plans.",
      },
      {
        q: "Can I customize my meal plans?",
        a: [
          "Yes. You can:",
          "Swap recipes you don't like",
          "Set dietary restrictions and allergies",
          "Choose chef personas that match your cooking style",
          "Modify meal plans to fit your schedule",
          "Save favourite meal plans for later",
        ],
      },
      {
        q: "What is the Quick Meal feature?",
        a: "Quick Meal generates instant recipe suggestions using selected pantry items. It's useful when you need a meal idea quickly.",
      },
      {
        q: "How does pantry management work?",
        a: [
          "You can:",
          "Add items manually",
          "Upload photos for automatic ingredient recognition (Pro feature)",
          "Track what you have at home",
          "Get meal suggestions based on your pantry",
        ],
      },
      {
        q: "What is the Kitchen Assistant?",
        a: "The Kitchen Assistant is an AI helper that answers cooking questions, provides tips, suggests modifications, and helps with meal preparation. Ask questions about recipes, cooking techniques, or substitutions.",
      },
    ],
  },
  {
    title: "Subscription & Pricing",
    faqs: [
      {
        q: "What's the difference between Free and Pro?",
        a: [
          "Free Tier: Limited meal plan generations per week; basic pantry management; standard recipe access.",
          "Pro Tier: Unlimited meal plan generations; quick meal generation; premium chef personas; advanced pantry features (image recognition); recipe swapping and customization; priority support.",
        ],
      },
      {
        q: "How much does Pro cost?",
        a: "Pro subscription pricing is shown in the app. You can view current pricing in Settings → Subscription.",
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes. Cancel anytime through your Apple App Store settings. You'll retain access until the end of your billing period.",
      },
      {
        q: "Do subscriptions auto-renew?",
        a: "Yes. Subscriptions automatically renew unless cancelled. You can manage this in your app store account settings.",
      },
      {
        q: "Can I get a refund?",
        a: "Refunds are handled by the Apple App Store according to their refund policies. Email us or submit feedback through the app if you have issues.",
      },
    ],
  },
  {
    title: "Recipe Quality & AI",
    faqs: [
      {
        q: "Are the AI-generated recipes accurate?",
        a: [
          "Our AI generates recipe suggestions based on your preferences. Always:",
          "Verify ingredients for allergies",
          "Check cooking times",
          "Adjust recipes to your taste",
          "Use proper food safety practices",
        ],
      },
      {
        q: "What if I get a recipe I don't like?",
        a: [
          "You can:",
          "Swap it for another recipe",
          "Regenerate the meal plan",
          "Save favorites and avoid disliked recipes",
          "Provide feedback to improve recommendations",
        ],
      },
      {
        q: "Can I trust the nutritional information?",
        a: "Nutritional information is estimated and may vary. Always verify if you have specific dietary needs or health concerns.",
      },
      {
        q: "How do you improve recipe quality?",
        a: "We continuously improve our AI models based on user feedback, ratings, and usage patterns. Your input helps make recipes better.",
      },
    ],
  },
  {
    title: "Dietary Restrictions & Allergies",
    faqs: [
      {
        q: "Does Menu Miser support dietary restrictions?",
        a: [
          "Yes. You can set:",
          "Vegan, vegetarian, keto, paleo, etc.",
          "Food allergies and intolerances",
          "Meal type preferences",
        ],
      },
      {
        q: "How do I add my allergies?",
        a: "Go to Settings → Edit Profile → Allergies, then add your allergies. The app will try to avoid those ingredients in meal plans.",
      },
      {
        q: "Can I have multiple dietary restrictions?",
        a: "Yes. You can set multiple restrictions and allergies, and the app will try to generate plans that respect all of them.",
      },
      {
        q: "What if I have a severe allergy?",
        a: "Always double-check ingredients and verify recipes. Menu Miser provides suggestions, but you're responsible for ensuring food safety.",
      },
    ],
  },
  {
    title: "Technical & Troubleshooting",
    faqs: [
      {
        q: "The app is slow or crashing. What should I do?",
        a: [
          "Update to the latest version",
          "Restart the app",
          "Reinstall if issues persist",
          "Email us or submit feedback with error details",
        ],
      },
      {
        q: "My meal plan isn't generating. What's wrong?",
        a: [
          "Check your internet connection",
          "Ensure you have available generations (check your subscription status)",
          "Try again after a few minutes",
          "Email us or submit feedback if the issue persists",
        ],
      },
      {
        q: "How do I delete my account?",
        a: "Go to Settings → Delete Account. This permanently removes your data. This action cannot be undone. Once deleted, the same user cannot create an account for 7 days. This is to ensure there is no abuse of the service.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, tap \"Forgot Password\" and follow the instructions sent to your email. You can also request it while logged in Settings → Reset Password.",
      },
    ],
  },
  {
    title: "Privacy & Data",
    faqs: [
      {
        q: "Is my data secure?",
        a: "Yes. We use encryption, secure authentication, and follow industry best practices. Your data is stored securely and never sold to third parties.",
      },
      {
        q: "What data do you collect?",
        a: "We collect account information, dietary preferences, meal plans, pantry items, and usage analytics to provide and improve the service. See our Privacy Policy for details.",
      },
      {
        q: "Can I export my data?",
        a: "You can view, but cannot export your meal plans and saved recipes through the app. Email us for a full data export.",
      },
      {
        q: "Do you sell my information?",
        a: "No. We never sell your personal information. Data is only used to provide and improve Menu Miser.",
      },
    ],
  },
  {
    title: "Tips & Best Practices",
    faqs: [
      {
        q: "How can I get the best meal plans?",
        a: [
          "Keep your pantry list updated",
          "Set accurate dietary preferences",
          "Rate recipes to improve recommendations",
          "Use the kitchen assistant for help",
          "Save favourite recipes",
        ],
      },
      {
        q: "How do I reduce food waste with Menu Miser?",
        a: [
          "Update your pantry regularly",
          "Generate plans based on what you have",
          "Use the shopping list to buy only what you need",
          "Plan meals around items that need to be used soon",
        ],
      },
      {
        q: "Can I plan meals for multiple people?",
        a: "Currently, meal plans are designed for individual preferences. You can create separate accounts or adjust portions manually.",
      },
      {
        q: "How often should I generate new meal plans?",
        a: "Generate weekly plans as needed. Pro users have unlimited generations, so you can create new plans anytime.",
      },
    ],
  },
  {
    title: "Support & Feedback",
    faqs: [
      {
        q: "How do I get support?",
        a: [
          "Email us at info@jimmystudio.dev",
          "Submit feedback through the app (Settings → Feedback)",
          "Website: https://www.menumiser.co",
        ],
      },
      {
        q: "Can I suggest new features?",
        a: "Yes. We welcome feedback. Use the Feedback feature in Settings or email us.",
      },
      {
        q: "How do I report a bug?",
        a: [
          "Use the Feedback feature in Settings or email us. Include:",
          "What you were doing",
          "What went wrong",
          "Screenshots if possible",
          "Device and app version",
        ],
      },
      {
        q: "Where can I leave a review?",
        a: "Rate and review Menu Miser in the Apple App Store. Your feedback helps us improve.",
      },
    ],
  },
  {
    title: "Account & Billing",
    faqs: [
      {
        q: "Can I use Menu Miser without creating an account?",
        a: "No. An account is required to save meal plans, preferences, and sync data across devices.",
      },
      {
        q: "What happens if I delete my account?",
        a: "All your data (meal plans, saved recipes, preferences) will be permanently deleted and cannot be recovered.",
      },
      {
        q: "How do I restore my subscription?",
        a: "If you previously had a Pro subscription, you can restore it through Settings → Subscription → Restore Purchases → Back.",
      },
    ],
  },
];

function renderAnswer(a: string | string[]) {
  if (typeof a === "string") return <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{a}</p>;
  return (
    <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--text-muted)] leading-relaxed">
      {a.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-[var(--text-muted)]">
        Quick answers to common questions about Menu Miser.
      </p>

      <div className="mt-12 space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-6 text-xl font-semibold text-white border-b border-[var(--glass-border)] pb-2">
              {section.title}
            </h2>
            <dl className="space-y-8">
              {section.faqs.map(({ q, a }) => (
                <div key={q}>
                  <dt className="text-lg font-semibold text-white">{q}</dt>
                  <dd>{renderAnswer(a)}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl glass p-8">
        <h2 className="text-xl font-semibold text-white">Still have questions?</h2>
        <p className="mt-2 text-[var(--text-muted)]">
          If you don&apos;t see your question here, contact us. We&apos;re here to help make meal planning easier for you.
        </p>
        <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
          <li>
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:info@jimmystudio.dev" className="text-[var(--orange)] underline hover:no-underline">
              info@jimmystudio.dev
            </a>
          </li>
          <li>
            <strong className="text-white">In-App:</strong> Settings → Feedback
          </li>
          <li>
            <strong className="text-white">Website:</strong>{" "}
            <a href="https://www.menumiser.co" target="_blank" rel="noopener noreferrer" className="text-[var(--orange)] underline hover:no-underline">
              https://www.menumiser.co
            </a>
          </li>
        </ul>
        <p className="mt-6">
          <Link href="/contact" className="text-[var(--orange)] font-medium underline hover:no-underline">
            Contact us →
          </Link>
        </p>
      </section>
    </div>
  );
}
