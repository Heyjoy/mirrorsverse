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
      ? "镜界纪元 | Mirrorsverse — 工程师做的，不是顾问讲的"
      : "Mirrorsverse — Engineered, not pitched",
    description: isZh
      ? "北京镜界纪元科技有限公司 — 把模型接进真实业务的小型工程团队"
      : "Beijing Mirrorsverse — a small engineering team wiring models into real workflows",
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
