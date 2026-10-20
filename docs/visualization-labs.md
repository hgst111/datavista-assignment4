# Step 3 · 特色可视化实验室

## 页面与数据

| 页面 | 课程关联 | 使用数据 | 图表与视觉编码 | 主要交互 | 浏览器验收 |
|---|---|---|---|---|---|
| `/labs/lab-color/` | 3.2、3.3、3.7 | D3 `lab(L*, a*, b*)` 对 sRGB 转换的 37×37 采样；不是外部观测数据 | 固定 L* 的 a*–b* 色域截面；转换后超出 sRGB 的采样以斜线标出。并列比较相同端点的 RGB/Lab 插值，以及 Viridis 顺序、RdBu 发散、Tableau 分类色板 | L*、a*、b* 滑块；点击可显示色块；坐标与 HEX 回读 | L*=62 调至 76 后坐标读数和色块同步更新；色域采样与两条插值色带均生成。浅/深主题可切换；页面控制台无错误 |
| `/labs/marching-squares/` | 4.5 | 8×8 两个高斯峰叠加的合成标量场，场函数与边界算法见原课程 4.5 | 连续 Magma 场、原课程 16-case Marching Squares 边界、D3 连续等值带；阈值边缘使用线性插值 | 阈值滑块；等值线/等值带切换；网格开关；选格、前后格与角点 case 说明 | 阈值 0.50→0.81 后线段数 18→10；等值带模式生成 8 个动态区带；单元切换更新局部 case。控制台无错误 |
| `/labs/time-shapes/` | 5.2、5.3、5.4 | 原快照 `lesson-05/data/weather_2024.csv`，366 条 2024 日记录；最高温 °C、降雨 mm | 同一日序列以 UTC 折线、周×星期日历格、十二圈阿基米德螺旋编码；温度以序列年均值为中心的 RdYlBu，降雨用 PuBuGn 顺序色阶 | 日期输入、日序滑块、温度/降雨切换、逐日播放；悬停/点击/键盘在三视图同步日期 | 366 个日期格与 366 个螺旋点生成；日序 183 选择 7 月 1 日，切换降雨、选择 10 月 31 日及播放后跨视图日期和值同步。390px 视口无横向溢出；控制台无错误 |
| `/labs/hierarchy/` | 2.2、2.3 | 原快照 `lesson-01/data/newstudent.csv`，80 行；由班级名去除末尾班序推导专业，再按班级、性别汇总 | 同一计数树切换 Radial Tree、Sunburst、Treemap；色相区分专业，层级深度/透明度表达父子关系 | 布局切换、节点选取钻取、面包屑返回、详情和计数回读 | 80 行聚合为 2 个专业、3 个班级；三个布局均渲染；实际点击 Radial Tree 的“软件工程”后为 70 条子树，切换 Sunburst 并点击“数据科学”后为 10 条子树，面包屑随钻取更新。控制台无错误 |
| `/labs/streamgraph/` | 5.2 | 原快照 `lesson-05/data/french_names.json`：Marie、Jean、Camille 各 121 个年度 count，1900—2020 | D3 stack `wiggle` Streamgraph；Tableau 离散色相区分类别，基线随流图移动 | 年份滑块、图例类别高亮、图面 hover、年度 count 读数 | 1997 年滑块将读数更新为 Marie 1794、Jean 4191、Camille 4842；图例 Marie 高亮时其他系列透明度降至 0.19；鼠标移入图表使年份跳到光标位置（示例为 1960 年）并同步读数。暗/浅主题可切换；390px 视口无横向溢出；控制台无错误 |

## 设计决策与 Skills

- `dreambase-visualization-design`：先核对单位、字段和分母，再决定映射；天气在折线、日历、螺旋间共享同一个日期索引；Streamgraph 明确提示基线会移动，不用层位置读取单系列绝对值；色域图区分 Lab 数学坐标与显示器 sRGB 可显示范围。
- `dreambase-data-stories`：实验按“同一数据在不同编码下显露的关系”组织，而不是把图表当作装饰；每页配有读图说明、课程入口和数据来源/限制；时间形态页由一年尺度逐步缩放到单日。
- `color-system`：Viridis 用于有序数值，RdBu/RdYlBu 用于有意义中心两侧的偏离，PuBuGn 用于非负降雨量，Tableau 用于无序类别；超出 sRGB 的 Lab 采样使用纹理而不是伪造颜色。
- `ui-ux-pro-max`：沿用 Astro Haze 的页面层级、玻璃卡片、主题 token 和导航；每个实验独立页面；控件有明确标签、输出值、焦点/键盘路径及窄屏布局。
- `gpt-taste`：当前环境没有安装该 Skill 的 `SKILL.md`，无法执行其专属流程，因此不把它记作已应用。整体界面评估使用已安装的 `ui-ux-pro-max` 与 Astro Haze 现有设计系统。

