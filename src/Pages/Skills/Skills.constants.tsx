import { BookOpen, Brain, Timer, Users } from "lucide-react";
import { SkillsCategory, type Skill } from "./Skills.types";
// skills
export const skills: Skill[] = [
  {
    title: "HTML5",
    category: SkillsCategory.Frontend,
    icon: "devicon-html5-plain",
  },
  {
    title: "CSS3",
    category: SkillsCategory.Frontend,
    icon: "devicon-css3-plain",
  },
  {
    title: "BootStrap",
    category: SkillsCategory.Frontend,
    icon: "devicon-bootstrap-plain",
  },
  {
    title: "TailwindCSS",
    category: SkillsCategory.Frontend,
    icon: "devicon-tailwindcss-original",
  },

  {
    title: "JavaScript",
    category: SkillsCategory.Languages,
    icon: "devicon-javascript-plain",
  },
  {
    title: "TypeScript",
    category: SkillsCategory.Languages,
    icon: "devicon-typescript-plain",
  },

  {
    title: "React.js",
    category: SkillsCategory.Frontend,
    icon: "devicon-react-original",
  },
  {
    title: "Redux",
    category: SkillsCategory.Frontend,
    icon: "devicon-redux-original",
  },
  {
    title: "zustand",
    category: SkillsCategory.Frontend,
    icon: "devicon-zustand-plain",
  },
  {
    title: "Next.js",
    category: SkillsCategory.Frontend,
    icon: "devicon-nextjs-plain",
  },
  {
    title: "Framer Motion",
    category: SkillsCategory.Frontend,
    icon: "devicon-framermotion-original",
  },

  {
    title: "Node.js",
    category: SkillsCategory.Backend,
    icon: "devicon-nodejs-plain",
  },
  {
    title: "Supabase",
    category: SkillsCategory.Backend,
    icon: "devicon-supabase-plain",
  },

  {
    title: "Express.js",
    category: SkillsCategory.Backend,
    icon: "devicon-express-original",
  },
  {
    title: "MySQL",
    category: SkillsCategory.Backend,
    icon: "devicon-mysql-plain-wordmark",
  },
  {
    title: "MongoDB",
    category: SkillsCategory.Backend,
    icon: "devicon-mongodb-plain",
  },

  {
    title: "GitHub",
    category: SkillsCategory.Tools,
    icon: "devicon-git-plain",
  },
  {
    title: "Post Man",
    category: SkillsCategory.Tools,
    icon: "devicon-postman-plain",
  },
  {
    title: "Figma",
    category: SkillsCategory.Tools,
    icon: "devicon-figma-plain",
  },

  {
    title: "C++",
    category: SkillsCategory.Languages,
    icon: "devicon-cplusplus-plain",
  },
  {
    title: "Python",
    category: SkillsCategory.Languages,
    icon: "devicon-python-plain",
  },
  {
    title: "Java",
    category: SkillsCategory.Languages,
    icon: "devicon-java-plain-wordmark",
  },
  {
    title: "Team Communication",
    category: SkillsCategory.SoftSkills,
    icon: <Users aria-label="users icon" className="w-6 h-6 text-main" />,
  },
  {
    title: "Problem Solving",
    category: SkillsCategory.SoftSkills,
    icon: <Brain aria-label="Brain icon" className="w-6 h-6 text-main" />,
  },
  {
    title: "Project Planning",
    category: SkillsCategory.SoftSkills,
    icon: <BookOpen aria-label="BookOpen icon" className="w-6 h-6 text-main" />,
  },
  {
    title: "Time Management",
    category: SkillsCategory.SoftSkills,
    icon: <Timer aria-label="Timer icon" className="w-6 h-6 text-main" />,
  },
];
