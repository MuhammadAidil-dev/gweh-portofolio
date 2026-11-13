import Image from "next/image";
import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";

const projectFacts = [
  {
    label: "Kebutuhan",
    detail: "Memantau armada, transaksi sewa, pembayaran, dan jadwal servis dari satu tempat.",
  },
  {
    label: "Modul utama",
    detail: "Motor, customer, penyewaan, pembayaran, servis, dan laporan operasional.",
  },
  {
    label: "Teknologi",
    detail: "Next.js, TypeScript, Tailwind CSS, Express.js, dan PostgreSQL.",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="karya">
      <PageContainer>
        <SectionHeading
          index="02 / Proyek pilihan"
          title="Proyek yang saya kerjakan."
          description="Aplikasi web yang saya bangun untuk membantu kebutuhan operasional bisnis."
        />
        <div className="border-y border-[var(--ink)]">
          <article className="grid grid-cols-1 items-center gap-[clamp(24px,5vw,64px)] border-b border-[var(--ink)] py-[clamp(26px,4vw,42px)] last:border-b-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
            <figure data-reveal-item="" className="m-0 min-w-0 overflow-hidden border border-[var(--border)] bg-white p-2">
              <Image
                src="/cv-intrans-dashboard.png"
                alt="Dashboard Backoffice CV Indragiri Trans Center"
                width={1920}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="project-preview-image block h-auto w-full object-cover object-left-top"
              />
            </figure>
            <div className="min-w-0">
              <div data-reveal-item="" className="mb-5 flex flex-wrap items-center justify-between gap-2.5">
                <span className="font-[var(--font-mono)] text-[11px] tracking-[.06em] text-[#605d53]">01 / SISTEM OPERASIONAL</span>
                <span className="bg-[var(--accent)] px-[9px] py-1.5 font-[var(--font-mono)] text-[11px] uppercase tracking-[.04em]">Sudah digunakan klien</span>
              </div>
              <h3 data-reveal-item="" className="font-[var(--font-display)] text-[clamp(23px,2.7vw,34px)] font-bold leading-[1.08] tracking-[-.045em]">
                Backoffice CV INDRAGIRI TRANS CENTER
              </h3>
              <p data-reveal-item="" className="mt-[13px] max-w-[58ch] text-sm text-[#514f47]">
                Backoffice untuk membantu tim mengelola armada, penyewaan, pembayaran, servis, dan laporan operasional.
              </p>
              <dl className="mt-[22px] grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-[18px] sm:grid-cols-2 sm:gap-x-[22px]">
                {projectFacts.map((fact, index) => (
                  <div data-reveal-item="" className={index === 2 ? "sm:col-span-2" : ""} key={fact.label}>
                    <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[.055em] text-[#625f54]">{fact.label}</dt>
                    <dd className="mt-[5px] text-[13px] leading-relaxed">{fact.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}

