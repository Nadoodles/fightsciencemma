import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { SITE, FOOTER_SITEMAP, FOOTER_RESOURCES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo/logo.png"
                alt=""
                width={36}
                height={35}
                className="h-9 w-auto"
              />
              <span className="font-head text-2xl tracking-wide">
                FIGHT<span className="text-accent">SCIENCE</span> MMA
              </span>
            </Link>

            <p className="mt-5 text-text-muted">{SITE.address}</p>
            <p className="mt-2">
              <a href={`tel:${SITE.phoneHref}`} className="text-text hover:text-accent">
                {SITE.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${SITE.email}`} className="text-text hover:text-accent">
                {SITE.email}
              </a>
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-head text-lg tracking-wide">Sitemap</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_SITEMAP.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-text-muted hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-head text-lg tracking-wide">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_RESOURCES.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-text-muted hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-head text-lg tracking-wide">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Fight Science MMA on Facebook"
                    className="flex h-11 w-11 items-center justify-center bg-card text-text transition-colors hover:bg-accent hover:text-white"
                  >
                    <SocialIcon name="facebook" className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Fight Science MMA on Instagram"
                    className="flex h-11 w-11 items-center justify-center bg-card text-text transition-colors hover:bg-accent hover:text-white"
                  >
                    <SocialIcon name="instagram" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] w-full overflow-hidden border border-border-soft lg:min-h-0">
            <iframe
              title="Fight Science MMA location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              className="absolute inset-0 h-full w-full border-0 grayscale invert-[92%]"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-[0.85rem] text-text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
