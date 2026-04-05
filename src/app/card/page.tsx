import type { Metadata } from "next";
import { BusinessCard } from "@/components/business-card";

export const metadata: Metadata = {
  title: "郑海蛟 | Haijiao Zheng — AI Agent 架构师",
  description: "15 年汽车电子 → AI Agent 架构师，北京镜界纪元科技有限公司创始人",
};

/** Daylight theme — matches the warm gold /card look */
const daylight = {
  card: "border-[#e0a030]/[0.12] bg-white/90 shadow-[0_2px_40px_rgba(200,160,60,0.08)]",
  title: "text-[#2a2418]",
  accent: "text-[#b07a10]",
  role: "text-[#b07a10]/45",
  tag: "border-[#d4a840]/[0.15] bg-[#d4a840]/[0.05] text-[#8a6a20]/60",
  sub: "text-[#8a6a20]/35",
  divider: "bg-[#d4a840]/[0.1]",
  iconBtn: "border-[#d4a840]/[0.12] bg-[#d4a840]/[0.04] text-[#8a6a20]/40 hover:text-[#b07a10] hover:border-[#d4a840]/25",
  qrBorder: "border-[#d4a840]/[0.12]",
};

export default function CardPage() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        backgroundColor: "#fefcf8",
        backgroundImage: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,180,60,0.06), transparent)",
      }}
    >
      <div className="w-full max-w-[360px]">
        <BusinessCard theme={daylight} linked />
      </div>
    </div>
  );
}
