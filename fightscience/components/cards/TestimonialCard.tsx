import type { Testimonial } from "@/types/testimonial";

export function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <blockquote
      className={`flex h-full flex-col border border-border-soft bg-card px-7 py-7 ${className}`}
    >
      <p className="text-[1.02rem] text-text italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <cite className="font-head tracking-wide text-accent not-italic">
          &mdash; {testimonial.author}
        </cite>
        {testimonial.url && (
          <a
            href={testimonial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[0.8rem] text-text-muted transition-colors hover:text-accent"
          >
            Google Review &rarr;
          </a>
        )}
      </div>
    </blockquote>
  );
}
