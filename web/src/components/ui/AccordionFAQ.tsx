function faqSlug(question: string): string {
  return question.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function AccordionFAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="mx-auto max-w-[720px] divide-y divide-divider rounded-xl border border-divider bg-surface-container-lowest">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary data-faq-id={faqSlug(item.question)} className="flex cursor-pointer list-none items-center justify-between gap-4 text-body-md font-semibold text-on-surface marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-brand-navy transition-transform duration-150 group-open:rotate-180"
            >
              ⌄
            </span>
          </summary>
          <p className="mt-3 text-body-md text-on-surface-variant">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
