"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        Education
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.education.map((edu, index) => (
          <EducationItem key={index} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
}

function EducationItem({ edu, index }: { edu: typeof portfolioData.education[0], index: number }) {
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
            {edu.logo && (
              <div className="flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="mb-2">
                <p className="text-sm text-muted md:text-base">
                  {edu.startDate} - {edu.endDate}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted">
                  <MapPin className="h-3 w-3" />
                  <span>{edu.location}</span>
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                {edu.institution}
              </h3>
              {(edu.degree || edu.program) && (
                <p className="mb-0 text-base text-muted text-foreground">
                  {edu.degree || edu.program}
                </p>
              )}
              {edu.certificate && (
                <p className="mb-0 text-base text-muted text-foreground">{edu.certificate}</p>
              )}
            </div>
        </div>
        {index < portfolioData.education.length - 1 && (
          <hr className="mt-8 border-card-border" />
        )}
      </div>
    </motion.div>
  );
}

