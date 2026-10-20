# Aurora 背景柔化记录

## 原因

首页、实验室和课程页共用 `AuroraBackground.astro`。浅色主题的第三层 `--aurora-3` 原来是高饱和玫红 `hsl(340, 100%, 65%)`，在居中径向渐变、模糊和全屏背景透明度叠加后形成中央热点。常用玻璃卡片的 `--glass-bg` 只有 8% 白色不透明度，`backdrop-filter` 又会增加背景颜色的存在感，因此热点会透过卡片染色。

## 修改

- 浅色玫红 token 调整为 `hsl(338, 56%, 80%)`；深色主题使用较克制的 `hsl(332, 70%, 58%)`。
- 将玫红层的径向中心从正中移至 `62% 42%`，透明边缘从 `50%` 扩至 `58%`，并使用 `blur(112px) saturate(82%)`、图层 `opacity: 0.5`。其他 Aurora 色层、布局、动效均未改动。
- 只为首页展示卡片、实验室卡片和课程阅读表面增加浅色主题局部中性底色：`color-mix(in srgb, var(--color-surface) 50%, var(--glass-bg-solid) 50%)`，并将局部玻璃饱和度从 180% 降至 120%。半透明底色、模糊、边框与阴影仍保留；深色主题不套用此覆盖。
- 保留 `prefers-reduced-transparency` 对应样式；没有修改图表的 SVG/Canvas/D3 配色或对页面内容应用滤镜。

## 设计依据

- `ui-ux-pro-max`：用表面分层、对比度和局部中性色建立内容层级，分别检查浅色与深色主题。
- `color-system`：保留 Aurora 的粉紫蓝语义，以低饱和玫红作为氛围辅助色，让内容和数据图形承担主要视觉注意力；浅色、深色使用各自匹配的颜色值。

## 浏览器验收

在本地 Chromium 浏览器检查了首页 Hero、五章卡片区域、实验室目录和 1.1 课程阅读页，并检查浅色和深色主题。中央玫红热点已从集中、高饱和的覆盖效果变为较柔和的紫粉氛围；密集卡片更接近中性浅色，课程文字清晰，实验预览本身的颜色保持不变。深色主题保留深色玻璃与紫蓝层次，没有应用浅色卡片覆盖。

截图分辨率为 1365×900，保存在 `docs/visual-evidence/`：

| 页面 / 主题 | 优化前 | 优化后 |
| --- | --- | --- |
| 首页 Hero · 浅色 | `aurora-before-home-light.png` | `aurora-after-home-light.png` |
| 首页 Hero · 深色 | `aurora-before-home-dark.png` | `aurora-after-home-dark.png` |
| 实验室目录 · 浅色 | `aurora-before-labs-light.png` | `aurora-after-labs-light.png` |
| 课程 1.1 · 浅色 | `aurora-before-course-light.png` | 已在本地浏览器检查；截图未另存 |

五章卡片区域和课程阅读页在浏览器中直接检查；卡片表面在第二轮微调后更中性。开发服务的首页、实验室目录和 1.1 页面均返回 HTTP 200。

## 检查命令

- `npm run check`：通过，78 个 Astro 文件，0 error / 0 warning / 0 hint。
- `npm run lint`：通过。
- `npm run build`：通过，42 个静态页面生成，Pagefind 索引 71 个页面。
