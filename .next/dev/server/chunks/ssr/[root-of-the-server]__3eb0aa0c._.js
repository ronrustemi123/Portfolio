module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolioData",
    ()=>portfolioData
]);
const portfolioData = {
    personal: {
        name: "Ron Rustemi",
        title: "Computer Science Student",
        location: "Tetovo, North Macedonia",
        about: "Full-stack developer based in Tetovo, North Macedonia and Computer Science student at South East European University. I build modern, scalable web applications using React, Next.js, TypeScript, and Node.js. Experienced with SQL and NoSQL databases, I focus on creating performant, responsive interfaces and delivering end-to-end solutions."
    },
    contact: {
        github: "https://github.com/ronrustemi123",
        linkedin: "https://www.linkedin.com/in/ronrustemi"
    },
    workExperience: [
        {
            company: "Longrun",
            role: "Full-Stack Developer Internship",
            startDate: "Apr 2026",
            endDate: "Present",
            location: "Düsseldorf, Germany • Remote",
            description: "Building and shipping features for a productivity app helping young men reduce screen time and pursue meaningful goals. Working directly with the founder and designer to implement Figma designs into a React web app, integrate Claude API for AI-driven goal setting and coaching, and optimize a Supabase database for user and content data. Iterating on features based on real user feedback and interviews.",
            technologies: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Supabase",
                "Stripe"
            ],
            logo: "/longrun.png"
        },
        {
            company: "Blinkr",
            role: "Founder & Full-Stack Developer",
            startDate: "Dec 2025",
            endDate: "Present",
            location: "Tetovo, North Macedonia",
            description: "Founded and developed a peer-to-peer CS2 skill competition platform from concept to production, serving 50+ active users with 150+ matches completed. Built full-stack application with real-time lobby system (SSE), cryptocurrency payment integration (NOWPayments), automated server provisioning (DatHost API), and PostgreSQL-backed session management, deployed on Fly.io and Vercel.",
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
            logo: "/blinkr.svg"
        },
        {
            company: "Local Act",
            role: "Frontend Developer",
            startDate: "Mar 2025",
            endDate: "Oct 2025",
            location: "Tetovo, North Macedonia",
            description: "Led the design and development of the ongoing project website for LOKAL AKT, aligning with the organization’s mission to promote sustainable local development and civic participation. I was responsible for structuring the site’s content, designing user-friendly navigation, and implementing features such as a project archive with filtering, a donor logo showcase, an online membership form, and a photo gallery.",
            logo: "/locat_act.png"
        },
        {
            company: "ART Driving School",
            role: "Frontend Developer",
            startDate: "Nov 2024",
            endDate: "Mar 2025",
            location: "Skopje",
            description: "Developed the front end of a full-stack management system for driving schools using React and Vite. Built responsive UI components, implemented data integration with backend APIs, and optimized performance for smooth scheduling, student tracking, and instructor management experiences.",
            technologies: [
                "React",
                "Vite",
                "JavaScript (ES6+)",
                "CSS",
                "REST APIs",
                "Git"
            ],
            logo: "/art.png"
        }
    ],
    education: [
        {
            institution: "South East European University",
            degree: "Bachelor of Computer Science",
            startDate: "Sep 2025",
            endDate: "May 2029",
            location: "Tetovo, North Macedonia",
            logo: "/seeu.jpg"
        },
        {
            institution: "Avenga Academy",
            program: "Academy for Programming",
            startDate: "Oct 2024",
            endDate: "Sep 2025",
            location: "Skopje, North Macedonia",
            certificate: "Official CPD Certificate",
            logo: "/avenga.jpg"
        },
        {
            institution: "KEITCademy",
            program: "Front-end Developer Bootcamp",
            startDate: "Jul 2023",
            endDate: "Sep 2023",
            location: "Tetovo, North Macedonia",
            logo: "/keit.png"
        }
    ],
    projects: [
        {
            title: "Blinkr",
            description: "Peer-to-peer CS2 skill competition platform with crypto stakes. Built real-time lobby system (SSE), payment integration (NOWPayments), automated server provisioning (DatHost), and PostgreSQL wallet system with transaction locking. Deployed on Fly.io and Vercel serving 50+ users.",
            technologies: [
                {
                    name: "React",
                    color: "blue"
                },
                {
                    name: "TypeScript",
                    color: "blue"
                },
                {
                    name: "Tailwind CSS",
                    color: "blue"
                },
                {
                    name: "Node.js",
                    color: "green"
                },
                {
                    name: "Express.js",
                    color: "green"
                },
                {
                    name: "PostgreSQL",
                    color: "blue"
                },
                {
                    name: "Docker",
                    color: "blue"
                }
            ],
            links: [
                {
                    type: "demo",
                    url: "https://playblinkr.com",
                    label: "Live Platform"
                }
            ]
        },
        {
            title: "DailyDraft",
            description: "A full-stack auto-generated blog application that continuously publishes fresh AI-generated articles. The frontend is built with React, and the backend uses Node.js + Express with a daily article generator powered by an AI text API. All services are fully containerized using Docker and deployed on AWS with an automated CI/CD pipeline using CodeBuild, ECR, and EC2.",
            technologies: [
                {
                    name: "React",
                    color: "blue"
                },
                {
                    name: "TypeScript",
                    color: "blue"
                },
                {
                    name: "Tailwind CSS",
                    color: "blue"
                },
                {
                    name: "Node.js",
                    color: "green"
                },
                {
                    name: "Docker",
                    color: "blue"
                },
                {
                    name: "AWS",
                    color: "orange"
                }
            ],
            links: [
                {
                    type: "github",
                    url: "https://github.com/ronrustemi123/Technical-Test-Assimetria",
                    label: "GitHub"
                },
                {
                    type: "demo",
                    url: "http://16.171.253.245/",
                    label: "Live Demo"
                }
            ]
        },
        {
            title: "VibeStrings",
            description: "A 3-page guitar shop application built with Next.js 15 and Apollo Client, fetching data from a GraphQL API. This project demonstrates GraphQL integration, filtering, pagination, and UI best practices.",
            technologies: [
                {
                    name: "Next.js",
                    color: "yellow"
                },
                {
                    name: "TypeScript",
                    color: "blue"
                },
                {
                    name: "Tailwind CSS",
                    color: "blue"
                }
            ],
            links: [
                {
                    type: "github",
                    url: "https://github.com/ronrustemi123/VibeStrings",
                    label: "GitHub"
                },
                {
                    type: "demo",
                    url: "https://vibe-strings.vercel.app/",
                    label: "Live Demo"
                }
            ]
        }
    ],
    technicalSkills: [
        {
            name: "Next.js"
        },
        {
            name: "React.js"
        },
        {
            name: "TypeScript"
        },
        {
            name: "Tailwind CSS"
        },
        {
            name: "Node.js"
        },
        {
            name: "Express.js"
        },
        {
            name: "Docker"
        },
        {
            name: "AWS"
        },
        {
            name: "PostgreSQL"
        },
        {
            name: "MongoDB"
        }
    ]
};
}),
"[project]/components/sections/WorkExperienceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkExperienceSection",
    ()=>WorkExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function WorkExperienceSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 py-16 md:px-8 lg:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-8 text-center text-3xl font-bold text-foreground md:text-4xl",
                children: "Work Experience"
            }, void 0, false, {
                fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].workExperience.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkExperienceItem, {
                        experience: experience,
                        index: index
                    }, index, false, {
                        fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/WorkExperienceSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function WorkExperienceItem({ experience, index }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 50
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 50
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:gap-6",
                    children: [
                        experience.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: experience.logo,
                                alt: `${experience.company} company logo - Frontend Developer position`,
                                width: 64,
                                height: 64,
                                className: "h-16 w-16 object-contain",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted md:text-base",
                                            children: [
                                                experience.startDate,
                                                " - ",
                                                experience.endDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: experience.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-xl font-bold text-foreground md:text-2xl",
                                    children: experience.company
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 text-base text-muted font-medium text-foreground",
                                    children: experience.role
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-relaxed",
                                    style: {
                                        color: '#737373'
                                    },
                                    children: experience.description
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                experience.technologies && experience.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-muted",
                                    children: [
                                        "Tech: ",
                                        experience.technologies.join(", ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                index < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].workExperience.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "mt-8 border-card-border"
                }, void 0, false, {
                    fileName: "[project]/components/sections/WorkExperienceSection.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/WorkExperienceSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/WorkExperienceSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/EducationSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EducationSection",
    ()=>EducationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function EducationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 py-16 md:px-8 lg:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-8 text-center text-3xl font-bold text-foreground md:text-4xl",
                children: "Education"
            }, void 0, false, {
                fileName: "[project]/components/sections/EducationSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].education.map((edu, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationItem, {
                        edu: edu,
                        index: index
                    }, index, false, {
                        fileName: "[project]/components/sections/EducationSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/EducationSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/EducationSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function EducationItem({ edu, index }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 50
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 50
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:gap-6",
                    children: [
                        edu.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: edu.logo,
                                alt: `${edu.institution} educational institution logo - ${edu.degree || edu.program || 'Education program'}`,
                                width: 64,
                                height: 64,
                                className: "h-16 w-16 object-contain",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/EducationSection.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/EducationSection.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted md:text-base",
                                            children: [
                                                edu.startDate,
                                                " - ",
                                                edu.endDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/EducationSection.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: edu.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/EducationSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-xl font-bold text-foreground md:text-2xl",
                                    children: edu.institution
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                (edu.degree || edu.program) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-0 text-base text-muted text-foreground",
                                    children: edu.degree || edu.program
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                edu.certificate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-0 text-base text-muted text-foreground",
                                    children: edu.certificate
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/EducationSection.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                index < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].education.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "mt-8 border-card-border"
                }, void 0, false, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/EducationSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/EducationSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3eb0aa0c._.js.map