export interface ContactInfo {
  github: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  technologies?: string[];
  logo?: string; // Path to logo image
}

export interface Education {
  institution: string;
  degree?: string;
  program?: string;
  startDate: string;
  endDate: string;
  location: string;
  certificate?: string;
  logo?: string; // Path to logo image
}

export interface ProjectLink {
  type: "github" | "demo";
  url: string;
  label: string;
}

export interface TechnologyBadge {
  name: string;
  icon?: string;
  color?: "blue" | "yellow" | "purple";
}

export interface Project {
  title: string;
  description: string;
  technologies: TechnologyBadge[];
  links: ProjectLink[];
}

export interface TechnicalSkill {
  name: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  about: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  contact: ContactInfo;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  technicalSkills: TechnicalSkill[];
}