## 复用与实现来源

- Astro Haze 页面壳、导航、页脚、主题、Aurora、Glass UI、ClientRouter 和课程关联组件均保留并复用。实验页面的共用壳见 `src/components/labs/LabPage.astro`，实验索引预览见 `src/components/labs/LabPreview.astro`。
- 五种实验使用项目依赖 D3 7.9.0 的成熟颜色、比例尺、contour、hierarchy、partition、treemap、stack 和 area API。D3 Graph Gallery 与 Observable Notebook Kit 仅作图表模式/许可调查，没有复制其单个范例代码；见 `ATTRIBUTIONS.md`。
- Marching Squares 的 16-case 边表来自 `public/course-source/lesson-04/lesson.js` 中的 4.5 演示，并保持原始快照不变。原课程仓库在固定快照中无 LICENSE，也无 README 许可声明；此处只记来源，不推断许可。
- Lab 色域样本由颜色空间转换即时计算；Marching field 是明确标注的合成数据。天气源文件讲义称为北京逐日最高温，但 CSV 未附气象站、采集机构或逐日数据出处。人名数据文件未提供机构、分母或完整姓名覆盖范围，因此只称三个已给系列的 count，不推断法国整体出生份额。

## 实际浏览器与运行检查

- 使用本地 Chromium 浏览器访问 `http://localhost:4330/astro-haze/` 下的实验页面。服务重启以重新生成 Vite 依赖优化缓存，之后各页面控制台均为 0 个错误。
- 确认 CursorTrail 在页面上存在 1 个 Canvas，计算样式为 `pointer-events: none`；在不遮挡图表操作的同时，鼠标仍可操作实验控件。
- 在 390×844 窄屏检查色彩、时间、Streamgraph 页面，`document.documentElement.scrollWidth` 均未超过视口宽度。D3 图表随 SVG viewBox 缩放。
- 使用 Astro ClientRouter 从实验目录进入色域页，再用浏览器前进/后退返回。回到色域页后，D3 色块数仍为 1369，L* 滑块仍能更新；未观察到重复绘图或重复监听。鼠标点击一个超出 sRGB 的 Lab 样本后，坐标、HEX 和“超出 sRGB”提示同步更新。
- Pagefind 搜索“Streamgraph”返回两条相关结果：Streamgraph 实验页与实验室目录；原课程静态快照未形成重复搜索结果。
- 实际从时间实验页进入关联的 5.4 课程内容，再浏览器后退返回；天气日期格重新生成 366 个，无客户端路由报错。
- 时间页截图复核发现月份标签重叠后，改为随各自螺旋圈半径定位；截图与 DOM 检查确认 1—12 月标签从内圈到外圈逐层分开。
- 本记录截至本文生成时，不包含 P2 的 Beeswarm、Ridgeline 或 Storyline 扩展；不改写 27 个原课程 Demo。

## GitHub Pages 静态托管

Astro 输出为 `static`，新图表只从 `public/course-source/` 读取静态 CSV/JSON，不依赖服务器 API、数据库或远端图表服务。实验页通过 `withBase()` 生成运行时数据地址；`LabPreview.astro` 只在构建时读取其本地快照文件。

- 默认 `/astro-haze`：`npm run build` 通过，生成 54 个页面；Pagefind 写入 83 页的索引。
- GitHub Pages 子路径：以 `SITE_BASE_PATH=/assignment4`、`SITE_URL=https://cinger007.github.io` 运行 `npm run build`，同样生成 54 个页面。生成后的天气、姓名和新生样本页面均指向 `/assignment4/course-source/...`，对应 CSV/JSON 文件也存在于静态输出目录。

部署前仍须将 `SITE_BASE_PATH` 改成最终仓库名，并配置对应 `SITE_URL`。
