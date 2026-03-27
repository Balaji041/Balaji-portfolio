import type { Resume } from "./types";

export const resume: Resume = {
  profile: {
    name: "Balaji S",
    title: "Full Stack Developer",
    location: "Chennai, India",
    email: "balaji@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/balaji",
    github: "https://github.com/balaji",
    summary:
      "Passionate full-stack developer with experience building scalable web applications. I love turning ideas into clean, performant products using modern technologies.",
  },
  experience: [
    {
      company: "Tech Corp",
      role: "Full Stack Developer",
      period: "2022 – Present",
      location: "Chennai, India",
      highlights: [
        "Built and maintained React-based dashboards used by 10k+ users.",
        "Designed REST APIs with Node.js and Express, improving response time by 40%.",
        "Led migration from monolith to microservices architecture.",
      ],
    },
    {
      company: "Startup XYZ",
      role: "Frontend Developer",
      period: "2020 – 2022",
      location: "Remote",
      highlights: [
        "Developed reusable component library with React and Tailwind CSS.",
        "Collaborated with design team to implement pixel-perfect UIs.",
        "Integrated third-party APIs including payment gateways and maps.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      school: "Anna University",
      location: "Chennai, India",
      period: "2016 – 2020",
      detail: "CGPA: 8.4 / 10",
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    web: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js", "REST", "GraphQL"],
    tools: ["Git", "Docker", "PostgreSQL", "MongoDB", "Vite", "Linux", "Figma"],
  },
  certifications: [
    "AWS Certified Developer – Associate",
    "Meta Front-End Developer Certificate",
    "Google UX Design Certificate",
    "MongoDB Associate Developer",
  ],
};
