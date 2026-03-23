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
  title: "镜界纪元 | Mirrorsverse - AI 技术服务",
  description: "北京镜界纪元科技有限公司 — AI Agent 开发与技术服务",
  metadataBase: new URL("https://mirrorsverse.com"),
  openGraph: {
    title: "Mirrorsverse - AI Technology Services",
    description: "Building Intelligent Systems That Work. AI Agent development, system integration, and technical services.",
    siteName: "Mirrorsverse",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirrorsverse - AI Technology Services",
    description: "Building Intelligent Systems That Work.",
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
