import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/dictionaries";
import { LangSync } from "@/components/lang-sync";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isZh = locale === "zh";
  return {
    title: isZh
      ? "镜界纪元 | Mirrorsverse — AI 技术服务"
      : "Mirrorsverse — AI Technology Services",
    description: isZh
      ? "北京镜界纪元科技有限公司 — AI Agent 开发与技术服务"
      : "Beijing Mirrorsverse Technology — AI Agent development and engineering services",
    alternates: {
      canonical: `/${locale}`,
      languages: { zh: "/zh", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <LangSync locale={locale as Locale} />
      {children}
    </>
  );
}
