import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function QuickNav({ items }: { items: { slug: string; label: string }[] }) {
  return (
    <nav className="border-y border-border bg-bg-alt" aria-label="Jump to section">
      <Container className="flex flex-wrap gap-2.5 py-5">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`#${item.slug}`}
            className="border border-border px-4 py-2 font-head text-[0.85rem] tracking-wide text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </nav>
  );
}
