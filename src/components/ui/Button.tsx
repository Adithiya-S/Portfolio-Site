import React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-hover)] font-semibold shadow-none border-0",
    secondary:
      "bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-hover)] border border-[#2a241e]",
    ghost:
      "bg-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)]",
  };

  const sizeStyles = {
    sm: "text-[13px] px-3.5 py-1.5 min-h-[34px]",
    md: "text-sm px-4 py-2.5 min-h-[42px]",
    lg: "text-base px-6 py-3.5 min-h-[50px]",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
