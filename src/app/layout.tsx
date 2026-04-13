import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "镜界纪元 | Mirrorsverse — 做出来的，不是讲出来的",
  description: "北京镜界纪元科技有限公司 — 智能体工程，从编码到上线运维全程负责",
  metadataBase: new URL("https://mirrorsverse.com"),
  openGraph: {
    title: "镜界纪元 Mirrorsverse — 做出来的，不是讲出来的",
    description: "智能体落地到真实业务。从编码到上线运维，同一批人负责到底。",
    siteName: "Mirrorsverse",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "镜界纪元 Mirrorsverse",
    description: "智能体工程，做出来的不是讲出来的。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
