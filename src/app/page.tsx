import { ArrowRight, Bot, Code2, Cpu, Globe, Mail, MapPin, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight font-mono">
            Mirrorsverse
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <Zap className="h-3.5 w-3.5" />
            AI-Native Technology Services
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building Intelligent Systems
            <br />
            <span className="text-muted-foreground">That Work</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            北京镜界纪元科技有限公司 — We design and build AI Agents, automation pipelines, and intelligent workflows for businesses ready to operate at the speed of AI.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-accent"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Engineering, End to End
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              description="From concept to working demo in days, not months. Validate your AI ideas with functional prototypes before committing to full development."
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
      <section id="about" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                About Us
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                AI Builders, Not Just Consultants
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
            <div className="space-y-6">
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
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
                      className="rounded-md border border-border/60 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Company
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  北京镜界纪元科技有限公司
                  <br />
                  Beijing Mirrorsverse Technology Co., Ltd.
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  Beijing, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something
          </h2>
          <p className="mb-10 text-muted-foreground leading-relaxed">
            Have an AI project in mind? Whether it&apos;s a quick prototype or a full production system, we&apos;d love to hear about it.
          </p>
          <a
            href="mailto:hello@mirrorsverse.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            hello@mirrorsverse.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground font-mono">
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
    <div className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-border">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-colors group-hover:text-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
