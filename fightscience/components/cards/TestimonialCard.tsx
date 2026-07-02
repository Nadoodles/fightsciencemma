import type { Testimonial } from "@/types/testimonial";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="border border-border-soft bg-card px-7 py-7">
      <p className="text-[1.02rem] text-text italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <cite className="mt-4 block font-head tracking-wide text-accent not-italic">
        &mdash; {testimonial.author}
      </cite>
    </blockquote>
  );
}
