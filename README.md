# Menu Miser Website

Marketing website for the Menu Miser app. Built with Next.js and Tailwind CSS.

## Pages

- **Home** – Hero, features, and app download (Android + iOS coming soon)
- **About** – Mission and what we offer
- **FAQs** – Frequently asked questions (`/faq-s`)
- **Contact** – How to reach support
- **Privacy Policy** – Privacy policy
- **Terms** – Terms of service

## App store links

Update the download links in `src/components/AppDownloadButtons.tsx`:

- `ANDROID_LINK` – Your Google Play Store URL
- iOS – Currently shows "Coming soon"; replace with App Store link when available

## AASA (Apple App Site Association)

The site serves an AASA file at `/.well-known/apple-app-site-association` for **Universal Links** and **web credentials** (e.g. Sign in with Apple). After deploy, it will be at `https://menumiser.co/.well-known/apple-app-site-association`.

**Before it works with your iOS app:**

1. **Replace `TEAM_ID`** in `public/.well-known/apple-app-site-association` with your Apple Team ID (10 characters, from [developer.apple.com](https://developer.apple.com) → Membership).
2. **Bundle ID** is set to `com.singhts.menumiserapp` (from your Play Store link). If your iOS app uses a different bundle ID, change it in the AASA file.
3. **In Xcode:** Add the **Associated Domains** capability with:
   - `applinks:menumiser.co` (and `applinks:www.menumiser.co` if you use www)
   - `webcredentials:menumiser.co` (if you use web credentials)
4. Redeploy so the updated AASA is live. Apple caches the file; allow a few hours for propagation.

**Validate:** [Apple’s AASA validator](https://search.developer.apple.com/appsearch-validation-tool/) or open `https://menumiser.co/.well-known/apple-app-site-association` in a browser after deploy.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy & migrate from Wix

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step instructions to deploy (Vercel, Netlify, or Cloudflare Pages) and switch your domain from Wix to the new site.
