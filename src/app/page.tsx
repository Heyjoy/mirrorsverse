import { ArrowRight, Bot, Code2, Cpu, Globe, Mail, MapPin, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-background text-foreground bg-mesh">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight font-mono text-accent-gradient">
            Mirrorsverse
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-36 text-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Top glow orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.07] blur-[100px]" />

        <div className="relative mx-auto max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-sm text-primary">
            <Zap className="h-3.5 w-3.5" />
            AI-Native Technology Services
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Building Intelligent
            <br />
            Systems <span className="text-accent-gradient">That Work</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            北京镜界纪元科技有限公司 — We design and build AI Agents, automation pipelines, and intelligent workflows for businesses ready to operate at the speed of AI.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_oklch(0.65_0.15_270_/_25%)] hover:scale-[1.02]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-7 text-sm font-medium transition-all hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Engineering, <span className="text-accent-gradient">End to End</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Agent Development"
              description="Custom AI agents that reason, plan, and execute — from conversational assistants to autonomous workflow operators."
            />
            <ServiceCard
              icon={<Code2 className="h-5 w-5" />}
              title="System Integration"
              description="Connect AI capabilities to your existing infrastructure. APIs, data pipelines, and enterprise system bridges."
            />
            <ServiceCard
              icon={<Cpu className="h-5 w-5" />}
              title="Intelligent Automation"
              description="Replace repetitive processes with AI-driven workflows. Document processing, decision support, and operational intelligence."
            />
            <ServiceCard
              icon={<Globe className="h-5 w-5" />}
              title="B2B Technical Services"
              description="Outsourced AI engineering for product teams. We embed with your team to ship AI features on your timeline."
            />
            <ServiceCard
              icon={<Zap className="h-5 w-5" />}
              title="Rapid Prototyping"
              description="From concept to working demo in days, not months. Validate your AI ideas with functional prototypes before committing."
            />
            <ServiceCard
              icon={<MapPin className="h-5 w-5" />}
              title="Consulting & Strategy"
              description="AI readiness assessment, architecture design, and implementation roadmaps tailored to your business context."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
                About Us
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                AI Builders, <span className="text-accent-gradient">Not Just Consultants</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mirrorsverse is an AI-native technology company founded by engineers who build with AI every day — not just talk about it.
                </p>
                <p>
                  We operate at the intersection of large language models, agent architectures, and production software engineering. Our team ships systems that handle real workloads, not demos that look good in slides.
                </p>
                <p>
                  Based in Beijing, we serve clients across industries who need AI capabilities that actually work in production.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-card/50 p-6 card-glow">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary/70">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "LLM / Agent Frameworks",
                    "Python",
                    "TypeScript",
                    "Next.js",
                    "React",
                    "Node.js",
                    "Docker",
                    "CI/CD Pipelines",
                    "Cloud Infrastructure",
                    "RAG Systems",
                    "Multi-Agent Orchestration",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/10 bg-primary/[0.04] px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6 card-glow">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary/70">
                  Company
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  北京镜界纪元科技有限公司
                  <br />
                  Beijing Mirrorsverse Technology Co., Ltd.
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary/50" />
                  Beijing, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-border px-6 py-28 overflow-hidden">
        {/* Bottom glow orb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/[0.06] blur-[80px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build <span className="text-accent-gradient">Something</span>
          </h2>
          <p className="mb-10 text-muted-foreground leading-relaxed">
            Have an AI project in mind? Whether it&apos;s a quick prototype or a full production system, we&apos;d love to hear about it.
          </p>
          <a
            href="mailto:hello@mirrorsverse.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_oklch(0.65_0.15_270_/_25%)] hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            hello@mirrorsverse.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground font-mono text-accent-gradient">
            Mirrorsverse
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 北京镜界纪元科技有限公司
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card/40 p-6 card-glow">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.08] text-primary/70 transition-colors group-hover:text-primary group-hover:bg-primary/[0.12]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
