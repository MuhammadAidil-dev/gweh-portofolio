import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="pengalaman">
      <PageContainer>
        <SectionHeading index="06 / Pengalaman" title="Pengalaman dan kualifikasi." />
        <div className="border-y border-[var(--ink)]">
          <article data-reveal-item="" className="grid grid-cols-1 gap-2 border-b border-[var(--ink)] py-6 md:grid-cols-[minmax(145px,.5fr)_minmax(180px,.8fr)_minmax(0,1.2fr)] md:gap-7">
            <p className="font-[var(--font-mono)] text-sm uppercase tracking-[.055em] text-[#625f54]">
              Sep 2024 — Des 2024<br />· 4 bulan
            </p>
            <div>
              <h3 className="font-[var(--font-display)] text-[21px] font-bold leading-[1.15]">
                Peserta Studi Independen Bersertifikat (SIB)
              </h3>
              <p className="mt-1.5 text-sm">Dicoding Indonesia · Internship · Remote</p>
            </div>
            <div className="text-sm leading-relaxed md:col-start-3">
              <strong className="mb-1 block font-[var(--font-mono)] text-[11px] uppercase tracking-[.055em]">
                Pengalaman
              </strong>
              <p>
                Belajar mengembangkan aplikasi web sesuai standar industri melalui submission dan capstone. Saya juga belajar dari mentor industri dan memperkuat pemahaman tentang pengembangan perangkat lunak profesional.
              </p>
            </div>
          </article>

          <article data-reveal-item="" className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[minmax(145px,.5fr)_minmax(180px,.8fr)_minmax(0,1.2fr)] md:gap-7">
            <p className="font-[var(--font-mono)] text-sm uppercase tracking-[.055em] text-[#625f54]">
              Sertifikat
            </p>
            <div>
              <h3 className="font-[var(--font-display)] text-[21px] font-bold leading-[1.15]">
                Menjadi Front-End Web Developer Expert
              </h3>
              <p className="mt-1.5 text-sm">Sertifikat Kompetensi Kelulusan · Dicoding Indonesia</p>
              <p className="mt-1 text-sm text-[#625f54]">09 November 2024</p>
            </div>
            <div className="text-sm md:col-start-3">
              <strong className="mb-1 block font-[var(--font-mono)] text-[11px] uppercase tracking-[.055em]">
                Verifikasi
              </strong>
              <a
                className="inline-flex min-h-11 items-center underline underline-offset-4"
                href="https://www.dicoding.com/certificates/MRZMYWRO0ZYQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat sertifikat Dicoding ↗
              </a>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}

