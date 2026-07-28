# Headless WordPress Setup

This site uses WordPress as a headless CMS: WordPress owns the content (posts
and projects), Next.js owns the frontend. They talk over the built-in
WordPress REST API — no plugins required.

```
┌────────────────────┐   REST API (_embed)   ┌─────────────────────┐
│  WordPress (CMS)   │ ────────────────────▶ │  Next.js 16 (this)  │
│  localhost:8080    │   /wp-json/wp/v2/...  │  localhost:3000     │
└────────────────────┘                       └─────────────────────┘
```

## 1. Start the WordPress backend

Requires Docker Desktop (installed).

```bash
docker compose up -d
```

First start downloads the WordPress + MySQL images (~1 min).

## 2. Install WordPress (first run only)

1. Open http://localhost:8080 — the installer appears.
2. Pick a language, then set:
   - **Site Title:** CV Mechatronics CMS
   - **Username / password:** your admin login (dev only)
3. Log in at http://localhost:8080/wp-admin.

## 3. Enable pretty permalinks (required once)

Go to **Settings → Permalinks**, select **Post name**, then **Save Changes**.
(The default "Plain" structure leaves `/wp-json/...` URLs unrouted — the
pretty structure is what makes Apache write the rewrite rules the REST API
needs.)

## 4. Verify the API

Both should return JSON:

- http://localhost:8080/wp-json/wp/v2/posts
- http://localhost:8080/wp-json/wp/v2/projects

## 5. Create content

Ready-to-paste starter content (7 posts + 3 projects + image prompts) is in
[`wordpress/sample-content.md`](./wordpress/sample-content.md).

**Day-to-day flow for marketing (no HTML, no editor skills needed):**

1. **Posts → Add New** (or **Projects → Add New**)
2. The **Content** box offers two modes — **Manual** (default: write freely in
   the visual editor) and **Form** (auto layout: pick a template, fill in
   plain fields, and the article HTML is generated on save).
3. The **Writing checklist** box in the right sidebar is the on-screen legend:
   pre-publish checklist, what each editor button becomes on the site, and
   structure recipes (article / announcement for posts, case study / showcase
   for projects). It is always visible while writing — follow it and the
   article renders correctly.
4. Side panels: **Excerpt**, **Categories** (posts) / **Tags** (projects),
   **Featured image**
5. **Gallery (1–5 images)** box — same media picker; any size or orientation
   works, the site crops them into a uniform mosaic
6. **Publish** — the site picks up changes within ~60s (ISR). In Manual mode
   WordPress never touches the content; in Form mode the HTML is assembled
   from the fields on save.

Reference details:

**Blog posts** — **Posts → Add New**:
- Title, body, excerpt, featured image.
- Category must be one of `News`, `Guides`, `Product Spotlight` (create them
  under Posts → Categories). Unknown categories fall back to `News`.
- Tags appear on the article page.

**Projects** — **Projects → Add New** (post type is pre-registered by
`wordpress/mu-plugins/register-projects.php`):
- Title, body, excerpt, featured image.
- Use **tags** for the systems involved (e.g. `Gate Automation`,
  `Smart Glass`) — they show as badges on the site.
- Publish date controls ordering (newest first).

## 6. Run the frontend

`.env.local` already points at the local backend:

```
WORDPRESS_API_URL=http://localhost:8080
```

```bash
bun run dev   # or npm run dev
```

- `/blog` switches from sample data to WordPress automatically.
- `/projects` fills in as soon as projects are published.
- Pages revalidate every 60s (ISR), so edits appear within a minute.

## 7. Going to production

1. Host WordPress anywhere with HTTPS (any managed WP host works).
2. Set `WORDPRESS_API_URL=https://your-cms-domain.com` in your hosting
   provider's env vars (e.g. Vercel → Project → Settings → Environment
   Variables).
3. Add the CMS host to `images.remotePatterns` in `next.config.ts` so
   featured images load.

No code changes needed — the adapters only read `WORDPRESS_API_URL`.

## File map

| Path | Purpose |
| --- | --- |
| `docker-compose.yml` | Local WordPress + MySQL on port 8080 |
| `wordpress/mu-plugins/register-projects.php` | Registers the `project` post type with REST support |
| `wordpress/mu-plugins/content-form.php` | Content mode toggle — Manual (default) or Form (templates → generated article HTML) |
| `wordpress/mu-plugins/writing-guide.php` | "Writing checklist" sidebar box — the in-editor legend for Manual mode |
| `wordpress/mu-plugins/gallery-field.php` | "Gallery (1–5 images)" field on posts/projects + REST output |
| `.env.local` / `.env.example` | `WORDPRESS_API_URL` |
| `src/app/shared/lib/blog/wordpress.ts` | Blog adapter (pre-existing) |
| `src/app/shared/lib/projects/` | Projects adapter + accessors |
| `src/app/(modules)/projects/` | `/projects` pages |

## Useful commands

```bash
docker compose up -d      # start backend
docker compose down       # stop (content kept in volumes)
docker compose down -v    # stop and WIPE all content
docker compose logs -f wordpress
```
