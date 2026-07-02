import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DetailSection({
  id,
  alt = false,
  wide = false,
  image,
  imageAlt,
  children,
  showBackToTop = false,
}: {
  id: string;
  alt?: boolean;
  wide?: boolean;
  image: string;
  imageAlt: string;
  children: ReactNode;
  showBackToTop?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[90px] py-16 md:py-[90px] ${alt ? "bg-bg-alt" : ""}`}
    >
      <Container className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr] lg:gap-[50px]">
        <div
          className={`relative w-full max-w-[280px] overflow-hidden bg-[#202020] md:max-w-none ${
            wide ? "aspect-[3/2]" : "aspect-[3/4]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
        <div>
          {children}
          {showBackToTop && (
            <Button href="#top" variant="outline" size="sm" className="mt-2">
              Back to Top
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
