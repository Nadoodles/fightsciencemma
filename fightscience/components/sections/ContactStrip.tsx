import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function ContactStrip() {
  return (
    <section className="border-t border-border bg-bg-alt py-16 md:py-[90px]">
      <Container className="flex flex-wrap items-center justify-between gap-7">
        <div className="max-w-[480px]">
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading className="mb-2">Come Train With Us</SectionHeading>
          <p className="mb-0 text-text-muted">
            Your first class is on us. Reach out and we&rsquo;ll get you set up with a free
            trial class.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button href={`mailto:${SITE.email}`} variant="outline" size="sm">
            {SITE.email}
          </Button>
          <Button href={`tel:${SITE.phoneHref}`} variant="outline" size="sm">
            {SITE.phone}
          </Button>
          <Button
            href={`mailto:${SITE.email}?subject=Free%20Trial%20Request`}
            variant="accent"
            size="lg"
          >
            Request Your Free Trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
