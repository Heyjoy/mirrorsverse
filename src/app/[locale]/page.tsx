import { ArrowRight, Mail, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LangSwitch } from "@/components/lang-switch";
import { MobileNav } from "@/components/mobile-nav";
import { getDictionary, isLocale, type Locale } from "@/i18n/dictionaries";

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
      <a href="#main" className="skip-nav">{locale === "zh" ? "跳到主内容" : "Skip to content"}</a>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight font-mono text-accent-gradient">
              Mirrorsverse
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground/60 border-l border-border/60 pl-3">
              {t.hero.company}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
            <LangSwitch current={locale as Locale} />
          </div>
          <MobileNav
            locale={locale as Locale}
            items={[
              { href: "#services", label: t.nav.services },
              { href: "#about", label: t.nav.about },
              { href: "#contact", label: t.nav.contact },
            ]}
          />
        </nav>
      </header>

      <main id="main">
      {/* Hero */}
      <section aria-label={locale === "zh" ? "首页" : "Hero"} className="relative flex flex-col items-center justify-center px-6 py-24 sm:py-40 lg:py-48 text-center overflow-hidden">
        <div className="relative mx-auto max-w-4xl space-y-8">
          <p className="animate-fade-up delay-1 text-sm font-medium uppercase tracking-widest text-primary/70">
            {t.hero.badge}
          </p>
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
            {t.hero.intro}
          </p>
          <div className="animate-fade-up delay-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
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
            <div className="reveal group rounded-xl border border-border border-l-2 border-l-[var(--accent-warm)] bg-card/40 p-8 card-glow sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
              <div>
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

            {t.services.items.map((item) => (
              <div key={item.title} className="reveal group rounded-xl border border-border bg-card/40 p-6 card-glow">
                <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-border px-6 py-16 surface-alt">
        <ScrollReveal className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} source={m.source} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Things We Ship */}
      <section className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-4 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
              {t.thingsWeShip.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.thingsWeShip.title} <span className="text-accent-gradient">{t.thingsWeShip.titleAccent}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="text-xs text-muted-foreground/60 italic">{t.thingsWeShip.note}</p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid gap-5 sm:grid-cols-2">
            {t.thingsWeShip.items.map((item) => (
              <div key={item.archetype} className="reveal rounded-xl border border-border bg-card/40 p-6 card-glow">
                <h3 className="mb-2 text-lg font-semibold">{item.archetype}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.scenario}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <span key={s} className="rounded-md border border-primary/10 bg-primary/[0.04] px-2 py-0.5 text-xs text-primary/70">{s}</span>
                  ))}
                </div>
                <p className="border-t border-border/60 pt-3 text-xs text-foreground/70">
                  <span className="font-mono text-warm-muted">→</span> {item.result}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
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
                  {t.about.techStack.map((tag) => (
                    <span key={tag} className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground">
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

      {/* How We Work */}
      <section className="border-t border-border px-6 py-28 surface-alt">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
              {t.howWeWork.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.howWeWork.title} <span className="text-accent-gradient">{t.howWeWork.titleAccent}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger className="mb-16 grid gap-6 sm:grid-cols-3">
            {t.howWeWork.steps.map((step) => (
              <div key={step.num} className="reveal rounded-xl border border-border bg-card/40 p-6 card-glow">
                <p className="mb-3 font-mono text-sm text-warm">{step.num}</p>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary/70">
              {t.howWeWork.sizesLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.howWeWork.sizes.map((size) => (
                <div key={size.name} className="rounded-xl border border-border bg-card/30 p-5">
                  <div className="mb-2 flex items-baseline justify-between">
                    <h4 className="text-base font-semibold">{size.name}</h4>
                    <span className="font-mono text-xs text-warm-muted">{size.range}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{size.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-border px-6 py-28 overflow-hidden">
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
            href="mailto:contact@mirrorsverse.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            {t.contact.cta}
          </a>
        </ScrollReveal>
      </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono text-accent-gradient">
              Mirrorsverse
            </p>
            <span className="text-muted-foreground/30">·</span>
            <a href="/card" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {locale === "zh" ? "名片" : "Card"}
            </a>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/40">
              {locale === "zh" ? "上次部署" : "Last shipped"}{" "}
              {new Date().toISOString().slice(0, 10)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold tracking-tight text-warm sm:text-4xl font-mono">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-[11px] text-muted-foreground/50 italic">{source}</p>
    </div>
  );
}
