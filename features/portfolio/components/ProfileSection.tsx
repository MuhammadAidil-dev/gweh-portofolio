import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";
import { profileSkills } from "../data/portfolio-content";

export function ProfileSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="tentang">
      <PageContainer>
        <SectionHeading index="05 / Profil" title="Profil dan pengalaman." />
        <div className="profile-editorial grid grid-cols-1 gap-[clamp(24px,5vw,64px)] border-t border-[var(--ink)] pt-6 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)]">
          <div data-reveal-item="" className="profile-intro relative flex min-h-[410px] flex-col justify-between overflow-hidden bg-[var(--accent)] p-[clamp(24px,4vw,42px)] max-md:min-h-[300px]">
            <span className="relative z-10 font-[var(--font-mono)] text-[11px] uppercase tracking-[.07em]">Profil / Pendekatan</span>
            <div className="relative z-10 mt-auto pt-[60px]">
              <h3 className="max-w-[9ch] font-[var(--font-display)] text-[clamp(36px,5vw,62px)] font-bold leading-[.98] tracking-[-.065em]">
                Saya membangun website untuk kebutuhan bisnis.
              </h3>
              <p className="profile-index pt-5 font-[var(--font-mono)] text-[11px] uppercase tracking-[.06em]">Pendekatan · Fokus · Hasil</p>
            </div>
          </div>

          <div className="max-w-[740px] self-center">
            <p data-reveal-item="" className="text-[clamp(15px,1.35vw,17px)] leading-[1.6]">
              Saya membangun website dan aplikasi web untuk membantu bisnis menjalankan proses kerja dengan lebih teratur. Saya memulai proyek dengan memahami kebutuhan dan alur kerja pengguna, lalu menerjemahkannya menjadi fitur yang jelas dan mudah digunakan.
            </p>
            <p data-reveal-item="" className="mt-4 text-[clamp(15px,1.35vw,17px)] leading-[1.6]">
              Salah satu proyek yang saya kerjakan adalah Backoffice CV Indragiri Trans Center. Aplikasi ini telah digunakan klien untuk mengelola armada, penyewaan, pembayaran, servis, dan laporan operasional.
            </p>
            <p data-reveal-item="" className="mt-4 text-[clamp(15px,1.35vw,17px)] leading-[1.6]">
              Pada September–Desember 2024, saya mengikuti Studi Independen Bersertifikat (SIB) di Dicoding Indonesia. Saya mengerjakan submission dan capstone, serta belajar dari mentor industri.
            </p>

            <article data-reveal-item="" className="mt-[22px] grid grid-cols-[38px_minmax(0,1fr)] gap-3.5 border border-[var(--ink)] bg-[var(--surface)] p-4">
              <span className="grid h-[38px] w-[38px] place-items-center border border-[var(--ink)] bg-[var(--accent)]" aria-hidden="true">
                <svg className="h-[19px] w-[19px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
                  <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
                </svg>
              </span>
              <div>
                <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[.06em] text-[#625f54]">Penghargaan · 31 Desember 2024</span>
                <h4 className="mt-[7px] text-[17px] font-bold leading-tight tracking-[-.025em]">Capstone Project Terbaik · SIKOSA</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-[#514f47]">
                  Proyek tim CS7-F001 terpilih sebagai Capstone Project Terbaik pada Program SIB Dicoding–Kampus Merdeka Angkatan 7.
                </p>
                <a className="mt-1 inline-flex min-h-11 items-center font-[var(--font-mono)] text-[11px] underline underline-offset-4" href="/capstone-project-terbaik.pdf" target="_blank" rel="noopener noreferrer">
                  Lihat sertifikat ↗
                </a>
              </div>
            </article>

            <div data-reveal-item="" className="mt-5 border-t border-[var(--border)] pt-4">
              <span className="mb-2.5 block font-[var(--font-mono)] text-[10px] uppercase tracking-[.06em] text-[#625f54]">Teknologi dan tools</span>
              <div className="flex flex-wrap gap-[7px]">
                {profileSkills.map((skill) => (
                  <span className="border border-[var(--border)] bg-[var(--surface)] px-2 py-[5px] font-[var(--font-mono)] text-[10px]" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

