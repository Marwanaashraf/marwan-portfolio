import type { Experience } from "./Experience.types";
export const experienceList: Experience[] = [
  {
    id: "exp1",
    role: "Front-End (React.js) Training",
    company: "Route Academy",
    employmentType: "Training",
    startDate: "Sept 2023",
    endDate: "Feb 2024",
    location: "Cairo, Egypt",

    responsibilities: [
      "Completed an intensive 6-month training program focused on HTML, CSS, JavaScript, Bootstrap, React.js, and responsive web development.",
      "Built and deployed 6+ real-world projects applying best practices for clean, scalable code.",
      "Enhanced debugging and documentation reading skills through hands-on challenges.",
    ],
  },
  {
    id: "exp3",

    role: "Back-End (Node.js) Training",
    company: "Route Academy",
    employmentType: "Training",
    startDate: "Oct 2024",
    endDate: "April 2025",
    location: "Cairo, Egypt",

    responsibilities: [
      "Learned and applied Node.js with Express.js, working with MongoDB and MySQL to design and manage databases and build scalable backend systems.",
      "Developed RESTful APIs such as Notes and Social Media APIs, implementing authentication, CRUD operations, routing, and proper error handling.",
    ],
  },
  {
    id: "exp2",

    role: "Front-End Internship",
    company: "Web Masters",
    employmentType: "Internship",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    location: "Remote",

    responsibilities: [
      "Refactored and rebuilt Vanilla JavaScript project, improving maintainability and reducing code duplicationby 30%.",
      "Collaborated in a 6-member team to develop a responsive education LMS with an Admin Dashboard using Next.js, featuring robust backend integration",
      "Fixed UI bugs and improved accessibility.",
      "Rebuilt styling with Tailwind CSS, reducing code size by 60% and improving responsiveness.",
    ],
  },

  {
    id: "exp4",

    role: "Freelance Front-End Developer",
    company: "Self-Employed",
    employmentType: "Freelance",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "Remote",

    responsibilities: [
      "Built landing pages optimized for conversion.",
      "Integrated EmailJS and form validation systems.",
      "Ensured cross-browser compatibility and responsiveness.",
      "Deployed projects using Vercel and handled client revisions.",
    ],
  },
];
