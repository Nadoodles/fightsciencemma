import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-6 ${narrow ? "max-w-[780px]" : "max-w-[1180px]"} ${className}`}
    >
      {children}
    </div>
  );
}
