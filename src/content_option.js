// All portfolio copy lives here. Sourced from "Updated IT c.v of TAMIM.pdf".

const profile = {
    name: "MD Tamim Hossain",
    firstName: "Tamim",
    lastName: "Hossain",
    role: "Full-Stack Product Engineer",
    location: "Dhaka, Bangladesh",
    timezone: "Asia/Dhaka",
    email: "amdtamim3@gmail.com",
    phone: "+880 1716 605265",
    phoneHref: "+8801716605265",
    cv: "/Updated IT c.v of TAMIM.pdf",
    portrait: "/images/portrait.jpg",
    status: "Product Engineer at BIMS Technologies",
    rotatingWords: ["fintech", "e-commerce", "gov-tech", "AI-powered"],
    intro: "I take products from idea to production — a marketplace built single-handedly, a POC that won a government contract, and a payroll system that turned a week of work into 30 minutes.",
};

const socials = [
    { label: "GitHub", href: "https://github.com/tamimhossain11" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tamim-hossain-989320236" },
    { label: "Facebook", href: "https://www.facebook.com/HSNTamim/" },
];

const stats = [
    { value: 30, suffix: " min", label: "Payroll release time, down from about a week" },
    { value: 1, label: "Government contract won by a POC I led" },
    { value: 6, suffix: "+", label: "Products shipped to production" },
    { value: 3, label: "Payment gateways integrated: GiyaPay, bKash, PayPlus" },
];

const about = {
    statement: "I'm a full-stack product engineer who turns messy, real-world problems into software people actually use — from fintech and e-commerce to government analytics. I care about the outcome, not just the code.",
    focus: ["RAG & LLM features", "Payments & fintech", "Wrike API & consulting", "Marketplaces"],
    education: [
        { title: "BSc (Hons) Top-up", place: "University of Roehampton, London", when: "In progress" },
        { title: "Higher Diploma in Software Engineering", place: "EduClaaS / Lithan Academy, Singapore", when: "2022 – 2024" },
    ],
    languages: [
        { name: "English", level: "Professional" },
        { name: "Bengali", level: "Native" },
    ],
    photo: { src: "/images/kl-towers.jpg", caption: "Kuala Lumpur, Malaysia" },
};

const leadershipPhoto = { src: "/images/kl-seated.jpg", caption: "Kuala Lumpur, Malaysia" };

const experience = [
    {
        role: "Product Engineer",
        note: "Promoted from Junior Software Engineer",
        company: "BIMS Technologies Inc.",
        period: "May 2024 — Present",
        location: "Philippines · Remote",
        points: [
            "Point person on the DepEd school-facilities analytics POC within my first months — the POC secured the government contract for BIMS.",
            "Designed, built and deployed Maretinda, a multivendor marketplace for women sellers, as the sole engineer — from UI design to production.",
            "Built TimeFlow, an internal payroll system on the Wrike API, cutting payroll release for the whole team from about a week to 30 minutes.",
            "Developed a QR payment system on the GiyaPay API with real-time confirmation and reconciliation.",
            "Wrike consultant for internal and client teams: spaces, blueprints, custom item types, request forms, automations, dashboards and reports.",
            "Built Wrike integrations with the REST API, webhooks and Wrike Sync; prototyped a QuickBooks Online API integration for accounting data.",
        ],
        stack: ["React", "Next.js", "Node.js", "Medusa JS", "PostgreSQL", "GCP", "Docker", "Wrike API", "LLM / RAG"],
    },
    {
        role: "Software Engineer Intern",
        company: "Astria Corporation Philippines",
        period: "Feb 2024",
        location: "Philippines · Remote",
        points: [
            "Designed and built the React front end for Astria Ingest, a new digital-forensics service built on FTK Enterprise, and integrated it with the product's APIs.",
        ],
        stack: ["React", "REST APIs", "FTK Enterprise"],
    },
];

// Featured case studies. `visual` picks the artwork rendered on the card.
const caseStudies = [
    {
        id: "maretinda",
        title: "Maretinda",
        kicker: "Multivendor e-commerce marketplace",
        tag: "E-commerce · AI",
        visual: "image",
        img: "/images/maretinda.jpg",
        problem: "Women entrepreneurs needed an accessible online marketplace — and the project had no dedicated engineering team.",
        build: "Sole engineer, end to end: Medusa JS backend and Next.js storefront in a Docker monorepo, shipped via CI/CD to GCP and Medusa Cloud — with S3, SES, Algolia search, GiyaPay checkout and a RAG-powered chat assistant.",
        result: "Shipped solo, design to production",
        stack: ["Medusa JS", "Next.js", "PostgreSQL", "Docker", "GCP", "Algolia", "AWS S3 & SES", "RAG / LLM", "React Native"],
    },
    {
        id: "deped",
        title: "DepEd Philippines",
        kicker: "School facilities analytics (POC)",
        tag: "Gov-tech · Analytics",
        visual: "dashboard",
        problem: "The Department of Education had no clear view of each school's facilities — benches, boards and other resources — across a province.",
        build: "Led the POC as point person: Tableau dashboards embedded via the Tableau API, Wrike API for field data collection, a React front end and Node.js services.",
        result: "POC accepted — government contract awarded to BIMS",
        stack: ["React", "Node.js", "Tableau API", "Wrike API"],
    },
    {
        id: "timeflow",
        title: "TimeFlow",
        kicker: "Payroll management system",
        tag: "Internal tool · Automation",
        visual: "timeflow",
        problem: "Releasing payroll took about a week of manual time-sheet collation.",
        build: "Pulled time logs and approvals from Wrike through advanced API usage into a SQL-backed React / Node.js app, deployed and maintained on GCP.",
        result: "Whole-team payroll now released in 30 minutes",
        stack: ["React", "Node.js", "SQL", "Wrike API", "GCP"],
    },
    {
        id: "giyapay",
        title: "GiyaPay QR",
        kicker: "Scan-to-pay QR payments",
        tag: "Fintech · Payments",
        visual: "qr",
        problem: "Merchants needed fast, in-person and on-site payments through one of the Philippines' leading payment gateways.",
        build: "Built scan-to-pay QR acceptance on the GiyaPay API with real-time confirmation and reconciliation, plus redirect-free checkout embedded on merchant websites.",
        result: "Real-time confirmation & reconciliation",
        stack: ["GiyaPay API", "Node.js", "React"],
    },
];

const moreProjects = [
    {
        title: "WICE Bangladesh",
        desc: "Event platform for the World Invention Competition & Exhibition — registrations with bKash and PayPlus payments.",
        img: "/images/wicebd.jpg",
        video: "https://youtu.be/oSMqthOyhAQ",
        stack: ["React", "Node.js", "SQL", "bKash", "PayPlus"],
    },
    {
        title: "DoB HydroJan",
        desc: "Website for Dreams of Bangladesh's RoboSub team — team, AUV, sponsors and competition updates.",
        img: "/images/hydrojan.jpg",
        video: "https://youtu.be/fVlYFV3TVe8",
        stack: ["React", "Responsive UI"],
    },
    {
        title: "Orbis Square",
        desc: "Robotics-parts e-commerce platform for Dreams of Bangladesh, with PayPlus checkout.",
        badge: "In progress",
        stack: ["E-commerce", "PayPlus"],
    },
    {
        title: "Astria Ingest",
        desc: "React front end for a digital-forensics service built on FTK Enterprise.",
        stack: ["React", "FTK Enterprise API"],
    },
];

const skills = [
    { group: "Languages", items: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"] },
    { group: "Front end", items: ["React", "Next.js", "Angular", "React Native"] },
    { group: "Back end", items: ["Node.js", "Medusa JS", "Spring Boot", "REST API design"] },
    { group: "Data & search", items: ["PostgreSQL", "MySQL", "Algolia"] },
    { group: "Cloud & DevOps", items: ["Google Cloud", "AWS S3 / SES", "Docker", "CI/CD", "Monorepos", "Medusa Cloud", "Vercel", "Railway", "Hetzner", "cPanel"] },
    { group: "AI / LLM", items: ["RAG", "Document chunking", "LLM APIs", "Agentic chat"] },
    { group: "APIs & integrations", items: ["Wrike API", "Wrike Sync", "QuickBooks Online", "Tableau REST / Embedding", "GiyaPay", "bKash", "PayPlus"] },
    { group: "CMS", items: ["WordPress", "Elementor", "Webflow", "Liferay"] },
    { group: "Tools", items: ["Git", "GitHub", "Postman", "Wrike", "Agile / Scrum", "Claude", "Cursor"] },
    { group: "Hardware", items: ["ROS", "Arduino", "Jetson Nano", "Raspberry Pi"] },
];

const marquee = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Medusa JS", "Google Cloud", "AWS", "Docker", "RAG", "LLM APIs", "Algolia", "Wrike API", "Tableau", "React Native", "Spring Boot"];

const leadership = [
    { role: "Chief Technology Officer (Volunteer)", org: "Dreams of Bangladesh", when: "2026 — Now", note: "Leading tech direction; website lead for DoB HydroJan; building Orbis Square." },
    { role: "Associate Executive Director", org: "WICE Bangladesh", when: "", note: "Built the event platform with bKash and PayPlus registrations." },
    { role: "Judge — International Round", org: "WICE, Malaysia", when: "2025", note: "" },
    { role: "Judge — National Round", org: "Innovation World Cup, Bangladesh", when: "2024", note: "Technology category." },
    { role: "Participant", org: "RoboSub", when: "2024", note: "Web lead for the Dreams of Bangladesh team, Los Angeles." },
];

export {
    profile,
    socials,
    stats,
    about,
    experience,
    caseStudies,
    moreProjects,
    skills,
    marquee,
    leadership,
    leadershipPhoto,
};
