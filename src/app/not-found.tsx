import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-5 sm:px-8 text-center bg-[var(--bg)] text-[var(--ink)]">
      <div className="max-w-md space-y-6">
        <span className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)]">
          Page not found.
        </h1>
        <p className="text-base text-[#dedbd6] leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-ink)] font-semibold text-sm transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
