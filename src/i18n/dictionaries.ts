// Path-based i18n dictionaries for Mirrorsverse
// MV-SWR-017 / MV-SWR-018

export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";

export type Dict = {
  nav: { services: string; about: string; contact: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    tagline: string;
    company: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    featured: {
      title: string;
      desc: string;
      tags: string[];
    };
    items: { title: string; desc: string }[];
  };
  metrics: { value: string; label: string }[];
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    tagline: string;
    paragraphs: string[];
    techStackLabel: string;
    companyLabel: string;
    companyName1: string;
    companyName2: string;
    location: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    tagline: string;
    body: string;
    cta: string;
  };
  footer: { copyright: string };
  langSwitch: { zh: string; en: string };
};

const en: Dict = {
  nav: { services: "Services", about: "About", contact: "Contact" },
  hero: {
    badge: "Engineered, not pitched",
    titleLine1: "We wire models",
    titleLine2: "into real workflows",
    titleAccent: "engineered to ship",
    tagline: "Models in production, not slides",
    company: "Beijing Mirrorsverse Technology Co., Ltd.",
    intro:
      "Engineers wiring models into production — not demos, not slides. Systems that run, change, and scale, owned end to end by the people who built them.",
    ctaPrimary: "Talk to engineering",
    ctaSecondary: "What we solve",
  },
  services: {
    eyebrow: "What we solve",
    title: "Engineered end to end,",
    titleAccent: "not consulted",
    featured: {
      title: "Models, wired to workflows",
      desc: "From RAG and agents to long-running automation — we design it, write the code, ship it to production, and stay on call. Your team uses it the next day, not next quarter.",
      tags: ["Agents", "RAG", "Tool calling", "On-call ownership"],
    },
    items: [
      { title: "System Integration", desc: "Connect AI capabilities to your existing infrastructure. APIs, data pipelines, and enterprise system bridges." },
      { title: "Intelligent Automation", desc: "Replace repetitive processes with AI-driven workflows. Document processing, decision support, and operational intelligence." },
      { title: "B2B Technical Services", desc: "Outsourced AI engineering for product teams. We embed with your team to ship AI features on your timeline." },
      { title: "Rapid Prototyping", desc: "From concept to working demo in days, not months. Validate your AI ideas with functional prototypes before committing." },
      { title: "Consulting & Strategy", desc: "AI readiness assessment, architecture design, and implementation roadmaps tailored to your business context." },
    ],
  },
  metrics: [
    { value: "20+", label: "AI Agents Deployed" },
    { value: "50ms", label: "Avg Response Time" },
    { value: "99.9%", label: "System Uptime" },
    { value: "10+", label: "Enterprise Clients" },
  ],
  about: {
    eyebrow: "About Us",
    title: "AI Builders,",
    titleAccent: "Not Just Consultants",
    tagline: "Engineers who ship, not pundits who pitch",
    paragraphs: [
      "Mirrorsverse is an AI-native technology company founded by engineers who build with AI every day — not just talk about it.",
      "We operate at the intersection of large language models, agent architectures, and production software engineering. Our team ships systems that handle real workloads, not demos that look good in slides.",
      "Based in Beijing, we serve clients across industries who need AI capabilities that actually work in production.",
    ],
    techStackLabel: "Tech Stack",
    companyLabel: "Company",
    companyName1: "Beijing Mirrorsverse Technology Co., Ltd.",
    companyName2: "北京镜界纪元科技有限公司",
    location: "Beijing, China",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Build",
    titleAccent: "Something",
    tagline: "Tell us about your AI project",
    body: "Have an AI project in mind? Whether it's a quick prototype or a full production system, we'd love to hear about it.",
    cta: "hello@mirrorsverse.com",
  },
  footer: { copyright: "© {year} Beijing Mirrorsverse Technology Co., Ltd." },
  langSwitch: { zh: "中文", en: "EN" },
};

const zh: Dict = {
  nav: { services: "我们解决什么", about: "关于", contact: "联系" },
  hero: {
    badge: "工程师做的，不是顾问讲的",
    titleLine1: "我们把模型",
    titleLine2: "接进真实业务",
    titleAccent: "上线即交付",
    tagline: "Models in production, not slides",
    company: "北京镜界纪元科技有限公司",
    intro:
      "工程师把模型接进生产工作流——不是 demo，不是 PPT，是能跑、能改、能扩的系统，由写它的人一路负责到底。",
    ctaPrimary: "聊聊你的项目",
    ctaSecondary: "看看我们解决什么",
  },
  services: {
    eyebrow: "我们解决的问题",
    title: "工程交付，全链路负责，",
    titleAccent: "不是顾问",
    featured: {
      title: "把模型接进工作流",
      desc: "从 RAG、Agent 到长流程自动化——我们设计、写代码、上线、值班。你的团队第二天就能用，而不是下个季度。",
      tags: ["Agent", "RAG", "工具调用", "上线后值班"],
    },
    items: [
      { title: "系统集成", desc: "把 AI 能力接入你已有的基础设施。API、数据管道、企业系统桥接。" },
      { title: "智能自动化", desc: "用 AI 驱动的工作流替换重复流程。文档处理、决策支持、运营智能。" },
      { title: "B2B 技术外包", desc: "为产品团队提供 AI 工程外包。我们与你的团队一起，按你的节奏交付 AI 功能。" },
      { title: "快速原型", desc: "从想法到可运行 demo，几天而非几个月。在投入前用功能性原型验证你的 AI 想法。" },
      { title: "咨询与策略", desc: "AI 就绪度评估、架构设计、面向业务上下文的落地路线图。" },
    ],
  },
  metrics: [
    { value: "20+", label: "已交付 AI Agent" },
    { value: "50ms", label: "平均响应时间" },
    { value: "99.9%", label: "系统可用率" },
    { value: "10+", label: "企业客户" },
  ],
  about: {
    eyebrow: "关于我们",
    title: "AI 的建造者,",
    titleAccent: "不只是 AI 的谈论者",
    tagline: "做 AI 的人，不只是谈 AI 的人",
    paragraphs: [
      "Mirrorsverse 是一家 AI 原生技术公司，由每天用 AI 写代码的工程师创立——不是只在台上讲 AI 的人。",
      "我们工作在大语言模型、Agent 架构与生产软件工程的交叉点。我们交付的系统承担真实业务负载，而非只在 PPT 里好看的 demo。",
      "团队位于北京，服务来自各行业、需要在生产环境中真正可用的 AI 能力的客户。",
    ],
    techStackLabel: "技术栈",
    companyLabel: "公司主体",
    companyName1: "北京镜界纪元科技有限公司",
    companyName2: "Beijing Mirrorsverse Technology Co., Ltd.",
    location: "中国 · 北京",
  },
  contact: {
    eyebrow: "联系",
    title: "一起构建",
    titleAccent: "些什么",
    tagline: "聊聊你的 AI 项目",
    body: "有 AI 项目想法？无论是快速原型还是完整生产系统，我们都想听听。",
    cta: "hello@mirrorsverse.com",
  },
  footer: { copyright: "© {year} 北京镜界纪元科技有限公司" },
  langSwitch: { zh: "中文", en: "EN" },
};

const dictionaries: Record<Locale, Dict> = { zh, en };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}
