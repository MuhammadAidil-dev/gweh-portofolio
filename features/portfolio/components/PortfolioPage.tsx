import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { PortfolioFooter } from "./PortfolioFooter";
import { PortfolioHeader } from "./PortfolioHeader";
import { ProcessSection } from "./ProcessSection";
import { ProfileSection } from "./ProfileSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServicesSection } from "./ServicesSection";
import { SkillsSection } from "./SkillsSection";
import { ScrollRevealObserver } from "./ScrollRevealObserver";

export function PortfolioPage() {
  return (
    <div className="portfolio-page min-h-screen bg-white text-[var(--ink)]">
      <ScrollRevealObserver />
      <PortfolioHeader />
      <main id="beranda">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <ProfileSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}

