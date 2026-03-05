export interface GraduationProject {
  title: string;
  grade?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  location?: string;
  startYear: number;
  endYear: number;
  graduationProject?: GraduationProject;
}
