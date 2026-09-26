# Avani Ecocare Labs — website

Static website for Avani Ecocare Labs Pvt. Ltd. (https://avaniecocare.com), built with
[Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

Requires Node 22+.

## Where things live

| Path | Contents |
| --- | --- |
| `src/data/site.ts` | Company details: name, email, phone, address, hours, navigation, process, “why choose us” |
| `src/data/services.ts` | Services — each entry generates `/services/<slug>/` |
| `src/data/certifications.ts` | ISO certificate details and images |
| `src/data/industries.ts` | Industries, customer types and applications |
| `src/data/faqs.ts` | Home-page FAQ (also emitted as FAQPage structured data) |
| `src/data/credits.ts` | Attribution for Creative Commons photos (shown on `/image-credits/`) |
| `src/assets/` | Logo, photos and certificate scans (optimised to WebP at build time) |
| `src/components/` | Reusable sections (Header, Hero, ServiceCard, CertificationGallery, ContactForm, …) |
| `src/pages/` | Routes |

To add a certificate: put the scan in `src/assets/certificates/` and add an entry to
`src/data/certifications.ts`.

## Contact form

The enquiry form needs no backend or secret. It uses one of two providers, chosen at build time:

| Variable | Provider | Notes |
| --- | --- | --- |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) | Used when set. Recommended for production: create a key for info@avaniecocare.com. The key is public by design and can only deliver to its registered inbox. |
| `PUBLIC_FORMSUBMIT_TARGET` | [FormSubmit](https://formsubmit.co) | Fallback. An email address, or the random alias FormSubmit issues after activation (hides the address). The first submission sends an “Activate Form” email to that address. |

With neither variable set, the form sends to info@avaniecocare.com via FormSubmit (the first submission triggers an “Activate Form” email to that inbox).

For the live site, add the variable under **Settings → Secrets and variables → Actions → Variables**
in the GitHub repository. When moving to production, switch to info@avaniecocare.com.

Protection built into the form: honeypot fields, a minimum fill time, client-side validation,
input sanitising (control characters and angle brackets stripped; CR/LF removed from
single-line fields), a per-browser cooldown and hourly cap, request timeout, and generic
user-facing error messages. Both providers apply their own server-side spam filtering.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to the `gh-pages` branch. GitHub Pages serves that branch
(**Settings → Pages → Build and deployment → Deploy from a branch → `gh-pages` / root**).

| Repository variable | Effect |
| --- | --- |
| *(none)* | Test deploy at `https://<owner>.github.io/<repo>/`, marked `noindex` |
| `SITE_URL` | Origin for canonical/OG URLs on a test deploy (e.g. `https://www.rgrishabh.in`) |
| `CUSTOM_DOMAIN=avaniecocare.com` | Production: builds for the domain root and writes the `CNAME` file |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` or `PUBLIC_FORMSUBMIT_TARGET` | Contact form delivery (variable or secret) |

Local builds default to production (`https://avaniecocare.com`). To reproduce a test build:
`SITE_URL=https://<owner>.github.io BASE_PATH=/<repo> npm run build`.
