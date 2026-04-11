import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { cardOwner, orgs, certs } from "@/lib/card-data";

export interface CardTheme {
  title: string;
  accent: string;
  role: string;
  tag: string;
  sub: string;
  divider: string;
  iconBtn: string;
  qrBorder: string;
  card: string;
}

interface BusinessCardProps {
  theme: CardTheme;
  /** Render social icons as links (true) or static spans (false, for preview) */
  linked?: boolean;
}

function extractHexColor(className: string): string | undefined {
  const match = className.match(/text-\[?(#[0-9a-fA-F]{3,8})\]?/);
  return match?.[1];
}

export function BusinessCard({ theme: t, linked = true }: BusinessCardProps) {
  const accentHex = extractHexColor(t.accent);

  return (
    <div className={`w-full rounded-[22px] border backdrop-blur-2xl overflow-hidden ${t.card}`}>
      {/* ── Identity ── */}
      <div className="px-6 pt-7 pb-5">
        <div className="flex items-start gap-4">
          <div
            className="shrink-0 mt-0.5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-current/[0.08] border border-current/[0.12]"
            style={accentHex ? { color: accentHex } : undefined}
          >
            <span className={`text-[18px] font-bold font-mono ${t.accent}`}>{cardOwner.monogram}</span>
          </div>
          <div className="min-w-0">
            <h1 className={`text-[20px] font-semibold tracking-tight leading-none ${t.title}`}>
              {cardOwner.name}
            </h1>
            <p className={`text-[12px] mt-1 ${t.sub}`}>{cardOwner.nameEn}</p>
            <p className={`text-[13px] font-medium mt-2.5 leading-tight ${t.accent}`}>
              {cardOwner.role}
            </p>
            <p className={`text-[11px] mt-0.5 tracking-wide ${t.role}`}>
              {cardOwner.org}
            </p>
          </div>
        </div>
        <p className={`text-[11.5px] mt-4 leading-relaxed ${t.sub}`}>
          {cardOwner.tagline}
        </p>
      </div>

      <div className={`mx-5 h-px ${t.divider}`} />

      {/* ── Tags ── */}
      <div className="px-5 py-3.5 flex flex-col gap-2">
        <div className="flex flex-wrap gap-1.5">
          {orgs.map((tag) => (
            <span key={tag} className={`rounded-full border px-2 py-[2.5px] text-[10.5px] leading-none ${t.tag}`}>{tag}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {certs.map((tag) => (
            <span key={tag} className={`rounded-full border px-2 py-[2.5px] text-[10.5px] leading-none ${t.tag}`}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={`mx-5 h-px ${t.divider}`} />

      {/* ── QR + Social ── */}
      <div className="px-5 py-4 flex items-center gap-4">
        <div className={`shrink-0 w-[80px] h-[80px] rounded-[10px] overflow-hidden border ${t.qrBorder}`}>
          <Image src="/wechat-qr.jpg" alt="公众号二维码" width={80} height={80} className="object-cover" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
          <div>
            <p className={`text-[10px] uppercase tracking-[0.15em] ${t.sub}`}>公众号</p>
            <p className={`text-[11.5px] mt-0.5 ${t.role}`}>{cardOwner.wechatPublic}</p>
          </div>
          <div className="flex gap-1.5">
            {linked ? (
              <>
                <IconLink href={cardOwner.github} icon={<Github className="h-3 w-3" />} className={t.iconBtn} />
                <IconLink href={cardOwner.linkedin} icon={<Linkedin className="h-3 w-3" />} className={t.iconBtn} />
                <IconLink href={`mailto:${cardOwner.email}`} icon={<Mail className="h-3 w-3" />} className={t.iconBtn} />
              </>
            ) : (
              [Github, Linkedin, Mail].map((Icon, i) => (
                <span key={i} className={`inline-flex h-7 w-7 items-center justify-center rounded-[8px] border transition-all duration-200 ${t.iconBtn}`}>
                  <Icon className="h-3 w-3" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      {linked ? (
        <a href="/zh" className={`block border-t ${t.divider} py-2.5 text-center text-[10.5px] tracking-wider ${t.sub} transition-colors hover:opacity-70`}>
          {cardOwner.site}
        </a>
      ) : (
        <div className={`border-t ${t.divider} py-2.5 text-center`}>
          <span className={`text-[10.5px] tracking-wider ${t.sub}`}>{cardOwner.site}</span>
        </div>
      )}
    </div>
  );
}

function IconLink({ href, icon, className }: { href: string; icon: React.ReactNode; className: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex h-7 w-7 items-center justify-center rounded-[8px] border transition-all duration-200 ${className}`}>
      {icon}
    </a>
  );
}
