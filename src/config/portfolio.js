// ============================================================
// PORTFOLIO CONFIGURATION — Edit this file to personalize
// ============================================================

export const PERSONAL = {
  name: "Shigin T.P",
  initials: "ST.",
  title: "Full Stack Developer",
  tagline: "Building digital experiences beyond boundaries.",
  aboutHeading: "The Developer Behind the Universe.",
aboutText: `I'm Shigin T.P., a Software Developer with hands-on experience in developing ERP applications for desktop and web platforms. My development journey started with WinForms (.NET Framework), where I gained practical experience in desktop application development.

Currently, I'm working on a Web ERP application using ASP.NET and React. I enjoy building functional applications, developing features, integrating frontend and backend components, and solving technical problems.

My technical skills include C#, ASP.NET Core, ASP.NET MVC, React, HTML, CSS, JavaScript, and SQL Server. I'm passionate about continuously improving my development skills and building reliable, user-friendly software solutions.`,
  // Contact — replace with real values
  email: "shigintp@gmail.com",
  github: "https://github.com/shigi7356",
  linkedin: "https://www.linkedin.com/in/shigin-tp-361baa356",
  twitter: "https://twitter.com/yourusername", // optional
};

// ============================================================
// SKILLS — Edit, add, or remove technologies as needed
// ============================================================
export const SKILLS = [
  {
    category: "Frontend Development",
    icon: "Monitor",
    color: "#22d3ee",
    items: [
      { name: "JavaScript", confirmed: true },
      { name: "React", confirmed: true },
      { name: "HTML & CSS", confirmed: true },
      { name: "Next.js", confirmed: false },        // ← confirm or remove
      { name: "TypeScript", confirmed: false },      // ← confirm or remove
      { name: "Three.js", confirmed: false },        // ← confirm or remove
    ],
  },
  {
    category: "Backend Development",
    icon: "Server",
    color: "#818cf8",
    items: [
      { name: "ASP.NET", confirmed: true },         // ← confirm or remove
      { name: "Python", confirmed: true },           // ← confirm or remove
      { name: "Express.js", confirmed: false },       // ← confirm or remove
      { name: "REST APIs", confirmed: false },        // ← confirm or remove
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#34d399",
    items: [
      { name: "SQL Server", confirmed: true },          // ← confirm or remove
      { name: "PostgreSQL", confirmed: false },       // ← confirm or remove
      { name: "MySQL", confirmed: true },            // ← confirm or remove
      { name: "Redis", confirmed: false },            // ← confirm or remove
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    color: "#fb923c",
    items: [
      { name: "Git & GitHub", confirmed: true },    // ← confirm or remove
      { name: "Visual Studio", confirmed: true },           // ← confirm or remove
      { name: "VS Code", confirmed: true   },          // ← confirm or remove
      { name: "Linux", confirmed: false },            // ← confirm or remove
    ],
  },
];

// ============================================================
// PROJECTS — Replace with your real projects
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    title: "ERP Web Application",
    description:
      "Worked mainly on backend development using ASP.NET Core and SQL Server. Developed REST APIs and business logic for ERP workflows, including inventory, invoice, and stock management. Optimized SQL queries and stored procedures, contributed to frontend development and API integration using React.js, fixed bugs, improved application performance, and collaborated with team members on feature implementation and debugging.",
    tags: ["ASP.NET Core", "SQL Server", "React.js", "REST APIs"],
    liveUrl: null,
    githubUrl: null,
    color: "#22d3ee",
    placeholder: false,
  },
  {
  id: 2,
  title: "ERP Inventory Management System",
  description:
    "Developed inventory workflows for stock management and warehouse operations. Implemented product tracking, stock movement, and batch handling features. Optimized database procedures for faster transaction processing.",
  tags: ["ASP.NET Core", "SQL"],
  liveUrl: null,
  githubUrl: null,
  color: "#818cf8",
  placeholder: false,
},
{
  id: 3,
  title: "Service Invoice Management API",
  description:
    "Developed and maintained APIs for service invoice creation, updates, and product management. Implemented invoice item mapping, transaction validation, stock verification, and quantity validation during invoice processing. Developed SQL queries and stored procedures for invoice operations. Implemented product search, filtering, and pagination. Improved API response handling, optimized backend logic and database queries, fixed production-level issues, and collaborated with frontend developers on API integration and testing.",
  tags: ["ASP.NET Core", "SQL", "React.js", "Testing"],
  liveUrl: null,
  githubUrl: null,
  color: "#34d399",
  placeholder: false,
},
];

// ============================================================
// JOURNEY / TIMELINE — Replace with real milestones
// ============================================================
export const JOURNEY = [
  {
    id: 1,
    year: "20XX",                                    // ← Replace with real year
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",           // ← Replace with real qualification
    organization:  "Garden City University, Bangalore",               // ← Replace with real institution
    description:  "Built a strong foundation in programming, database management, software development, and web technologies.",
    placeholder: true,
  },
  {
    id: 2,
    year: "20XX",
    type: "experience",
    title: "Software Developer",                  // ← Replace with real role
    organization: "Polosys Technologies L.L.P",          // ← Replace with real employer
    description:  "Working on ERP applications using ASP.NET Core, SQL Server, React.js, and WinForms. Developing REST APIs, implementing business logic, managing database operations, and improving application performance.",
    placeholder: true,
  },
  {
    id: 3,
    year: "20XX",
    type: "milestone",
    title: "ERP Application Development",           // ← Replace with real milestone
    organization: "Building Real-World Software Solutions",
    description: "Gained hands-on experience in developing ERP modules for inventory, stock management, and service invoicing. Improved skills in backend development, API integration, SQL optimization, debugging, and teamwork.",
    placeholder: true,
  },
];
