import { processSteps } from "../data/portfolio-content";
import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="proses">
      <PageContainer>
        <SectionHeading
          index="04 / Cara kerja"
          title="Alur kerja yang jelas dari awal hingga serah terima."
          description="Setiap tahap punya tujuan dan hasil yang bisa ditinjau bersama."
        />
        <ol className="process-flow grid grid-cols-1 gap-7 p-0 xl:grid-cols-4">
          {processSteps.map((step) => (
            <li data-reveal-item="" className="process-step relative flex min-h-[300px] min-w-0 flex-col border border-[var(--border)] bg-[var(--surface)] p-5" key={step.number}>
              <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                <span className="grid h-[38px] w-[38px] shrink-0 place-items-center border border-[var(--ink)] bg-[var(--accent)] font-[var(--font-mono)] text-xs font-bold">
                  {step.number}
                </span>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[.08em] text-[#625f54]">Tahap {step.number}</span>
              </div>
              <h3 className="mt-[22px] font-[var(--font-display)] text-[clamp(19px,2vw,24px)] font-bold leading-[1.08] tracking-[-.035em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#514f47]">{step.description}</p>
              <div className="mt-auto grid gap-1.5 pt-[18px]">
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[.08em] text-[#625f54]">Hasil</span>
                <strong className="font-[var(--font-mono)] text-xs uppercase leading-relaxed">{step.output}</strong>
              </div>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}

