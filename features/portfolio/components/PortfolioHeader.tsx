import { PageContainer } from "./PageContainer";

const navigation = [
  { label: "Proyek", href: "#karya" },
  { label: "Layanan", href: "#layanan" },
  { label: "Profil", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <PageContainer className="flex min-h-[72px] items-center justify-between gap-6 max-md:min-h-0 max-md:flex-wrap max-md:gap-x-4 max-md:gap-y-1 max-md:py-3">
        <a
          className="inline-flex min-h-10 items-center font-[var(--font-mono)] text-[13px] font-bold tracking-[.04em]"
          href="#beranda"
        >
          MUHAMMAD AIDIL / PORTOFOLIO
        </a>
        <nav aria-label="Navigasi utama" className="flex items-center gap-[clamp(16px,3vw,38px)] text-sm max-md:w-full max-md:justify-between max-md:gap-1 max-md:text-xs">
          {navigation.map((item) => (
            <a className="inline-flex min-h-11 items-center" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </PageContainer>
    </header>
  );
}

