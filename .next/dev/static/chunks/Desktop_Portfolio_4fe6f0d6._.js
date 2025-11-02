(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Portfolio/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        about: "Computer Science student at South East European University specializing in full-stack web development. Built projects using Next.js, TypeScript, TailwindCSS, and React.js. Passionate about creating beautiful and responsive websites. Experienced in front-end and back-end technologies including Node.js, Express.js, PostgreSQL, and MongoDB. Skilled in teamwork, fast learning, and project leadership."
    },
    contact: {
        email: "mailto:ronrustemii@gmail.com",
        github: "https://github.com/ronrustemi123"
    },
    workExperience: [
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
            title: "E-commerce",
            description: "Built an eCommerce website enabling users to browse and purchase products through an interactive interface. Developed using React JS, Material UI, and CSS to create a responsive and visually appealing shopping experience.",
            technologies: [
                {
                    name: "CSS3",
                    color: "blue"
                },
                {
                    name: "JavaScript",
                    color: "yellow"
                },
                {
                    name: "Material-UI",
                    color: "blue"
                },
                {
                    name: "React",
                    color: "blue"
                },
                {
                    name: "Vite",
                    color: "purple"
                }
            ],
            links: [
                {
                    type: "github",
                    url: "https://github.com/#",
                    label: "GitHub"
                },
                {
                    type: "demo",
                    url: "#",
                    label: "Live Demo"
                }
            ]
        },
        {
            title: "Trax Macedonian",
            description: "Developed a project with React and Vite, focusing on hot module replacement, ESLint configuration, and i18next for internationalization support.",
            technologies: [
                {
                    name: "JavaScript",
                    color: "yellow"
                },
                {
                    name: "React",
                    color: "blue"
                },
                {
                    name: "Vite",
                    color: "blue"
                },
                {
                    name: "i18n",
                    color: "blue"
                },
                {
                    name: "i18next",
                    color: "blue"
                }
            ],
            links: [
                {
                    type: "github",
                    url: "https://github.com/#",
                    label: "GitHub"
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
            name: "JavaScript"
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
            name: "PostgreSQL"
        },
        {
            name: "MongoDB"
        },
        {
            name: "Git"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkExperienceSection",
    ()=>WorkExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function WorkExperienceSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 py-16 md:px-8 lg:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-8 text-center text-3xl font-bold text-foreground md:text-4xl",
                children: "Work Experience"
            }, void 0, false, {
                fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].workExperience.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkExperienceItem, {
                        experience: experience,
                        index: index
                    }, index, false, {
                        fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = WorkExperienceSection;
function WorkExperienceItem({ experience, index }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 md:flex-row md:gap-6",
                    children: [
                        experience.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: experience.logo,
                                alt: `${experience.company} logo`,
                                width: 64,
                                height: 64,
                                className: "h-16 w-16 object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted md:text-base",
                                            children: [
                                                experience.startDate,
                                                " - ",
                                                experience.endDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: experience.location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-1 text-xl font-bold text-foreground md:text-2xl",
                                    children: experience.company
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 text-base text-muted text-foreground",
                                    children: experience.role
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-relaxed",
                                    style: {
                                        color: '#737373'
                                    },
                                    children: experience.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                experience.technologies && experience.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-muted",
                                    children: [
                                        "Tech: ",
                                        experience.technologies.join(", ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                index < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioData"].workExperience.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "mt-8 border-card-border"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Portfolio/components/sections/WorkExperienceSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(WorkExperienceItem, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = WorkExperienceItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkExperienceSection");
__turbopack_context__.k.register(_c1, "WorkExperienceItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Portfolio_4fe6f0d6._.js.map