import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { QuickNav } from "@/components/sections/QuickNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "MMA Striking, Brazilian Jiu-Jitsu, Fighter-Fit, Kids Classes and MMA Team Training at Fight Science MMA in Mid-City Los Angeles.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="pb-12 pt-16 md:pt-[90px]">
        <Container narrow>
          <Eyebrow>Train With Us</Eyebrow>
          <SectionHeading as="h1">Programs</SectionHeading>
          <p className="text-text-muted">
            Full details and photos for every program at Fight Science MMA.
          </p>
          <Button href="/#programs" variant="outline" size="sm" className="mt-2">
            &larr; Back to Programs
          </Button>
        </Container>
      </section>

      <QuickNav items={programs.map((p) => ({ slug: p.slug, label: p.title }))} />

      {programs.map((program, i) => (
        <DetailSection
          key={program.slug}
          id={program.slug}
          alt={i % 2 === 1}
          image={program.image}
          imageAlt={program.title}
          showBackToTop
        >
          <h2 className="font-head text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] uppercase tracking-wide mb-5">
            {program.title}
          </h2>
          {program.description.map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-[1.02rem] text-text-muted">
              {paragraph}
            </p>
          ))}
          {program.note && (
            <p className="-mt-2 mb-5 text-[0.85rem] italic text-text-muted">{program.note}</p>
          )}
          <Button href={program.cta.href} variant="accent" size="sm">
            {program.cta.label}
          </Button>

          {program.callout && (
            <div className="mt-7 border border-border-soft border-l-4 border-l-accent bg-card p-6">
              <Eyebrow>{program.callout.eyebrow}</Eyebrow>
              <p className="mb-5 text-[1.02rem] text-text-muted">{program.callout.body}</p>
              <Button href={program.callout.cta.href} variant="outline" size="sm">
                {program.callout.cta.label}
              </Button>
            </div>
          )}
        </DetailSection>
      ))}

      <ContactStrip />
    </>
  );
}
