---
name: 可视化导论
colors:
  background: "#F6F7F9"
  foreground: "#14181F"
  muted: "#4C5567"
  accent: "#9B20C5"
  accent-text: "#8E22C3"
  glass-surface: "rgba(255, 255, 255, 0.7)"
  aurora-violet: "hsl(280 100% 70%)"
  aurora-blue: "hsl(200 100% 60%)"
  aurora-rose: "hsl(338 56% 80%)"
  aurora-mint: "hsl(150 70% 60%)"
typography:
  sans:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
  mono:
    fontFamily: "SF Mono, Monaco, Cascadia Code, Roboto Mono, monospace"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: "clamp(2rem, 1.6rem + 2vw, 3rem)"
  3xl: "clamp(2.5rem, 2rem + 3vw, 4rem)"
rounded:
  sm: 0.375rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
---

# 可视化导论 Design System

This baseline was inferred from the live Astro Haze site at `http://localhost:4330/astro-haze/` and cross-checked against `src/styles/tokens.css` on 2026-10-20. Keep the token source in CSS authoritative when values change.

## Overview

The site teaches data visualization through five chapters, 27 lessons, and five interactive labs. Its visual identity combines Astro Haze's airy Aurora field and translucent glass surfaces with editorial Chinese typography and data graphics that use task-appropriate colors.

The first live render used the system sans stack across 435 sampled DOM nodes and a Times New Roman fallback in 65 nodes, mostly browser-default content. The heading hierarchy is display-led: a large course hero, compact chapter headings, and quieter supporting copy. Keep teaching pages calmer than the home and lab gallery.

## Colors

- Light page canvas: `--color-bg` (`hsl(220, 20%, 97%)`, rendered near `#F6F7F9`)
- Main text: `--color-text` (`hsl(220, 20%, 10%)`, rendered `#14181F`)
- Supporting text: `--color-text-muted` (`hsl(220, 15%, 35%)`, rendered `#4C5567`)
- Interactive accent: `--color-accent` (`hsl(280, 70%, 60%)`); use `--color-accent-text` (`hsl(280, 70%, 45%)`) for light-theme text and links
- Aurora colors: violet `hsl(280, 100%, 70%)`, blue `hsl(200, 100%, 60%)`, airy rose `hsl(338, 56%, 80%)`, and mint `hsl(150, 70%, 60%)`
- Dark mode changes the background, text, glass, and accent tokens in `[data-theme='dark']`; preserve that token-driven behavior.
- Individual chart palettes remain data-semantic and may use their own colors. Do not flatten all visualizations into the site's purple accent.

The live home render's sampled palette was cool-neutral with purple accents. Keep the colored Aurora behind the content, with rose as a restrained secondary light; glass cards should retain a readable neutral foreground.

## Typography

- Primary UI and Chinese reading font: `--font-sans`, the system UI stack.
- Code and numeric labels: `--font-mono`.
- Body scale: `--text-xs` through `--text-5xl` in `src/styles/tokens.css`.
- Display headings may be larger than the shared scale, but must wrap into complete phrases without orphaning a final character or punctuation mark.
- Use clear heading order and keep course lesson body text comfortably readable over long reading sessions.

## Layout

- Shared content widths: `--container-3xl` through `--container-max`; the largest container is 80rem.
- Spacing scale: `--space-xs` through `--space-3xl`.
- Breakpoint convention from `tokens.css`: 640px, 768px, 900px, and 1024px. A page-specific breakpoint is acceptable only when its content genuinely needs a different composition.
- The home and lab index may use expressive asymmetric grids. Lesson pages prioritize a readable article column, course wayfinding, and code/demo separation.
- Avoid horizontal overflow at common phone widths and preserve visible touch targets.

## Elevation & Depth

- Use `--glass-bg`, `--glass-bg-solid`, `--glass-border`, `--glass-blur-*`, and `--glass-shadow` for translucent surfaces.
- Let Aurora show around and softly through cards. On reading surfaces, the content background should stay neutral enough for text and plots to remain clear.
- Reserve stronger shadows for floating navigation, interactive panels, and primary actions.

## Shapes

- Use the shared radius tokens: modest rounding for controls, `lg` and `xl` for cards and large panels, and `full` for chips.
- Keep chart geometry specific to the visual encoding. Decorative shape should not obscure values or interactions.

## Components

- Keep the persistent Header, Footer, theme control, search modal, and page transitions from Astro Haze.
- Reuse the existing Section, Container, GlassCard, course navigation, and LabPreview components before adding new component patterns.
- Use the five lab implementations as the source for live chart previews; label links with the destination and related course section.
- Canvas layers must not intercept pointer input. Respect reduced motion and reduced transparency preferences.

## Do's and Don'ts

- Do preserve the bright, spacious Aurora and glass identity while allowing each chart to use a distinct, semantically sound palette.
- Do make the main page title, active navigation state, course location, search, and primary action obvious at a glance.
- Do protect the original Chinese and English course materials, working D3 demos, and static deployment path.
- Don't let the rose Aurora wash over the whole reading area or tint glass cards enough to compete with their content.
- Don't use decorative screenshots in place of a working chart or alter the meaning of the data to improve a composition.
- Don't add a second full-screen animation system or remove controls users rely on.
