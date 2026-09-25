export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-headline-lg text-brand-navy">{stat.value}</p>
          <p className="mt-1 text-body-md text-on-surface-variant">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
