import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ron Rustemi - Full-Stack JavaScript Developer | React, Next.js, TypeScript Expert | North Macedonia",
  description: "Professional full-stack JavaScript developer from Tetovo, North Macedonia. Specialized in React, Next.js, TypeScript, Node.js, and Express.js. Experienced in building scalable web applications with PostgreSQL, MongoDB, and Tailwind CSS. View portfolio projects including TokenTrace, eCommerce platforms, and open-source contributions.",
  keywords: [
    "full-stack JavaScript developer",
    "full-stack developer North Macedonia",
    "front-end React developer",
    "React TypeScript developer",
    "Next.js developer",
    "JavaScript developer Tetovo",
    "web developer North Macedonia",
    "Node.js developer",
    "Express.js developer",
    "React developer North Macedonia",
    "NextJS TypeScript developer",
    "Tailwind CSS developer",
    "PostgreSQL MongoDB developer",
    "full-stack web developer Tetovo",
    "web development services North Macedonia",
    "JavaScript portfolio developer",
    "eCommerce web application developer",
  ],
  authors: [{ name: "Ron Rustemi" }],
  creator: "Ron Rustemi",
  openGraph: {
    title: "Ron Rustemi - Full-Stack JavaScript Developer | North Macedonia",
    description: "Professional full-stack JavaScript developer specializing in React, Next.js, TypeScript, Node.js, and Express.js. Building modern web applications from Tetovo, North Macedonia.",
    url: "https://ronrustemi.vercel.app",
    siteName: "Ron Rustemi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ron Rustemi - Full-Stack JavaScript Developer",
    description: "Full-stack JavaScript developer from North Macedonia. React, Next.js, TypeScript, Node.js expert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ron Rustemi",
    jobTitle: "Full-Stack JavaScript Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tetovo",
      addressCountry: "MK",
    },
    email: "ronrustemii@gmail.com",
    url: "https://ronrustemi.vercel.app",
    sameAs: [
      "https://github.com/ronrustemi123",
      "https://ronrustemi.vercel.app",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Full-Stack Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "South East European University",
    },
  };

  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

