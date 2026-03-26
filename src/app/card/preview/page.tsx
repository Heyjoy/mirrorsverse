"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const themes = [
  {
    name: "A · 深空蓝紫（当前）",
    bg: "bg-[#0a0a1a]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,124,246,0.08), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(100,80,200,0.05), transparent)",
    card: "border-white/[0.08] bg-white/[0.03]",
    accent: "text-[#8b7cf6]",
    accentBg: "bg-[#8b7cf6]/[0.12] border-[#8b7cf6]/20",
    tag: "border-white/[0.06] bg-white/[0.03] text-white/50",
    muted: "text-white/40",
    divider: "bg-white/[0.06]",
    iconBtn: "border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-[#8b7cf6]",
    footer: "border-white/[0.06] text-white/30",
    monogram: "text-[#8b7cf6]",
  },
  {
    name: "B · 暖琥珀",
    bg: "bg-[#0f0d0a]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(234,179,100,0.07), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(200,140,60,0.04), transparent)",
    card: "border-[#eab364]/[0.1] bg-[#eab364]/[0.02]",
    accent: "text-[#eab364]",
    accentBg: "bg-[#eab364]/[0.1] border-[#eab364]/20",
    tag: "border-[#eab364]/[0.08] bg-[#eab364]/[0.03] text-[#eab364]/50",
    muted: "text-white/35",
    divider: "bg-[#eab364]/[0.08]",
    iconBtn: "border-[#eab364]/[0.1] bg-[#eab364]/[0.03] text-white/35 hover:text-[#eab364]",
    footer: "border-[#eab364]/[0.08] text-white/25",
    monogram: "text-[#eab364]",
  },
  {
    name: "C · 冰白极简",
    bg: "bg-[#f5f5f7]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.02), transparent)",
    card: "border-black/[0.06] bg-white/80 shadow-xl shadow-black/[0.04]",
    accent: "text-[#1d1d1f]",
    accentBg: "bg-black/[0.05] border-black/[0.08]",
    tag: "border-black/[0.06] bg-black/[0.03] text-black/50",
    muted: "text-black/35",
    divider: "bg-black/[0.06]",
    iconBtn: "border-black/[0.06] bg-black/[0.02] text-black/35 hover:text-black/70",
    footer: "border-black/[0.06] text-black/25",
    monogram: "text-[#1d1d1f]",
  },
  {
    name: "D · 翡翠绿",
    bg: "bg-[#0a0f0d]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(52,211,153,0.06), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(16,185,129,0.04), transparent)",
    card: "border-[#34d399]/[0.1] bg-[#34d399]/[0.02]",
    accent: "text-[#34d399]",
    accentBg: "bg-[#34d399]/[0.1] border-[#34d399]/20",
    tag: "border-[#34d399]/[0.08] bg-[#34d399]/[0.03] text-[#34d399]/50",
    muted: "text-white/35",
    divider: "bg-[#34d399]/[0.08]",
    iconBtn: "border-[#34d399]/[0.1] bg-[#34d399]/[0.03] text-white/35 hover:text-[#34d399]",
    footer: "border-[#34d399]/[0.08] text-white/25",
    monogram: "text-[#34d399]",
  },
  {
    name: "E · 玫瑰金",
    bg: "bg-[#0f0a0c]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(244,143,177,0.06), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(236,72,153,0.04), transparent)",
    card: "border-[#f48fb1]/[0.1] bg-[#f48fb1]/[0.02]",
    accent: "text-[#f48fb1]",
    accentBg: "bg-[#f48fb1]/[0.1] border-[#f48fb1]/20",
    tag: "border-[#f48fb1]/[0.08] bg-[#f48fb1]/[0.03] text-[#f48fb1]/50",
    muted: "text-white/35",
    divider: "bg-[#f48fb1]/[0.08]",
    iconBtn: "border-[#f48fb1]/[0.1] bg-[#f48fb1]/[0.03] text-white/35 hover:text-[#f48fb1]",
    footer: "border-[#f48fb1]/[0.08] text-white/25",
    monogram: "text-[#f48fb1]",
  },
  {
    name: "F · 赛博霓虹",
    bg: "bg-[#05010d]",
    mesh: "radial-gradient(ellipse 60% 40% at 30% -10%, rgba(0,255,255,0.06), transparent), radial-gradient(ellipse 50% 40% at 70% 110%, rgba(255,0,200,0.05), transparent), radial-gradient(ellipse 40% 30% at 50% 50%, rgba(100,0,255,0.03), transparent)",
    card: "border-[#0ff]/[0.08] bg-[#0ff]/[0.01]",
    accent: "text-[#0ff]",
    accentBg: "bg-[#0ff]/[0.08] border-[#0ff]/20",
    tag: "border-[#0ff]/[0.08] bg-[#0ff]/[0.02] text-[#0ff]/40",
    muted: "text-[#0ff]/25",
    divider: "bg-[#0ff]/[0.06]",
    iconBtn: "border-[#0ff]/[0.1] bg-[#0ff]/[0.02] text-[#0ff]/30 hover:text-[#0ff]",
    footer: "border-[#0ff]/[0.06] text-[#0ff]/20",
    monogram: "text-[#0ff]",
  },
  {
    name: "G · 星际钛灰",
    bg: "bg-[#0c0c10]",
    mesh: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(160,180,220,0.05), transparent), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(100,120,180,0.03), transparent)",
    card: "border-[#a0b4dc]/[0.1] bg-[#a0b4dc]/[0.02] shadow-[0_0_60px_rgba(160,180,220,0.03)]",
    accent: "text-[#c8d6f0]",
    accentBg: "bg-[#a0b4dc]/[0.08] border-[#a0b4dc]/15",
    tag: "border-[#a0b4dc]/[0.08] bg-[#a0b4dc]/[0.03] text-[#a0b4dc]/45",
    muted: "text-[#a0b4dc]/30",
    divider: "bg-[#a0b4dc]/[0.06]",
    iconBtn: "border-[#a0b4dc]/[0.08] bg-[#a0b4dc]/[0.02] text-[#a0b4dc]/30 hover:text-[#c8d6f0]",
    footer: "border-[#a0b4dc]/[0.06] text-[#a0b4dc]/20",
    monogram: "text-[#c8d6f0]",
  },
];

