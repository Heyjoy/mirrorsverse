"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/dictionaries";

// Sync <html lang> with current locale (root layout sets a default)
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);
  return null;
}
