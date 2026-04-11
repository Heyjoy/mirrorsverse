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
    techStack: string[];
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
    techStack: ["LLM / Agent Frameworks", "Python", "TypeScript", "Next.js", "React", "Node.js", "Docker", "CI/CD Pipelines", "Cloud Infrastructure", "RAG Systems", "Multi-Agent Orchestration"],
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
    cta: "contact@mirrorsverse.com",
  },
  footer: { copyright: "© {year} Beijing Mirrorsverse Technology Co., Ltd." },
  langSwitch: { zh: "中文", en: "EN" },
};

const zh: Dict = {
  nav: { services: "服务", about: "关于", contact: "联系" },
  thingsWeShip: {
    eyebrow: "做过的事",
    title: "我们熟悉的",
    titleAccent: "项目类型",
    note: "以下为真实项目的脱敏描述，客户信息已隐去。",
    items: [
      {
        archetype: "内部 Copilot",
        scenario: "将智能体接入团队现有的 CRM、文档和工单系统，减少一线人员在多个工具间的切换。",
        stack: ["Agent", "工具调用", "内部文档 RAG", "SSO"],
        result: "单次操作耗时从分钟级降至秒级，已在整个运营团队投入使用。",
      },
      {
        archetype: "文档处理管道",
        scenario: "自动读取 PDF、扫描件和表单，结构化后入库。仅低置信度数据交由人工复核。",
        stack: ["OCR", "结构化抽取", "校验规则", "队列重试"],
        result: "每日节省数小时人工录入，高置信度数据准确率 99% 以上。",
      },
      {
        archetype: "自主运行的 Agent",
        scenario: "将多步业务流程交给 Agent 端到端执行：信息采集、判断、操作、汇报。无人值守，故障自动恢复。",
        stack: ["多步规划", "状态持久化", "幂等操作", "可观测性"],
        result: "原本需要人工每日跟进的流程，改为定时自动执行，异常自动告警。",
      },
      {
        archetype: "行业知识助手",
        scenario: "面向法律、医疗、工程等专业领域的对话工具。回答附带引用来源，不确定时明确告知。",
        stack: ["向量检索", "混合召回", "引用约束", "评测体系"],
        result: "此前拒绝使用通用 chatbot 的领域专家，已将其纳入日常工作流。",
      },
    ],
  },
  howWeWork: {
    eyebrow: "怎么合作",
    title: "三步启动，",
    titleAccent: "不绕弯",
    steps: [
      { num: "01", title: "描述你的需求", desc: "一封邮件说清你想做什么。不需要正式文档，大致方向即可。" },
      { num: "02", title: "一周内给出判断", desc: "能不能做、大致投入、哪些地方需要调整——直接回复，不设门槛。" },
      { num: "03", title: "最小版本先上线", desc: "找到最小可验证的切入点，先跑起来，再根据实际反馈迭代。" },
    ],
    sizesLabel: "常见合作模式",
    sizes: [
      { name: "原型验证", range: "5–7 天", desc: "在你的环境中搭建可运行的原型，验证方向是否值得投入。" },
      { name: "项目交付", range: "3–8 周", desc: "交付完整的生产系统，含监控和文档，可移交也可由我们持续维护。" },
      { name: "驻场协作", range: "3 个月起", desc: "工程师长期驻场，按你的技术规划一起推进。" },
    ],
  },
  hero: {
    badge: "做出来的，不是讲出来的",
    titleLine1: "让智能体",
    titleLine2: "跑在真实业务里",
    titleAccent: "而不是 PPT 里",
    tagline: "Models in production, not slides",
    company: "北京镜界纪元科技有限公司",
    intro:
      "我们把智能体接进生产环境，交付能持续运行的系统。从第一行代码到上线运维，同一批人负责到底。",
    ctaPrimary: "聊聊你的项目",
    ctaSecondary: "了解服务内容",
  },
  services: {
    eyebrow: "服务内容",
    title: "从编码到上线运维，",
    titleAccent: "全程负责",
    featured: {
      title: "智能体落地到业务流程",
      desc: "RAG、Agent、长流程自动化——从方案设计到编码上线再到运维值班，交付后你的团队第二天就能用。",
      tags: ["Agent", "RAG", "工具调用", "上线后运维"],
    },
    items: [
      { title: "对接现有系统", desc: "智能体与你的 API、数据库、内部系统打通。长期运行，持续监控，专人维护。" },
      { title: "自动化重复流程", desc: "文档处理、来件分类、审批路由——把每天重复的人工操作换成自动执行的代码。" },
      { title: "驻场工程团队", desc: "工程师驻场，按你的技术规划一起交付功能。不做交接文档，直接写代码。" },
      { title: "快速验证原型", desc: "几天内在你的环境里搭出可运行的原型，跑真实数据，接真实用户，暴露真实问题。" },
      { title: "架构咨询", desc: "技术选型、架构评审、落地路线图——给你一份经得起推敲的方案。" },
    ],
  },
  metrics: [
    { value: "20+", label: "生产系统在运行", source: "覆盖各类项目" },
    { value: "50ms", label: "响应中位延迟", source: "Copilot 类项目" },
    { value: "99.9%", label: "高负载可用率", source: "自主运行 Agent" },
    { value: "10+", label: "合作团队", source: "含正在进行的" },
  ],
  about: {
    eyebrow: "关于我们",
    title: "用交付说话的",
    titleAccent: "工程团队",
    tagline: "代码即承诺",
    paragraphs: [
      "镜界纪元是一家位于北京的工程公司，专注于帮助团队将智能体落地到真实业务中。我们交付的是可持续运行的系统，而不是演示用的原型。",
      "我们的工作在模型、代码和运维的交叉点上。系统承载真实业务负载，记录真实错误日志，凌晨出故障时由写代码的人来修。",
      "如果你之前遇到过交完方案就消失的顾问，我们正好相反——从第一行代码到上线运维，同一批人负责到底。",
    ],
    techStackLabel: "技术栈",
    techStack: ["LLM / Agent 框架", "Python", "TypeScript", "Next.js", "React", "Node.js", "Docker", "CI/CD", "云基础设施", "RAG", "多 Agent 编排"],
    companyLabel: "公司主体",
    companyName1: "北京镜界纪元科技有限公司",
    companyName2: "Beijing Mirrorsverse Technology Co., Ltd.",
    location: "北京",
  },
  contact: {
    eyebrow: "联系我们",
    title: "描述你的问题，",
    titleAccent: "我们评估方案",
    tagline: "一封邮件即可",
    body: "简要描述你想实现的目标，发送给我们。可行性、周期、预算——我们会在一周内直接回复，无需预约，无需繁琐流程。",
    cta: "contact@mirrorsverse.com",
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
