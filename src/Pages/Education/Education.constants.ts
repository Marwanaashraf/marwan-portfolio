import type { EducationItem } from "./Education.types";

export const educationData: EducationItem = {
  degree: "Bachelor of Computer Science",
  institution: "Ain Shams",
  field: "Information Systems",
  location: "Cairo, Egypt",
  startYear: 2020,
  endYear: 2024,
  graduationProject: {
    title: "Image Colorization",
    grade: "A",
    description:
      "A deep learning model that colorizes black-and-white images and enhances old image quality.",
  },
};
