import { ProgramIcon } from "@/components/ui/ProgramIcon";
import type { Program } from "@/types/program";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="border border-border-soft bg-card px-7 py-8 transition-colors hover:border-accent">
      <ProgramIcon name={program.icon} className="mb-4 h-12 w-12 text-accent" />
      <h3 className="font-head text-[1.4rem] leading-tight tracking-wide">{program.title}</h3>
    </article>
  );
}
