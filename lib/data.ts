import hoobank from "@/public/hoobank.png";
import vitempo from "@/public/vitempo.png";
import dashboard from "@/public/dashboard_react.png";
import app from "@/public/flutter_app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Hoobank website",
    description:
      "Learning React i made this responsive and modern landing page for a fictional financial service",
    tags: ["React", "Tailwind"],
    imageUrl: hoobank,
    githubUrl: "https://github.com/Paksawat/react_modern_website",
    liveUrl: "https://react-modern-website-seven.vercel.app/",
  },
  {
    title: "Time management PWA",
    description: "Focusing on Pomodoro Technique with task management. Future implementation of other time management techniques.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: vitempo,
    githubUrl: "https://github.com/Paksawat/vitempo",
    liveUrl: "https://vitempo.vercel.app/",
  },
  {
    title: "Management dashboard based on previous work",
    description: "Dashboard for management keeping track of employees mental health based on objective and subjective data",
    tags: ["React", "TypeScript", "Tailwind", "Auth0", "RTK Query", "Redux", "charts"],
    imageUrl: dashboard,
    githubUrl: "https://github.com/Paksawat/react_dashboard",
    liveUrl: "https://react-dashboard-alpha-nine.vercel.app/overview",
  },
  {
    title: "Flutter App - Coming soon",
    description: "WIP - A dice roller app made in Flutter. Was a request from a friend",
    tags: ["Flutter", "Dart",],
    imageUrl: app,
    githubUrl: "",
    liveUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Git",
  "Tailwind",
  "Astro",
  "Liquid",
  "Cypress",
  "MSSQL",
  "Figma",
  "Design",
  "UX",
  "SEO",
  "Rest API",
  "SCRUM",
] as const;
