import type { Metadata } from "next";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "郑海蛟 | Haijiao Zheng — AI Agent 架构师",
  description: "15 年汽车电子 → AI Agent 架构师，北京镜界纪元科技有限公司创始人",
};

const orgs = ["交大 AI MBA", "ZF · Volkswagen"];
const certs = ["ASPICE PA", "TÜV FSP", "PMP", "CSM"];

export default function CardPage() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        backgroundColor: "#fefcf8",
        backgroundImage: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,180,60,0.06), transparent)",
      }}
    >
      <div className="w-full max-w-[360px] rounded-[22px] border border-[#e0a030]/[0.12] bg-white/90 shadow-[0_2px_40px_rgba(200,160,60,0.08)] backdrop-blur-2xl overflow-hidden">

        {/* ── Identity ── */}
        <div className="px-6 pt-7 pb-5">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-0.5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#d4a840]/[0.1] border border-[#d4a840]/[0.2]">
              <span className="text-[18px] font-bold font-mono text-[#b07a10]">Z</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-[20px] font-semibold tracking-tight leading-none text-[#2a2418]">
                郑海蛟
              </h1>
              <p className="text-[12px] mt-1 text-[#8a6a20]/35">Haijiao Zheng</p>
              <p className="text-[13px] font-medium mt-2.5 leading-tight text-[#b07a10]">
                AI Agent 架构师
              </p>
              <p className="text-[11px] mt-0.5 tracking-wide text-[#b07a10]/45">
                创始人 · 北京镜界纪元科技有限公司
              </p>
            </div>
          </div>
          <p className="text-[11.5px] mt-4 leading-relaxed text-[#8a6a20]/35">
            15 年汽车电子 → AI Agent 架构，用 AI 造公司
          </p>
        </div>

        <div className="mx-5 h-px bg-[#d4a840]/[0.1]" />

        {/* ── Tags: 2 rows ── */}
        <div className="px-5 py-3.5 flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            {orgs.map((tag) => (
              <span key={tag} className="rounded-full border border-[#d4a840]/[0.15] bg-[#d4a840]/[0.05] px-2 py-[2.5px] text-[10.5px] leading-none text-[#8a6a20]/60">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {certs.map((tag) => (
              <span key={tag} className="rounded-full border border-[#d4a840]/[0.15] bg-[#d4a840]/[0.05] px-2 py-[2.5px] text-[10.5px] leading-none text-[#8a6a20]/60">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mx-5 h-px bg-[#d4a840]/[0.1]" />

        {/* ── QR + Social ── */}
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="shrink-0 w-[80px] h-[80px] rounded-[10px] overflow-hidden border border-[#d4a840]/[0.12]">
            <Image src="/wechat-qr.jpg" alt="公众号二维码" width={80} height={80} className="object-cover" />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-2.5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#8a6a20]/35">公众号</p>
              <p className="text-[11.5px] mt-0.5 text-[#b07a10]/45">AI时代漫游指南</p>
            </div>
            <div className="flex gap-1.5">
              <IconBtn href="https://github.com/Heyjoy" icon={<Github className="h-3 w-3" />} />
              <IconBtn href="https://www.linkedin.com/in/haijiao-zheng-02934b10/" icon={<Linkedin className="h-3 w-3" />} />
              <IconBtn href="mailto:zhenghaijiao@me.com" icon={<Mail className="h-3 w-3" />} />
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <a href="/" className="block border-t border-[#d4a840]/[0.1] py-2.5 text-center text-[10.5px] tracking-wider text-[#8a6a20]/25 transition-colors hover:text-[#b07a10]/50">
          mirrorsverse.com
        </a>
      </div>
    </div>
  );
}

function IconBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#d4a840]/[0.12] bg-[#d4a840]/[0.04] text-[#8a6a20]/40 transition-all duration-200 hover:text-[#b07a10] hover:border-[#d4a840]/25">
      {icon}
    </a>
  );
}
