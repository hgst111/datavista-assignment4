# Step 2 · 27 小节迁移与演示验收

> 内容来源为固定快照 `35a66ecb5e35e8c4f2c54a007cb6c590255b6f06`。逐节讲解和关键代码摘自相应原版章节 HTML 的中英内容块，保留原有措辞；章节结构与数据/资源对应关系见 [`course-content-map.md`](./course-content-map.md)，108 个源文件的 Git blob 哈希见 [`course-source-manifest.json`](./course-source-manifest.json)。本表记录在本地 Astro 开发站点上的实际演示操作，不以 HTTP 200 代替交互验证。

## 逐节验收

| 小节 | 讲解与关键代码 | 原版演示与实际验证 | 使用数据/资源 | 限制或迁移说明 |
| --- | --- | --- | --- | --- |
| 1.1 数据生成 | 原版中英讲解、字段映射/类型转换/d3.csv 代码已嵌入阅读页。 | 独立原版 Demo；点击重载后读取并显示 80 条记录，预览和字段映射正常。 | `lesson-01/demo/01-data-loader/`、`demo/data/newstudent.csv`、D3 v7 jsDelivr。 | 原版独立 HTML 保留在隔离 iframe。 |
| 1.2 数据定义 | DIKW 原版讲解及 SVG/交互代码已嵌入。 | 点击“智慧（Wisdom）”后详情更新；切换 English 后英文节点可见。 | Demo 内联 DIKW 数据，D3 v7 jsDelivr。 | — |
| 1.3 数据属性 | Stevens 测量尺度与 Mackinlay 通道排序讲解及代码已嵌入。 | 四类尺度/视觉通道对照 SVG 均渲染；原版是静态比较图，无输入控件。 | Demo 内联分类、顺序、定量示例，D3 v7 jsDelivr。 | 原版未设计交互控件。 |
| 1.4 数据变换 | D3 数组操作讲解及 map/reduce、cross、group/rollup 代码已嵌入。 | 切换 map → reduce 后输出更新，并出现聚合结果 10。 | Demo 内联数组，D3 v7 jsDelivr。 | — |
| 1.5 D3 数据选择器 | Selection、enter/update/exit 及 join 代码已嵌入。 | 点击“添加”后数据由 `[1,2,3]` 更新为 `[1,2,3,4]`，新元素可见。 | Demo 内联数组，D3 v7 jsDelivr。 | — |
| 2.1 数据可视化流程 | Card、Mackinlay、van Wijk 流程讲解及节点/箭头代码已嵌入。 | 点击“原始数据”流程节点后对应理论说明更新。 | Demo 内联流程图；D3 v7 jsDelivr。 | — |
| 2.2 数据变换：原数据 → 数据表 | 原版 d3.rollup 与专业字段处理代码已嵌入。 | 更换分组字段与平均年龄聚合后，分组表格和数值同步更新。 | `lesson-02/data/newstudent.csv`、D3 v7 jsDelivr。 | — |
| 2.3 视觉映射：数据表 → 视觉结构 | hierarchy/tree 与 separation 讲解和代码已嵌入。 | 切换层级字段改变树节点结构；调整 separation 滑块后读数和布局更新。 | `lesson-02/data/newstudent.csv`、D3 v7 jsDelivr。 | — |
| 2.4 视图渲染与用户交互 | classed、事件委托、递归列表和 transition 讲解/代码已嵌入。 | 收起并展开树后 6 个节点恢复；点击节点后冒泡日志显示触发节点。 | `lesson-02/data/newstudent.csv`、D3 v7 jsDelivr。 | — |
| 3.1 颜色模型基础 | RGB、HSL、Lab、CMYK 与 CVD 讲解及代码已嵌入。 | 拖动 R 滑块后颜色数值及色彩对照更新。 | Demo 内联颜色计算，D3 v7 jsDelivr。 | — |
| 3.2 colormap 三类选择 | 顺序型、发散型、定性型原版讲解和配色代码已嵌入。 | Viridis、RdBu、Tableau10 对照条和州数据示例渲染。 | Demo 内联样例及 D3 颜色方案，D3 v7 jsDelivr。 | 原版为静态比较演示。 |
| 3.3 CIE Lab 色域图 | Lab 色彩空间讲解和颜色生成代码已嵌入。 | 调整 L 滑块至 61 后读数及色域 SVG 几何内容均改变。 | Demo 内联采样值，D3 v7 jsDelivr。 | — |
| 3.4 色系搭配规则 | 单色、类比、互补、三等分、分裂互补的原版说明/代码已嵌入。 | 调整基准色相至 211° 后五组方案同步重绘。 | Demo 内联色彩算法，D3 v7 jsDelivr。 | — |
| 3.5 科研经典配色 | Wong、Paul Tol、Okabe–Ito、Tableau、Paired、Viridis 等原版内容和代码已嵌入。 | 点击 Paul Tol 色板后示例图配色更新。 | Demo 内联经典色板，D3 v7 jsDelivr。 | — |
| 3.6 对错案例对比 | 四类错误/正确案例及讲解代码已嵌入。 | 选择 Wong 8 色方案后页面反馈“正确”。 | Demo 内联问答/图表样例，D3 v7 jsDelivr。 | — |
| 3.7 鲜艳 + 低饱和哲学生成器 | 颜色数量和饱和度原版算法与说明/代码已嵌入。 | 移动色相滑块后调色板 SVG 更新，仍生成 7 个样本色。 | Demo 内联生成参数，D3 v7 jsDelivr。 | — |
| 3.8 CVD 论文图测 | 原版色觉缺陷对照讲解和实现代码已嵌入。 | 9 个对照 SVG/图形区域均已渲染。 | Demo 内联论文图/颜色样例，D3 v7 jsDelivr。 | 原版为静态色觉对照图。 |
| 4.1 数据转换 | 宽表/长表讲解及转换关键代码已嵌入。 | 原始/转换表格均显示，预览表有 11 行。 | `lesson-04/data/crime.csv`；D3 v7 jsDelivr。 | 原版静态展示转换结果。 |
| 4.2 坐标轴变换 | 线性、对数、平方根尺度和三层坐标职责的原版讲解/代码已嵌入。 | 选中 log 单选项后 SVG 内容更新，控件保持选中。 | `lesson-04/data/crime.csv`、D3 v7 jsDelivr。 | — |
| 4.3 曲线拟合 | 十种曲线及插值/拟合说明和原版代码已嵌入。 | 逐个点击十个曲线标签，十种均产生有效 SVG path，控制台无适配页错误。 | `lesson-04/data/crime.csv`、D3 v7 jsDelivr。 | D3 v7 曲线工厂导出名与原版短名称不一致；由 `public/course-adapters/lesson-04/` 的窄映射副本适配，原始快照未修改。 |
| 4.4 倾角感知 | Cleveland 45° 倾角讲解和滑块代码已嵌入。 | 角度由 45° 增至 46° 后读数与示意 SVG 更新。 | Demo 内联线段，D3 v7 jsDelivr。 | — |
| 4.5 等值线（Marching Squares） | 原版标量场、16 case 表及阈值代码/理论已嵌入。 | 阈值从 0.50 调至 0.55 后读数和等值线路径变化。 | Demo 内置 8×8 标量场，无外部数据文件；D3 v7 jsDelivr。 | 复杂算法继续运行原版章节脚本。 |
| 5.1 时间属性 | 时间的五种属性及原版说明/代码已嵌入。 | 点击“周期性”卡片后详细说明显示 `periodic` 属性。 | Demo 内联时间属性内容。 | — |
| 5.2 标准时间可视化（折线图） | 法国姓名时序讲解、代码及交互说明已嵌入。 | 三条系列初始显示；取消一个姓名后曲线路径从 3 条变为 2 条。 | `lesson-05/data/french_names.json`、D3 v7 jsDelivr。 | — |
| 5.3 日历热图 | van Wijk 日历布局讲解与色阶代码已嵌入。 | 选择 Viridis 后首个热图区块颜色改变；366 个日格保留。 | `lesson-05/data/weather_2024.csv`、D3 v7 jsDelivr。 | — |
| 5.4 周期时间可视化（阿基米德螺旋） | 原版极坐标、弧长近似、扇环路径讲解和代码已嵌入。 | 366 个有温度色值的扇区渲染；周日/周一切换改变日期到颜色的映射；悬停显示日期和温度，移开后提示消失。 | `lesson-05/data/weather_2024.csv`、D3 v7 jsDelivr。 | 原版把 `Date` 当字符串查找并将提示框添加到 body 却从 mount 清理；运行副本只修正日期键与提示清理，原始快照未修改。 |
| 5.5 Storyline 时间线 | 《侏罗纪公园》多角色时序与事件说明、曲线代码已嵌入。 | 张力从 0.5 调到 0.6 后曲线路径变化，5 个角色和事件标记可见。 | Demo 内联角色轨迹、事件数据；D3 v7 jsDelivr。 | — |

