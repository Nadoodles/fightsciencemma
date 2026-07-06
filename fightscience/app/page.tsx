import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { CoachCard } from "@/components/cards/CoachCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { programs } from "@/lib/programs";
import { coaches } from "@/lib/coaches";
import { testimonials } from "@/lib/testimonials";
import { SITE } from "@/lib/constants";

export default function Home() {
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
              "linear-gradient(90deg, rgba(8,8,8,.92) 0%, rgba(8,8,8,.75) 35%, rgba(8,8,8,.45) 100%)",
          }}
        />
        <Container className="relative z-[2] max-w-[640px]">
          <h1 className="mb-7 font-head text-[clamp(4rem,9vw,7rem)] leading-[0.92] tracking-wide">
            Fight Science MMA
          </h1>
          <p className="max-w-[560px] text-[1.15rem] text-text-muted">
            MMA, Brazilian Jiu-Jitsu, Striking &amp; Fitness, taught with a
            scientific, technical, no-ego approach by a fight team that has
            produced champions from Tijuana to the UFC.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Button href="/#contact" variant="accent" size="lg">
              Start Your Free Trial
            </Button>
            <Button href="/#programs" variant="ghost" size="lg">
              See Programs
            </Button>
          </div>
        </Container>
      </section>

      {/* METHOD / SCIENTIFIC APPROACH */}
      <section className="bg-bg-alt py-16 md:py-[90px]">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-[60px]">
          <div>
            <Eyebrow>Technical &amp; Scientific Methods</Eyebrow>
            <SectionHeading>The Science of Fighting</SectionHeading>
            <p className="mb-4 text-text-muted">
              We have spent decades studying and refining the techniques of
              fighting, striking, grappling, weight-loss, self-defense, mental
              toughness, and fitness. We are perpetual students of all these
              things and approach each of them from a scientific, fact-based,
              and intellectual point of view.
            </p>
            <p className="mb-4 text-text-muted">
              Our goal is a family-friendly gym in our neighborhood that teaches
              cutting-edge, scientifically proven methods of self-protection,
              fighting and fitness &mdash; promoting health, humility,
              self-respect, and respect for others, while continuing to build
              the best MMA fight team in the world.
            </p>
            <Button href="/#contact" variant="outline">
              Request Info
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <StatCard num="2003" label="Est. under Coach Ian Harris" />
            <StatCard num="75%" label="Fight team win rate" />
            <StatCard num="20+" label="Years producing champions" />
            <StatCard num="2017" label="Mid-City LA gym opens" />
          </div>
        </Container>
      </section>

      {/* HISTORY / ABOUT US */}
      <section id="history" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[380px_1fr] lg:gap-[50px]">
          <div className="w-full max-w-[280px] md:max-w-none lg:sticky lg:top-[110px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#202020] md:aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-180px)] lg:max-h-[640px]">
              <Image
                src="/images/temp.jpg"
                alt="Fight Science coach cornering a fighter before a bout"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading>Our Story</SectionHeading>
            <p className="mb-4 text-[1.05rem] text-text-muted">
              The Fight Science method began in 2003. Ian Harris began teaching
              his hybrid, martial arts compiled from years of training Boxing,
              Muay Thai, Brazilian Jiu-Jitsu, Wrestling, Jeet Kune Do, Kenpo,
              Wing Chun and many other martial arts as a realistic self-defense
              class out of a karate school in Culver City, CA. UFC and what we
              know of today as Mixed Martial Arts (MMA) was still in very early
              stages, with very few rules and no actual name for the sport (MMA
              had not been popularized).
            </p>
            <p className="mb-4 text-[1.05rem] text-text-muted">
              Ian, being a &ldquo;science nerd&rdquo; always took a very
              scientific, technical approach to fighting and felt what he was
              teaching was less an art and more a science, so he began calling
              his style &ldquo;Fight Science.&rdquo; Several students expressed
              an interest to fight, but MMA was not yet legal in California.
              Several of the students and Ian would travel to Tijuana on
              weekends to fight. Shortly thereafter the term MMA was popularized
              and it became legal and sanctioned in California. Two of those
              original students Chad George and Julian Rush eventually became 2
              of the first champions under California-sanctioned MMA.
            </p>
            <p className="mb-4 text-[1.05rem] text-text-muted">
              Julian and Ian have maintained a strong relationship and continued
              to refine and coach for nearly 15 years and over the years have
              had fighters in every major and local organization there is,
              producing several champions both pro and amateur, for shows like
              RFA, CXF, Tachi Palace, BAMMA, U of MMA, Spar Star, TFA and many
              more. In Aug 2017, they along with another one of the early
              students and fighters, Leo Hirai, opened the first ever Fight
              Science gym in Mid City, L.A.
            </p>
          </div>
        </Container>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container>
          <Eyebrow center>Train With Us</Eyebrow>
          <SectionHeading center>Programs</SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>

          <div className="mt-11 text-center">
            <Button href="/programs" variant="accent" size="lg">
              View All Programs &amp; Photos &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="scroll-mt-[90px] bg-bg-alt py-16 md:py-[90px]"
      >
        <Container>
          <Eyebrow center>Meet Our Team</Eyebrow>
          <SectionHeading center>Coaches &amp; Fighters</SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <CoachCard key={coach.slug} coach={coach} />
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="scroll-mt-[90px] py-16 md:py-[90px]"
      >
        <Container>
          <Eyebrow center>What Others Have To Say</Eyebrow>
          <SectionHeading center>Reviews</SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.author}
                className={
                  i === testimonials.length - 1 && testimonials.length % 2 === 1
                    ? "md:col-span-2"
                    : undefined
                }
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-[90px] py-16 md:py-[90px]">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
          <div>
            <Eyebrow>Get Started</Eyebrow>
            <SectionHeading>Come Train With Us</SectionHeading>
            <p className="text-text-muted">
              Your first class is on us. Reach out and we&rsquo;ll get you set
              up with a free trial class.
            </p>
            <ul className="mb-8 mt-6 list-none">
              <li className="flex flex-col gap-0.5 border-b border-border py-3.5">
                <strong className="font-head text-[0.85rem] tracking-wide text-accent">
                  Email
                </strong>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-text hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex flex-col gap-0.5 border-b border-border py-3.5">
                <strong className="font-head text-[0.85rem] tracking-wide text-accent">
                  Call
                </strong>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="text-text hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex flex-col gap-0.5 border-b border-border py-3.5">
                <strong className="font-head text-[0.85rem] tracking-wide text-accent">
                  Find Us
                </strong>
                <span className="text-text-muted">{SITE.address}</span>
              </li>
            </ul>
            <Button
              href={`mailto:${SITE.email}?subject=Free%20Trial%20Request`}
              size="lg"
            >
              Request Your Free Trial
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-border bg-bg-card">
            <iframe
              title="Fight Science MMA location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                SITE.address,
              )}&output=embed`}
              className="h-full w-full border-0"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
