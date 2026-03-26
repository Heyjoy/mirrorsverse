"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const themes = [
  {
    id: "obsidian",
    name: "A · 黑曜石",
    bg: "#08080c",
    mesh: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(139,124,246,0.07), transparent)",
    card: "border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01]",
    title: "text-white",
    accent: "text-[#a899ff]",
    role: "text-white/50",
    tag: "border-white/[0.06] bg-white/[0.025] text-white/45",
    sub: "text-white/30",
    divider: "bg-white/[0.05]",
    iconBtn: "border-white/[0.07] bg-white/[0.025] text-white/35 hover:text-[#a899ff] hover:border-[#a899ff]/30",
    qrBorder: "border-white/[0.06]",
  },
  {
    id: "amber",
    name: "B · 琥珀",
    bg: "#0c0a06",
    mesh: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(234,179,100,0.06), transparent)",
    card: "border-[#eab364]/[0.08] bg-gradient-to-b from-[#eab364]/[0.03] to-transparent",
    title: "text-white",
    accent: "text-[#eab364]",
    role: "text-[#eab364]/40",
    tag: "border-[#eab364]/[0.07] bg-[#eab364]/[0.025] text-[#eab364]/45",
    sub: "text-white/25",
    divider: "bg-[#eab364]/[0.06]",
    iconBtn: "border-[#eab364]/[0.08] bg-[#eab364]/[0.025] text-white/30 hover:text-[#eab364] hover:border-[#eab364]/30",
    qrBorder: "border-[#eab364]/[0.08]",
  },
  {
    id: "frost",
    name: "C · 霜白",
    bg: "#f2f2f5",
    mesh: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,0,0,0.015), transparent)",
    card: "border-black/[0.05] bg-white/90 shadow-[0_2px_40px_rgba(0,0,0,0.06)]",
    title: "text-[#1a1a1f]",
    accent: "text-[#1a1a1f]",
    role: "text-black/40",
    tag: "border-black/[0.06] bg-black/[0.025] text-black/45",
    sub: "text-black/30",
    divider: "bg-black/[0.05]",
    iconBtn: "border-black/[0.06] bg-black/[0.02] text-black/30 hover:text-black/60 hover:border-black/12",
    qrBorder: "border-black/[0.06]",
  },
  {
    id: "emerald",
    name: "D · 翡翠",
    bg: "#060d0a",
    mesh: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(52,211,153,0.05), transparent)",
    card: "border-[#34d399]/[0.08] bg-gradient-to-b from-[#34d399]/[0.025] to-transparent",
    title: "text-white",
    accent: "text-[#5eead4]",
    role: "text-[#34d399]/35",
    tag: "border-[#34d399]/[0.07] bg-[#34d399]/[0.02] text-[#34d399]/45",
    sub: "text-white/25",
    divider: "bg-[#34d399]/[0.06]",
    iconBtn: "border-[#34d399]/[0.08] bg-[#34d399]/[0.02] text-white/30 hover:text-[#5eead4] hover:border-[#34d399]/25",
    qrBorder: "border-[#34d399]/[0.08]",
  },
  {
    id: "rose",
    name: "E · 玫瑰",
    bg: "#0c0608",
    mesh: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(244,143,177,0.05), transparent)",
    card: "border-[#f48fb1]/[0.08] bg-gradient-to-b from-[#f48fb1]/[0.025] to-transparent",
    title: "text-white",
    accent: "text-[#f8bbd0]",
    role: "text-[#f48fb1]/35",
    tag: "border-[#f48fb1]/[0.06] bg-[#f48fb1]/[0.02] text-[#f48fb1]/45",
    sub: "text-white/25",
    divider: "bg-[#f48fb1]/[0.06]",
    iconBtn: "border-[#f48fb1]/[0.08] bg-[#f48fb1]/[0.02] text-white/30 hover:text-[#f8bbd0] hover:border-[#f48fb1]/25",
    qrBorder: "border-[#f48fb1]/[0.08]",
  },
  {
    id: "cyber",
    name: "F · 赛博",
    bg: "#03010a",
    mesh: "radial-gradient(ellipse 50% 35% at 30% -5%, rgba(0,255,255,0.05), transparent), radial-gradient(ellipse 40% 35% at 75% 105%, rgba(255,0,180,0.035), transparent)",
    card: "border-[#0ff]/[0.07] bg-gradient-to-b from-[#0ff]/[0.015] to-[#f0f]/[0.005]",
    title: "text-white",
    accent: "text-[#0ff]",
    role: "text-[#0ff]/30",
    tag: "border-[#0ff]/[0.06] bg-[#0ff]/[0.015] text-[#0ff]/40",
    sub: "text-[#0ff]/20",
    divider: "bg-[#0ff]/[0.05]",
    iconBtn: "border-[#0ff]/[0.07] bg-[#0ff]/[0.015] text-[#0ff]/25 hover:text-[#0ff]/80 hover:border-[#0ff]/25",
    qrBorder: "border-[#0ff]/[0.08]",
  },
  {
    id: "titanium",
    name: "G · 钛金",
    bg: "#09090d",
    mesh: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(160,180,220,0.04), transparent), radial-gradient(ellipse 35% 30% at 80% 90%, rgba(120,140,200,0.025), transparent)",
    card: "border-[#8898b8]/[0.08] bg-gradient-to-b from-[#8898b8]/[0.025] to-transparent shadow-[0_0_40px_rgba(140,160,210,0.025)]",
    title: "text-[#e8eaf0]",
    accent: "text-[#c0ccdd]",
    role: "text-[#8898b8]/40",
    tag: "border-[#8898b8]/[0.07] bg-[#8898b8]/[0.02] text-[#8898b8]/45",
    sub: "text-[#8898b8]/25",
    divider: "bg-[#8898b8]/[0.05]",
    iconBtn: "border-[#8898b8]/[0.07] bg-[#8898b8]/[0.02] text-[#8898b8]/30 hover:text-[#c0ccdd] hover:border-[#8898b8]/20",
    qrBorder: "border-[#8898b8]/[0.08]",
  },
];