## 页面、内容与搜索验收

- 27 个独立 `/course/ch-x-y/` 路由均由 Astro Content Collection 构建；目录、章节目录、面包屑和前后节链接共用现有课程模板。
- 所有 27 节都有源自原课程的中英讲解和关键代码；双语切换不生成 AI 补写。演示仍使用原章 HTML/CSS/JS/数据隔离运行，1.1 使用原独立 Demo。
- iframe 聚焦指定锚点，隐藏原章节页眉、导航、同章其他内容和讲解/代码标签，保留目标 Demo 控件；高度跟随 Demo 内容变化。原课程文件完整保留。
- `public/course-source/` 逐文件对照 manifest：108 个文件、缺失 0、哈希/大小不符 0、额外文件 0。
- Pagefind 不索引源快照和适配器；课程阅读页的侧边章节目录不进入索引，避免每一节都因重复目录文本而匹配其他课程标题。实际查询 `Marching Squares` 的结果没有 `/course-source/` 源文件。
- 原版 D3 v7 通过 jsDelivr ES module 加载，浏览器需要网络访问 jsDelivr。浏览器离线或 CDN 被拦截时，依赖 D3 的演示不可用；后续可将同版本 D3 vendor 到静态站点，不需重写图表算法。
- 原课程仓库固定快照没有 LICENSE 文件，README 也未声明许可；未推定该课程材料的再发布许可。源地址、提交、文件清单及此限制记录在 `ATTRIBUTIONS.md` 与 manifest 中。

## 下一阶段的兼容升级候选

保留原课程优先；Step 3 可以在不重写原 Demo 的基础上逐步升级视觉包装：3.3 CIE Lab 色域、3.4 色系规则生成器、3.7 低饱和配色生成器、4.5 Marching Squares、5.3 日历热图、5.4 阿基米德螺旋和 5.5 Storyline。后续最有价值的两个检查点是 D3/CDN 离线稳定性，以及手机窄屏下宽型 SVG 的浏览与交互。
