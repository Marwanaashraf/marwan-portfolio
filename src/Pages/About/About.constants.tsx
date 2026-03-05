import { Code, CodeXml, LayoutTemplate, PanelsTopLeft } from "lucide-react";
import type { AboutCard, AboutContent } from "./About.types";
import userImage from "../../assets/marwan.jpg";

// your Data
export const aboutContent: AboutContent = {
  image: userImage,
  paragraphs: [
    "I am a Front-end Developer with a strong passion for building web applications that are both interactive and user-friendly. I enjoy translating complex ideas into clean, efficient, and maintainable code, creating seamless experiences for users.",
    "I specialize in modern front-end technologies like React.js, Next.js, and Tailwind CSS, focusing on combining innovative design with performant, responsive interfaces to deliver high-quality web applications.",
  ],
};

export const aboutCards: AboutCard[] = [
  {
    title: "Full Stack Development",
    icon: <CodeXml aria-label="code icon" className="w-7 h-7 text-main" />,
    description: "MERN stack expertise with modern frameworks and tools.",
  },
  {
    title: "UI/UX Design",
    icon: (
      <PanelsTopLeft aria-label="panels icon" className="w-7 h-7 text-main" />
    ),

    description: "Crafting clean, intuitive, and user-friendly interfaces",
  },
  {
    title: "Clean Code",
    description:
      "Well-structured and maintainable code following best practices.",
    icon: <Code aria-label="code icon" className="w-7 h-7 text-main" />,
  },
  {
    title: "Responsive Design",
    icon: (
      <LayoutTemplate aria-label="layout icon" className="w-7 h-7 text-main" />
    ),
    description: "Layouts that adapt smoothly to all screen sizes.",
  },
];
