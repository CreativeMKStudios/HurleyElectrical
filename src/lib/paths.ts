import { site } from '../data/business';

/** Root-relative path, including the GitHub Pages project folder. */
export function path(href = '/') {
  const base = import.meta.env.BASE_URL;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const clean = href.replace(/^\//, '');
  if (!clean) return base || '/';
  if (clean.includes('.')) return `${base}${clean}`;
  return `${base}${clean.replace(/\/$/, '')}/`;
}

/** Absolute URL for canonical tags, schema, and the sitemap. */
export function abs(pagePath: string) {
  const root = `${site.url.replace(/\/$/, '')}/`;
  if (!pagePath || pagePath === '/') return root;
  const clean = pagePath.replace(/^\//, '');
  if (clean.includes('.')) return new URL(clean, root).href;
  return new URL(`${clean.replace(/\/$/, '')}/`, root).href;
}

export function currentPath(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let next = pathname || '/';
  if (base && next.startsWith(base)) next = next.slice(base.length) || '/';
  if (next.length > 1 && next.endsWith('/')) next = next.slice(0, -1);
  return next || '/';
}
