import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ron Rustemi",
    title: "Computer Science Student",
    location: "Tetovo, North Macedonia",
    about:
      "I'm a full-stack JavaScript developer from Tetovo, North Macedonia, currently pursuing a Computer Science degree at South East European University. I specialize in building modern web applications using React, Next.js, and TypeScript for the front-end, and Node.js with Express.js for the back-end. My expertise includes database management with both SQL (PostgreSQL, Oracle) and NoSQL (MongoDB) databases. I've developed responsive, scalable web applications including eCommerce platforms, cryptocurrency tracking systems like TokenTrace, and various open-source projects. Passionate about creating beautiful, performant user interfaces with Tailwind CSS and delivering end-to-end full-stack solutions.",
  },
  contact: {
    github: "https://github.com/ronrustemi123",
    linkedin: "https://www.linkedin.com/in/ronrustemi",
  },
  workExperience: [
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
