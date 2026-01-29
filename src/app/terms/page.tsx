import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – Menu Miser",
  description: "Terms of Service for Menu Miser: rules and conditions for using the app.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">Last Updated: December 2025</p>

      <p className="mt-8 text-[var(--text-muted)] leading-relaxed">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of Menu Miser (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a mobile application that provides AI-powered meal planning services (the &quot;App&quot; or &quot;Service&quot;). By accessing or using Menu Miser, you agree to be bound by these Terms.
      </p>

      <div className="mt-12 space-y-10 text-[var(--text-muted)]">
        <section>
          <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p className="mt-2 leading-relaxed">
            By creating an account, accessing, or using Menu Miser, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Description of Service</h2>
          <p className="mt-2 leading-relaxed">
            Menu Miser is a mobile application that provides AI-powered meal planning services, including:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Meal Plan Generation:</strong> AI-generated personalized weekly meal plans based on your dietary preferences, allergies, pantry items, family size, and budget.</li>
            <li><strong className="text-white">Pantry Management:</strong> Virtual pantry to track ingredients you have at home.</li>
            <li><strong className="text-white">Recipe Generation:</strong> Step-by-step cooking instructions generated on demand.</li>
            <li><strong className="text-white">Shopping List Generation:</strong> Automatic shopping lists based on meal plans.</li>
            <li><strong className="text-white">Kitchen Assistant:</strong> AI-powered cooking assistant to answer questions while cooking (Pro feature).</li>
            <li><strong className="text-white">Quick Meal Generator:</strong> Last-minute meal ideas based on available ingredients (Pro feature).</li>
            <li><strong className="text-white">Recipe Swap:</strong> Ability to replace meals in your plan (Pro feature).</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            The Service uses artificial intelligence (OpenAI) to generate meal plans and recipes. Results are generated automatically and may vary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Account Registration and Eligibility</h2>
          <h3 className="mt-4 text-lg font-medium text-white">3.1 Eligibility</h3>
          <p className="mt-1 leading-relaxed">
            You must be at least 13 years of age to use Menu Miser. If you are under 18, you represent that you have your parent&apos;s or guardian&apos;s permission to use the Service.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">3.2 Account Creation</h3>
          <p className="mt-1 leading-relaxed">
            To use Menu Miser, you must create an account by providing:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>A valid email address</li>
            <li>A secure password, or</li>
            <li>Authentication through Google Sign-In</li>
            <li>Authentication through Apple Sign-In (only on iOS)</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">3.3 Account Recreation Restrictions</h3>
          <p className="mt-1 leading-relaxed">
            To prevent abuse of our free tier, if you delete your account, you cannot create a new account with the same email address for 7 days after deletion. This restriction is automatically removed after 7 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Subscription Tiers and Features</h2>
          <h3 className="mt-4 text-lg font-medium text-white">4.1 Free Tier</h3>
          <p className="mt-1 leading-relaxed">The Free tier includes the following features and limitations:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Meal Plan Generations:</strong> 3 free meal plan generations per 7-day period. Free generations reset every 7 days.</li>
            <li><strong className="text-white">Generation Cooldown:</strong> 7-day cooldown period between meal plan generations.</li>
            <li><strong className="text-white">Meal Plan Duration:</strong> 3-day meal plans.</li>
            <li><strong className="text-white">Pantry Items:</strong> Unlimited.</li>
            <li><strong className="text-white">Saved Meal Plans:</strong> Unlimited.</li>
            <li><strong className="text-white">Chef Personas:</strong> Standard Basic Chef only (no premium chef personas).</li>
            <li><strong className="text-white">Quick Meal Generator:</strong> Not available.</li>
            <li><strong className="text-white">Recipe Swap:</strong> Not available.</li>
            <li><strong className="text-white">Pantry Image Extraction:</strong> Not available (camera scanning).</li>
            <li><strong className="text-white">Kitchen Assistant:</strong> Limited access (if available, subject to rate limits: 5 daily text queries).</li>
            <li><strong className="text-white">Saved Quick Meals:</strong> Not available.</li>
          </ul>
          <h3 className="mt-4 text-lg font-medium text-white">4.2 Pro Tier (Tier1)</h3>
          <p className="mt-1 leading-relaxed">The Pro tier subscription ($5.99/month) includes the following features:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Meal Plan Generations:</strong> Unlimited meal plan generations.</li>
            <li><strong className="text-white">Generation Cooldown:</strong> No cooldown period between generations (Cannot have two meal plan generations at one time).</li>
            <li><strong className="text-white">Meal Plan Duration:</strong> 7-day meal plans.</li>
            <li><strong className="text-white">Pantry Items:</strong> Unlimited pantry items.</li>
            <li><strong className="text-white">Saved Meal Plans:</strong> Unlimited saved meal plans.</li>
            <li><strong className="text-white">Chef Personas:</strong> Access to all premium chef personas (5 unique styles).</li>
            <li><strong className="text-white">Quick Meal Generator:</strong> Available.</li>
            <li><strong className="text-white">Recipe Swap:</strong> Available.</li>
            <li><strong className="text-white">Pantry Image Extraction:</strong> Available (camera scanning feature).</li>
            <li><strong className="text-white">Kitchen Assistant:</strong> Full access with rate limits (50 daily text queries).</li>
            <li><strong className="text-white">Saved Quick Meals:</strong> Unlimited.</li>
          </ul>
          <h3 className="mt-4 text-lg font-medium text-white">4.3 Feature Availability</h3>
          <p className="mt-1 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any feature of the Service at any time, with or without notice. We do not guarantee that any specific feature will be available at all times.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Subscriptions and Payments</h2>
          <h3 className="mt-4 text-lg font-medium text-white">5.1 Subscription Fees</h3>
          <p className="mt-1 leading-relaxed">
            Pro tier subscriptions are billed monthly at $5.99 per month. Prices are subject to change with notice.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">5.2 Payment Processing</h3>
          <p className="mt-1 leading-relaxed">Payments are processed through:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Google Play Services (for Android devices)</li>
            <li>Apple App Store (for iOS devices)</li>
            <li>RevenueCat (for subscription management)</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            You agree to comply with the terms and conditions of these third-party payment processors.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">5.3 Automatic Renewal</h3>
          <p className="mt-1 leading-relaxed">
            Pro tier subscriptions automatically renew at the end of each billing period unless you cancel your subscription before the renewal date. You will be charged the subscription fee to your payment method on file.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">5.4 Cancellation</h3>
          <p className="mt-1 leading-relaxed">
            You may cancel your Pro subscription at any time through your device&apos;s app store settings or by contacting us. Cancellation takes effect at the end of your current billing period. You will continue to have access to Pro features until the end of your paid period.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">5.5 Refunds</h3>
          <p className="mt-1 leading-relaxed">
            Refund policies are governed by Google Play Store and Apple App Store policies. We do not provide direct refunds. Please contact your app store for refund requests.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">5.6 Price Changes</h3>
          <p className="mt-1 leading-relaxed">
            We reserve the right to change subscription prices at any time. Price changes will be communicated to you in advance. If you do not agree to a price change, you may cancel your subscription before the change takes effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Service Limitations and Availability</h2>
          <h3 className="mt-4 text-lg font-medium text-white">6.1 Service Availability</h3>
          <p className="mt-1 leading-relaxed">
            We strive to provide reliable service but do not guarantee that the Service will be available at all times. The Service may be unavailable due to:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Maintenance or updates</li>
            <li>Technical issues</li>
            <li>Third-party service outages (e.g., OpenAI, Supabase)</li>
            <li>Force majeure events</li>
          </ul>
          <h3 className="mt-4 text-lg font-medium text-white">6.2 Service Errors and Failures</h3>
          <p className="mt-1 leading-relaxed">
            The Service may experience errors or failures, including but not limited to: meal plan generation failures, recipe generation failures, pantry image extraction failures, kitchen assistant unavailability, and data synchronization issues. We are not liable for any losses or damages resulting from service errors or failures.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">6.3 Rate Limits</h3>
          <p className="mt-1 leading-relaxed">
            The Service may impose rate limits on certain features to ensure fair usage and prevent abuse: Free Tier Kitchen Assistant: 5 daily text queries; Pro Tier Kitchen Assistant: 50 daily text queries. If you exceed rate limits, you may be temporarily restricted from using the affected feature until the limit resets.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">6.4 Pending Jobs</h3>
          <p className="mt-1 leading-relaxed">
            You cannot request a new meal plan generation while a previous meal plan generation is still pending. You must wait for the current generation to complete or fail before requesting a new one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. User Content and Conduct</h2>
          <h3 className="mt-4 text-lg font-medium text-white">7.1 User Content</h3>
          <p className="mt-1 leading-relaxed">
            You are solely responsible for all content you provide to the Service, including: pantry items, dietary preferences, allergies, feedback, and any other information you submit.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">7.2 Prohibited Uses</h3>
          <p className="mt-1 leading-relaxed">You agree not to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Attempt to circumvent subscription limitations or rate limits</li>
            <li>Create multiple accounts to avoid subscription fees or rate limits</li>
            <li>Delete and recreate accounts to reset free generation limits (subject to 7-day cooldown)</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Use automated systems to access the Service without permission</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
          </ul>
          <h3 className="mt-4 text-lg font-medium text-white">7.3 Account Abuse</h3>
          <p className="mt-1 leading-relaxed">
            We reserve the right to suspend or terminate accounts that engage in abusive behaviour, including but not limited to: creating multiple accounts to circumvent limitations, attempting to abuse the free tier through account deletion and recreation, exceeding reasonable usage limits, or violating these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Intellectual Property</h2>
          <h3 className="mt-4 text-lg font-medium text-white">8.1 Our Intellectual Property</h3>
          <p className="mt-1 leading-relaxed">
            All content, features, and functionality of the Service, including but not limited to text, graphics, logos, and software, are owned by Menu Miser or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">8.2 AI-Generated Content</h3>
          <p className="mt-1 leading-relaxed">
            Meal plans, recipes, and other AI-generated content are provided for your personal, non-commercial use. You may not: reproduce, distribute, or sell AI-generated content for commercial purposes; claim ownership of AI-generated content; or use AI-generated content to create competing services.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">8.3 Your Content</h3>
          <p className="mt-1 leading-relaxed">
            You retain ownership of content you provide to the Service. By providing content, you grant us a license to use, store, and process that content to provide the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Disclaimers and Limitations of Liability</h2>
          <h3 className="mt-4 text-lg font-medium text-white">9.1 AI-Generated Content Disclaimer</h3>
          <p className="mt-1 leading-relaxed">
            <strong className="text-white">IMPORTANT:</strong> Meal plans, recipes, and cooking instructions are generated by artificial intelligence and are provided for informational purposes only. We do not guarantee: the accuracy, completeness, or suitability of recipes; that recipes will meet your dietary needs or preferences; that ingredients are safe for your allergies; nutritional accuracy; or cooking times or temperatures.
          </p>
          <p className="mt-2 leading-relaxed">You are responsible for:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Verifying recipe accuracy and safety</li>
            <li>Checking ingredients for allergens</li>
            <li>Ensuring recipes meet your dietary requirements</li>
            <li>Following safe food handling and cooking practices</li>
            <li>Consulting with healthcare professionals for dietary concerns</li>
          </ul>
          <h3 className="mt-4 text-lg font-medium text-white">9.2 No Medical or Nutritional Advice</h3>
          <p className="mt-1 leading-relaxed">
            The Service does not provide medical, nutritional, or health advice. Always consult with qualified healthcare professionals for dietary, nutritional, or health-related decisions.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">9.3 Allergy Disclaimer</h3>
          <p className="mt-1 leading-relaxed">
            While we attempt to exclude allergens based on your profile, we cannot guarantee that recipes will be completely free of allergens due to cross-contamination risks, ingredient variations, and AI generation limitations. Always check ingredient labels and verify allergen information before consuming any food.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">9.4 Limitation of Liability</h3>
          <p className="mt-1 leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MENU MISER AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO: food allergies or adverse reactions; foodborne illness; incorrect recipe instructions; service unavailability; data loss; or loss of profits or revenue.
          </p>
          <p className="mt-2 leading-relaxed">
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">9.5 No Warranties</h3>
          <p className="mt-1 leading-relaxed">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">10. Account Termination</h2>
          <h3 className="mt-4 text-lg font-medium text-white">10.1 Termination by You</h3>
          <p className="mt-1 leading-relaxed">
            You may delete your account at any time through the App settings. Upon account deletion: all your personal data and user-generated content will be permanently deleted immediately, except as noted below; your email address will be retained for 7 days for abuse prevention purposes, then permanently deleted; your subscription (if active) will not be cancelled automatically and can be cancelled through App Store or Play Store.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">10.2 Termination by Us</h3>
          <p className="mt-1 leading-relaxed">
            We reserve the right to suspend or terminate your account at any time, with or without notice, for: violation of these Terms; abusive behaviour; fraudulent activity; or any other reason we deem necessary.
          </p>
          <h3 className="mt-4 text-lg font-medium text-white">10.3 Effect of Termination</h3>
          <p className="mt-1 leading-relaxed">
            Upon termination: your right to use the Service immediately ceases; all data associated with your account will be deleted (subject to the 7-day email retention period); you will not be entitled to any refund for unused subscription time (subject to app store policies).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">11. Third-Party Services</h2>
          <p className="mt-2 leading-relaxed">
            The Service relies on third-party services, including: Supabase (database, authentication, storage); OpenAI (AI meal plan and recipe generation); RevenueCat (subscription management); Google Play Services (payment processing for Android); Apple App Store (payment processing for iOS); Aptabase (tracking user interactions); Sentry (debugging and error analysis).
          </p>
          <p className="mt-2 leading-relaxed">
            We are not responsible for the availability, performance, or policies of these third-party services. Your use of third-party services is subject to their respective terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">12. Privacy</h2>
          <p className="mt-2 leading-relaxed">
            Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Service, you consent to our Privacy Policy.
          </p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="text-[var(--orange)] underline hover:no-underline">View Privacy Policy</Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">13. Changes to Terms</h2>
          <p className="mt-2 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by: updating the &quot;Last Updated&quot; date at the top of these Terms; posting a notice in the App for significant changes.
          </p>
          <p className="mt-2 leading-relaxed">
            Your continued use of the Service after changes become effective constitutes acceptance of the updated Terms. If you do not agree to the changes, you should stop using the Service and delete your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">14. Governing Law and Dispute Resolution</h2>
          <p className="mt-2 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Menu Miser operates, without regard to its conflict of law provisions.
          </p>
          <p className="mt-2 leading-relaxed">
            Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration, except where prohibited by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">15. Severability</h2>
          <p className="mt-2 leading-relaxed">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">16. Entire Agreement</h2>
          <p className="mt-2 leading-relaxed">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Menu Miser regarding the Service and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">17. Contact Us</h2>
          <p className="mt-2 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <a href="mailto:menumiser@gmail.com" className="text-[var(--orange)] underline hover:no-underline">menumiser@gmail.com</a>
          </p>
          <p className="mt-6 text-sm text-[var(--text-muted)]">Effective Date: December 2025</p>
        </section>
      </div>
    </div>
  );
}
