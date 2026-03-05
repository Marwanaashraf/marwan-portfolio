import type { ReactNode } from "react";

export interface Skill {
  title: string;
  category: string;
  icon: string | ReactNode;
}

// categories
export const SkillsCategory = {
  AllSkills: "All Skills",
  Frontend: "Frontend",
  Backend: "Backend",
  Languages: "Programming Languages",
  Tools: "Tools",
  SoftSkills: "Soft Skills",
} as const;
export type SkillCategory =
  (typeof SkillsCategory)[keyof typeof SkillsCategory];
