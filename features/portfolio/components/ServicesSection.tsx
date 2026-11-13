import { services } from "../data/portfolio-content";
import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";

function ServiceIcon({ type }: { type: (typeof services)[number]["icon"] }) {
  return (
    <span className="grid h-[38px] w-[38px] place-items-center border border-[var(--border)] bg-white text-[var(--ink)]" aria-hidden="true">
      <svg className="h-[19px] w-[19px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
        {type === "browser" ? (
          <>
            <rect x="3" y="4" width="18" height="16" rx="1" />
            <path d="M3 8h18M7 6h.01M10 6h.01" />
          </>
        ) : type === "layout" ? (
          <>
            <rect x="3" y="4" width="18" height="16" rx="1" />
            <path d="M3 9h18M9 9v11" />
          </>
        ) : (
          <>
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
          </>
        )}
      </svg>
    </span>
  );
}

export function ServicesSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="layanan">
      <PageContainer>
        <SectionHeading
          index="03 / Layanan"
          title="Solusi web untuk kebutuhan bisnis."
          description="Saya membantu membangun fitur web dari antarmuka hingga integrasi backend."
        />
        <div className="services-flow relative border-t border-[var(--ink)]" aria-label="Layanan pengembangan web">
          {services.map((service, index) => (
            <article
              data-reveal-item=""
              className={"relative grid min-h-[126px] grid-cols-[44px_minmax(220px,.85fr)_minmax(0,1.15fr)_40px] items-center gap-[clamp(16px,2.4vw,30px)] border-b border-[var(--ink)] px-[18px] py-[22px] max-md:grid-cols-[42px_minmax(0,1fr)_38px] max-md:gap-x-[14px] max-md:gap-y-1.5 max-md:px-2 max-md:py-[18px] max-md:min-h-0 " + (index === 1 ? "bg-[var(--surface)]" : "")}
              key={service.number}
            >
              <span className="relative z-10 col-start-1 row-start-1 grid h-[42px] w-[42px] place-items-center border border-[var(--ink)] bg-[var(--accent)] font-[var(--font-mono)] text-[11px] font-bold shadow-[inset_0_0_0_4px_rgba(255,255,255,.45)] max-md:h-[38px] max-md:w-[38px]">
                {service.number}
              </span>
              <div className="min-w-0 max-md:col-start-2 max-md:row-start-1">
                <span className="mb-[7px] block font-[var(--font-mono)] text-[10px] uppercase tracking-[.07em] text-[#625f54]">{service.category}</span>
                <h3 className="font-[var(--font-display)] text-[clamp(19px,2.1vw,25px)] font-bold leading-tight tracking-[-.04em]">{service.title}</h3>
              </div>
              <p className="text-sm text-[#514f47] max-md:col-start-2 max-md:row-start-2">{service.description}</p>
              <ServiceIcon type={service.icon} />
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

