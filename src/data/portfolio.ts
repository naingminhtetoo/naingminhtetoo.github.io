export const profile = {
  name: "Naing Min Htet Oo",
  email: "naingminhtetoo.dev@gmail.com",
  location: "Yangon, Myanmar",
  github: "https://github.com/naingminhtetoo",
  linkedin: "https://www.linkedin.com/in/naing-min-htet-oo-19200a209",
};
export const experiences = [
  {
    company: "VAC Myanmar Co., Ltd. (Tosco Cooperation)",
    role: "Full-time employee",
    date: "Jan 2025 — Present",
    location: "Yangon, Myanmar",
    points: [
      "Transferred from Tosco Myanmar to VAC Myanmar following an organizational change.",
      "Currently studying Japanese in preparation for work in Japan.",
    ],
  },
  {
    company: "Tosco Myanmar Co., Ltd.",
    role: "Software Engineer · Full-time",
    date: "Jun 2021 — Dec 2024",
    location: "Yangon, Myanmar",
    points: [
      "Developed web, mobile, and desktop applications for Japanese clients and internal business systems.",
      "Built and integrated REST APIs, developed databases, and implemented data migration and Excel exports.",
      "Contributed to requirements review, implementation, unit, integration, and system testing, and maintenance.",
      "Collaborated with project teams and supported junior developers.",
    ],
  },
  {
    company: "Sonic Star Co., Ltd.",
    role: "Web Developer — Part-time",
    date: "May 2023 — Jul 2023",
    location: "Yangon, Myanmar",
    points: [
      "Developed a responsive travel and tour website and administration dashboard using PHP and Laravel.",
      "Translated Figma and Adobe XD designs into web interfaces and resolved application defects, layout problems, and usability issues.",
      "Completed this part-time role outside regular working hours.",
    ],
  },
];
export interface Project {
  name: string;
  category: string;
  date: string;
  description: string;
  contribution: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}
export const projects: Project[] = [
  {
    name: "Point & Customer Loyalty System",
    category: "Mobile application",
    date: "Sep — Nov 2024",
    description:
      "A customer loyalty mobile application with API integration and migration from an existing platform.",
    contribution:
      "Developed and integrated APIs, supported data migration, and collaborated in an eight-member team.",
    technologies: [
      "Ionic",
      "Angular",
      "Firebase",
      "REST APIs",
      "Postman",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    name: "Employee Management System",
    category: "Business systems",
    date: "Aug — Sep 2024",
    description:
      "Backend functionality for an employee management application in an offshore development project.",
    contribution:
      "Implemented and tested backend features and supported developers in a ten-member team.",
    technologies: ["C#", "Swagger API", "Microsoft SQL Server"],
  },
  {
    name: "Production Management System",
    category: "Business systems",
    date: "Jul 2023 — Jun 2024",
    description: "Backend development for a production management system.",
    contribution:
      "Implemented and tested backend functionality and supported other developers in a ten-member offshore team.",
    technologies: ["C#", "Swagger API", "Microsoft SQL Server"],
  },
  {
    name: "Self-Ordering System",
    category: "Full-stack application",
    date: "Dec 2022 — Mar 2023",
    description:
      "A restaurant self-ordering system spanning frontend interfaces, backend functionality, and database design.",
    contribution:
      "Contributed to application development and database design, and supported a five-person development team.",
    technologies: ["PHP", "Laravel", "Vue.js", "Bootstrap", "MySQL"],
  },
  {
    name: "Travel & Tour Web Application",
    category: "Website & admin dashboard",
    date: "May — Jul 2023",
    description:
      "A responsive travel and tour website with an administration dashboard, developed at Sonic Star.",
    contribution:
      "Built the website and dashboard, implemented Figma and Adobe XD designs, and resolved responsive-layout issues.",
    technologies: ["PHP", "Laravel", "Figma", "Adobe XD"],
  },
];
export const skills = [
  {
    title: "Frontend",
    icon: "◫",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "React.js",
      "Angular",
      "Ionic",
      "Bootstrap",
      "Webix",
    ],
  },
  {
    title: "Backend",
    icon: "⌘",
    items: [
      "C#",
      "ASP.NET MVC",
      "ASP.NET Core",
      "ASP.NET Web Forms",
      "PHP",
      "Laravel",
      "Java",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: "▤",
    items: [
      "Microsoft SQL Server",
      "PostgreSQL",
      "MySQL",
      "Oracle Database",
      "Firebase",
    ],
  },
  {
    title: "Mobile & tools",
    icon: "▯",
    items: ["Ionic", "Angular", "Visual Studio", "Visual Studio Code", "Git", "Swagger", "Postman", "Android Studio", "Xcode", "Eclipse"],
  },
];
export const courses = [
  { name: "Advanced React", provider: "Meta via Coursera", year: "2023" },
  { name: "Ionic and Angular", provider: "Coursera", year: "2021" },
  { name: "Laravel Course / Web Development with PHP", provider: "MMS IT", year: "2021" },
];

// Confirmed qualifications supplied by the portfolio owner.
export const japaneseQualifications = [
  {
    english: "Japanese Language NAT-TEST Level 1 — Passed",
    japanese: "日本語NAT-TEST 1級 合格",
  },
  {
    english: "Japanese-Language Proficiency Test (JLPT) N2 — Passed",
    japanese: "日本語能力試験（JLPT）N2 合格",
  },
];
