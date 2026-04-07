"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/dictionaries";

export function LangSwitch({ current }: { current: Locale }) {
  const pathname = usePathname();

  const swap = (target: Locale) => {
    const segs = pathname.split("/");
    if (segs[1] === "zh" || segs[1] === "en") {
      segs[1] = target;
    } else {
      segs.splice(1, 0, target);
    }
    return segs.join("/") || `/${target}`;
  };

  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground/30">/</span>}
          <Link
            href={swap(loc)}
            className={
              loc === current
                ? "text-primary"
                : "text-muted-foreground hover:text-primary transition-colors"
            }
            aria-current={loc === current ? "true" : undefined}
          >
            {loc === "zh" ? "中文" : "EN"}
          </Link>
        </span>
      ))}
    </div>
  );
}
