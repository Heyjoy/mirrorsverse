import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "@/i18n/dictionaries";

// MV-SWR-018: Accept-Language → /zh or /en redirect
function detectLocale(req: NextRequest): string {
  const accept = req.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.toLowerCase().trim() ?? "";
  if (first.startsWith("zh")) return "zh";
  if (first.startsWith("en")) return "en";
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip non-page routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Path already has locale → pass through
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    return NextResponse.next();
  }

  // /card legacy route → keep working without locale prefix (existing business card)
  if (segments[0] === "card") {
    return NextResponse.next();
  }

  // Otherwise: redirect to detected locale
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

export const runtimeLocales = locales; // satisfy unused-import lint if any
