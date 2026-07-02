export function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="border border-border bg-bg-card rounded-lg px-5 py-7 text-center">
      <span className="block font-head text-4xl text-accent">{num}</span>
      <span className="mt-1.5 block text-[0.85rem] text-text-muted">{label}</span>
    </div>
  );
}
