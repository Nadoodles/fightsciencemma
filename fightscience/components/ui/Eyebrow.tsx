import type { ReactNode } from "react";

export function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`mb-2.5 font-head text-[0.85rem] tracking-[4px] text-accent ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
