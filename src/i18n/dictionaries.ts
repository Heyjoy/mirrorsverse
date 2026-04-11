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
  nav: { services: "能做什么", about: "关于", contact: "联系" },
  thingsWeShip: {
    eyebrow: "做过的事",
    title: "这几类项目，",
    titleAccent: "我们很熟",
    note: "真实项目脱敏。客户名不放。",
    items: [
      {
        archetype: "内部 copilot",
        scenario: "模型接到团队现有的 CRM、文档、工单系统里，一线干活的人不用再来回切 tab。",
        stack: ["Agent", "工具调用", "内部文档 RAG", "SSO"],
        result: "一个操作从几分钟缩到几秒，整个运营组在用。",
      },
      {
        archetype: "文档处理管道",
        scenario: "PDF、扫描件、表单进来，结构化入库。拿不准的才交人看。",
        stack: ["OCR", "结构化抽取", "校验规则", "队列重试"],
        result: "每天省几个小时手工录入，准确率 99%+。",
      },
      {
        archetype: "自动跑的 Agent",
        scenario: "一整套业务流程交给 Agent：收信息、判断、干活、汇报。不用人盯，挂了能自己恢复。",
        stack: ["多步规划", "状态持久化", "幂等操作", "可观测性"],
        result: "以前每天有人盯着做的事，现在定时跑，出问题自己报警。",
      },
      {
        archetype: "行业问答助手",
        scenario: "给法律、医疗、工程这类专业领域做的对话工具。回答带出处，不确定就说不知道。",
        stack: ["向量检索", "混合召回", "引用强制", "评测体系"],
        result: "之前觉得 chatbot 不靠谱的专家，现在天天用。",
      },
    ],
  },
  howWeWork: {
    eyebrow: "怎么合作",
    title: "三步，",
    titleAccent: "不来虚的",
    steps: [
      { num: "01", title: "发邮件说你想做什么", desc: "不用写 brief，不用做 PPT。大概说清楚就行。" },
      { num: "02", title: "一周内给你回复", desc: "能不能做、大概多少钱、哪些我们觉得不该做——都直说。" },
      { num: "03", title: "先出最小版本", desc: "找到能验证想法的最小切口，先上线，再根据实际使用调。" },
    ],
    sizesLabel: "常见的合作方式",
    sizes: [
      { name: "一周出原型", range: "5–7 天", desc: "在你的环境里跑出一个能用的东西，看看值不值得继续。" },
      { name: "几周交付上线", range: "3–8 周", desc: "做完一个完整系统，带监控，能交接，也可以我们继续管。" },
      { name: "驻场合作", range: "3 个月起", desc: "人坐到你们团队里，按你们的节奏一起出活。" },
    ],
  },
  hero: {
    badge: "写代码的，不是做 PPT 的",
    titleLine1: "模型落地",
    titleLine2: "不靠讲故事",
    titleAccent: "靠上线",
    tagline: "Models in production, not slides",
    company: "北京镜界纪元科技有限公司",
    intro:
      "我们是工程师，干的事就是把模型接到真实业务里跑起来。不做 demo 糊弄人，交付的东西能改、能扩、出了问题有人修。",
    ctaPrimary: "聊聊你的项目",
    ctaSecondary: "看看能做什么",
  },
  services: {
    eyebrow: "能帮你什么",
    title: "从写代码到上线值班，",
    titleAccent: "全程我们来",
    featured: {
      title: "模型接进你的业务",
      desc: "RAG、Agent、长流程自动化——设计、写码、上线、值班都是我们。你们第二天就能用，不用等下个季度。",
      tags: ["Agent", "RAG", "工具调用", "上线后值班"],
    },
    items: [
      { title: "接你现有的系统", desc: "模型和你的 API、数据库、内部系统对接。长期跑，有人看，有人管。" },
      { title: "干掉重复劳动", desc: "文档处理、来件分类、审批路由——这些每天重复的事，换成代码自己跑。" },
      { title: "派人到你团队", desc: "人坐过去，按你们的计划一起写代码出功能。没有交接文档，只有 commit。" },
      { title: "几天出个能跑的", desc: "在你的环境里搭出原型，跑真实数据、接真实用户、暴露真实问题——不是录个屏。" },
      { title: "帮你把把关", desc: "该用什么技术、不该追什么热点、怎么跟老板讲明白——给你一个靠谱的方案。" },
    ],
  },
  metrics: [
    { value: "20+", label: "在跑的系统", source: "覆盖各类项目" },
    { value: "50ms", label: "响应中位数", source: "copilot 类项目" },
    { value: "99.9%", label: "高峰可用率", source: "自动化 Agent" },
    { value: "10+", label: "合作过的团队", source: "含在进行的" },
  ],
  about: {
    eyebrow: "关于我们",
    title: "写代码的，",
    titleAccent: "不是站台的",
    tagline: "代码比嘴好使",
    paragraphs: [
      "镜界纪元是一家北京的小工程公司，专门给需要把模型用起来的团队干活。交出去的是能跑的系统，不是 PPT。",
      "模型、代码、运维——我们就在这几个不太光鲜的交叉点上做事。系统跑的是真实业务，记的是真实错误，半夜出问题是写它的人起来修。",
      "要是你之前找过那种交完方案就消失的顾问，我们干的是反过来的事。",
    ],
    techStackLabel: "用的工具",
    techStack: ["LLM / Agent 框架", "Python", "TypeScript", "Next.js", "React", "Node.js", "Docker", "CI/CD", "云服务", "RAG", "多 Agent 编排"],
    companyLabel: "公司",
    companyName1: "北京镜界纪元科技有限公司",
    companyName2: "Beijing Mirrorsverse Technology Co., Ltd.",
    location: "北京",
  },
  contact: {
    eyebrow: "联系",
    title: "说说你的问题，",
    titleAccent: "我们来想办法",
    tagline: "发封邮件就行",
    body: "大概说一下你想做什么，发过来。能不能做、要多久、要多少钱——我们直接回，不搞预约、不搞什么需求调研会。",
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
