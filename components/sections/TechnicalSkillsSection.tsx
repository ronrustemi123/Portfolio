import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

// Map skill names to their logo file names
const skillLogoMap: Record<string, string> = {
  "Next.js": "/nextjs-original.svg",
  "React.js": "/react-original.svg",
  "TypeScript": "/typescript-original.svg",
  "Tailwind CSS": "/tailwindcss-original.svg",
  "Node.js": "/nodejs-original.svg",
  "Docker": "/docker-original.svg",
  "AWS": "/aws-original.svg",
  "Express.js": "/express-original.svg",
  "PostgreSQL": "/postgresql-original.svg",
  "MongoDB": "/mongodb-original.svg",
};

export function TechnicalSkillsSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {portfolioData.technicalSkills.map((skill, index) => {
          const logoPath = skillLogoMap[skill.name];
          return (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center bg-white"
            >
              {logoPath && (
                <div className="mb-2 h-8 w-8 flex items-center justify-center">
                  <Image
                    src={logoPath}
                    alt={`${skill.name} technology logo for ${skill.name} development`}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <p className="text-sm font-medium text-foreground">
                {skill.name}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

