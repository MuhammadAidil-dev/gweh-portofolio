import Image from "next/image";
import { PageContainer } from "./PageContainer";

export function HeroSection() {
  return (
    <section className="hero-section pb-16 pt-[clamp(20px,3vw,48px)] sm:pb-20">
      <PageContainer className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,.7fr)] lg:gap-[clamp(36px,7vw,96px)]">
        <div>
          <p className="hero-entry hero-entry-1 mb-[26px] font-[var(--font-mono)] text-xs uppercase tracking-[.075em]">
            Muhammad Aidil · Web Developer
          </p>
          <h1 className="hero-entry hero-entry-2 max-w-[760px] font-[var(--font-display)] text-[clamp(54px,8.2vw,104px)] font-bold leading-[.93] tracking-[-.075em]">
            Solusi digital <mark className="text-mark">tepat guna</mark>.
          </h1>
          <p className="hero-entry hero-entry-3 mt-[26px] max-w-[54ch] text-[clamp(17px,1.8vw,20px)] leading-relaxed">
            Saya Muhammad Aidil, web developer yang membangun website dan aplikasi sesuai kebutuhan bisnis.
          </p>
          <div className="hero-entry hero-entry-4 mt-8 flex flex-wrap gap-3 max-sm:gap-2">
            <a
              className="inline-flex min-h-12 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-[19px] font-[var(--font-mono)] text-[13px] font-bold transition duration-150 hover:-translate-y-0.5 hover:bg-[#d1b600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] max-sm:px-[13px] max-sm:text-[11px]"
              href="#karya"
            >
              Lihat Proyek
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-[var(--ink)] px-[19px] font-[var(--font-mono)] text-[13px] font-bold transition duration-150 hover:-translate-y-0.5 hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] max-sm:px-[13px] max-sm:text-[11px]"
              href="#kontak"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <figure className="hero-visual relative isolate mx-auto w-full max-w-[350px] overflow-visible justify-self-start lg:justify-self-end">
          <svg className="hero-circuit absolute -inset-x-[13%] -top-[7%] z-0 h-[103%] w-[126%] overflow-visible" viewBox="0 0 440 560" preserveAspectRatio="none" aria-hidden="true">
            <path d="M8 126h74V82h104M258 112h92v54h82M7 402h96v-48h48M300 390h98v-68h36"></path>
            <circle cx="82" cy="126" r="4"></circle>
            <circle cx="350" cy="166" r="4"></circle>
            <circle cx="103" cy="354" r="4"></circle>
            <circle cx="398" cy="322" r="4"></circle>
          </svg>

          <div className="absolute right-[-11%] top-[9%] z-[1] w-[174px] border border-[var(--muted)] bg-[#fffef7] px-3 pb-3 pt-[10px] font-[var(--font-mono)] text-[10px] leading-[1.4] text-[var(--ink)] max-sm:right-[-2%] max-sm:top-[8%] max-sm:w-36">
            <div className="mb-2 flex items-center gap-2 border-b border-[var(--border)] pb-2 text-[#777365]">
              <span className="flex gap-[3px]" aria-hidden="true">
                <i className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></i>
                <i className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]"></i>
                <i className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]"></i>
              </span>
              <span>app.ts</span>
            </div>
            <p className="grid grid-cols-[20px_34px_1fr] gap-1 py-0.5 whitespace-nowrap text-[#596b78]">
              <span className="text-[#929083]">01</span><b className="text-[#8a6f00]">const</b><em className="not-italic"> app = {"{"}</em>
            </p>
            <p className="grid grid-cols-[20px_34px_1fr] gap-1 py-0.5 whitespace-nowrap text-[#596b78]">
              <span className="text-[#929083]">02</span><span></span><em className="not-italic"> build: "web",</em>
            </p>
            <p className="grid grid-cols-[20px_34px_1fr] gap-1 py-0.5 whitespace-nowrap text-[#596b78]">
              <span className="text-[#929083]">03</span><span></span><em className="not-italic"> status: "ready"</em>
            </p>
            <p className="grid grid-cols-[20px_34px_1fr] gap-1 py-0.5 whitespace-nowrap text-[#596b78]">
              <span className="text-[#929083]">04</span><em className="not-italic">{"};"}</em>
            </p>
          </div>

          <div className="absolute bottom-[24%] left-[-9%] z-20 inline-flex items-center gap-2 border border-[var(--ink)] bg-white px-[11px] py-[9px] font-[var(--font-mono)] text-[10px] tracking-[.04em] max-sm:bottom-[22%] max-sm:left-[-1%]">
            <span className="h-[7px] w-[7px] rounded-full border border-[var(--ink)] bg-[var(--accent)]"></span>
            <span>API</span><span className="text-sm text-[var(--muted)]">↔</span><span>DATABASE</span>
          </div>

          <Image
            src="/muhammad-aidil-cutout.png"
            alt="Potret Muhammad Aidil"
            width={1086}
            height={1448}
            priority
            sizes="(max-width: 1024px) 320px, 350px"
            className="relative z-10 block h-auto w-full object-contain"
          />
          <figcaption className="mt-2 flex justify-between gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[.075em]">
            <span>Profil</span><span>Web Developer</span>
          </figcaption>
        </figure>
      </PageContainer>
    </section>
  );
}

