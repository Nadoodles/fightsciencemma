import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { QuickNav } from "@/components/sections/QuickNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { coaches } from "@/lib/coaches";

export const metadata: Metadata = {
  title: "Coaches & Fighters",
  description:
    "Full biographies for the coaches and fighters behind Fight Science MMA in Mid-City Los Angeles.",
};

export default function CoachesPage() {
  return (
    <>
      <section className="pb-12 pt-16 md:pt-[90px]">
        <Container narrow>
          <Eyebrow>Meet Our Team</Eyebrow>
          <SectionHeading as="h1">Coaches &amp; Fighters</SectionHeading>
          <p className="text-text-muted">
            Full biographies for the coaches and fighters behind Fight Science MMA.
          </p>
          <Button href="/#team" variant="outline" size="sm" className="mt-2">
            &larr; Back to Team
          </Button>
        </Container>
      </section>

      <QuickNav items={coaches.map((c) => ({ slug: c.slug, label: c.name }))} />

      {coaches.map((coach, i) => (
        <DetailSection
          key={coach.slug}
          id={coach.slug}
          alt={i % 2 === 1}
          image={coach.image}
          imageAlt={coach.name}
          showBackToTop
        >
          <h2 className="font-head text-[clamp(2.4rem,6vw,4rem)] leading-[1.1] uppercase tracking-wide">
            {coach.name}
          </h2>
          <p className="mb-5 font-head text-[0.85rem] tracking-wide text-accent">
            {coach.role}
          </p>
          {coach.bio.map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-[1.02rem] text-text-muted">
              {paragraph}
            </p>
          ))}
        </DetailSection>
      ))}

      <ContactStrip />
    </>
  );
}
