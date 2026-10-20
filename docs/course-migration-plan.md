# Step 1 implementation and migration plan

## Content architecture

- Astro Haze remains the application shell. Its Aurora backdrop, glass tokens and components, responsive layouts, header/footer, theme switch, Blog, Work case studies, Landing page, Pagefind search, SEO and Astro ClientRouter remain in place.
- Five chapter groups and 27 independent lessons use the new courses MDX Content Collection. Each section record stores its chapter/order, title and summary, English title, source page, legacy anchor, code topics, and whether the original section has an interactive demo.
- /course/ is the chapter directory. /course/ch-x-y/ is the shared reader: breadcrumb, 27-section chapter table of contents, previous/next links, native MDX lecture region and original-page iframe.
- /labs/ exposes the preserved 1.1 and 4.5 demonstrations. /work/ continues to use Astro Haze's existing project collection as the works gallery. /resources/ points to bilingual materials and the supplementary collection. /about/ remains the About entry.
- The original 108 files from the pinned repository commit are copied byte-for-byte to public/course-source/. Full paths, Git blob SHAs and original sizes are in docs/course-source-manifest.json; the section-to-source mapping is in docs/course-content-map.md.

## 1.1 and 4.5 examples

- **1.1 数据生成:** the Astro MDX entry contains the original Chinese lecture section, its synthetic-data caveats, three field-mapping/type-conversion code examples, and the original D3 CSV row callback. The standalone original demo is embedded from lesson-01/demo/01-data-loader/index.html; it reads the local original demo/data/newstudent.csv and retains reload, row preview, console and field-map UI.
- **4.5 等值线:** the page anchors lesson-04/index.html#ch-4-5. The source chapter script selects its own demo tab and runs window.DEMOS["d-4-5"]. That original implementation includes the 16-case Marching Squares edge table, an 8×8 scalar field and a threshold slider. It does not load a CSV for this particular demo; the other Chapter 4 demos use the local crime CSV.

## Isolation, routing and interaction

- The old pages run in a same-origin iframe with scripts enabled. Their global CSS and document scripts stay inside that browsing context; Astro Haze styles do not leak into the original lesson, and the old styles do not alter the course shell. The Haze CursorTrail canvas uses pointer-events: none, so links, buttons, inputs, search, the theme toggle and embedded controls receive normal pointer events.
- Original relative HTML/CSS/JS/data paths remain intact. The course wrapper prefixes only its own iframe and navigation URLs with Astro's configured base. Legacy pages keep their original separate bilingual UI; its selection is not synchronized with the outer site's theme or language.
- CursorTrail stays in the existing Astro Haze layout. Its astro:page-load setup and astro:before-swap cleanup use src/lib/lifecycle.ts; the frame loop and listeners are cleaned before ClientRouter swaps. The canvas uses the Haze --color-text token and current data-theme, a capped device-pixel ratio, resize handling, mouse/pen-only activation and reduced-motion handling.

## Static hosting and known constraints

- Astro is configured with output: static; every course section and existing Blog/Work/Landing pages are generated at build time. The source snapshot is ordinary static HTML, CSS, JS, data, images and PDF; no server API or database is needed. Pagefind builds its search index during the static build.
- Original demonstrations import D3 v7 ES modules from jsDelivr. This is compatible with GitHub Pages and other static hosts when visitors have network access, but a blocked CDN or offline classroom will prevent those demos from loading. A later offline deployment can vendor the same D3 version without changing course algorithms.
- The preserved public/course-source tree is excluded from the application ESLint source set. Its original i18n and supplementary utility scripts have pre-existing lint errors/warnings; the snapshot remains unmodified so those issues do not get attributed to the new Astro application.
- Use the original project through HTTP(S), not file://; the demo scripts are ES modules and fetch local data.
- astro.config.mjs keeps the current preview path /astro-haze by default to preserve the existing local URL. Set SITE_BASE_PATH to the published repository path (for example, /assignment4) and SITE_URL to the canonical origin in the GitHub Pages workflow. This checkout has no Git remote, so the eventual repository slug and exact production URL are not yet verifiable.
- The old pages are an adoption bridge. Once course content is migrated natively, each MDX body can replace its iframe section-by-section while this immutable source copy remains available for comparison. The native 1.1 sample shows the path; 4.5 validates that the legacy complex demo does not need a rewrite.
- All 27 sections have original lecture, code and demo tabs in their chapter HTML. The source script selects the demo tab from the section anchor and renders its mount; the per-section blocks JSON does not always contain a demo-tab entry, so the actual chapter HTML and lesson.js are the source of truth.

## Step 2 implementation record

- All 27 Content Collection pages now render exact bilingual lecture and key-code blocks extracted from the corresponding original chapter HTML through `LegacyCourseContent.astro`; the source fragments remain in `src/data/course-source-sections.json` and the original 108-file tree remains byte-identical under `public/course-source/`.
- The course reader reuses Astro Haze layout, glass cards, global navigation/footer, content renderer, Pagefind, previous/next links, chapter directory and source iframe. `LegacyLessonFrame.astro` focuses each frame to the requested anchor and sizes it to the demo panel.
- Original demos remain inside their chapter page, preserving source CSS, D3 drawing, controls, data paths and event handlers. The original standalone 1.1 Data Loader remains an individual iframe demo.
- Browser checks exposed two source/runtime compatibility issues. Lessons 4.3 and 5.4 use minimal derived chapter copies in `public/course-adapters/`; 4.3 maps original curve names to D3 v7 factories, while 5.4 normalizes parsed date keys and removes its floating tooltip on exit. These adapters do not edit `public/course-source/` and retain the source algorithms.
- The 27-row interaction and content record is [`course-acceptance.md`](./course-acceptance.md). It records static displays separately from interactive demos and captures per-section data dependencies and remaining CDN/licensing limitations.
- Pagefind excludes the immutable archive and derived runtime copies at build time; the course reader excludes its repeated chapter TOC from indexing. The archive files are not changed by this search handling.

