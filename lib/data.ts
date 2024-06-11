import hoobank from "@/public/hoobank.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  },
  {
    title: "rmtDev",
    description: "Placeholder - project in the works!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/Paksawat?tab=repositories",
  },
  {
    title: "Word Analytics",
    description: "Placeholder - project in the works!",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/Paksawat?tab=repositories",
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
