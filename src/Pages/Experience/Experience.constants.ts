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
    id: "exp2",

    role: "Web Masters — Front-End Developer",
    company: "Web Masters",
    employmentType: "Full-time",
    startDate: "Dec 2024",
    endDate: " April 2025",
    location: "on-Site",

    responsibilities: [
      "Led the migration of legacy Vanilla JS codebases to Next.js, reducing code duplication by 30%",
      "Co-engineered a full-scale Learning Management System (LMS) with dynamic student portals and a real-time data-driven Admin Dashboard.Dashboard for course management.",
      "Streamlined complex data fetching logic by integrating RESTful APIs, ensuring seamless synchronization between the Next.js frontend and the backend infrastructure",
      "Optimized application speed via Lazy Loading, Image Optimization, and Tailwind CSS, resulting in a 60% reduction in bundle size and smoother UX on low-bandwidth connections.",
      "Enhanced Managed complex application states and user sessions efficiently, ensuring data persistence and a bug-free checkout/enrollment flow.",
    ],
  },

  {
    id: "exp4",

    role: "Freelance Software Engineer",
    company: "Self-Employed",
    employmentType: "Freelance",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "Remote",

    responsibilities: [
      " Magic Planet (Agri-Tech): Architected a full-stack e-commerce platform using Next.js & Supabase, automating order processing and reducing manual inventory updates through a custom Admin Dashboard.",
      " Engineered a high-performance product filtering system, significantly improving digital customeracquisition and user retention.",
      "Built landing pages optimized for conversion.",
      "Integrated EmailJS and form validation systems.",
      "Ensured cross-browser compatibility and responsiveness.",
      "Deployed projects using Vercel and handled client revisions.",
    ],
  },
];
