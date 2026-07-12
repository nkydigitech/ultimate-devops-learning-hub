// Safely join a path onto Astro's configured `base` (from astro.config.mjs).
//
// `import.meta.env.BASE_URL` may or may not carry a trailing slash depending on
// config/version. Naive concatenation like `${BASE_URL}linux/intro` produced
// broken links such as `/ultimate-devops-learning-hublinux/intro` on GitHub Pages.
// `withBase` normalizes both sides so links always resolve correctly.
const BASE = import.meta.env.BASE_URL;

export function withBase(path = "/"): string {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