## Step 3 migration guidance

1. Keep each lesson's source content and chapter mapping traceable through `course-content-map.md` and `course-source-manifest.json`.
2. Keep legacy D3 demos isolated until an Astro equivalent is built and verified against the source algorithm and interactions. Do not replace interactivity with screenshots.
3. If a demo must be adapted, create a small derived runtime copy and document the exact delta; do not patch the immutable `public/course-source/` snapshot.
4. For native demos, scope styles to the component, resolve assets with the base-aware URL helper, and initialize/clean up through Astro ClientRouter lifecycle hooks.
5. Keep the existing GitHub Pages `SITE_BASE_PATH` build check in the verification loop. Original D3 modules depend on jsDelivr, so offline/CDN stability can be improved by vendoring the same D3 version without changing algorithms.

## Step 2 validation record (2026-10-20)

- `npm run check` passed: 63 Astro files, 0 errors, 0 warnings, 0 hints; TypeScript completed with no diagnostics.
- `npm run lint` passed with no warnings after excluding the preserved and derived legacy browser assets from application-source linting.
- Default `npm run build` passed in static mode and generated all 27 lesson routes (49 Astro pages in total); Pagefind produced its static index.
- A second build with `SITE_BASE_PATH=/assignment4` and `SITE_URL=https://cinger007.github.io` passed. The output contains all 27 lesson routes, prefixed links/assets, and prefixed iframe URLs for the 4.3/5.4 runtime adapters. A final default-base build restored the local `dist/` output.
- The local browser returned HTTP 200 for all 27 lesson routes plus home, course directory, labs, Blog, Work and Landing. The course directory exposes 27 lesson links. Previous/next, ClientRouter navigation, browser back/forward, refresh, theme cycling, and Pagefind were checked; searching `Marching Squares` returns four relevant site pages, with no `course-source` archive entries or false matches from repeated chapter TOCs.
- The 27 per-section demo checks are recorded in [`course-acceptance.md`](./course-acceptance.md). In addition to the section-level controls, all ten 4.3 curve buttons render valid paths with no adapter-page console errors. The 5.4 spiral renders 366 temperature-colored segments, changes the date/value mapping when week start changes, and shows/removes the hover tooltip.
- The formal dev server remains on port 4330; the two candidate template servers remain on 4321 and 3001. No port collision occurred. The 108 source files in `public/course-source/` match the manifest byte-for-byte and by Git blob hash.
- Remaining delivery constraints: the original source repository has no declared license, and the D3 v7 module is loaded from jsDelivr, so publication and offline classroom use require those issues to be handled deliberately.

## Step 1 validation record (2026-10-20)

- `npm run check` passed: 62 Astro files, 0 errors, 0 warnings, 0 hints; TypeScript completed with no diagnostics.
- `npm run lint` passed. The immutable legacy snapshot is excluded from the Astro app lint set because its original supplementary scripts contain pre-existing lint findings.
- `npm run build` passed in static mode: 49 routes generated and Pagefind indexed 76 pages. This includes all 27 lesson URLs and the existing Haze Blog, Work, Landing and About pages.
- The dev server on port 4330 remained listening. Direct HTTP checks returned 200 for the home, course directory, lessons 1.1 and 4.5, Labs, Blog, Work, Landing, Resources, About, and the embedded legacy demo/chapter pages.
- In-browser, lesson 1.1 loaded the original CSV as 80 rows, rendered the converted preview and field map, and its reload control reran the data load. Lesson 4.5 rendered the original Marching Squares grid and contour; changing its threshold from 0.50 to 0.80 updated the readout and SVG. The embedded chapter's Chinese/English switch also changed its content.
- The Haze theme control changed to light and its selection survived a ClientRouter navigation and browser back navigation; both light/dark cycling and returning to the original system setting worked. Pagefind returned eight results for “等值线”. CursorTrail visibly followed pointer movement on the homepage; its canvas is pointer-transparent, theme-token driven, and follows the existing `astro:page-load` / `astro:before-swap` lifecycle. Search and the embedded threshold slider remained usable. The existing dev-server terminal and browser console were not attached to this task, so their raw log streams could not be collected; no page error was visible during these checks.
- A build with `SITE_BASE_PATH=/assignment4` and `SITE_URL=https://cinger007.github.io` succeeded; emitted assets, course links, the 1.1 iframe and its lecture link all carried the prefix. The actual GitHub Pages repository slug remains unknown in this checkout, so deployment must still supply its real path. The preserved original D3 demos use jsDelivr and therefore need visitor network access. The upstream course source has no `LICENSE` file and declares no license in its README; do not assume a reuse license for publication.

## Batch migration recipe

For each remaining lesson, use `docs/course-content-map.md` and `docs/course-source-manifest.json` to locate its original lecture, bilingual blocks, chapter anchor, scripts, styles, data and images. Add the native lecture text to its existing `src/content/courses/ch-x-y.mdx` entry while recording the exact source path. Keep the original chapter in `LegacyLessonFrame` until its HTML/JS/CSS/data paths and interactions have been checked over HTTP(S). Scope any new native styles to their component, route all root-relative assets through Astro's base-aware helpers, and use the shared page lifecycle to initialize and clean up listeners, observers and animation frames. Validate the result at both the local preview path and the eventual GitHub Pages base before replacing any legacy iframe.
