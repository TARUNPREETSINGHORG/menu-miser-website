import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Menu Miser",
  description: "Privacy Policy for Menu Miser: how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">Last Updated: December 2025</p>

      <p className="mt-8 text-[var(--text-muted)] leading-relaxed">
        Menu Miser (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Menu Miser. This Privacy Policy applies to our mobile application (the &quot;App&quot;).
      </p>
      <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
        By using Menu Miser, you agree to the collection and use of information in accordance with this policy.
      </p>

      <div className="mt-12 space-y-10 text-[var(--text-muted)]">
        <section>
          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <p className="mt-2 leading-relaxed">
            We collect personal information from the following sources:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Directly from You:</strong> Information you provide when creating an account, setting preferences, or using features.</li>
            <li><strong className="text-white">Automatically from Your Device:</strong> Device information and usage data collected when you use the app.</li>
            <li><strong className="text-white">From Third Parties:</strong> Authentication information from Google (if you use Google Sign-In).</li>
          </ul>

          <h3 className="mt-6 text-lg font-medium text-white">A. Information You Provide to Us</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Account Information:</strong> When you register, we collect your email address and authentication credentials. Authentication is handled securely via Supabase Auth.</li>
            <li><strong className="text-white">Profile Data:</strong> We collect information you provide to personalize your experience, including: family size; weekly budget; dietary restrictions (e.g., vegetarian, vegan, keto); allergies; meal preferences (breakfast, lunch, dinner, snacks); chef persona selection.</li>
            <li><strong className="text-white">Pantry Data:</strong> We store the list of ingredients and items you add to your virtual pantry.</li>
            <li><strong className="text-white">Meal Plans and Recipes:</strong> We store your generated meal plans, saved meal plans, and saved quick meals.</li>
            <li><strong className="text-white">Feedback:</strong> Any feedback you choose to submit through the app.</li>
            <li><strong className="text-white">User Content:</strong> Any other information you choose to provide within the App.</li>
          </ul>

          <h3 className="mt-6 text-lg font-medium text-white">B. Information Collected Automatically</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Device Information:</strong> We may collect information about your mobile device, including hardware model, operating system version, and unique device identifiers. This information is primarily used for debugging and analytics purposes.</li>
            <li><strong className="text-white">Usage Data:</strong> We collect data regarding your interaction with the App, such as: features used; time spent in the app; kitchen assistant usage (for Pro users); error logs; analytics.</li>
            <li><strong className="text-white">Push Notification Tokens:</strong> We store push notification tokens to send you notifications about meal plan status (e.g., when a plan is ready or if generation failed).</li>
          </ul>

          <h3 className="mt-6 text-lg font-medium text-white">C. Camera and Image Data (Pantry Scanning – Pro Feature)</h3>
          <p className="mt-2 leading-relaxed">
            We take your privacy seriously regarding photos.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Temporary Processing Only:</strong> When you use the &quot;Pantry Extraction&quot; feature to scan ingredients via your camera or photo library, the image is uploaded securely to our server (Supabase Storage) solely for the purpose of processing.</li>
            <li><strong className="text-white">Immediate Deletion:</strong> Once our AI system (OpenAI Vision API) extracts the text (ingredient names) from your image, the image file is permanently deleted from our servers. Images are deleted immediately after processing is complete (typically within seconds).</li>
            <li><strong className="text-white">No Retention or Training:</strong> We do not retain, archive, or use your photos to train our models. Images are processed and deleted in a single workflow.</li>
            <li><strong className="text-white">Data Extracted:</strong> Only the text list of ingredients identified in the photo is saved to your account as pantry items.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p className="mt-2 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Generate Meal Plans:</strong> Your dietary restrictions, allergies, pantry items, family size, budget, and meal preferences are sent to our AI provider (OpenAI) to generate personalized recipes and meal plans.</li>
            <li><strong className="text-white">Extract Ingredients from Images:</strong> When you use the pantry scanning feature, we send your image to OpenAI Vision API to extract ingredient names. The image is then immediately deleted.</li>
            <li><strong className="text-white">Manage Subscriptions:</strong> We use RevenueCat to validate and manage your &quot;Pro&quot; subscription status and purchase history.</li>
            <li><strong className="text-white">Process Payments:</strong> We use Google Play Services (on Android) and Apple App Store (on iOS) to process in-app subscription payments.</li>
            <li><strong className="text-white">Improve the App:</strong> We use usage data to understand how users interact with the app and to identify bugs and areas for improvement.</li>
            <li><strong className="text-white">Communication:</strong> To send you push notifications regarding your meal plan status (e.g., when a plan is ready or if generation failed).</li>
            <li><strong className="text-white">Prevent Abuse:</strong> We maintain a record of deleted account emails for 7 days after account deletion to prevent abuse through account deletion and recreation.</li>
          </ul>
          <h3 className="mt-6 text-lg font-medium text-white">Legal Basis for Processing (GDPR)</h3>
          <p className="mt-2 leading-relaxed">
            If you are located in the European Economic Area (EEA), we process your personal information based on the following legal grounds:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Contract Performance (Article 6(1)(b) GDPR):</strong> To provide the meal planning services you request when you create an account and use the App.</li>
            <li><strong className="text-white">Legitimate Interest (Article 6(1)(f) GDPR):</strong> To improve our app, prevent fraud, ensure security, and prevent abuse of our free tier.</li>
            <li><strong className="text-white">Consent (Article 6(1)(a) GDPR):</strong> For optional features like push notifications and camera access for pantry scanning.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Sharing of Information</h2>
          <p className="mt-2 leading-relaxed">
            We do not sell your personal information. We do not and will not sell personal information to third parties.
          </p>
          <p className="mt-2 leading-relaxed">
            We share information only with the following third-party service providers necessary to operate the App:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Supabase:</strong> Used for secure database hosting, authentication, and temporary file storage. Supabase stores your account information, profile data, pantry items, meal plans, and other app data. Supabase is located in the United States.</li>
            <li><strong className="text-white">OpenAI:</strong> We send text prompts (including your dietary preferences, pantry list, family size, budget, and meal preferences) and temporary image data to OpenAI to generate meal plans and extract ingredients. OpenAI does not use data submitted via our API to train their models by default. OpenAI is located in the United States.</li>
            <li><strong className="text-white">RevenueCat:</strong> Used to process and manage in-app subscriptions and purchase history. RevenueCat receives your subscription status and purchase information. RevenueCat is located in the United States.</li>
            <li><strong className="text-white">Google Play Services:</strong> Used for processing payments on Android devices. Google receives payment information necessary to process your subscription.</li>
            <li><strong className="text-white">Apple:</strong> Used for processing payments on iOS devices. Apple receives payment information necessary to process your subscription.</li>
            <li><strong className="text-white">Aptabase:</strong> Used for tracking user interactions with the app to understand user behaviour.</li>
            <li><strong className="text-white">Sentry:</strong> Used for debugging and analyzing errors occurred in the app.</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. International Data Transfers (GDPR)</h2>
          <p className="mt-2 leading-relaxed">
            Your personal information may be transferred to and processed in countries outside the European Economic Area (EEA), including the United States, where our service providers (Supabase, OpenAI, RevenueCat) are located.
          </p>
          <p className="mt-2 leading-relaxed">
            We ensure appropriate safeguards are in place for such transfers:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Standard Contractual Clauses:</strong> We use contracts with our service providers that include standard data protection clauses approved by the European Commission.</li>
            <li><strong className="text-white">Adequacy Decisions:</strong> Some transfers are to countries with adequacy decisions by the European Commission.</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            By using Menu Miser, you consent to the transfer of your information to these countries.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
          <p className="mt-2 leading-relaxed">
            We implement appropriate technical and organizational measures to protect the security of your personal information:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Encryption:</strong> Data is encrypted in transit (HTTPS) and at rest in our database.</li>
            <li><strong className="text-white">Row Level Security (RLS):</strong> Our database uses Row Level Security policies to ensure that you can only access and modify your own data.</li>
            <li><strong className="text-white">Secure Authentication:</strong> User authentication is handled securely through Supabase Auth, which uses industry-standard security practices.</li>
            <li><strong className="text-white">Access Controls:</strong> Access to user data is restricted to authorized personnel and service providers who need it to operate the App.</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Data Retention</h2>
          <p className="mt-2 leading-relaxed">
            We retain your personal information only for as long as necessary to provide our services:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Account Data:</strong> Retained while your account is active. When you delete your account, account data is deleted immediately, except as noted below.</li>
            <li><strong className="text-white">Profile Data:</strong> Retained while your account is active. Deleted when you delete your account.</li>
            <li><strong className="text-white">Pantry Data:</strong> Retained while your account is active. Deleted when you delete your account.</li>
            <li><strong className="text-white">Meal Plans:</strong> Retained while your account is active. Deleted when you delete your account.</li>
            <li><strong className="text-white">Image Data:</strong> Deleted immediately after processing (typically within seconds of ingredient extraction). Images are not retained.</li>
            <li><strong className="text-white">Usage Data:</strong> Retained for up to 12 months for app improvement purposes, then anonymized or deleted.</li>
            <li><strong className="text-white">Deleted Account Emails:</strong> Retained for 7 days after account deletion for abuse prevention (to prevent users from immediately recreating accounts to reset free generation limits), then permanently deleted.</li>
            <li><strong className="text-white">Push Notification Tokens:</strong> Retained while your account is active. Deleted when you delete your account.</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            You can request deletion of your data at any time by deleting your account in the App settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
          <h3 className="mt-4 text-lg font-medium text-white">GDPR Rights (European Users)</h3>
          <p className="mt-2 leading-relaxed">
            If you are located in the European Economic Area (EEA), you have the following rights:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Right to Access:</strong> You can request a copy of all personal information we hold about you.</li>
            <li><strong className="text-white">Right to Rectification:</strong> You can request correction of inaccurate or incomplete information. You can update most information directly in the App settings.</li>
            <li><strong className="text-white">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can request deletion of your personal information. You can delete your account directly within the App settings, which will delete all associated data except your email address (which is retained for 7 days for abuse prevention, as described in Section 6).</li>
            <li><strong className="text-white">Right to Data Portability:</strong> You can request your data in a structured, machine-readable format (e.g., JSON).</li>
            <li><strong className="text-white">Right to Object:</strong> You can object to processing of your personal information for legitimate interests (e.g., app improvement analytics).</li>
            <li><strong className="text-white">Right to Restrict Processing:</strong> You can request that we limit how we use your personal information.</li>
            <li><strong className="text-white">Right to Withdraw Consent:</strong> If processing is based on consent (e.g., push notifications), you can withdraw it at any time through your device settings or by contacting us.</li>
          </ul>
          <h3 className="mt-6 text-lg font-medium text-white">CCPA Rights (California Users)</h3>
          <p className="mt-2 leading-relaxed">
            If you are a California resident, you have the following rights:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li><strong className="text-white">Right to Know:</strong> You can request information about what personal information we collect, use, disclose, and sell. We do not sell your personal information.</li>
            <li><strong className="text-white">Right to Delete:</strong> You can request deletion of your personal information. You can delete your account directly within the App settings, which will delete all associated data except your email address (which is retained for 7 days for abuse prevention, as described in Section 6).</li>
            <li><strong className="text-white">Right to Opt-Out of Sale/Sharing:</strong> We do not sell your personal information. If we did, you would have the right to opt-out.</li>
            <li><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
          <h3 className="mt-6 text-lg font-medium text-white">How to Exercise Your Rights</h3>
          <p className="mt-2 leading-relaxed">
            To exercise any of these rights, please contact us at:{" "}
            <a href="mailto:info@jimmystudio.dev" className="text-[var(--orange)] underline hover:no-underline">info@jimmystudio.dev</a>
          </p>
          <p className="mt-2 leading-relaxed">
            We will respond to your request within 30 days (or as required by applicable law). We may need to verify your identity before processing your request.
          </p>
          <p className="mt-2 leading-relaxed">
            You can also exercise some rights directly: <strong className="text-white">Update Information:</strong> Most profile information can be updated in the App settings. <strong className="text-white">Delete Account:</strong> You can delete your account directly in the App settings (Settings → Delete Account).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Children&apos;s Privacy</h2>
          <p className="mt-2 leading-relaxed">
            Menu Miser is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at{" "}
            <a href="mailto:info@jimmystudio.dev" className="text-[var(--orange)] underline hover:no-underline">info@jimmystudio.dev</a>, and we will delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Do Not Track Signals</h2>
          <p className="mt-2 leading-relaxed">
            California law requires us to inform you about how we respond to &quot;Do Not Track&quot; (DNT) signals. We do not currently respond to DNT signals sent by web browsers or other mechanisms because there is no industry standard for how to respond to such signals.
          </p>
          <p className="mt-2 leading-relaxed">
            We do not track your online activities across third-party websites or services. The information we collect is limited to what you provide directly or what is necessary for Menu Miser to function.
          </p>
          <p className="mt-2 leading-relaxed">
            Third parties that provide services to Menu Miser (Supabase, OpenAI, RevenueCat, Google Play Services, Apple App Store) may collect information necessary for their services, but they do not track your activities across different websites or services beyond what is required for Menu Miser to operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">10. Changes to This Privacy Policy</h2>
          <p className="mt-2 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed">
            <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
            <li>Posting a notice in the app for significant changes</li>
          </ul>
          <p className="mt-2 leading-relaxed">
            <strong className="text-white">Annual Review:</strong> We review and update this policy at least annually to ensure compliance with applicable privacy laws, including CCPA requirements.
          </p>
          <p className="mt-2 leading-relaxed">
            Your continued use of the App after changes become effective constitutes acceptance of the updated policy. If you do not agree to the changes, you should stop using the App and delete your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">11. Contact Us</h2>
          <p className="mt-2 leading-relaxed">
            If you have any questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how we handle your personal information, please contact us at:
          </p>
          <p className="mt-2">
            <a href="mailto:info@jimmystudio.dev" className="text-[var(--orange)] underline hover:no-underline">info@jimmystudio.dev</a>
          </p>
          <p className="mt-2 leading-relaxed">
            We will respond to your inquiry as soon as possible.
          </p>
        </section>
      </div>
    </div>
  );
}
