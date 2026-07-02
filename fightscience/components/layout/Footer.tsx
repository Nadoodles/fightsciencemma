import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <Container className="flex flex-wrap justify-between gap-2 text-[0.85rem] text-text-muted">
        <span>
          &copy; {new Date().getFullYear()} {SITE.name}. Est. {SITE.established}.
        </span>
        <span>Sample concept site — not the live fightsciencemma.com site.</span>
      </Container>
    </footer>
  );
}
