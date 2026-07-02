import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Coach } from "@/types/coach";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="border border-border-soft bg-card px-6 py-7 text-center transition-colors hover:border-accent">
      <div className="relative mb-[18px] h-[340px] w-full overflow-hidden bg-[#202020]">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>
      <h3 className="font-head text-[1.4rem] leading-tight tracking-wide">{coach.name}</h3>
      <p className="mb-2.5 font-head text-[0.85rem] tracking-wide text-accent">{coach.role}</p>
      <p className="mb-4 text-[0.92rem] text-text-muted">{coach.bioPreview}</p>
      <Button href={`/coaches#${coach.slug}`} variant="outline" size="sm">
        Full Bio &rarr;
      </Button>
    </article>
  );
}
