import { ProjectStatus, type Project } from "./Projects.types";
import watchoria from "../../assets/projects/Watchoria (2).png";
import fresh from "../../assets/projects/freshcart.png";
import basket from "../../assets/projects/basket.png";
import fokir from "../../assets/projects/fokir.png";
import yummy from "../../assets/projects/yummy.png";
import dunkin from "../../assets/projects/dunkin.png";
import weather from "../../assets/projects/Weather.png";
import lms from "../../assets/projects/lms.png";
import magic from "../../assets/projects/magic.png";

// githubProfile
export const projectsConfig = {
  githubProfile: "https://github.com/Marwanaashraf?tab=repositories",
};

export const projectsList: Project[] = [
  {
    id: "magic-planet",
    title: "Magic Planet",
    description:
      "Magic Planet is a official  web application a company specializing in agricultural fertilizers and pesticides. The platform allows users to browse products, search and filter them, add items to the cart, and complete orders easily.",
    liveDemo: "https://magic-planett.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: magic,

    technologies: [
      "Next.js",
      "Zustand",
      "Tailwindcss",
      "Supabase",
      "EmailJS",
      "cloudinary",
      "Swiper",
    ],
  },
  {
    id: "watchoria",
    title: "Watchoria",
    description:
      "A responsive movie and TV show web app browsing, searching, and viewing detailed content with trailers. Features trending titles, watchlist and ratings with secure per-user storage using Supabase.",
    sourceCode: "https://github.com/Marwanaashraf/watchoria",
    liveDemo: "https://watchoria.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: watchoria,

    technologies: [
      "React",
      "Redux",
      "Tailwindcss",
      "Supabase",
      "cloudinary",
      "Swiper",
    ],
  },
   {
    id: "Education-Lms",
    title: "Education Lms",
    description:
      "Developed a learning platform with secure authentication reducing unauthorized access attempts, Built an Admin Dashboard to manage courses, exams, and users — including adding, editing, and deleting content in real time ,displayed free and paid courses",
    sourceCode: "https://github.com/Marwanaashraf/LMS",
    liveDemo: "https://lms-lilac-nu.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: lms,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Redux",
      "Formik",
      "yup",
    ],
  },
  {
    id: "Fresh-Cart",
    title: "Fresh Cart",
    description:
      "A full-featured e-commerce website enabling users to browse products by category or brand, view details, and manage carts and wishlists. Supports cash and card payments and order tracking",
    sourceCode: "https://github.com/Marwanaashraf/E-commerce",
    liveDemo: "https://e-commerce-sage-nine-94.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: fresh,
    technologies: [
      "React",
      "BootStrap",
      "Responsive Design",
      "react-slick",
      "Formik",
      "yup",
    ],
  },
 
  {
    id: "Basket-Shop",
    title: "Basket Shop",
    description:
      "Built a responsive full-stack e-commerce application, enabling advanced product filtering, search, and seamless browsing. Implemented wishlist, shopping cart, checkout flow and contact form",
    sourceCode: "https://github.com/Marwanaashraf/Basket-shop",
    liveDemo: "https://basket-shop-three.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: basket,

    technologies: [
      "Full Stack",
      "React",
      "Supabase",
      "Tailwindcss",
      "Responsive Design",
      "Swiper",
      "Formik",
      "yup",
    ],
  },
  {
    id: "Dunkin-Donuts",
    title: "Dunkin' Donuts",
    description:
      "Integrated Supabase to manage dynamic menu data, ensuring scalability and flexibility across the platform.Showcases the Dunkin’ Donuts menu with category filtering, branch locations across Egypt, brand history, and Dark Mode support.",
    sourceCode: "https://github.com/Marwanaashraf/dunkin-donuts",
    liveDemo: "https://dunkin-donuts-tawny.vercel.app/",
    status: ProjectStatus.COMPLETED,
    thumbnail: dunkin,

    technologies: [
      "React",
      "Supabase",
      "Tailwindcss",
      "cloudinary",
      "Responsive Design",
      "Framer motion",
      "Formik",
      "yup",
    ],
  },
  {
    id: "Weather-App",
    title: "Weather App",
    description:
      "Developed a responsive weather application that allows users to search for any city and view real-time weather conditions, hourly forecasts, and a 7-day outlook. Integrated a weather API with a clean, user-friendly interface for accurate and seamless weather tracking.",
    sourceCode: "",
    liveDemo: "",
    status: ProjectStatus.INPROGRESS,
    thumbnail: weather,

    technologies: [
      "React",
      "Tailwindcss",
      "Responsive Design",
      "Swiper",
      "react-query",
    ],
  },

  {
    id: "yummy",
    title: "Yummy",
    description:
      "Built a responsive recipe search application using HTML, CSS, JavaScript, jQuery, and external meal APIs to fetch real-time data.  Enabled meal search by name, ingredient, or category with detailed recipes, images, and smooth user interactions",
    sourceCode: "https://github.com/Marwanaashraf/yummy",
    liveDemo: "https://marwanaashraf.github.io/yummy/",
    status: ProjectStatus.COMPLETED,
    thumbnail: yummy,

    technologies: [
      "HTML",
      "CSS",
      "Js",
      "Responsive Design",
      "BootStrap",
      "Jquery",
    ],
  },
  {
    id: "fokir",
    title: "Fokir",
    description:
      "Developed a responsive website using HTML, CSS, JavaScript, Bootstrap, and jQuery. Demonstrates core JavaScript concepts including DOM manipulation, event handling, interactive UI behavior, and clean, structured code.",
    sourceCode: "https://github.com/Marwanaashraf/Fokir",
    liveDemo: "https://marwanaashraf.github.io/Fokir/",
    status: ProjectStatus.COMPLETED,
    thumbnail: fokir,

    technologies: [
      "HTML",
      "CSS",
      "Js",
      "Responsive Design",
      "BootStrap",
      "Jquery",
    ],
  },
];