const tags = ["交大 AI MBA", "ZF · Volkswagen", "ASPICE PA", "PMP", "CSM", "TÜV FSP"];

export default function CardPreview() {
  const [idx, setIdx] = useState(0);
  const t = themes[idx];

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4">
      {/* Theme selector */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {themes.map((theme, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`rounded-full px-3 py-1.5 text-xs transition-all ${
              i === idx
                ? "bg-white text-black font-medium"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Card preview */}
      <div
        className={`${t.bg} rounded-3xl p-4 flex items-center justify-center`}
        style={{
          width: 400,
          height: 560,
          backgroundImage: t.mesh,
        }}
      >
        <div className={`w-full max-w-[360px] rounded-3xl border backdrop-blur-xl overflow-hidden ${t.card}`}>
          {/* Header */}
          <div className="px-6 pt-7 pb-5 text-center">
            <div className={`mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] ${t.accentBg}`}>
              <span className={`text-xl font-bold font-mono ${t.monogram}`}>Z</span>
            </div>
            <h1 className={`text-[22px] font-semibold tracking-tight leading-tight ${t.bg.includes("f5f5f7") ? "text-[#1d1d1f]" : "text-white"}`}>
              郑海蛟
            </h1>
            <p className={`text-[13px] mt-0.5 ${t.muted}`}>Haijiao Zheng</p>
            <p className={`text-[13px] font-medium mt-2 ${t.accent}`}>AI 技术创始人 · 镜界纪元</p>
            <p className={`text-[12px] mt-1 ${t.muted}`}>15 年汽车电子 → AI Agent 架构，用 AI 造公司</p>
          </div>

          <div className={`mx-6 h-px ${t.divider}`} />

          {/* Tags */}
          <div className="px-5 py-4 flex flex-wrap justify-center gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-2.5 py-[3px] text-[11px] ${t.tag}`}>{tag}</span>
            ))}
          </div>

          <div className={`mx-6 h-px ${t.divider}`} />

          {/* QR + Actions */}
          <div className="px-5 py-4 flex items-center gap-4">
            <div className="shrink-0 w-[88px] h-[88px] rounded-xl overflow-hidden border border-white/[0.06]">
              <Image src="/wechat-qr.jpg" alt="QR" width={88} height={88} className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-[11px] uppercase tracking-widest mb-2 ${t.muted}`}>公众号 · AI时代漫游指南</p>
              <p className={`text-[11px] mb-3 ${t.muted} opacity-70`}>长按识别关注</p>
              <div className="flex gap-2">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <span key={i} className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${t.iconBtn}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t py-3 text-center text-[12px] ${t.footer}`}>
            mirrorsverse.com
          </div>
        </div>
      </div>

      <p className="mt-4 text-white/30 text-sm">点击上方按钮切换配色</p>
    </div>
  );
}
