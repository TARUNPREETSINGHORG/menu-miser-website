# Deploy & migrate from Wix

This guide covers deploying the Next.js site and switching your domain from Wix to the new host.

---

## 1. Deploy the site

### Option A: Vercel (recommended for Next.js)

1. **Push your code to GitHub**
   - Create a repo at [github.com/new](https://github.com/new) (e.g. `menu-miser-website`).
   - From your project folder:
     ```bash
     cd /Users/jimmy/Documents/projects/menu-miser-website
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR_USERNAME/menu-miser-website.git
     git push -u origin main
     ```

2. **Connect and deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
   - Click **Add New… → Project**, import your `menu-miser-website` repo.
   - Leave **Framework Preset** as Next.js and **Root Directory** as `.` → **Deploy**.
   - After the build, you get a URL like `menu-miser-website.vercel.app`. Test it.

3. **Add your custom domain (menumiser.co)**
   - In the Vercel project: **Settings → Domains**.
   - Add `menumiser.co` and `www.menumiser.co`.
   - Vercel will show the DNS records you need (see step 2 below).

### Option B: Netlify

- Connect the same GitHub repo at [netlify.com](https://netlify.com).
- Build command: `npm run build`
- Publish directory: `.next` — but for Next.js you should use **Netlify’s Next.js runtime** (auto-detected when you connect a Next.js app). If prompted, use the default Next.js settings.
- Add your domain under **Domain settings**.

### Option C: Cloudflare Pages

- Connect the repo at [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**.
- Build command: `npm run build`
- Build output directory: `.next`
- For full Next.js support (SSR, etc.) use **@cloudflare/next-on-pages** or their Next.js guide; for a mostly static site the default may be enough for your pages.

---

## 2. Migrate the domain from Wix

You need to point **menumiser.co** (and **www.menumiser.co**) to the new host instead of Wix.

### Where is your domain registered?

- **At Wix:** Domain is managed in Wix (e.g. “My Domains” or “Domains” in the Wix dashboard).
- **Elsewhere:** Domain is at a registrar (GoDaddy, Namecheap, Google Domains, Cloudflare Registrar, etc.).

### If the domain is at Wix

1. In **Wix**: Domains → your domain → **Manage DNS** (or **Advanced DNS**).
2. Remove or note any Wix-specific A/CNAME records you no longer need.
3. Add the records your host asks for. For **Vercel** typically:
   - **A** record: `76.76.21.21` (or the IP Vercel shows for your project).
   - **CNAME** for `www`: `cname.vercel-dns.com` (or the CNAME target Vercel shows).
   
   Vercel’s **Settings → Domains** shows the exact records and values for your project.

4. Save DNS. Propagation can take from a few minutes up to 48 hours (often 15–30 minutes).
5. In Vercel (or your host), ensure the domain is **Verified** and SSL is active.

#### Wix not accepting Vercel’s Name/Value?

Wix’s DNS UI can be strict. Try this:

- **Root domain (menumiser.co) – A record**
  - **Name/Host:** If Wix rejects `@`, try leaving the host field **blank** or use **apex** (Wix sometimes uses “Host” and expects blank for root).
  - **Value:** Use Vercel’s IP. If the new one is rejected, use the **older** value Vercel still supports: **`76.76.21.21`** (Vercel says this continues to work).

- **www – CNAME record**
  - **Name/Host:** `www` (no dot, no domain).
  - **Value:** Try **without** the trailing dot. For example use `46f15e8a070eb448.vercel-dns-017.com` instead of `46f15e8a070eb448.vercel-dns-017.com.`  
  - If that still fails, use the **older** CNAME target: **`cname.vercel-dns.com`** (no trailing dot). Vercel still accepts this.

- **Alternative: use Vercel nameservers**
  - In Vercel: **Settings → Domains** → your domain → **Vercel DNS** (or “Use Vercel nameservers”). Vercel will show two nameservers (e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
  - In **Wix**: Domains → your domain → **Manage** or **Advanced** → **Change nameservers** (or “Point to external DNS”). Replace Wix’s nameservers with Vercel’s two nameservers and save.
  - After that, DNS is managed in Vercel only; you don’t add A/CNAME records in Wix. Verification and SSL in Vercel usually complete within a few minutes to an hour.

### If the domain is at another registrar (not Wix)

1. Log in at the registrar where **menumiser.co** is registered.
2. Open **DNS** / **DNS Management** for that domain.
3. Point the domain to your new host:
   - **Vercel:** Add the A and CNAME records Vercel shows under **Settings → Domains** (same as above).
   - **Netlify / Cloudflare:** Use the A/CNAME targets they provide in their domain/DNS instructions.
4. Remove or update any old Wix A/CNAME records so they no longer point to Wix.

### Optional: use Vercel nameservers

If you add the domain on Vercel, you can instead **change nameservers** at your registrar to the ones Vercel gives you. Then you manage all DNS for that domain in Vercel. This is optional; A/CNAME is enough to get the site live.

---

## 3. Wix cleanup (after the new site is live)

1. **Confirm the new site**  
   Visit `https://menumiser.co` and `https://www.menumiser.co` and click through main pages (Home, About, FAQs, Contact, Privacy, Terms).

2. **Cancel Wix billing (if you no longer need Wix)**  
   - In Wix: **Settings → Billing & Payments** (or similar).  
   - Cancel the plan / subscription when you’re ready.  
   - If you only had a free site, you can leave it or delete the Wix site; the domain will already be pointing to the new host once DNS is updated.

3. **Keep the domain**  
   - If the domain is **registered with Wix**, you can either keep it there and only changed DNS (step 2), or **transfer** the domain to another registrar later if you prefer.  
   - If the domain is at another registrar, no change is needed there except the DNS you already updated.

---

## 4. Optional: redirect old Wix URLs

If Wix had different paths (e.g. `/privacy` instead of `/privacy-policy`), you can add redirects so old links still work.

**Vercel:** In the project, add a `vercel.json` in the repo root:

```json
{
  "redirects": [
    { "source": "/privacy", "destination": "/privacy-policy", "permanent": true },
    { "source": "/terms-of-service", "destination": "/terms", "permanent": true }
  ]
}
```

Adjust `source` and `destination` to match your old Wix URLs. Then commit and push; the next deploy will apply them.

---

## 5. Checklist

- [ ] Code pushed to GitHub (or your Git provider).
- [ ] Project deployed on Vercel (or Netlify/Cloudflare) and default URL works.
- [ ] Custom domain added in the host’s dashboard (menumiser.co + www).
- [ ] DNS at Wix or your registrar updated with the host’s A/CNAME (or nameservers).
- [ ] Domain verified and HTTPS working on menumiser.co and www.
- [ ] Main pages tested (Home, About, FAQs, Contact, Privacy, Terms).
- [ ] Wix plan cancelled when you’re ready.
- [ ] Optional: `vercel.json` redirects for old Wix URLs.

Once DNS points to the new host and SSL is on, you’re fully migrated from Wix to this site.
