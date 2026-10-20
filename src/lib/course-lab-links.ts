export interface LabSummary {
  href: string;
  title: string;
  description: string;
  preview: 'color' | 'marching' | 'time' | 'hierarchy' | 'streamgraph';
  kind: string;
  courseSections: string[];
}

/** One source of truth for the gallery, homepage previews, and lesson cross-links. */
export const labDirectory: LabSummary[] = [
  {
    href: '/labs/lab-color/',
    title: 'CIE Lab 色彩空间探索器',
    description: '调节明度，比较 Lab 与 RGB 插值，并查看顺序、发散和分类色板。',
    preview: 'color',
    kind: '色彩空间',
    courseSections: ['3.2', '3.3', '3.7'],
  },
  {
    href: '/labs/marching-squares/',
    title: 'Marching Squares 等值线',
    description: '调节连续标量场的阈值，逐格检查课程原版 16-case 算法。',
    preview: 'marching',
    kind: '算法与等值线',
    courseSections: ['4.5'],
  },
  {
    href: '/labs/time-shapes/',
    title: '时间形态实验室',
    description: '在折线、日历热图和阿基米德螺旋之间联动同一日期。',
    preview: 'time',
    kind: '时间序列 · 天气',
    courseSections: ['5.2', '5.3', '5.4'],
  },
  {
    href: '/labs/hierarchy/',
    title: '层级数据变形实验室',
    description: '让同一组新生样本在 Radial Tree、Sunburst 与 Treemap 间切换。',
    preview: 'hierarchy',
    kind: '层级布局',
    courseSections: ['2.2', '2.3'],
  },
  {
    href: '/labs/streamgraph/',
    title: '人名时间 Streamgraph',
    description: '比较三个课程人名系列在 1900—2020 年的年度 count。',
    preview: 'streamgraph',
    kind: '时间序列 · 流图',
    courseSections: ['5.2'],
  },
];

export function labsForCourse(sectionNumber: string): LabSummary[] {
  return labDirectory.filter((lab) => lab.courseSections.includes(sectionNumber));
}

export function coursesForLab(href: string): string[] {
  return labDirectory.find((lab) => lab.href === href)?.courseSections ?? [];
}
