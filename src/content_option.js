const logotext = "Tamim";
const meta = {
    title: "Tamim Hossain",
    description: "I’m Tamim Hossain Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I'm Tamim Hossain",
    animated: {
        first: "A fullstack web developer",
        second: "I code cool websites",
        third: "I Design Beautiful UI",
    },
    description: "Welcome to my portfolio.Here you can know everything about me my carrer and my carrer in web development and my journey",
    your_img_url: "/me.jpeg",
};

const dataabout = {
    title: "About Me",
    aboutme: "I'm a passionate Full Stack Developer with expertise in modern web technologies. Currently working as a Product Engineer at BIMS Technologies Inc., I specialize in building scalable applications using React.js, Node.js, and TypeScript. I have experience working with various databases (PostgreSQL, MySQL, MongoDB), cloud platforms (AWS, Google Cloud), and DevOps tools. I'm enthusiastic about learning new technologies and solving complex problems. I enjoy creating beautiful, user-friendly interfaces and robust backend systems. My goal is to deliver high-quality solutions that make a positive impact.",
};
const worktimeline = [{
    jobtitle: "Bangla",
    where: "Mother Language",
},
{
    jobtitle: "English",
    where: "Fluent",
},
{
    jobtitle: "Hindi",
    where: "Can Speak",
},
];

const workExperience = [
    {
        company: "BIMS Technologies Inc.",
        position: "Product Engineer",
        type: "Contract",
        duration: "Jun 2024 - Present",
        durationMonths: "1 yr 7 mos",
        location: "Philippines · Remote",
        skills: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "MySQL", "Python", "MongoDB", "Wrike", "Webflow", "WordPress", "Contentful", "Google Cloud", "AWS S3", "cPanel", "Vercel", "Netlify", "QuickBooks API"],
        responsibilities: [
            "Developed and maintained web applications using React.js and Node.js",
            "Created GiyaPay QR - An over-the-counter payment system through scanning QR code and redirecting to gateway of GiyaPay using its API",
            "Worked with Medusa JS and Mercur JS for creating the Maretinda App - An e-commerce platform in Philippines",
            "Developed websites for DepEd of Philippines and the main website for BIMS Technologies using WordPress",
            "Worked with Contentful and its API for managing a headless CMS for GiyaPay main website",
            "Integrated QuickBooks API with Wrike for seamless project management and financial tracking",
            "Gained expertise in DevOps platforms including Google Cloud, AWS using S3 bucket, cPanels, Vercel, Netlify",
            "Collaborated using project management tools like Wrike and Webflow"
        ]
    },
    {
        company: "Astria Corporation Philippines",
        position: "Software Engineer Intern",
        type: "Internship",
        duration: "Feb 2024 - Feb 2024",
        durationMonths: "1 mo",
        location: "Philippines · Remote",
        skills: ["TypeScript", "Node.js", "PostgreSQL", "MySQL", "Python", "MongoDB", "FTK Enterprise API"],
        responsibilities: [
            "Designed the Front end of Astria Ingest Website - A new product of Astria Corporation for providing digital forensics service with FTK Enterprise",
            "Built the API to make the Integration process work",
            "Worked with FTK Forensics Tool Kits API to design the integration for third-party users in Philippines"
        ]
    }
];

// Highlighted/Most Demanding Skills (shown by default)
const highlightedSkills = [
    { name: "React.js", value: 90, category: "Frontend" },
    { name: "Node.js", value: 85, category: "Backend" },
    { name: "TypeScript", value: 88, category: "Language" },
    { name: "JavaScript", value: 90, category: "Language" },
    { name: "PostgreSQL", value: 80, category: "Database" },
    { name: "MySQL", value: 85, category: "Database" },
    { name: "Python", value: 75, category: "Language" },
    { name: "MongoDB", value: 70, category: "Database" },
];

