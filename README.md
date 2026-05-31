# metaBrain Site

Static marketing website for [metaBrain](https://github.com/OpenCow42/metaBrain),
an open-source local document memory for AI tools, coding agents, and humans.

## Preview

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 5173
```

Then visit `http://127.0.0.1:5173`.

## Files

- `index.html` - page content and semantic structure
- `styles.css` - responsive visual design
- `script.js` - install command tabs and copy buttons
- `assets/metabrain-hero.jpg` - optimized generated hero image
- `assets/metabrain-hero.png` - original generated hero image
- `assets/social-card.jpg` - 1200x630 social preview image
- `assets/favicon.svg` - local favicon
- `robots.txt` - crawler allow-list

## SEO Deployment Checklist

Before publishing, choose the canonical production URL and update:

- Add `<link rel="canonical" href="https://.../">` to `index.html`
- Add `<meta property="og:url" content="https://.../">` to `index.html`
- Use absolute HTTPS URLs for `og:image` and `twitter:image`
- Add `sitemap.xml` with the canonical absolute URL
- Add `Sitemap: https://.../sitemap.xml` to `robots.txt`

## Source Notes

Copy and install commands are based on the `metaBrain` repository README and
daemon autostart documentation as checked locally on 2026-05-31.
