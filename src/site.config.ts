export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  // Fallback only, used when astro.config.mjs's `site` is unavailable
  // (e.g. context.site during a dev/preview run without it set). The
  // canonical site + base configuration lives in astro.config.mjs.
  url: string;
  ogImage: string;
  twitterHandle: string;
  // BCP47 language tag, used for <html lang> and the RSS <language> tag.
  lang: string;
  // og:locale value (e.g. 'en_US'). Defaults to a locale derived from `lang`
  // when omitted.
  ogLocale?: string;

  // Theme settings
  theme: {
    accentColor: string;
    defaultColorMode: 'light' | 'dark' | 'system';
    showThemeToggle: boolean;
  };

  // Navigation
  nav: {
    main: Array<{
      name: string;
      href: string;
    }>;
  };

  // Features toggle
  features: {
    blog: boolean;
    portfolio: boolean;
    landing: boolean;
    rss: boolean;
    sitemap: boolean;
    search: boolean;
  };

  // Social links
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };

  // Blog settings
  blog: {
    postsPerPage: number;
    showToc: boolean;
    showReadingTime: boolean;
    showShareButtons: boolean;
    showRelatedPosts: boolean;
  };

  // Portfolio settings
  portfolio: {
    projectsPerPage: number;
    showTechStack: boolean;
    showYear: boolean;
  };

  // Footer settings
  footer: {
    links: Array<{
      name: string;
      href: string;
    }>;
  };
}

const siteConfig: SiteConfig = {
  name: '可视化导论',
  title: '可视化导论 · D3 与数据可视化课程',
  description: '五章、27 节课程，结合原版讲义、D3 演示与交互式可视化实验。',
  author: '可视化导论课程组',
  url: 'https://hgst111.github.io/datavista-assignment4',
  ogImage: '/og-image.png',
  twitterHandle: '',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',

  theme: {
    accentColor: 'hsl(280, 70%, 60%)',
    defaultColorMode: 'system',
    showThemeToggle: true,
  },

  nav: {
    main: [
      { name: '首页', href: '/' },
      { name: '课程学习', href: '/course/' },
      { name: '可视化实验室', href: '/labs/' },
      { name: '课程资料', href: '/resources/' },
      { name: '关于', href: '/about/' },
    ],
  },

  features: {
    blog: false,
    portfolio: false,
    landing: false,
    rss: false,
    sitemap: true,
    search: true,
  },

  social: {
    github: 'https://github.com/cinger007/vis',
  },

  blog: {
    postsPerPage: 6,
    showToc: true,
    showReadingTime: true,
    showShareButtons: true,
    showRelatedPosts: true,
  },

  portfolio: {
    projectsPerPage: 9,
    showTechStack: true,
    showYear: true,
  },

  footer: {
    // Privacy/Terms are intentionally omitted by default — this theme ships
    // without those pages, so add them here only once the pages exist.
    links: [
      { name: '站点地图', href: '/sitemap-index.xml' },
    ],
  },
};

// Conventional region for language-only BCP47 tags (no '-REGION' suffix),
// used so common cases like 'en' or 'ja' derive a real og:locale value
// ('en_US', 'ja_JP') instead of duplicating the language code.
const COMMON_REGIONS: Record<string, string> = {
  en: 'US',
  ja: 'JP',
  zh: 'CN',
  fr: 'FR',
  de: 'DE',
  es: 'ES',
  pt: 'PT',
  ko: 'KR',
  it: 'IT',
  ru: 'RU',
  ar: 'SA',
  nl: 'NL',
  pl: 'PL',
  tr: 'TR',
  vi: 'VN',
  th: 'TH',
  id: 'ID',
  hi: 'IN',
};

// Derives an og:locale-shaped value ('language_REGION') from a BCP47 lang
// tag when `ogLocale` isn't set explicitly, e.g. 'en' -> 'en_US', 'en-GB' ->
// 'en_GB'. Unlisted languages without a region fall back to duplicating the
// language code (e.g. 'sv' -> 'sv_SV'). Best-effort only — set `ogLocale`
// explicitly for exact control.
export function deriveOgLocale(lang: string): string {
  const [language, region] = lang.split('-');
  const fallbackRegion = COMMON_REGIONS[language.toLowerCase()] ?? language;
  return `${language}_${(region ?? fallbackRegion).toUpperCase()}`;
}

export const resolvedOgLocale =
  siteConfig.ogLocale ?? deriveOgLocale(siteConfig.lang);

export default siteConfig;
