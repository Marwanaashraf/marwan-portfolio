export interface Experience {
  id: string;
  role: string;
  company: string;
  employmentType: "Full-time" | "Training" | "Internship" | "Freelance";
  startDate: string;
  endDate: string | "Present";
  location: string;
  responsibilities: string[];
}