const tags = ["交大 AI MBA", "ZF · Volkswagen", "ASPICE PA", "PMP", "CSM", "TÜV FSP"];

export default function CardPreview() {
  const [idx, setIdx] = useState(0);
  const t = themes[idx];

  return (
    <div className="min-h-screen bg-[#050506] flex flex-col items-center justify-center px-4 py-6 gap-5">
      {/* Theme pills — horizontal scroll on mobile */}
      <div className="flex flex-wrap justify-center gap-1.5 max-w-[440px]">
        {themes.map((theme, i) => (
          <button
            key={theme.id}
            onClick={() => setIdx(i)}
            className={`rounded-full px-3 py-1 text-[11px] tracking-wide transition-all duration-200 ${
              i === idx
                ? "bg-white text-black font-medium shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                : "bg-white/[0.06] text-white/40 hover:bg-white/[0.1] hover:text-white/60"
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Card container — simulates phone viewport */}
      <div
        className="rounded-[28px] flex items-center justify-center transition-colors duration-500"
        style={{
          width: 390,
          minHeight: 520,
          padding: 16,
          backgroundColor: t.bg,
          backgroundImage: t.mesh,
        }}
      >
        <div
          className={`w-full rounded-[22px] border backdrop-blur-2xl overflow-hidden transition-all duration-500 ${t.card}`}
        >
          {/* ── Identity block ── */}
          <div className="px-6 pt-7 pb-5">
            <div className="flex items-start gap-4">
              {/* Monogram */}
              <div className="shrink-0 mt-0.5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-current/[0.08] border border-current/[0.12]"
                style={{ color: t.accent.includes("#") ? t.accent.match(/#[0-9a-f]+/i)?.[0] : undefined }}>
                <span className={`text-[18px] font-bold font-mono ${t.accent}`}>Z</span>
              </div>
              {/* Name + titles */}
              <div className="min-w-0">
                <h1 className={`text-[20px] font-semibold tracking-tight leading-none ${t.title}`}>
                  郑海蛟
                </h1>
                <p className={`text-[12px] mt-1 ${t.sub}`}>Haijiao Zheng</p>
                <p className={`text-[13px] font-medium mt-2.5 leading-tight ${t.accent}`}>
                  AI Agent 架构师
                </p>
                <p className={`text-[11px] mt-0.5 tracking-wide ${t.role}`}>
                  创始人 · 北京镜界纪元科技有限公司
                </p>
              </div>
            </div>
            {/* Tagline */}
            <p className={`text-[11.5px] mt-4 leading-relaxed ${t.sub}`}>
              15 年汽车电子 → AI Agent 架构，用 AI 造公司
            </p>
          </div>

          <div className={`mx-5 h-px ${t.divider}`} />

          {/* ── Tags ── */}
          <div className="px-5 py-3.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-2 py-[2.5px] text-[10.5px] leading-none ${t.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className={`mx-5 h-px ${t.divider}`} />

          {/* ── QR + Social ── */}
          <div className="px-5 py-4 flex items-center gap-4">
            <div className={`shrink-0 w-[80px] h-[80px] rounded-[10px] overflow-hidden border ${t.qrBorder}`}>
              <Image
                src="/wechat-qr.jpg"
                alt="公众号二维码"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-2.5">
              <div>
                <p className={`text-[10px] uppercase tracking-[0.15em] ${t.sub}`}>
                  公众号
                </p>
                <p className={`text-[11.5px] mt-0.5 ${t.role}`}>
                  AI时代漫游指南
                </p>
              </div>
              <div className="flex gap-1.5">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-[8px] border transition-all duration-200 ${t.iconBtn}`}
                  >
                    <Icon className="h-3 w-3" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer ── */}
          <div className={`border-t ${t.divider} py-2.5 text-center`}>
            <span className={`text-[10.5px] tracking-wider ${t.sub}`}>
              mirrorsverse.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
