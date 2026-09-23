export function NumberedStep({
  index,
  title,
  caption,
}: {
  index: number;
  title: string;
  caption?: string;
}) {
  return (
    <div className="rounded-xl border border-divider bg-surface-container-lowest p-6">
      <p className="text-headline-lg text-outline-variant">{String(index).padStart(2, "0")}</p>
      <h3 className="mt-2 text-body-md font-semibold text-on-surface">{title}</h3>
      {caption && <p className="mt-1 text-caption text-on-surface-variant">{caption}</p>}
    </div>
  );
}
