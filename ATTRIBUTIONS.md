# Reuse and attribution record

## Astro Haze

The formal site is based on [Astro Haze](https://github.com/kpab/astro-haze). Its
original source, pages, content system, styling, assets, and interactions are
retained in this project. The upstream MIT `LICENSE` file is included at the
project root.

## CursorTrail

`src/components/common/CursorTrail.astro` ports the canvas animation from
[`app/components/CursorTrail.vue`](https://github.com/patsma/nuxt-portfolio-gsap/blob/main/app/components/CursorTrail.vue)
in [Nuxt Portfolio GSAP](https://github.com/patsma/nuxt-portfolio-gsap). The
spring-following points, idle path, quadratic curve, tapered strokes, and
blending approach follow the source component; lifecycle handling and browser
integration are adapted for Astro and Astro ClientRouter.

The Nuxt Portfolio GSAP README declares the repository MIT-licensed, but the
repository has no standalone `LICENSE` file. This source and licensing detail
is recorded as found; no separate license text was present to copy.

## Original course materials

The original 《可视化导论》 course repository is
[cinger007/vis](https://github.com/cinger007/vis). Its full 108-file source tree
at commit 35a66ecb5e35e8c4f2c54a007cb6c590255b6f06 is preserved, without
modification, under public/course-source/. All 27 lesson pages preserve lecture
and code fragments from the original bilingual chapter pages, and their
original HTML/CSS/JavaScript demos run in isolated frames.

The source tree at that commit contains no LICENSE file, and its README does
not declare a license. No license has been inferred or added for the course
materials. The commit, file paths, Git blob SHAs, and byte sizes are recorded in
docs/course-source-manifest.json.

Two narrowly scoped runtime copies live under `public/course-adapters/` for
lessons 4.3 and 5.4. They preserve the original algorithms and interactions,
while correcting the D3 v7 curve-factory names (4.3), parsed-date lookup and
floating tooltip cleanup (5.4). The original snapshot remains byte-for-byte
unchanged and is still the provenance baseline.

## Step 3 visualization labs

The five new labs use the npm package [`d3`](https://github.com/d3/d3), version
7.9.0, under its ISC license (the package license is included at
`node_modules/d3/LICENSE`). D3 color conversion/interpolation, scales, axes,
contours, hierarchy layouts, and stacking are called as library APIs; no
external gallery implementation was copied.

The Marching Squares lab in `src/components/labs/MarchingSquaresLab.astro`
adapts the 16-case edge table and cell encoding from the original course 4.5
demo. As stated above, the original course snapshot has no license declaration;
the source path and adaptation are recorded here for provenance, and this
record does not infer a license grant.

The [D3 Graph Gallery](https://github.com/holtzy/D3-graph-gallery) (repository
MIT license) and [Observable Notebook Kit](https://github.com/observablehq/notebook-kit)
(repository ISC license) were surveyed for chart patterns. Their example code
was not copied, so no individual notebook/example license is relied upon.
