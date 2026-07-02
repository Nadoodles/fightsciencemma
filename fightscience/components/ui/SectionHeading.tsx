import type { ElementType, ReactNode } from "react";

export function SectionHeading({
  children,
  as: Tag = "h2",
  center = false,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  center?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={`font-head text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] uppercase tracking-wide mb-5 ${
        center ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
