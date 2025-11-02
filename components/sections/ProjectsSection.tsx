import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Map technology names to their logo file names
const techLogoMap: Record<string, string> = {
  "JavaScript": "/javascript-original.svg",
  "React": "/react-original.svg",
  "TypeScript": "/typescript-original.svg",
  "Next.js": "/nextjs-original.svg",
  "Tailwind CSS": "/tailwindcss-original.svg",
  "Node.js": "/nodejs-original.svg",
  "Express.js": "/express-original.svg",
  "PostgreSQL": "/postgresql-original.svg",
  "MongoDB": "/mongodb-original.svg",
  "Git": "/git-original.svg",
};

export function ProjectsSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="bg-white flex flex-col shadow-sm max-w-[400px] min-h-[356px]">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground md:text-xl">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base leading-relaxed" style={{ color: '#737373' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies
                  .filter((tech) => techLogoMap[tech.name])
                  .map((tech, techIndex) => {
                    const logoPath = techLogoMap[tech.name];
                    return (
                      <div
                        key={techIndex}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white border border-card-border"
                      >
                        <Image
                          src={logoPath}
                          alt={`${tech.name} technology logo used in ${project.title} project`}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 mt-auto mb-2">
              {project.links.map((link, linkIndex) => (
                <Button key={linkIndex} asChild className="mt-auto">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.type === "github" ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    {link.label}
                  </a>
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