// All Skills (shown in dropdown)
const allSkills = [
    // Frontend
    { name: "React.js", value: 90, category: "Frontend" },
    { name: "Next.js", value: 75, category: "Frontend" },
    { name: "JavaScript", value: 90, category: "Frontend" },
    { name: "TypeScript", value: 88, category: "Frontend" },
    { name: "HTML5", value: 95, category: "Frontend" },
    { name: "CSS3", value: 90, category: "Frontend" },
    { name: "Tailwind CSS", value: 85, category: "Frontend" },
    { name: "Bootstrap", value: 85, category: "Frontend" },
    { name: "Angular", value: 70, category: "Frontend" },
    { name: "React Native", value: 60, category: "Frontend" },
    { name: "jQuery", value: 70, category: "Frontend" },
    
    // Backend
    { name: "Node.js", value: 85, category: "Backend" },
    { name: "Express.js", value: 80, category: "Backend" },
    { name: "RESTful APIs", value: 88, category: "Backend" },
    
    // Databases
    { name: "PostgreSQL", value: 80, category: "Database" },
    { name: "MySQL", value: 85, category: "Database" },
    { name: "MongoDB", value: 70, category: "Database" },
    
    // Languages
    { name: "Python", value: 75, category: "Language" },
    { name: "Java", value: 70, category: "Language" },
    
    // DevOps & Cloud
    { name: "AWS (S3)", value: 75, category: "DevOps" },
    { name: "Google Cloud", value: 70, category: "DevOps" },
    { name: "Vercel", value: 85, category: "DevOps" },
    { name: "Netlify", value: 80, category: "DevOps" },
    { name: "cPanel", value: 75, category: "DevOps" },
    { name: "Git", value: 85, category: "DevOps" },
    { name: "GitHub", value: 90, category: "DevOps" },
    
    // CMS & Tools
    { name: "WordPress", value: 80, category: "CMS" },
    { name: "Contentful", value: 75, category: "CMS" },
    { name: "Webflow", value: 70, category: "CMS" },
    { name: "Wrike", value: 75, category: "Tools" },
    { name: "Medusa JS", value: 70, category: "Framework" },
    { name: "Mercur JS", value: 70, category: "Framework" },
    { name: "FTK Enterprise API", value: 65, category: "API" },
    { name: "QuickBooks API", value: 75, category: "API" },
];

const skills = highlightedSkills; // For backward compatibility


const dataportfolio = [
    {
        projectName: "GiyaPay QR – Smart Payment & Verification System",
        img: "/giyapayqr.png",
        description: "GiyaPay QR is an AI-enhanced payment and verification solution designed to make secure digital transactions effortless. The system generates unique QR codes with embedded, encrypted payloads containing user and transaction data.",
        fullDescription: "GiyaPay QR is an AI-enhanced payment and verification solution designed to make secure digital transactions effortless. The system generates unique QR codes with embedded, encrypted payloads containing user and transaction data. These QR codes can be scanned from any device and instantly verified through a backend endpoint.",
        keyHighlights: [
            "Secure QR generation using encrypted JSON payloads",
            "Real-time verification via Node.js/Express backend",
            "Fast scanning powered by html5-qrcode on the frontend",
            "Seamless integration with payment gateways (bKash, Nagad, Visa, etc.)",
            "Designed for fintech platforms requiring fast authentication and fraud prevention",
            "Built for mobile-first, high-volume usage"
        ],
        idealFor: "Payment gateways, event registrations, merchant verification, fintech platforms, and secure check-in/check-out systems",
        technologies: ["React.js", "Node.js", "Express.js", "html5-qrcode", "Encryption", "Payment Gateway APIs"],
        videoUrl: null, // To be added later
        link: "#",
        badge: "Fintech",
        year: "2024"
    },
    {
        projectName: "Maretinda – Multi-Vendor E-Commerce Platform",
        img: "/maretinda.png",
        description: "Maretinda is a complete multi-vendor e-commerce ecosystem built with performance, scalability, and user experience at the core. The platform includes storefront, vendor panel, and admin panel—each deployed on Google Cloud.",
        fullDescription: "Maretinda is a complete multi-vendor e-commerce ecosystem built with performance, scalability, and user experience at the core. The platform includes storefront, vendor panel, and admin panel—each deployed on Google Cloud for reliability and speed.",
        keyHighlights: [
            "Multi-vendor marketplace with product, order, and inventory management",
            "Admin dashboard with full control of vendors, products, and analytics",
            "Vendor panel for independent store owners",
            "Search powered by Algolia",
            "Email notifications powered by Resend",
            "Real-time chat support with TalkJS",
            "Deployed on Google Cloud Run with optimized CI/CD workflows",
            "Clean UI, mobile-ready storefront, and optimized performance"
        ],
        idealFor: "Startups, SMEs, and enterprises wanting a full-stack, customizable multi-vendor e-commerce solution",
        technologies: ["Medusa.js", "Next.js", "Google Cloud Run", "Algolia", "Resend", "TalkJS", "MySQL"],
        videoUrl: null, // To be added later
        link: "#",
        badge: "E-Commerce",
        year: "2024"
    },
    {
        projectName: "Hydrojan – RoboSub Team Website",
        img: "hydrojan.png",
        description: "Hydrojan is a modern, visually engaging website built for a competitive RoboSub team participating in international underwater robotics challenges. The site showcases the team's innovation, engineering achievements, and autonomous submarine technology.",
        fullDescription: "Hydrojan is a modern, visually engaging website built for a competitive RoboSub team participating in international underwater robotics challenges. The site showcases the team's innovation, engineering achievements, and autonomous submarine technology.",
        keyHighlights: [
            "Team Showcase: Introduces team members, roles, and expertise in robotics, AI, mechanical engineering, and underwater systems",
            "Project Portfolio: Detailed pages highlighting the autonomous underwater vehicle (AUV), design breakdowns, sensors, electronics, and mission progress",
            "Competition Updates: Section dedicated to event highlights, achievements, and real-time announcements during RoboSub competitions",
            "Sponsor & Partner Display: Professionally designed sponsor section to attract industry and academic support",
            "Media Gallery: High-quality images and videos documenting testing, builds, and underwater missions",
            "Clean UI & Fast Performance: Responsive UI built to deliver smooth experience across mobile and desktop"
        ],
        idealFor: "Strengthening the team's online identity, attracting sponsors, and providing a professional platform to present their robot, research, and annual competition journey",
        technologies: ["React.js", "Modern Web Design", "Responsive UI", "Media Gallery"],
        videoUrl: "https://youtu.be/fVlYFV3TVe8",
        link: "#",
        badge: "Robotics",
        year: "2024"
    },
    {
        projectName: "Coming Soon",
        img: null,
        description: "More exciting projects coming soon! Stay tuned for updates.",
        isComingSoon: true,
        link: null
    },
    {
        projectName: "Coming Soon",
        img: null,
        description: "More exciting projects coming soon! Stay tuned for updates.",
        isComingSoon: true,
        link: null
    }
];

