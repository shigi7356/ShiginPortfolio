// ============================================================
// PORTFOLIO CONFIGURATION — Edit this file to personalize
// ============================================================

export const PERSONAL = {
  name: "Shigin T.P",
  initials: "ST.",
  title: "Full Stack Developer",
  tagline: "Building digital experiences beyond boundaries.",
  aboutHeading: "The Developer Behind the Universe.",
  aboutText: `I'm a Full Stack Developer passionate about crafting seamless digital experiences from concept to deployment. I thrive at the intersection of design and engineering — turning complex problems into elegant, performant solutions.

My journey spans across the full stack: architecting scalable backends, building intuitive frontends, and everything in between. I believe great software is not just functional — it's an experience.

[Replace this with your own introduction. Talk about your passion, your journey, and what makes you unique as a developer.]`,

  // Contact — replace with real values
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
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
      { name: "Node.js", confirmed: false },         // ← confirm or remove
      { name: "Python", confirmed: false },           // ← confirm or remove
      { name: "Express.js", confirmed: false },       // ← confirm or remove
      { name: "REST APIs", confirmed: false },        // ← confirm or remove
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#34d399",
    items: [
      { name: "MongoDB", confirmed: false },          // ← confirm or remove
      { name: "PostgreSQL", confirmed: false },       // ← confirm or remove
      { name: "MySQL", confirmed: false },            // ← confirm or remove
      { name: "Redis", confirmed: false },            // ← confirm or remove
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    color: "#fb923c",
    items: [
      { name: "Git & GitHub", confirmed: false },    // ← confirm or remove
      { name: "Docker", confirmed: false },           // ← confirm or remove
      { name: "VS Code", confirmed: false },          // ← confirm or remove
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
    title: "Project Alpha",                          // ← Replace with real title
    description:
      "A full-stack web application built with modern technologies. Replace this description with your actual project overview, key features and the problem it solves.",
    tags: ["React", "Node.js", "MongoDB"],           // ← Update tags
    liveUrl: null,                                   // ← Add live URL when ready
    githubUrl: null,                                 // ← Add GitHub URL when ready
    color: "#22d3ee",
    placeholder: true,
  },
  {
    id: 2,
    title: "Project Beta",                           // ← Replace with real title
    description:
      "An innovative solution that demonstrates your technical depth. Add details about the architecture, challenges overcome and your role in the project.",
    tags: ["Python", "PostgreSQL", "Docker"],        // ← Update tags
    liveUrl: null,
    githubUrl: null,
    color: "#818cf8",
    placeholder: true,
  },
  {
    id: 3,
    title: "Project Gamma",                          // ← Replace with real title
    description:
      "A creative project showcasing your skills in [area]. Describe what makes this project unique and what you learned from building it.",
    tags: ["Next.js", "TypeScript", "AWS"],          // ← Update tags
    liveUrl: null,
    githubUrl: null,
    color: "#34d399",
    placeholder: true,
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
    title: "Your Degree / Certification",            // ← Replace with real qualification
    organization: "Your Institution",               // ← Replace with real institution
    description: "Add details about your educational background or key achievement here.",
    placeholder: true,
  },
  {
    id: 2,
    year: "20XX",
    type: "experience",
    title: "Your Role / Position",                   // ← Replace with real role
    organization: "Your Company / Project",          // ← Replace with real employer
    description: "Describe your responsibilities, accomplishments and technologies used.",
    placeholder: true,
  },
  {
    id: 3,
    year: "20XX",
    type: "milestone",
    title: "Key Milestone or Achievement",           // ← Replace with real milestone
    organization: "Context / Platform",
    description: "Share a defining moment in your development journey.",
    placeholder: true,
  },
];
