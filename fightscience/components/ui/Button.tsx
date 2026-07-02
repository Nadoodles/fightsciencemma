import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "outline" | "ghost";
type Size = "default" | "sm" | "lg";

const base =
  "inline-block font-head border-2 uppercase tracking-[2px] font-bold cursor-pointer transition-transform duration-150 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  accent: "bg-accent border-accent text-white hover:bg-accent-hover",
  outline: "border-accent text-accent hover:bg-accent hover:text-white",
  ghost: "border-white/40 text-white hover:border-white",
};

const sizes: Record<Size, string> = {
  default: "px-7 py-3 text-[0.95rem]",
  sm: "px-5 py-2.5 text-[0.85rem]",
  lg: "px-9 py-4 text-[1.05rem]",
};

export function Button({
  href,
  variant = "accent",
  size = "default",
  className = "",
  onClick,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternalLike =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternalLike) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
