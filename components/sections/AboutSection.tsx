import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="px-4 pb-8 pt-0 md:px-8 lg:px-16">
      <p className="text-base  text-muted leading-relaxed max-w-3xl" style={{ color: '#737373', fontSize: '16px' }}>
        {portfolioData.personal.about}
      </p>
    </section>
  );
}

