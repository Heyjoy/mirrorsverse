// Path-based i18n dictionaries for Mirrorsverse
// MV-SWR-017 / MV-SWR-018

export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";

export type Dict = {
  nav: { services: string; about: string; contact: string };
  thingsWeShip: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    note: string;
    items: {
      archetype: string;
      scenario: string;
      stack: string[];
      result: string;
    }[];
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    steps: { num: string; title: string; desc: string }[];
    sizesLabel: string;
    sizes: { name: string; range: string; desc: string }[];
  };
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
  metrics: { value: string; label: string; source: string }[];
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
  thingsWeShip: {
    eyebrow: "Things we ship",
    title: "Project shapes",
    titleAccent: "we know how to run",
    note: "Anonymized archetypes from real engagements. Names omitted on purpose.",
    items: [
      {
        archetype: "Internal copilot",
        scenario: "A model wired into a team's existing tools (CRM / docs / ticketing) so frontline staff stop context-switching across 6 tabs.",
        stack: ["Agent", "Tool calling", "RAG over internal docs", "SSO"],
        result: "Median task time cut from minutes to seconds; rolled out to a full ops team.",
      },
      {
        archetype: "Document pipeline",
        scenario: "An ingest path that reads messy PDFs / scans / forms and lands clean structured records into the customer's database, with humans in the loop only on low-confidence rows.",
        stack: ["OCR", "Schema-constrained extraction", "Validation rules", "Queue + retries"],
        result: "Hours of manual entry per day eliminated; sub-1% error rate on high-confidence rows.",
      },
      {
        archetype: "Long-running agent worker",
        scenario: "An agent that owns a multi-step business process end-to-end — gathering context, deciding, executing, and reporting — running unattended and recovering from failures.",
        stack: ["Multi-step planning", "State persistence", "Idempotent tools", "Observability"],
        result: "Replaced a daily human workflow; runs on cron, escalates on edge cases.",
      },
      {
        archetype: "Domain assistant",
        scenario: "A specialized chat surface trained on a customer's vertical (legal / medical / engineering), answering with sources and refusing to bluff.",
        stack: ["Embedding pipeline", "Hybrid retrieval", "Citation enforcement", "Eval harness"],
        result: "Accepted by domain experts who'd previously rejected generic chatbots.",
      },
    ],
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "Three steps,",
    titleAccent: "no theatre",
    steps: [
      { num: "01", title: "Send the rough shape", desc: "An email with what you're trying to do. Doesn't need a brief or a deck." },
      { num: "02", title: "We write back within a week", desc: "Honest read on whether we can help, what it would take, what we'd push back on." },
      { num: "03", title: "Start small, ship fast", desc: "We pick the smallest version that proves the thing, then iterate against real usage." },
    ],
    sizesLabel: "Engagements we typically take",
    sizes: [
      { name: "One-week prototype", range: "5–7 days", desc: "A running thing on your stack with real data. Validate the idea before committing." },
      { name: "Multi-week build", range: "3–8 weeks", desc: "A production system shipped, monitored, and handed off — or we keep maintaining it." },
      { name: "Embedded engagement", range: "3+ months", desc: "We sit inside your team and ship features on your roadmap." },
    ],
  },
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
    { value: "20+", label: "Systems in production", source: "across all archetypes" },
    { value: "50ms", label: "Median latency", source: "internal copilots, p50" },
    { value: "99.9%", label: "Uptime under load", source: "long-running agent workers" },
    { value: "10+", label: "Teams shipping", source: "current + past engagements" },
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
  thingsWeShip: {
    eyebrow: "我们做过这种事",
    title: "我们熟悉的",
    titleAccent: "项目形态",
    note: "来自真实项目的脱敏原型。客户名故意省略。",
    items: [
      {
        archetype: "内部 copilot",
        scenario: "把模型接进团队现有工具（CRM / 文档 / 工单），让一线员工不用在 6 个 tab 间来回切。",
        stack: ["Agent", "工具调用", "内部文档 RAG", "SSO 单点登录"],
        result: "单任务中位时间从分钟降到秒级；已在一整个运营团队铺开。",
      },
      {
        archetype: "文档处理流水线",
        scenario: "把杂乱的 PDF / 扫描件 / 表单读进来，结构化落库，只在低置信度行上交人审核。",
        stack: ["OCR", "结构化抽取", "校验规则", "队列 + 重试"],
        result: "替代每天数小时人工录入；高置信行错误率 < 1%。",
      },
      {
        archetype: "长流程 Agent worker",
        scenario: "由 Agent 端到端跑通一个多步业务流程——收集上下文、决策、执行、汇报——无人值守，失败可恢复。",
        stack: ["多步规划", "状态持久化", "幂等工具", "可观测性"],
        result: "替代每日人工流程；按 cron 跑，边界情况自动升级。",
      },
      {
        archetype: "领域助手",
        scenario: "针对客户垂直领域（法律 / 医疗 / 工程）训出来的对话面，带引用、不瞎编。",
        stack: ["Embedding 管道", "混合检索", "强制引用", "评测套件"],
        result: "被以前拒绝通用 chatbot 的领域专家接受。",
      },
    ],
  },
  howWeWork: {
    eyebrow: "我们怎么合作",
    title: "三步，",
    titleAccent: "没有戏剧",
    steps: [
      { num: "01", title: "把大概描述发过来", desc: "一封邮件说清你想做什么。不需要 brief，也不需要 PPT。" },
      { num: "02", title: "我们一周内回信", desc: "诚实告诉你能不能做、要花多少、哪些地方我们会反对。" },
      { num: "03", title: "从小开始，快速上线", desc: "先做能验证想法的最小版本，再按真实使用迭代。" },
    ],
    sizesLabel: "我们常接的项目尺寸",
    sizes: [
      { name: "一周原型", range: "5–7 天", desc: "在你的技术栈上跑出能看的真实原型，决定是否值得继续投入。" },
      { name: "数周交付", range: "3–8 周", desc: "上线一个完整生产系统，带监控、可移交，或者交给我们继续维护。" },
      { name: "嵌入式合作", range: "3 个月起", desc: "我们坐进你的团队，按你的 roadmap 一起交付。" },
    ],
  },
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
    { value: "20+", label: "上线运行的系统", source: "覆盖所有项目原型" },
    { value: "50ms", label: "中位响应延迟", source: "内部 copilot p50" },
    { value: "99.9%", label: "高负载可用率", source: "长流程 Agent worker" },
    { value: "10+", label: "在跑的客户团队", source: "当前 + 历史合作" },
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
