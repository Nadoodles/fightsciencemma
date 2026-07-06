"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-[rgba(11,11,13,0.92)] backdrop-blur-md">
      <Container className="flex h-[78px] items-center justify-between">
        <Link href="/" className="font-head text-2xl tracking-wide" onClick={() => setOpen(false)}>
          FIGHT<span className="text-accent">SCIENCE</span> MMA
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span className="h-0.5 w-6 bg-text" />
          <span className="h-0.5 w-6 bg-text" />
          <span className="h-0.5 w-6 bg-text" />
        </button>

        <nav
          className={`font-head tracking-wide
            max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-[78px] max-sm:flex-col max-sm:items-start max-sm:gap-0 max-sm:border-b max-sm:border-border max-sm:bg-bg-alt max-sm:overflow-hidden
            ${open ? "max-sm:max-h-[400px]" : "max-sm:max-h-0"}
            flex items-center gap-8`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-muted transition-colors hover:text-text max-sm:w-full max-sm:border-b max-sm:border-border max-sm:px-6 max-sm:py-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="max-sm:w-full max-sm:px-6 max-sm:py-4">
            <Button
              href="/free-trial"
              size="sm"
              className="max-sm:block max-sm:w-full max-sm:text-center"
              onClick={() => setOpen(false)}
            >
              Free Trial
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
