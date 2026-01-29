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
