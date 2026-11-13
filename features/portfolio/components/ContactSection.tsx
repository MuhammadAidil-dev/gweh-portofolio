import { PageContainer } from "./PageContainer";

const contacts = [
  { label: "muhammad.aidil09767@gmail.com", href: "mailto:muhammad.aidil09767@gmail.com" },
  { label: "GitHub ↗", href: "https://github.com/MuhammadAidil-dev", external: true },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/muhammad-aidil-71871233a", external: true },
];

export function ContactSection() {
  return (
    <section className="bg-[var(--ink)] py-[clamp(72px,9vw,116px)] text-white" id="kontak">
      <PageContainer className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
        <div data-reveal-item="">
          <p className="mb-6 inline-flex w-fit bg-[var(--accent)] px-[9px] py-[6px] font-[var(--font-mono)] text-xs uppercase tracking-[.075em] text-[var(--ink)]">
            07 / Kontak
          </p>
          <h2 className="max-w-[620px] font-[var(--font-display)] text-[clamp(38px,5.7vw,68px)] font-bold leading-[.99] tracking-[-.06em]">
            Mari wujudkan proyek web Anda.
          </h2>
        </div>
        <div data-reveal-item="" className="max-w-[38ch] text-white/90">
          <p>Saya terbuka untuk membahas pengembangan website, fitur baru, dan peluang kolaborasi.</p>
          <p className="mt-3.5">Kirim ringkasan kebutuhan Anda lewat email, atau lihat profil profesional saya.</p>
          <div className="mt-[26px] flex flex-wrap gap-x-6 gap-y-2.5">
            {contacts.map((contact) => (
              <a
                className="inline-flex min-h-11 items-center font-[var(--font-mono)] text-[13px] underline underline-offset-4"
                href={contact.href}
                key={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
          <a
            className="mt-6 inline-flex min-h-12 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-[19px] font-[var(--font-mono)] text-[13px] font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#d1b600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-sm:px-[13px] max-sm:text-[11px]"
            href="mailto:muhammad.aidil09767@gmail.com"
          >
            Kirim email ↗
          </a>
        </div>
      </PageContainer>
    </section>
  );
}

