import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-full bg-background text-foreground bg-mesh">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-8xl font-bold font-mono text-accent-gradient sm:text-9xl">
          404
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          This page doesn&apos;t exist yet.
        </p>
        <p className="mt-1 text-sm text-muted-foreground/50">
          页面不存在
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_oklch(0.65_0.15_270_/_25%)] hover:scale-[1.02]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
}
