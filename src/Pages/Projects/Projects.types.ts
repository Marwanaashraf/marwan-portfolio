export const ProjectStatus = {
  COMPLETED: "completed",
  INPROGRESS: "in-progress",
} as const;
export type ProjectStatusType =
  (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Optional — some projects may be private */
  sourceCode?: string;

  /** Optional — allow projects without live demo */
  liveDemo?: string;
  status: ProjectStatusType;
  thumbnail?: string;
  technologies: string[];
}
