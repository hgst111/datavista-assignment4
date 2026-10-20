# Step 4 · 首页、可视化展廊与全站整合

## 稳定基线

开始修改前，将 Step 3 正式项目快照保存在工作区
`D:\visualization_intro\assignment4\_baselines\step3-2026-10-20`。
快照包含 308 个文件、约 8.03 MB，并以 `manifest.json` 记录源文件与配置的 SHA-256；
不包含 `node_modules`、`.astro`、`dist` 或 `.git`。原候选模板和
`public/course-source/` 均不属于本轮编辑范围。

## 设计决策与 Skills

- `ui-ux-pro-max`：保留 Astro Haze 的 BaseLayout、Header/Footer、Aurora、玻璃卡片、主题按钮、ClientRouter 和响应式 token。首页保持原来的宽松 Hero 与区块节奏，并把主要操作收敛为课程、实验两个入口；导航改为首页、课程学习、可视化实验室、课程资料、关于。
- `dreambase-visualization-design`：Hero 主图用原课程 `weather_2024.csv` 的 366 条逐日记录，不绘制装饰性假图。日期游标在折线和阿基米德螺旋上共用同一索引、同一温度读数；温度颜色沿用“以年均值为中心”的冷暖语义，来源限制继续展示。
- `dreambase-data-stories`：首页顺序从数据概览到五章路线、精选实验、学习入口；章节卡片用不同图形线索预告数据、处理流程、颜色、等值线和时间布局，实验卡片则回到对应课程章节。
- `color-system`：时间主图沿用课程时间实验的温度发散色带；色域、标量场、分类层级、时间流图继续使用各自与数据任务匹配的色彩编码，不把展廊统一改成同一渐变。
- `gpt-taste`：本机没有该 Skill 的 `SKILL.md`，未执行其专属流程。

## 本轮改动

- 首页继续复用 Astro Haze 的现有 Layout、Section、Button、GlassCard，并使用 `CourseHeroVisual.astro` 呈现真实天气折线和螺旋。滑块同时更新两个视图的定位、日期与 °C 读数。
- 五章预览继续复用真实实验 `LabPreview`，第二章使用数据到视觉表达的流程图。首页精选区展示五个实验的真实 SVG 预览，不在首屏启动五套完整实验脚本。
- `/labs/` 保留五个独立作品预览；每卡展示类型、课程编号、说明和入口。关联关系集中在 `src/lib/course-lab-links.ts`，课程页与目录双向链接到对应实验。
- 主要入口不再暴露 Blog、虚构 Work 项目或模板 Landing。其旧路径成为不可索引的课程导航桥接页；未发布 Blog/Work 详情不生成。原示例内容文件仍留在正式项目供模板能力参考，但不出现在课程入口、搜索索引或站点地图。
- 关于页、页脚、404、搜索与主题控制的可见文案已课程化；页脚保留 Astro Haze MIT、Astro 与原课程仓库的准确来源链接。课程仓库无 LICENSE 的限制仍见 `ATTRIBUTIONS.md`。

## 浏览器验收

测试地址：`http://localhost:4330/astro-haze/`，项目开发服务器保持运行。

| 项目 | 结果 |
|---|---|
| 首页结构、课程入口、五章卡片、五个精选实验 | 通过；首屏呈现天气折线与螺旋实际图形 |
| 首页日期交互 | 通过；滑块从 2024-07-01 移至 2024-10-01 时，日期、双视图定位和 12.6 °C 读数同步 |
| 五个实验页面入口与实际控件 | 通过；色域明度滑块、Marching Squares 阈值及等值带、时间日期/降雨指标、层级布局/键盘钻取、Streamgraph 年份/系列图例均有状态更新 |
| 课程与实验双向入口 | 通过；展廊显示 3.2/3.3/3.7、4.5、5.2/5.3/5.4、2.2/2.3 等准确关联；课程 4.5 与 5.2 页显示对应实验入口 |
| 搜索 | 通过；课程与 Marching Squares 可检索；模板文章 `Getting Started with Astro Haze` 返回 0 条结果 |
| 主题、ClientRouter、历史导航 | 通过；深浅主题可切换；实验到课程的客户端路由及浏览器前进/后退恢复正确页面 |
| 移动布局 | 通过；390 px 下首页与展廊 `scrollWidth` 均未超过视口宽度。展廊标题孤立字问题已调整字号和断行 |
| 控制台与路由 | 关闭不属于正式界面的 Astro DevToolbar 后，新建干净浏览器页无初始化错误。首页→实验目录→浏览器后退/前进→首页及天气滑块交互均无新的控制台错误。一次紧连的历史导航触发了 Astro 对已取消转场的 `AbortError`；按页面逐步等待重测未复现。首页内联脚本已包在作用域闭包中，避免 ClientRouter 重跑时顶层 `const` 重复声明 |
| 模板路径 | `/blog/`、`/work/`、`/landing/`、`/tags/` 是不可索引的课程导航桥接页；未发布的文章和作品详情不会生成。源代码仍保留 Astro Haze 的可复用实现和示例文件；它们不出现在主导航、站点地图或可检索的文章结果中 |

## 自动检查

- `npm run check`：通过；78 个 Astro 文件，0 errors / 0 warnings / 0 hints，TypeScript 无错误。
- `npm run lint`：通过。
- 默认路径 `SITE_BASE_PATH=/astro-haze` 下 `npm run build`：通过，42 个静态页面生成，Pagefind 索引 71 个页面。
- GitHub Pages 路径 `SITE_BASE_PATH=/assignment4`、`SITE_URL=https://cinger007.github.io` 下 `npm run build`：通过。输出包含 27 个课程小节目录，课程天气数据路径和站内链接均带 `/assignment4`；站点地图含课程与实验路由，不含 `/blog/`、`/work/`、`/landing/`、`/tags/`。
- 子路径验证后重新构建默认 `/astro-haze` 路径，当前 `dist/` 恢复为正式开发预览路径。
- 子路径静态预览在 `4331` 完成验证后已关闭；正式开发服务器 `4330` 与两个候选模板服务器 `4321`、`3001` 保持运行。
