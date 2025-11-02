import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ron Rustemi",
    title: "Computer Science Student",
    location: "Tetovo, North Macedonia",
    about:
      "Computer Science student at South East European University specializing in full-stack web development. Built projects using Next.js, TypeScript, TailwindCSS, and React.js. Passionate about creating beautiful and responsive websites. Experienced in front-end and back-end technologies including Node.js, Express.js, PostgreSQL, and MongoDB. Skilled in teamwork, fast learning, and project leadership.",
  },
  contact: {
    github: "https://github.com/ronrustemi123",
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
      title: "E-commerce",
      description:
        "Built an eCommerce website enabling users to browse and purchase products through an interactive interface. Developed using React JS, Material UI, and CSS to create a responsive and visually appealing shopping experience.",
      technologies: [
        { name: "CSS3", color: "blue" },
        { name: "JavaScript", color: "yellow" },
        { name: "Material-UI", color: "blue" },
        { name: "React", color: "blue" },
        { name: "Vite", color: "purple" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/ronrustemi123/eCommerce",
          label: "GitHub",
        },
        {
          type: "demo",
          url: "https://simple-ecommerce-pi.vercel.app/",
          label: "Live Demo",
        },
      ],
    },
    {
      title: "Token Trace",
      description:
        "A cryptocurrency tracking platform inspired by Binance, built with React and Material UI. Features real-time price tracking, market data visualization, and interactive charts powered by the CoinGecko API. Enables users to monitor cryptocurrency prices, view market trends, and track their favorite digital assets.",
      technologies: [
        { name: "JavaScript", color: "yellow" },
        { name: "React", color: "blue" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/ronrustemi123/TokenTrace",
          label: "GitHub",
        },
        {
          type: "demo",
          url: "https://token-trace.vercel.app/",
          label: "Live Demo",
        },
      ],
    },
  ],
  technicalSkills: [
    { name: "Next.js" },
    { name: "React.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Git" },
  ],
};

