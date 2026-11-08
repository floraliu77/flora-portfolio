# Flora Liu — Portfolio

Static Astro site. Design comes from the "Flora Portfolio Homepage" canvas; copy is migrated from florajingliu.com (Wix).

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where things live

| What | Where |
|---|---|
| Case studies | `src/content/work/*.md` (front matter = title, metrics, overview; body = story). `draft: true` hides one. `order` sets home-page order. |
| Case study images | `public/work/<slug>/…`, then swap each `<div class="ph">IMAGE · name.png</div>` for `<img src="/work/<slug>/name.png" alt="…">` |
| Illustration page | images in `public/illustration/`, listed in `src/data/illustrations.ts` |
| About photo | `public/about/flora.jpg` |
| Resume | `public/Flora-Liu-Resume.pdf` |
| Email, LinkedIn, nav | `src/data/site.ts` |
| Hero illustration layers | `public/art/` |

Old Wix URLs redirect to the new ones (`vercel.json`).

## Deploy (GitHub → Vercel)

1. Create an empty GitHub repo (e.g. `flora-portfolio`), then from this folder:
   `git add -A && git commit -m "Initial site" && git remote add origin <repo-url> && git push -u origin main`
2. vercel.com → Add New → Project → import the repo. Vercel detects Astro; keep the defaults. Every push to `main` deploys.

## Domain (Namecheap → Vercel)

1. Vercel → Project → Settings → Domains: add `florajingliu.com` and `www.florajingliu.com` (set `www` as primary, apex redirects to it).
2. Namecheap → Domain List → Manage → Advanced DNS. Remove the Wix records (the A records and the `www` CNAME pointing at Wix), then add:
   - `A` · Host `@` · Value `76.76.21.21`
   - `CNAME` · Host `www` · Value `cname.vercel-dns.com`
   (Use whatever values Vercel's Domains page shows if they differ.)
3. If the domain was bought through Wix rather than Namecheap, or Namecheap's nameservers point at Wix, set Nameservers back to "Namecheap BasicDNS" first.
4. Wait for Vercel to show "Valid Configuration" (minutes to a few hours). HTTPS is automatic.
5. Only cancel the Wix plan after the new site is live on the domain.
