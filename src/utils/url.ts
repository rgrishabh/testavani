// Base-path aware links, so the site works at a domain root (avaniecocare.com)
// or under a sub-path (e.g. username.github.io/repo/ for testing).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path ("/about/") with the configured base path. */
export const url = (path = '/') => (path.startsWith('/') ? `${base}${path}` : path);
