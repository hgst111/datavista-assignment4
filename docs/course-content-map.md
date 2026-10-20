# 原课程内容映射清单

> 原始仓库：[cinger007/vis](https://github.com/cinger007/vis) · 固定源码提交 `35a66ecb5e35e8c4f2c54a007cb6c590255b6f06`。已将该提交的全部 108 个文件完整复制到 `public/course-source/`；逐文件 Git blob SHA 与大小记录在 `docs/course-source-manifest.json`。
> 本清单依据实际仓库目录、五份双语讲义、五章集成页面及 zh/en blocks JSON 整理。仓库 README 仍写“四章/仅第一章完成”，与源码不符；此处以源码为准。

## 课程章节与小节

| 编号 | 原版标题 | 教学要点 | 原版代码主题 | 原版页面 / Demo |
| --- | --- | --- | --- | --- |
| 1.1 | 数据生成 | 基于新生数据（DeepSeek 合成）讲解异步加载与字段映射 | 关键代码 ① 字段名映射、关键代码 ② 类型转换函数、关键代码 ③ d3.csv 第二参直接传 row 回调 | `/course-source/lesson-01/demo/01-data-loader/index.html` + `/course-source/lesson-01/index.html#ch-1-1` |
| 1.2 | 数据定义 | DIKW 金字塔 —— 数据 → 信息 → 知识 → 智慧 | 关键代码 ① SVG 金字塔路径、关键代码 ② 交互高亮（hover/click） | `/course-source/lesson-01/demo/02-dikw-pyramid/index.html` + `/course-source/lesson-01/index.html#ch-1-2` |
| 1.3 | 数据属性 | Stevens 测量尺度 × Mackinlay 视觉通道排序 | 关键代码 ① 比例尺选型、关键代码 ② colormap 选型 | `/course-source/lesson-01/demo/03-attribute-types/index.html` + `/course-source/lesson-01/index.html#ch-1-3` |
| 1.4 | 数据变换 | D3 8 个函数式数组操作 | 关键代码 ① map / reduce 的链式组合、关键代码 ② cross（笛卡尔积）、关键代码 ③ group / rollup（聚合） | `/course-source/lesson-01/demo/04-d3-array-ops/index.html` + `/course-source/lesson-01/index.html#ch-1-4` |
| 1.5 | D3 数据选择器 | Selection 与 enter / update / exit 三态模型 | 关键代码 ① .join(enter, update, exit) 三态、关键代码 ② key 函数保身份、关键代码 ③ d3.select vs d3.selectAll | `/course-source/lesson-01/demo/05-selectors/index.html` + `/course-source/lesson-01/index.html#ch-1-5` |
| 2.1 | 数据可视化流程（Card · Mackinlay · van Wijk） | 从「拿到一张表」到「画出一张图」的完整链路 | 关键代码 ① SVG 流程图节点 + 箭头 | `/course-source/lesson-02/index.html#ch-2-1`（原页自动打开演示标签） |
| 2.2 | 数据变换：原数据 → 数据表（d3.rollup 聚合） | 把"按专业分"变成"按维度组合分" | 关键代码 ① 双层 rollup、关键代码 ② 用正则提取专业 | `/course-source/lesson-02/index.html#ch-2-2`（原页自动打开演示标签） |
| 2.3 | 视觉映射：数据表 → 视觉结构（Reingold-Tilford + 通道理论） | 层级数据 → 屏幕坐标的算法核心 | 关键代码 ① hierarchy + tree 三步走、关键代码 ② separation 控制父子间距 | `/course-source/lesson-02/index.html#ch-2-3`（原页自动打开演示标签） |
| 2.4 | 视图渲染与用户交互（classed + 事件委托 + 动画 transition） | 把树画成可折叠的 HTML 列表，处理点击、冒泡、委托三个坑 | 关键代码 ① 事件委托（一对多监听）、关键代码 ② 嵌套递归 buildList | `/course-source/lesson-02/index.html#ch-2-4`（原页自动打开演示标签） |
| 3.1 | 颜色模型基础 | 为什么需要 4 种颜色空间？它们各自擅长什么？色盲眼中看到的世界是怎样的？ | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-1`（原页自动打开演示标签） |
| 3.2 | colormap 三类选择 | 顺序型 / 发散型 / 定性型。选错类型 = 误导读者。 | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-2`（原页自动打开演示标签） |
| 3.3 | CIE Lab 色域图 | 在感知均匀的颜色空间里，色域长什么样？ | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-3`（原页自动打开演示标签） |
| 3.4 | 色系搭配规则（5 大类） | 单色 / 类比 / 互补 / 三等分 / 分裂互补——什么时候用哪个？ | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-4`（原页自动打开演示标签） |
| 3.5 | 科研经典配色 | Wong / Paul Tol / Okabe-Ito / Tableau / Paired / Viridis——顶标都在用什么？ | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-5`（原页自动打开演示标签） |
| 3.6 | 对错案例对比 | 4 张图，3 错 1 对。点击你认为"对"的那张。 | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-6`（原页自动打开演示标签） |
| 3.7 | 鲜艳 + 低饱和 哲学生成器 | 颜色数量 ≤ 7、鲜艳颜色 + 低饱和度 = 好看又耐看。算法自动生成 5-7 色搭配。 | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-7`（原页自动打开演示标签） |
| 3.8 | CVD 论文图测 | 你的图在色盲眼里还看得懂吗？拿真实顶标图做测试。 | ⭐ 关键代码 | `/course-source/lesson-03/index.html#ch-3-8`（原页自动打开演示标签） |
| 4.1 | 数据转换 | 你的 Crime 数据是宽格式，可视化常需要长格式。转换函数一行解决。 | ⭐ 关键代码 | `/course-source/lesson-04/index.html#ch-4-1`（原页自动打开演示标签） |
| 4.2 | 坐标轴变换 | 数据空间 → 坐标系空间 → 屏幕空间。三层职责分明，错了就乱套。 | ⭐ 关键代码 | `/course-source/lesson-04/index.html#ch-4-2`（原页自动打开演示标签） |
| 4.3 | 曲线拟合 | 同 50 个点，用 10 种 line.curve 画风各异。什么时候用哪种？ | ⭐ 关键代码 | `/course-source/lesson-04/index.html#ch-4-3`（原页自动打开演示标签） |
| 4.4 | 倾角感知（45° 黄金角） | 人眼对斜率的估计 不是 线性的。45° 是视觉"中点"。 | ⭐ 关键代码 | `/course-source/lesson-04/index.html#ch-4-4`（原页自动打开演示标签） |
| 4.5 | 等值线（Marching Squares） | 给定标量场 + 阈值，追踪 值 = 阈值 的曲线。 | ⭐ 关键代码 | `/course-source/lesson-04/index.html#ch-4-5`（原页自动打开演示标签） |
| 5.1 | 时间属性 | 时间有 5 个核心属性：有序 / 连续 / 周期 / 独立于空间 / 结构性。每个属性都影响可视化设计。 | ⭐ 关键代码 | `/course-source/lesson-05/index.html#ch-5-1`（原页自动打开演示标签） |
| 5.2 | 标准时间可视化（折线图） | x 轴 = 时间，y 轴 = 度量。最常见的时序图：法国人名 1900-2020 的使用频率。 | ⭐ 关键代码 | `/course-source/lesson-05/index.html#ch-5-2`（原页自动打开演示标签） |
| 5.3 | 日历热图（van Wijk） | 以"年=行 / 周=列"展示全年数据，发现周期性 + 周内趋势 + 节假日异常。 | ⭐ 关键代码 | `/course-source/lesson-05/index.html#ch-5-3`（原页自动打开演示标签） |
| 5.4 | 周期时间可视化（阿基米德螺旋） | 将时间沿圆周排列（螺旋 = 圆 + 持续展开）。发现周期性：每个回路 = 一个周期。 | ⭐ 关键代码 | `/course-source/lesson-05/index.html#ch-5-4`（原页自动打开演示标签） |
| 5.5 | Storyline 时间线（侏罗纪公园） | 多角色叙事：每条线 = 一个角色 / 组织 / 进程，y 轴位置 = 聚散关系，时间 = 故事进展。 | ⭐ 关键代码 | `/course-source/lesson-05/index.html#ch-5-5`（原页自动打开演示标签） |

## 章级资源与依赖

| 章节 | 讲义与双语 | 页面依赖 | 数据与图片 | 外部依赖 / 运行方式 |
| --- | --- | --- | --- | --- |
| 第 1 章 · 数据（5 节） | `lesson-01/lecture.md`、`lecture-en.md`、`zh_blocks.json`、`en_blocks.json` | `index.html` + `lesson.js` + `styles.css`；另有 5 个独立 Demo (`demo/*/{index.html,main.js}`) 与 `demo/styles.css` | `data/newstudent.csv`、`demo/data/newstudent.csv`（80 行，内容相同）、`data/join.png` | 集成页 / 各 Demo 以 ES module 从 jsDelivr 导入 D3 v7；`d3.csv()` 读取相对 CSV。须经 HTTP(S) 运行。 |
| 第 2 章 · 数据可视化流程（4 节） | `lesson-02/lecture.md`、`lecture-en.md`、中英 blocks JSON | `index.html`、`lesson.js`、`styles.css` | `data/newstudent.csv`；`img/01-mackinlay-ranking.png` 至 `05-identity-channels.png` | ES module + jsDelivr D3 v7；D3 rollup、hierarchy/tree、DOM 事件与 transition。 |
| 第 3 章 · 色彩专题（8 节） | `lesson-03/lecture.md`、`lecture-en.md`、中英 blocks JSON | `index.html`、`lesson.js`、`styles.css` | `data/crime.csv`；其余颜色空间、色板、CVD 比较在 blocks / JS 中 | ES module + jsDelivr D3 v7；色彩模型、colormap 分类、Lab 色域、和谐规则、配色/色觉缺陷互动。 |
| 第 4 章 · 低维数据可视化（5 节） | `lesson-04/lecture.md`、`lecture-en.md`、中英 blocks JSON | `index.html`、`lesson.js`、`styles.css` | `data/crime.csv`；4.5 使用 JS 内置 8×8 标量场，不依赖 CSV | ES module + jsDelivr D3 v7；CSV 使用相对路径。4.5 由原始 `lesson.js` 的 `d-4-5` 保留 16 种 Marching Squares case 与阈值滑块。 |
| 第 5 章 · 时序数据可视化（5 节） | `lesson-05/lecture.md`、`lecture-en.md`、中英 blocks JSON | `index.html`、`lesson.js`、`styles.css` | `data/french_names.json`、`data/weather_2024.csv`、`data/storyline.js`、`data/time-attributes.js` | ES module + jsDelivr D3 v7；姓名折线/词云、天气日历热图、阿基米德螺旋与侏罗纪公园 Storyline。 |

## 语言、引用与 supplementary

- 五章均保留中文 `lecture.md`、英文 `lecture-en.md`、`zh_blocks.json` 和 `en_blocks.json`。章节页面载入原版 `i18n.js` / `i18n.css`，使用 `data-i18n` 键和语言切换按钮；补充资料页有自己的一份 i18n 脚本与样式。中文和英文内容完整原样保留在快照中。
- 根级 `index.html` 与 `styles.css` 是课程门户；根级 `i18n.js` / `i18n.css` 提供门户语言切换。
- `supplementary/` 共含 PDF、日历/色图/等值线/犯罪数据/学生表格/标记与树列表演示、CSV、CSS、`utils/*.js` 和配置 JSON。全部逐文件原样复制，清单见 manifest；相对 HTML/JS/CSS/data 路径也一并保留。
- 课程仓库在该提交的树中没有 `LICENSE` 文件，README 未声明许可证；本项目没有替原课程另行添加许可证。

## 迁移对应关系

- Astro 路由 `/course/ch-x-y/` 由 `courses` MDX collection 生成，编号、章序、原标题、摘要、原锚点、讲义、源码页、Demo 可用性和代码主题单独存储。
- 1.1 的 MDX 讲解/代码段取自原始 `lesson-01/lecture.md`，旧版数据加载器从 `lesson-01/demo/01-data-loader/index.html` 隔离 iframe 载入；保留原 CSV 和原 JS。
- 4.5 的 iframe 使用 `lesson-04/index.html#ch-4-5`。原 `lesson.js` 会按锚点定位、切到 demo tab 并渲染 `d-4-5`，不重写旧算法。
- 所有 27 节均有原版讲解、关键代码和 demo tab。章节脚本按 `#ch-x-y` 定位后自动切换并渲染 demo；块内容 JSON 本身不一定包含 demo tab 记录，因此以各章 index.html 和 lesson.js 为准。

