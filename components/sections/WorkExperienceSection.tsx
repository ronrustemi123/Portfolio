"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export function WorkExperienceSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        Work Experience
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.workExperience.map((experience, index) => (
          <WorkExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}

function WorkExperienceItem({ experience, index }: { experience: typeof portfolioData.workExperience[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {experience.logo && (
              <div className="flex-shrink-0">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} company logo - Frontend Developer position`}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="mb-2">
                <p className="text-sm text-muted md:text-base">
                  {experience.startDate} - {experience.endDate}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted">
                  <MapPin className="h-3 w-3" />
                  <span>{experience.location}</span>
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                {experience.company}
              </h3>
              <p className="mb-3 text-base text-muted text-foreground">
                {experience.role}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#737373' }}>
                {experience.description}
              </p>
              {experience.technologies && experience.technologies.length > 0 && (
                <p className="mt-3 text-sm text-muted">
                  Tech: {experience.technologies.join(", ")}
                </p>
              )}
            </div>
        </div>
        {index < portfolioData.workExperience.length - 1 && (
          <hr className="mt-8 border-card-border" />
        )}
      </div>
    </motion.div>
  );
}

