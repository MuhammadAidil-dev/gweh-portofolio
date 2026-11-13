export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div data-reveal-item="" className="mb-8 grid grid-cols-1 items-start gap-4 md:mb-12 md:grid-cols-[1fr_2fr] md:gap-8">
      <p className="inline-flex w-fit bg-[var(--accent)] px-[9px] py-[6px] font-[var(--font-mono)] text-xs uppercase tracking-[0.075em]">
        {index}
      </p>
      <div>
        <h2 className="max-w-[760px] font-[var(--font-display)] text-[clamp(38px,5.7vw,68px)] font-bold leading-[.99] tracking-[-.06em]">
          {title}
        </h2>
        {description ? (
          <p className="mt-[18px] max-w-[52ch] text-[#514f47]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

