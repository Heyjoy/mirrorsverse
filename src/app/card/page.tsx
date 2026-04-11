import type { Metadata } from "next";
import { BusinessCard } from "@/components/business-card";

export const metadata: Metadata = {
  title: "郑海蛟 | Haijiao Zheng — 镜界纪元",
  description: "北京镜界纪元科技有限公司创始人，智能体工程",
};

/** Dark theme — matches main site tokens */
const dark = {
  card: "border-border bg-[oklch(0.14_0.015_270)] shadow-[0_2px_40px_rgba(0,0,0,0.3)]",
  title: "text-foreground",
  accent: "text-warm",
  role: "text-primary/60",
  tag: "border-border bg-primary/[0.06] text-muted-foreground/70",
  sub: "text-muted-foreground/50",
  divider: "bg-border",
  iconBtn: "border-border bg-primary/[0.04] text-muted-foreground/50 hover:text-primary hover:border-primary/30",
  qrBorder: "border-border",
};

export default function CardPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-[360px]">
        <BusinessCard theme={dark} linked />
      </div>
    </div>
  );
}
