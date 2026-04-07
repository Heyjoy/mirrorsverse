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
      { title: "Wired into your stack", desc: "Bridges between models, your APIs, your data, your enterprise systems. Long-running, monitored, owned." },
      { title: "Workflow automation", desc: "Replace the manual loops your team hates — document handling, intake triage, decision routing — with code that runs every day." },
      { title: "Embedded engineering", desc: "We sit inside your team and ship features on your roadmap. No handoff, no slide decks, just commits." },
      { title: "From sketch to running thing", desc: "A working prototype on your stack in days. Real data, real users, real failure modes — not a video." },
      { title: "Architecture & second opinions", desc: "Pick the right boring tools, kill the wrong ambitious ones, and leave you with a roadmap you can defend." },
    ],
  },
  metrics: [
    { value: "20+", label: "Systems in production" },
    { value: "50ms", label: "Median latency" },
    { value: "99.9%", label: "Uptime under load" },
    { value: "10+", label: "Teams shipping" },
  ],
  about: {
    eyebrow: "About",
    title: "Engineers who ship,",
    titleAccent: "not pundits who pitch",
    tagline: "Built by people who'd rather commit than tweet",
    paragraphs: [
      "Mirrorsverse is a small engineering company in Beijing. We ship production software for teams that need a model wired into something real — not a demo, not a deck.",
      "We work at the boring intersection of models, code, and operations. Our systems carry real workloads, log real errors, and get fixed at 3am when something breaks.",
      "If you've been burned by consultants who handed over a slide deck and disappeared, we're the opposite of that.",
    ],
    techStackLabel: "Tech we use",
    companyLabel: "Company",
    companyName1: "Beijing Mirrorsverse Technology Co., Ltd.",
    companyName2: "北京镜界纪元科技有限公司",
    location: "Beijing, China",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Show us the problem,",
    titleAccent: "we'll show you the fix",
    tagline: "One email, no funnel",
    body: "Send us the rough shape of what you're trying to do. We'll write back with whether we can help and what it would take — no slide deck, no discovery call ritual.",
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
      { title: "接进你的技术栈", desc: "在模型、你的 API、你的数据、你的企业系统之间搭桥。长期跑、有监控、有人负责。" },
      { title: "工作流自动化", desc: "把团队最讨厌的手工循环——文档处理、来件分流、决策路由——换成每天自己跑的代码。" },
      { title: "嵌入式工程团队", desc: "我们坐进你的团队，按你的 roadmap 交付。没有交接、没有 PPT，只有 commit。" },
      { title: "从草图到能跑的东西", desc: "几天内在你的技术栈上做出可运行的原型。真实数据、真实用户、真实错误——不是录屏 demo。" },
      { title: "架构与第二意见", desc: "帮你选对靠谱的旧工具，砍掉不靠谱的新野心，留下一份能向老板解释的路线图。" },
    ],
  },
  metrics: [
    { value: "20+", label: "上线运行的系统" },
    { value: "50ms", label: "中位响应延迟" },
    { value: "99.9%", label: "高负载可用率" },
    { value: "10+", label: "在跑的客户团队" },
  ],
  about: {
    eyebrow: "关于",
    title: "写代码的人，",
    titleAccent: "不是讲台上的人",
    tagline: "宁愿 commit，也不愿发推",
    paragraphs: [
      "Mirrorsverse 是一家位于北京的小型工程公司。我们为需要把模型接进真实业务的团队交付生产系统——不是 demo，不是 PPT。",
      "我们在模型、代码、运维这些不性感的交叉点上干活。我们交付的系统承担真实业务负载、记录真实错误，半夜出问题时由写它的人去修。",
      "如果你被那种『递一份 PPT 就消失』的顾问伤过，我们是它的反面。",
    ],
    techStackLabel: "我们用的工具",
    companyLabel: "公司主体",
    companyName1: "北京镜界纪元科技有限公司",
    companyName2: "Beijing Mirrorsverse Technology Co., Ltd.",
    location: "中国 · 北京",
  },
  contact: {
    eyebrow: "联系",
    title: "把问题给我们看，",
    titleAccent: "我们把方案写出来",
    tagline: "一封邮件，没有漏斗",
    body: "把你想做的事大概描述一下，发给我们。我们会回信告诉你能不能做、做下来要什么——不预约、不发现性会议、不走漏斗流程。",
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
