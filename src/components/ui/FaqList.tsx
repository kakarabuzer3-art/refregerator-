export type Faq = { readonly question: string; readonly answer: string };

/** Native <details> accordion: keyboard accessible with no JavaScript. Open item highlights. */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="faq glass glass-interactive rounded-2xl"
        >
          <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 py-3 text-lg font-medium text-white">
            {item.question}
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-[var(--ink-soft)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
