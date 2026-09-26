// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production defaults. A test deployment (e.g. GitHub Pages project site) overrides these
// with SITE_URL=https://<user>.github.io and BASE_PATH=/<repo>.
const site = process.env.SITE_URL || 'https://avaniecocare.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  markdown: { syntaxHighlight: false },
  // Keep every asset as a file so the CSP needs no data: fonts.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  security: {
    // Emitted as a <meta> Content-Security-Policy with hashes for every script and
    // style Astro generates. GitHub Pages cannot send custom headers.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com https://formsubmit.co",
        "form-action 'self' https://api.web3forms.com https://formsubmit.co",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
