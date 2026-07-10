# AGENTS.md - Theo Docs

## Project Overview

Theo Docs is a VitePress documentation site for Theo's technical notes, streaming guides, VPS/server notes, router docs, and AI/tooling references.

- Repository: `s-theo/Theo-Docs`
- Content source: `content/`
- VitePress config: `.vitepress/`
- Package manager: `pnpm@11.10.0`
- Netlify command: `pnpm run build`
- Site source directory: `content`
- Public site: `https://doc.theojs.cn`

## Workspace Layout

```text
content/                 - Markdown source, home page, public assets, and docs sections.
content/public/          - Static assets copied to the site root.
.vitepress/config.mts    - Main VitePress config.
.vitepress/configs/      - Split config modules for head, nav, sidebar, search, markdown, SEO data, and social links.
.vitepress/data/         - Lumen theme data for aside ads and footer links.
.vitepress/theme/        - Theme extension and global component/plugin registration.
biome.json               - Biome formatter/import organizer config.
netlify.toml             - Netlify build settings.
```

The root `package.json` provides the main commands:

```bash
pnpm run build      # vitepress build
pnpm run dev        # vitepress dev
pnpm run preview    # vitepress preview
pnpm run format     # biome check --write .
pnpm run format:check
```

Do not manually edit generated or installed directories such as `node_modules/`, `.vitepress/cache/`, and `.vitepress/dist/`.

## Content Map

VitePress uses `srcDir: 'content'`, so routes are derived from Markdown files under `content/`.

```text
content/index.md          - Home page frontmatter for the Lumen landing layout.
content/head.md           - Extra head-facing content page.
content/bottom.md         - Extra bottom-facing content page.
content/notes/            - Personal docs, tooling notes, VitePress notes, GitHub Actions, Biome, GPG, nvm, etc.
content/fe/               - Frontend and tooling basics: Linux, Docker, Git, Homebrew, pnpm.
content/esxi/             - ESXi install guides and OpenWrt/iStoreOS notes.
content/vps/              - VPS settings, server tools, service setup, Oracle Cloud.
content/asus/             - ASUS/Merlin router flashing and plugin notes.
content/streaming/        - Netflix, Disney+, Spotify, YouTube, Hulu, HBO Max guides.
content/ai/               - AI summary, ChatGPT, Gemini, and mirror-site notes.
content/serve/            - Airport/proxy services, account sharing, routes, antiwall clients, SMS services.
content/public/           - Favicons, manifest, robots.txt, images, and verification files.
```

When adding, renaming, or removing Markdown files, update the matching sidebar section and any top nav entry that should point to the new page.

## VitePress Structure

- `.vitepress/config.mts` wires the full site together: title/description, `srcDir`, clean URLs, sitemap, Lumen theme config, Algolia search, nav/sidebar, markdown plugins, and Vite plugins.
- `.vitepress/configs/nav.ts` controls top navigation. Its paths should point at real Markdown routes under `content/`.
- `.vitepress/configs/sidebar.ts` controls section sidebars. It is the canonical place to keep docs ordering and nested page relationships.
- `.vitepress/configs/markdown.ts` registers markdown-it plugins for figures, footnotes, image sizing, task lists, tables, and group icons.
- `.vitepress/configs/transformPageData.ts` injects canonical URLs, Open Graph/Twitter metadata, and JSON-LD for pages.
- `.vitepress/configs/search.ts` configures Algolia DocSearch and Ask AI copy.
- `.vitepress/configs/head.ts` owns global meta tags, favicons, manifest, and site verification tags.
- `.vitepress/theme/index.ts` extends the default VitePress theme with `@theojs/lumen`, aside ads, footer, Umami, image viewer, and global components such as `Underline`, `Pill`, `Links`, and `Copy`.
- `.vitepress/data/AsideData.ts` and `.vitepress/data/FooterData.ts` contain sponsored/service links displayed by Lumen theme components.

## Navigation And Sidebar Rules

- Keep `nav.ts` and `sidebar.ts` aligned with the `content/` route tree.
- Top-level sidebars generally use VitePress `base` plus relative links, for example `'/notes/': { base: '/notes/', items: Sidebar_notes() }`.
- For nested sidebar sections that have caused `vitepress-plugin-llms` warnings, prefer absolute links such as `/streaming/netflix-guide`.
- The `streaming` sidebar intentionally avoids a section `base` and uses absolute `/streaming/...` links throughout. Do not mix `base: '/streaming/'` with absolute `/streaming/...` links in that section.
- After changing sidebar links, run `pnpm run build` and check that the output does not include `vitepress-plugin-llms` sidebar link warnings.

## Before Editing

1. Run `git pull` in the repository root before making changes.
2. Read this file and inspect the relevant package or content files before editing.
3. Keep changes scoped to the requested docs/config area.
4. Use `pnpm install --frozen-lockfile` after dependency changes.

## Coding Notes

- Use Biome for formatting. Config lives in `biome.json`.
- Style is 2 spaces, single quotes, no semicolons, no trailing commas.
- `pnpm run format` applies Biome safe fixes, formatting, and import organization.
- `pnpm run format:check` verifies formatting/import organization without writing.
- Biome is configured with `files.ignoreUnknown`; unsupported file types are skipped instead of failing the run.
- Keep VitePress sidebar entries in sync when Markdown files under `content/` are renamed.
- For nested VitePress sidebar sections, prefer absolute links such as `/streaming/netflix-guide` so `vitepress-plugin-llms` can match the generated Markdown files without warnings.
- This repository was migrated from Prettier to Biome. Do not reintroduce `.prettierrc`, `.prettierignore`, or Prettier dependencies unless explicitly requested.
- The former `content/notes/prettier.md` page is now `content/notes/biome.md`; keep references and sidebars on `biome`.

## Verification

For dependency or config changes, run:

```bash
pnpm install --frozen-lockfile
pnpm run format:check
pnpm run build
```
