import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { personal, contact } = portfolioData;

  return (
    <header className="flex flex-col items-start px-4 pt-16 pb-8 md:px-8 lg:px-16">
      <div className="flex flex-col gap-1 mb-8">
        <h1 className="text-4xl font-bold text-foreground  md:text-4xl lg:text-5xl">
          {personal.name}
        </h1>
        <p className="text-lg text-foreground mt-2 md:text-xl">
          {personal.title}
        </p>
        <p className="text-base text-foreground mt-3 md:text-lg">
          {personal.location}
        </p>
        <p className="text-base flex items-center gap-1.5 text-muted text-foreground md:text-base">
          <Mail size={18} />
          ronrustemii@gmail.com
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button asChild>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </header>
  );
}

