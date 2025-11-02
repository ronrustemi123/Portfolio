import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalSkillsSection } from "@/components/sections/TechnicalSkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[968px]">
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <TechnicalSkillsSection />
      </div>
    </main>
  );
}