const contactConfig = {
    YOUR_EMAIL: "amdtamim3@gmail.com",
    YOUR_FONE: "(+880)1716-605265",
    description: "Contact me via email or phone number and i am really sorry because my contact form is not available right now.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const extraCurricularActivities = [
    {
        title: "RoboSub Competition - Los Angeles, California",
        role: "Web Development Lead",
        organization: "Dreams of Bangladesh",
        duration: "2024",
        description: "Served as Web Development Lead for the 'Dreams of Bangladesh' team at RoboSub competition in Los Angeles, California. Developed and maintained the competition website, handling team registration, live updates, and results display.",
        skills: ["Web Development", "Team Leadership", "React.js", "Node.js"]
    },
    {
        title: "WICE (Malaysia) - Executive",
        role: "Executive",
        organization: "Dreams of Bangladesh",
        duration: "September 2025",
        description: "Joined WICE (Malaysia) as an Executive on behalf of Bangladeshi teams under Dreams of Bangladesh. Coordinated team activities, managed communications, and facilitated participation in international robotics competitions.",
        skills: ["Team Management", "Coordination", "International Relations"]
    },
    {
        title: "Innovation World Cup - National Round Judge",
        role: "National Round Judge (Technology Category)",
        organization: "Innovation World Cup - Bangladesh",
        duration: "November 2024",
        description: "Performed as a National Round Judge in the Technology Category of Innovation World Cup National Round Bangladesh. Evaluated innovative technology projects and provided expert feedback to participants.",
        skills: ["Judging", "Technology Evaluation", "Innovation Assessment"]
    },
    {
        title: "Innovation World Cup - International Round",
        role: "Executive",
        organization: "Innovation World Cup - Indonesia",
        duration: "January 2025",
        description: "Participating as an Executive for the International Round in Indonesia. Supporting the organization and coordination of the international competition event.",
        skills: ["Event Management", "Coordination", "International Events"]
    },
    {
        title: "Robotics & Arduino Programming",
        role: "Developer & Enthusiast",
        organization: "Personal Projects",
        duration: "Ongoing",
        description: "Active involvement in robotics and Arduino programming. Developed various projects combining hardware and software solutions for automation and robotics applications.",
        skills: ["Arduino", "Robotics", "Embedded Systems", "C/C++", "Hardware Integration"]
    }
];

const socialprofils = {
    github: "https://github.com/tamimhossain11",
    facebook: "https://www.facebook.com/HSNTamim/",
    linkedin: "https://www.linkedin.com/in/tamim-hossain-9a256a233/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    workExperience,
    skills,
    highlightedSkills,
    allSkills,
    extraCurricularActivities,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
