import { ArrowRight, Bot, Code2, Cpu, Globe, Mail, MapPin, Zap } from "lucide-react";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LangSwitch } from "@/components/lang-switch";
import { getDictionary, isLocale, type Locale } from "@/i18n/dictionaries";

const ITEM_ICONS = [
  <Code2 key="0" className="h-5 w-5" />,
  <Cpu key="1" className="h-5 w-5" />,
  <Globe key="2" className="h-5 w-5" />,
  <Zap key="3" className="h-5 w-5" />,
  <MapPin key="4" className="h-5 w-5" />,
];

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <div className="flex flex-col min-h-full bg-background text-foreground bg-mesh">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight font-mono text-accent-gradient">
            Mirrorsverse
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
            <LangSwitch current={locale as Locale} />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-40 sm:py-48 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.08] blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-[20%] translate-y-1/2 w-[400px] h-[300px] rounded-full bg-[oklch(0.55_0.12_290_/_0.05)] blur-[80px]" />

        <div className="relative mx-auto max-w-4xl space-y-8">
          <div className="animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-sm text-primary animate-pulse-ring">
            <Zap className="h-3.5 w-3.5" />
            {t.hero.badge}
          </div>
          <h1 className="animate-fade-up delay-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            {locale === "zh" ? <br /> : " "}
            <span className="text-gradient-animated inline-block">
              {t.hero.titleAccent}
            </span>
          </h1>
          <p className="animate-fade-up delay-2 text-lg sm:text-xl text-muted-foreground/50 tracking-wide">
            {t.hero.tagline}
          </p>
          <p className="animate-fade-up delay-3 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            <span className="text-foreground/80 font-medium">{t.hero.company}</span>
            <span className="mx-2 text-primary/30">|</span>
            {t.hero.intro}
          </p>
          <div className="animate-fade-up delay-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.65_0.15_270_/_30%)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-7 text-sm font-medium transition-all hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
              {t.services.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.services.title} <span className="text-accent-gradient">{t.services.titleAccent}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="reveal group rounded-xl border border-border bg-card/40 p-8 card-glow sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.1] text-primary transition-colors group-hover:bg-primary/[0.15]">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{t.services.featured.title}</h3>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                  {t.services.featured.desc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.services.featured.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-primary/10 bg-primary/[0.04] px-2.5 py-0.5 text-xs text-primary/70">{tag}</span>
                ))}
              </div>
            </div>

            {t.services.items.map((item, idx) => (
              <ServiceCard key={item.title} icon={ITEM_ICONS[idx]} title={item.title} description={item.desc} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-border px-6 py-16">
        <ScrollReveal className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
                {t.about.eyebrow}
              </p>
              <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.about.title} <span className="text-accent-gradient">{t.about.titleAccent}</span>
              </h2>
              <p className="mb-6 text-sm text-muted-foreground/50">{t.about.tagline}</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-5">
              <div className="rounded-xl border border-border bg-card/50 p-6 card-glow">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary/70">
                  {t.about.techStackLabel}
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
                    <span key={tag} className="rounded-md border border-primary/10 bg-primary/[0.04] px-3 py-1 text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6 card-glow">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary/70">
                  {t.about.companyLabel}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.about.companyName1}
                  <br />
                  {t.about.companyName2}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary/50" />
                  {t.about.location}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-border px-6 py-28 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/[0.06] blur-[80px]" />

        <ScrollReveal className="relative mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
            {t.contact.eyebrow}
          </p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title} <span className="text-accent-gradient">{t.contact.titleAccent}</span>
          </h2>
          <p className="mb-6 text-sm text-muted-foreground/50">{t.contact.tagline}</p>
          <p className="mb-10 text-muted-foreground leading-relaxed">{t.contact.body}</p>
          <a
            href="mailto:hello@mirrorsverse.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_oklch(0.65_0.15_270_/_25%)] hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            {t.contact.cta}
          </a>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground font-mono text-accent-gradient">
            Mirrorsverse
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
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
    <div className="reveal group rounded-xl border border-border bg-card/40 p-6 card-glow">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.08] text-primary/70 transition-colors group-hover:text-primary group-hover:bg-primary/[0.12]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold tracking-tight text-accent-gradient sm:text-4xl font-mono">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
