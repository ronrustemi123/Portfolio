import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ron Rustemi",
    title: "Computer Science Student",
    location: "Tetovo, North Macedonia",
    about: "Full-stack developer based in Tetovo, North Macedonia and Computer Science student at South East European University. I build modern, scalable web applications using React, Next.js, TypeScript, and Node.js. Experienced with SQL and NoSQL databases, I focus on creating performant, responsive interfaces and delivering end-to-end solutions.",
  },
  contact: {
    github: "https://github.com/ronrustemi123",
    linkedin: "https://www.linkedin.com/in/ronrustemi",
  },
  workExperience: [
    {
      company: "Longrun",
      role: "Full-Stack Developer Internship",
      startDate: "Apr 2026",
      endDate: "Present",
      location: "Düsseldorf, Germany • Remote",
      description:
      "Building and shipping features for a productivity app helping young men reduce screen time and pursue meaningful goals. Working directly with the founder and designer to implement Figma designs into a React web app, integrate Claude API for AI-driven goal setting and coaching, and optimize a Supabase database for user and content data. Iterating on features based on real user feedback and interviews.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Stripe"
      ],
      logo: "/longrun.png", // Add your logo
    },
    {
      company: "Blinkr",
      role: "Founder & Full-Stack Developer",
      startDate: "Dec 2025",
      endDate: "Present",
      location: "Tetovo, North Macedonia",
      description:
      "Founded and developed a peer-to-peer CS2 skill competition platform from concept to production, serving 50+ active users with 150+ matches completed. Built full-stack application with real-time lobby system (SSE), cryptocurrency payment integration (NOWPayments), automated server provisioning (DatHost API), and PostgreSQL-backed session management, deployed on Fly.io and Vercel.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker"
      ],
      logo: "/blinkr.svg", // Add your logo
    },
    {
      company: "Local Act",
      role: "Frontend Developer",
      startDate: "Mar 2025",
      endDate: "Oct 2025",
      location: "Tetovo, North Macedonia",
      description:
        "Led the design and development of the ongoing project website for LOKAL AKT, aligning with the organization’s mission to promote sustainable local development and civic participation. I was responsible for structuring the site’s content, designing user-friendly navigation, and implementing features such as a project archive with filtering, a donor logo showcase, an online membership form, and a photo gallery.",
      logo: "/locat_act.png",
    },
    {
      company: "ART Driving School",
      role: "Frontend Developer",
      startDate: "Nov 2024",
      endDate: "Mar 2025",
      location: "Skopje",
      description:
      "Developed the front end of a full-stack management system for driving schools using React and Vite. Built responsive UI components, implemented data integration with backend APIs, and optimized performance for smooth scheduling, student tracking, and instructor management experiences.",
      technologies: [
        "React",
        "Vite",
        "JavaScript (ES6+)",
        "CSS",
        "REST APIs",
        "Git",
      ],
      logo: "/art.png",
    },
  ],
  education: [
    {
      institution: "South East European University",
      degree: "Bachelor of Computer Science",
      startDate: "Sep 2025",
      endDate: "May 2029",
      location: "Tetovo, North Macedonia",
      logo: "/seeu.jpg",
    },
    {
      institution: "Avenga Academy",
      program: "Academy for Programming",
      startDate: "Oct 2024",
      endDate: "Sep 2025",
      location: "Skopje, North Macedonia",
      certificate: "Official CPD Certificate",
      logo: "/avenga.jpg",
    },
    {
      institution: "KEITCademy",
      program: "Front-end Developer Bootcamp",
      startDate: "Jul 2023",
      endDate: "Sep 2023",
      location: "Tetovo, North Macedonia",
      logo: "/keit.png",
    },
  ],
  projects: [
    {
      title: "Blinkr",
      description:
      "Peer-to-peer CS2 skill competition platform with crypto stakes. Built real-time lobby system (SSE), payment integration (NOWPayments), automated server provisioning (DatHost), and PostgreSQL wallet system with transaction locking. Deployed on Fly.io and Vercel serving 50+ users.",
      technologies: [
        { name: "React", color: "blue" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "blue" },
        { name: "Node.js", color: "green" },
        { name: "Express.js", color: "green" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Docker", color: "blue" },
      ],
      links: [
        {
          type: "demo",
          url: "https://playblinkr.com",
          label: "Live Platform",
        },
      ]
    },
    {
      title: "DailyDraft",
      description:
        "A full-stack auto-generated blog application that continuously publishes fresh AI-generated articles. The frontend is built with React, and the backend uses Node.js + Express with a daily article generator powered by an AI text API. All services are fully containerized using Docker and deployed on AWS with an automated CI/CD pipeline using CodeBuild, ECR, and EC2.",
      technologies: [
        { name: "React", color: "blue" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "blue" },
        { name: "Node.js", color: "green" },
        { name: "Docker", color: "blue" },
        { name: "AWS", color: "orange" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/ronrustemi123/Technical-Test-Assimetria",
          label: "GitHub",
        },
        {
          type: "demo",
          url: "http://16.171.253.245/",
          label: "Live Demo",
        },
      ],
    },
    {
      title: "VibeStrings",
      description:
        "A 3-page guitar shop application built with Next.js 15 and Apollo Client, fetching data from a GraphQL API. This project demonstrates GraphQL integration, filtering, pagination, and UI best practices.",
      technologies: [
        { name: "Next.js", color: "yellow" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "blue" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/ronrustemi123/VibeStrings",
          label: "GitHub",
        },
        {
          type: "demo",
          url: "https://vibe-strings.vercel.app/",
          label: "Live Demo",
        },
      ],
    },
  ],
  technicalSkills: [
    { name: "Next.js" },
    { name: "React.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
  ],
};
