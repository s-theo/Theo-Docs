# AGENTS.md - Theo Docs

Scope: this file applies to the entire repository. There are no nested `AGENTS.md` files.

## Project

Theo Docs (`s-theo/Theo-Docs`) is a Chinese VitePress documentation site published at
`https://doc.theojs.cn`. Routes come from `content/`; the site uses clean URLs.

| Item | Current source of truth |
| --- | --- |
| Runtime | Node.js; read the pinned release from `.nvmrc` and verify the active Cloudflare Pages runtime |
| Package manager | `pnpm`; read the pinned release from `package.json#packageManager` |
| Framework | VitePress, Vite, and Vue; read requested and resolved releases from `package.json` and `pnpm-lock.yaml` |
| Theme | Default VitePress theme extended with `@theojs/lumen` |
| Formatting | Biome; read formatter rules and schema metadata from `biome.json` |
| Build output | `.vitepress/dist` |

Read exact package-manager, dependency, and tool releases from `package.json#packageManager`, `package.json`, and
`pnpm-lock.yaml`; read workspace policy and tool behavior from `pnpm-workspace.yaml` and the relevant
configuration or schema metadata. Do not copy current release values into this file.

Site tooling also includes figure, footnote, task-list, image-size, group-icon, image-viewer, custom
transposed-table, and `vitepress-plugin-llms` integrations.

## Repository map

| Path | Responsibility |
| --- | --- |
| `content/` | Markdown route source; sections include `notes`, `fe`, `esxi`, `vps`, `asus`, `streaming`, `ai`, and `serve` |
| `content/index.md` | Lumen-powered home page frontmatter and feature content |
| `content/head.md`, `content/bottom.md` | Shared Markdown snippets included by many pages |
| `content/public/` | Static files copied to the site root |
| `.vitepress/config.mts` | Site entry: source directory, clean URLs, sitemap, plugins, and theme configuration |
| `.vitepress/configs/` | Navigation, sidebar, Markdown, search, head metadata, social links, and page-data transforms |
| `.vitepress/theme/index.ts` | Lumen slots/components, Umami, group icons, and image viewer registration |
| `.vitepress/data/` | Lumen aside promotions and footer links |
| `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` | Scripts, dependency graph, peer/build-script policy |
| `biome.json` | Formatter and import-organization rules |
| `renovate.json` | Central Renovate preset reference |

Do not edit installed or generated paths: `node_modules/`, `.vitepress/cache/`, `.vitepress/dist/`, `dist/`,
`.cache/`, or `.vite/`.

## Commands

```bash
pnpm install --frozen-lockfile  # initial setup and dependency verification
pnpm run dev                    # local VitePress server
pnpm run build                  # production build and LLM bundle generation
pnpm run preview                # serve the production output
pnpm run format:check           # check Biome formatting/import organization
pnpm run format                 # write Biome fixes; use only when edits are intended
```

`pnpm run upall` upgrades dependencies and is not a validation command; use it only when explicitly requested.
There is no repository `test`, standalone `lint`, or type-check script. `format:check` runs Biome's formatter,
import organization, and recommended linter on supported code and configuration files; `ignoreUnknown` means
Markdown is not substantively checked.

## Editing rules

- Before editing, read the applicable instructions and inspect the branch, upstream, ahead/behind, worktree,
  index, untracked files, and in-progress Git operations. Preserve user work; never use `stash`, `reset`, or
  `clean` as a shortcut.
- On a clean `main`, synchronize only with `git pull --ff-only`. Stop on divergence or unexpected changes.
- Add, rename, or remove Markdown together with its applicable entries in `.vitepress/configs/sidebar.ts` and
  `.vitepress/configs/nav.ts`, plus affected internal links and includes.
- Give article pages accurate `title` and `description` frontmatter; page metadata is derived from these fields,
  while the home page uses `hero.name` and `hero.tagline`.
- Keep each top-level sidebar wrapper at `base: '/'` and every active sidebar `link` as its absolute content
  route. Change this shape only after a real build proves that generated `llms.txt` and `llms-full.txt` still
  match content routes without duplicated inherited section bases.
- Treat `content/head.md` and `content/bottom.md` as shared partials. Before changing them, inspect all
  `<!--@include: ...-->` consumers.
- `content/serve/airport/summary.md` assembles provider pages through named `#1`, `#2`, and `#3` regions; preserve
  matching `<!-- #region ... -->` markers when editing those pages. Other pages also use named-region includes.
- Provider names, prices, coupons, URLs, and visibility can be duplicated across content pages,
  `content/index.md`, `.vitepress/data/AsideData.ts`, `.vitepress/data/FooterData.ts`, nav/sidebar data, and shared
  snippets. Search the repository for the provider name and URL before changing them.
- Global metadata and structured data belong in `.vitepress/configs/head.ts` and
  `.vitepress/configs/transformPageData.ts`; search configuration belongs in `.vitepress/configs/search.ts`.
- Theme-global components (`Underline`, `Pill`, `Links`, `Copy`) and Lumen layout slots are registered in
  `.vitepress/theme/index.ts`. Umami reads `VITE_UMAMI_ID` and `VITE_UMAMI_SRC`; never commit secrets or local
  environment files.
- `content/code/giscus.ts` is not imported by the active theme; do not treat it as runtime configuration.
- Keep `pnpm-workspace.yaml` policy intact: peers are not auto-installed, only `simple-git-hooks` may run a
  dependency lifecycle script, and newly released package versions may be installed immediately. Do not bypass
  or broaden the remaining controls merely to make an install pass.
- Do not add TypeScript suppression directives or weaken type checking to bypass diagnostics. Fix the underlying
  types, then verify VitePress configuration changes with TypeScript diagnostics and a real build.
- Follow Biome's configured style: 2 spaces, LF, single quotes in JavaScript/CSS, no semicolons, no trailing
  commas, and 120-column width. Biome is the sole configured formatter; do not add another formatter without an
  explicit request.

## Validation by change type

| Change | Required checks |
| --- | --- |
| `AGENTS.md` only | `git diff --check`; verify every documented command and path against the repository |
| Markdown, includes, or public asset references | `pnpm run build`; `git diff --check` |
| Nav/sidebar, VitePress/theme, TypeScript, or JSON configuration | `pnpm run format:check`; `pnpm run build`; `git diff --check` |
| Dependencies or lockfile | `pnpm install --frozen-lockfile`; `pnpm run format:check`; `pnpm run build`; `git diff --check` |

After navigation or include changes, inspect build output for unresolved links and
`vitepress-plugin-llms` sidebar warnings. The build generates `llms.txt` and `llms-full.txt`; do not hand-edit the
generated output.

## Git, CI, and delivery

- Keep changes scoped. Do not commit, push, create or mutate a PR, merge, deploy, or delete branches without
  explicit authorization.
- The pre-commit hook runs `lint-staged`, which invokes Biome with `--write`; after any authorized commit attempt,
  re-check the staged diff for hook-applied changes.
- No GitHub workflow YAML is tracked in this repository. GitHub currently supplies provider-managed CodeQL and
  dependency-update workflows, while PRs also report an external Cloudflare Pages check. Inspect live PR checks
  instead of assuming these external settings are unchanged.
- Cloudflare Pages is the active delivery path. Its external Git integration builds `main` with `pnpm build` and
  publishes `.vitepress/dist`; no deployment configuration is tracked here. Verify live settings before changing
  delivery assumptions. Any deployment is an external write and requires explicit authorization.
