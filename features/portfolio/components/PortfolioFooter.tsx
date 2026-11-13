import { PageContainer } from "./PageContainer";

export function PortfolioFooter() {
  return (
    <footer className="border-t border-white/30 bg-[var(--ink)] py-5 text-white">
      <PageContainer className="flex flex-wrap justify-between gap-5 font-[var(--font-mono)] text-[11px]">
        <span>© {new Date().getFullYear()} Muhammad Aidil</span>
        <span>Web Developer · Muhammad Aidil</span>
      </PageContainer>
    </footer>
  );
}

