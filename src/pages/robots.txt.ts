import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Production allows crawling; any other host (e.g. a GitHub Pages test deploy) is blocked.
export const GET: APIRoute = () => {
  const production = new URL(site.url).hostname === 'avaniecocare.com';
  const body = production
    ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
