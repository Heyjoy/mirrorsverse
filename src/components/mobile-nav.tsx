"use client";

import { useState } from "react";
import { LangSwitch } from "./lang-switch";
import type { Locale } from "@/i18n/dictionaries";

export function MobileNav({
  locale,
  items,
}: {
  locale: Locale;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <line x1="2" y1="2" x2="16" y2="12" />
              <line x1="2" y1="12" x2="16" y2="2" />
            </>
          ) : (
            <>
              <line x1="2" y1="2" x2="16" y2="2" />
              <line x1="2" y1="7" x2="16" y2="7" />
              <line x1="2" y1="12" x2="16" y2="12" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl px-6 py-4">
          <nav className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/60">
              <LangSwitch current={locale} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
