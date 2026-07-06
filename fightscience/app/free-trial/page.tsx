import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FreeTrialForm } from "@/components/forms/FreeTrialForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Trial",
  description:
    "Request a free trial class at Fight Science MMA in Mid-City Los Angeles.",
};

const expectations = [
  "Tell us your goals and experience level.",
  "We will point you toward the right first class.",
  "Come in, meet the coaches, and train with no pressure.",
];

export default function FreeTrialPage() {
  return (
    <>
      <section className="bg-bg-alt py-16 md:py-[90px]">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[60px]">
          <div>
            <Eyebrow>Start Here</Eyebrow>
            <SectionHeading>Request a Free Trial</SectionHeading>
            <p className="mb-6 max-w-xl text-lg text-text-muted">
              New to MMA, coming back to training, or looking for a serious team?
              Send a quick note and Fight Science will help you find the right
              first class.
            </p>

            <div className="border border-border-soft bg-card p-6">
              <p className="mb-4 font-head text-2xl tracking-wide">
                What happens next
              </p>
              <ul className="space-y-4 text-text-muted">
                {expectations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-text-muted">
              Prefer direct contact? Call{" "}
              <a className="text-text hover:text-accent" href={`tel:${SITE.phoneHref}`}>
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a className="text-text hover:text-accent" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </div>
          </div>

          <FreeTrialForm />
        </Container>
      </section>
    </>
  );
}
