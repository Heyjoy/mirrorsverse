import type { Metadata } from "next";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "郑海蛟 | Haijiao Zheng — AI 技术创始人",
  description: "15 年汽车电子 → AI Agent 架构师，镜界纪元创始人",
};

export default function CardPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background bg-mesh p-4">
      {/* Glass card */}
      <div className="w-full max-w-[360px] rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden">

        {/* Header band */}
        <div className="px-6 pt-7 pb-5 text-center">
          <div className="mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-primary/[0.12] border border-primary/20">
            <span className="text-xl font-bold font-mono text-accent-gradient">Z</span>
          </div>
          <h1 className="text-[22px] font-semibold tracking-tight leading-tight">郑海蛟</h1>
          <p className="text-[13px] text-muted-foreground/60 mt-0.5">Haijiao Zheng</p>
          <p className="text-[13px] text-primary font-medium mt-2">AI 技术创始人 · 镜界纪元</p>
          <p className="text-[12px] text-muted-foreground/50 mt-1">15 年汽车电子 → AI Agent 架构，用 AI 造公司</p>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/[0.06]" />

        {/* Tags */}
        <div className="px-5 py-4 flex flex-wrap justify-center gap-1.5">
          {["交大 AI MBA", "前 ZF·11年", "前 VW/CARIAD", "ASPICE PA", "PMP", "ISO 26262"].map((t) => (
            <span key={t} className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-[3px] text-[11px] text-muted-foreground/70">{t}</span>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/[0.06]" />

        {/* QR + Actions row */}
        <div className="px-5 py-4 flex items-center gap-4">
          {/* QR */}
          <div className="shrink-0 w-[88px] h-[88px] rounded-xl overflow-hidden border border-white/[0.06]">
            <Image src="/wechat-qr.jpg" alt="公众号二维码" width={88} height={88} className="object-cover" />
          </div>
          {/* Right side */}
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-muted-foreground/40 uppercase tracking-widest mb-2">公众号 · AI时代漫游指南</p>
            <p className="text-[11px] text-muted-foreground/30 mb-3">长按识别关注</p>
            <div className="flex gap-2">
              <IconBtn href="https://github.com/Heyjoy" icon={<Github className="h-3.5 w-3.5" />} />
              <IconBtn href="https://www.linkedin.com/in/haijiao-zheng-02934b10/" icon={<Linkedin className="h-3.5 w-3.5" />} />
              <IconBtn href="mailto:zhenghaijiao@me.com" icon={<Mail className="h-3.5 w-3.5" />} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <a href="/" className="block border-t border-white/[0.06] py-3 text-center text-[12px] text-muted-foreground/40 transition-colors hover:text-primary/60">
          mirrorsverse.com
        </a>
      </div>
    </div>
  );
}

function IconBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted-foreground/50 transition-all hover:text-primary hover:border-primary/30">
      {icon}
    </a>
  );
}
