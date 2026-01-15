import { Code, CodeXml, LayoutTemplate, PanelsTopLeft } from "lucide-react";

export const aboutList = [
  {
    name: "Full Stack Development",
    icon: <CodeXml aria-label="code icon" className="w-7 h-7 text-main" />,
    description: "MERN stack expertise with modern frameworks and tools.",
  },
  {
    name: "UI/UX Design",
    icon: <PanelsTopLeft aria-label="panels icon" className="w-7 h-7 text-main" />,

    description: "Crafting clean, intuitive, and user-friendly interfaces",
  },
  {
    name: "Clean Code",
    icon: <Code aria-label="code icon" className="w-7 h-7 text-main" />,

    description:
      "Writing maintainable, scalable, and well-documented code following industry best practices.",
  },
  {
    name: "Responsive Design",
    icon: <LayoutTemplate aria-label="layout icon" className="w-7 h-7 text-main" />,
    description:
      "Creating web interfaces that adapt seamlessly to different screen sizes and devices for an optimal user experience.",
  },
];
