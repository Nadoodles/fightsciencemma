import type { ProgramIconName } from "@/types/program";
import type { ReactNode } from "react";

const icons: Record<ProgramIconName, ReactNode> = {
  striking: (
    <>
      <path
        d="M14 22c0-6 4-10 10-10s10 4 10 10v6c0 5-4 9-10 9s-10-4-10-9v-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 24l-6 2v6l6 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  bjj: (
    <>
      <circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M24 11v26M11 24h26" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  fit: (
    <path
      d="M10 24h4M34 24h4M14 18v12M34 18v12M18 24h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  kids: (
    <>
      <circle cx="24" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 34c0-6 4.5-10 10-10s10 4 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  team: (
    <>
      <path
        d="M16 8h16v6a8 8 0 01-16 0V8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 10h-4a4 4 0 004 4M32 10h4a4 4 0 01-4 4M24 22v8M18 34h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

export function ProgramIcon({
  name,
  className = "",
}: {
  name: ProgramIconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}
