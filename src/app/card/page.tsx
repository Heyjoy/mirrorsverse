import type { Metadata } from "next";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "郑海蛟 | Haijiao Zheng — AI 技术创始人",
  description: "14 年汽车电子 → AI Agent 架构师，镜界纪元创始人",
};

export default function CardPage() {
  return (
    <div className="flex flex-col min-h-full bg-background text-foreground bg-mesh">
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm space-y-8">

          {/* === 3 秒区 === */}
          <div className="text-center space-y-3">
            {/* Monogram */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/[0.1] border border-primary/20">
              <span className="text-2xl font-bold font-mono text-accent-gradient">Z</span>
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">郑海蛟</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Haijiao Zheng</p>
            </div>

            <p className="text-sm text-primary font-medium">
              AI 技术创始人 · 镜界纪元
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              14 年汽车电子 → AI Agent 架构
              <br />
              现在用 AI 造公司
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3">
            <SocialLink href="https://github.com/Heyjoy" icon={<Github className="h-4 w-4" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/haijiao-zheng-02934b10/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            <SocialLink href="mailto:zhenghaijiao@me.com" icon={<Mail className="h-4 w-4" />} label="Email" />
          </div>

          {/* === 10 秒区 === */}
          <div className="space-y-3">
            <div className="flex flex-wrap justify-center gap-1.5">
              {[
                "交大 AI MBA",
                "前 ZF 11年",
                "前 VW/CARIAD",
                "ASPICE PA",
                "PMP",
                "ISO 26262",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-primary/10 bg-primary/[0.04] px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* WeChat QR */}
          <div className="rounded-xl border border-border bg-card/50 p-5 text-center card-glow">
            <p className="text-xs text-muted-foreground/60 mb-3 uppercase tracking-widest">
              公众号 · AI时代漫游指南
            </p>
            <div className="mx-auto w-40 h-40 relative rounded-lg overflow-hidden">
              <Image
                src="/wechat-qr.jpg"
                alt="AI时代漫游指南 公众号二维码"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground/40 mt-3">
              长按识别 · 关注公众号
            </p>
          </div>

          {/* CTA to company site */}
          <a
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:bg-primary/[0.04]"
          >
            了解公司 · mirrorsverse.com
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04]"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
