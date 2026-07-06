import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProgramIcon } from "@/components/ui/ProgramIcon";
import { CoachCard } from "@/components/cards/CoachCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { programs } from "@/lib/programs";
import { coaches } from "@/lib/coaches";
import { testimonials } from "@/lib/testimonials";
import { SITE } from "@/lib/constants";

const programBenefits: Record<string, string> = {
  "mma-striking":
    "Build sharp hands, kicks, defense, footwork, and fight-ready conditioning.",
  "brazilian-jiu-jitsu":
    "Learn ground control, escapes, submissions, and practical self-defense.",
  "fighter-fit":
    "Train like a fighter with scalable strength and cardio circuits.",
  "kids-classes":
    "Confidence, discipline, anti-bullying skills, and respectful competition.",
  "mma-team-training":
    "Invite-only training for amateur and professional fighters.",
};

const featuredCoachSlugs = ["ian-harris", "julian-rush", "leo-hirai"];

const proofPoints = [
  {
    stat: "2003",
    label: "Fight Science method begins",
  },
  {
    stat: "75%",
    label: "Fight team win rate",
  },
  {
    stat: "2017",
    label: "Mid-City LA gym opens",
  },
];

const whyPoints = [
  "Scientific, technical coaching instead of random workouts.",
  "Beginner-friendly room with experienced fighters training alongside everyday members.",
  "MMA, BJJ, striking, kids classes, fitness, and team training under one roof.",
  "A family-friendly culture built around humility, accountability, and respect.",
];

export default function Home() {
  const featuredCoaches = coaches.filter((coach) =>
    featuredCoachSlugs.includes(coach.slug),
  );
  const featuredReviews = testimonials.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-0 py-[120px] md:py-0">
        <Image
          src="/images/front.jpg"
          alt="Fight Science coach cornering a fighter before a bout"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(8,8,8,.92) 0%, rgba(8,8,8,.76) 36%, rgba(8,8,8,.42) 100%)",
          }}
        />
        <Container className="relative z-[2] max-w-[720px]">
          <Eyebrow>Mid-City Los Angeles</Eyebrow>
          <h1 className="mb-7 font-head text-[clamp(4rem,9vw,7rem)] leading-[0.92] tracking-wide">
            Train Smarter. Fight Better.
          </h1>
          <p className="max-w-[580px] text-[1.15rem] text-text-muted">
            MMA, Brazilian Jiu-Jitsu, Striking &amp; Fitness taught with a
            scientific, technical, no-ego approach by a fight team that has
            produced champions for more than two decades.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/free-trial" variant="accent" size="lg">
              Start Your Free Trial
            </Button>
            <Button href="/#programs" variant="ghost" size="lg">
              Explore Programs
            </Button>
          </div>
        </Container>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section id="programs" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <SectionHeading>Programs</SectionHeading>
            </div>
            <p className="max-w-2xl text-text-muted lg:justify-self-end">
              Whether you are starting from zero, getting your kid into martial
              arts, chasing fitness, or preparing to compete, Fight Science has
              a clear training lane for you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="group overflow-hidden border border-border-soft bg-card transition-colors hover:border-accent"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
                  <Image
                    src={program.image}
                    alt={`${program.title} training at Fight Science MMA`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-accent">
                    <ProgramIcon name={program.icon} className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-head text-3xl tracking-wide">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-text-muted">
                    {programBenefits[program.slug]}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-11 text-center">
            <Button href="/programs" variant="accent" size="lg">
              View Program Details &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* WHY FIGHT SCIENCE */}
      <section
        id="why-fight-science"
        className="scroll-mt-[90px] bg-bg-alt py-16 md:py-[90px]"
      >
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
          <div>
            <Eyebrow>Why Fight Science</Eyebrow>
            <SectionHeading>This Isn&apos;t Random Martial Arts</SectionHeading>
            <p className="mb-6 text-text-muted">
              The Fight Science method began in 2003 when Ian Harris started
              teaching a realistic self-defense system built from Boxing, Muay
              Thai, Brazilian Jiu-Jitsu, Wrestling, Jeet Kune Do, Kenpo, Wing
              Chun, and years of fight-team coaching.
            </p>
            <p className="mb-8 text-text-muted">
              The goal is simple: teach practical fighting, fitness, and
              self-protection through technical coaching, humility, and a
              family-friendly team culture.
            </p>
            <Button href="/free-trial" variant="outline">
              Find Your First Class
            </Button>
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-3 gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point.stat}
                  className="border border-border-soft bg-card p-5"
                >
                  <span className="block font-head text-4xl text-accent">
                    {point.stat}
                  </span>
                  <span className="mt-2 block text-sm text-text-muted">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="border border-border-soft bg-card p-6">
              <ul className="space-y-4">
                {whyPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-text-muted">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED COACHES */}
      <section id="team" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>Led By The Original Team</Eyebrow>
              <SectionHeading>Featured Coaches</SectionHeading>
            </div>
            <p className="max-w-2xl text-text-muted lg:justify-self-end">
              Ian, Julian, and Leo represent the roots of Fight Science: the
              method, the fight team, and the gym culture that still shape the
              room today.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCoaches.map((coach) => (
              <CoachCard key={coach.slug} coach={coach} />
            ))}
          </div>

          <div className="mt-11 text-center">
            <Button href="/coaches" variant="outline" size="lg">
              Meet The Full Team &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="scroll-mt-[90px] bg-bg-alt py-16 md:py-[90px]"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>Google Reviews</Eyebrow>
              <SectionHeading>
                <span>Trusted By Families, Fighters & Beginners</span>
              </SectionHeading>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredReviews.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FREE TRIAL CTA */}
      <section id="free-trial" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container className="grid grid-cols-1 items-center gap-10 border border-border-soft bg-card p-8 md:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow>Ready To Start?</Eyebrow>
            <SectionHeading>Try Your First Class Free</SectionHeading>
            <p className="max-w-2xl text-text-muted">
              Tell us what you&apos;re looking for and Fight Science will help
              you find the right first class. You can also call{" "}
              <a
                className="text-text hover:text-accent"
                href={`tel:${SITE.phoneHref}`}
              >
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a
                className="text-text hover:text-accent"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
          <Button href="/free-trial" size="lg" className="text-center">
            Request Free Trial
          </Button>
        </Container>
      </section>
    </>
  );
}
