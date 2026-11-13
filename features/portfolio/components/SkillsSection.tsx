import { technologyGroups } from "../data/portfolio-content";
import { PageContainer } from "./PageContainer";
import { SectionHeading } from "./SectionHeading";
import { TechnologyLogo } from "./TechnologyLogo";

export function SkillsSection() {
  return (
    <section className="py-[clamp(76px,10vw,136px)]" id="keahlian">
      <PageContainer>
        <SectionHeading
          index="01 / Ringkasan keahlian"
          title="Teknologi yang saya gunakan."
          description="Teknologi dan tools yang saya gunakan untuk merancang, membangun, dan mengelola aplikasi web."
        />
        <div className="grid grid-cols-1 border-l border-t border-[var(--ink)] sm:grid-cols-2">
          {technologyGroups.map((group, index) => (
            <article data-reveal-item="" className="min-h-[176px] border-b border-r border-[var(--ink)] bg-white/80 p-[clamp(18px,2.4vw,28px)]" key={group.title}>
              <header className="flex items-center gap-3">
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center bg-[var(--accent)] font-[var(--font-mono)] text-[11px] font-bold">
                  {"0" + (index + 1)}
                </span>
                <h3 className="font-[var(--font-display)] text-xl font-bold leading-tight tracking-[-.035em]">{group.title}</h3>
              </header>
              <ul aria-label={group.label} className="mt-[23px] flex flex-wrap gap-x-[22px] gap-y-3 p-0">
                {group.items.map((item) => (
                  <li className="inline-flex min-h-9 items-center gap-[9px] text-sm" key={item.name}>
                    <TechnologyLogo name={item.logo} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

