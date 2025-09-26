import React from "react";
import watchoria from "../../assets/projects/watchoria.png";
import fresh from "../../assets/projects/freshcart.png";
import basket from "../../assets/projects/basket.png";
import fokir from "../../assets/projects/fokir.png";
import yummy from "../../assets/projects/yummy.png";
import dunkin from "../../assets/projects/dunkin.png";
import weather from "../../assets/projects/Weather.png";
import { GithubIcon, ShareIcon, TechnoIcon } from "../../icons/index";
import { motion } from "framer-motion";
import { divVariants } from "../Home/Home";
const projectsList = [
  {
    name: "Fresh Cart",
    desc: "A full-featured e-commerce website using React that allows users to browse products by categories and brands. Users can view product details, add items to their wishlist or shopping cart, and proceed to checkout with both cash and card payment options. The platform also enables users to track their orders and view detailed order information, and efficient state management using React hooks(Context).",
    srcCode: "https://github.com/Marwanaashraf/E-commerce",
    liveDemo: "https://e-commerce-sage-nine-94.vercel.app/",
    status: true,
    image: fresh,
    teshStack: [
      "React",
      "BootStrap",
      "Responsive Design",
      "react-slick",
      "Formik",
      "yup",
    ],
  },
  {
    name: "Watchoria",
    desc: "A fully responsive movie and TV show web application built using React, Tailwind CSS, and Redux, The platform allows users to browse and search for movies and TV shows, view detailed movie information with trailers, and explore TV show pages including seasons and episodes, It features a trending section to highlight popular titles. State management is handled efficiently using Redux, ensuring smooth and dynamic user interactions across the app.",
    srcCode: "https://github.com/Marwanaashraf/watchoria",
    liveDemo: "https://watchoria.vercel.app/",
    status: true,
    image: watchoria,

    teshStack: ["React", "Redux", "Tailwindcss", "Responsive Design", "Swiper"],
  },
  {
    name: "Weather App",
    desc: "A fully responsive movie and TV show web application built using React, Tailwind CSS, and Redux, The platform allows users to browse and search for movies and TV shows, view detailed movie information with trailers, and explore TV show pages including seasons and episodes, It features a trending section to highlight popular titles. State management is handled efficiently using Redux, ensuring smooth and dynamic user interactions across the app.",
    srcCode: "",
    liveDemo: "",
    status: false,
    image: weather,

    teshStack: [
      "React",
      "Tailwindcss",
      "Responsive Design",
      "Swiper",
      "react-query",
    ],
  },
  {
    name: "Basket Shop",
    desc: "A full-stack responsive E-commerce application built with Supabase and React.js. It features product display with advanced filtering (category, brand, price, stock) and search by name. Users can add items to a wishlist, manage a shopping cart, and complete checkout. The platform also includes a contact form for inquiries and leverages React Context API for efficient state management.",
    srcCode: "https://github.com/Marwanaashraf/Basket-shop",
    liveDemo: "https://basket-shop-three.vercel.app/",
    status: true,
    image: basket,

    teshStack: [
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
    name: "Dunkin' Donuts",
    desc: "The project integrates Supabase to manage and fetch dynamic menu data, ensuring scalability and flexibility. It showcases the Dunkin’ Donuts menu with category filtering, displays all branches across Egypt, and highlights the brand’s history. The website also supports Dark Mode.",
    srcCode: "https://github.com/Marwanaashraf/dunkin-donuts",
    liveDemo: "https://dunkin-donuts-tawny.vercel.app/",
    status: true,
    image: dunkin,

    teshStack: [
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
    name: "Yummy",
    desc: "Built a recipe search application using HTML, CSS, JavaScript,Jquery and external meal APIs to fetch real-time food data,Users can search meals by name, ingredient, or category, and view detailed recipes and images,Emphasized responsive design and smooth user interactions for a pleasant experience across devices.",
    srcCode: "https://github.com/Marwanaashraf/yummy",
    liveDemo: "https://marwanaashraf.github.io/yummy/",
    status: true,
    image: yummy,

    teshStack: [
      "HTML",
      "CSS",
      "Js",
      "Responsive Design",
      "BootStrap",
      "Jquery",
    ],
  },
  {
    name: "Fokir",
    desc: "Fokir is a responsive website developed using HTML, CSS, JavaScript, Bootstrap, and jQuery. The project showcases practical implementation of core JavaScript concepts such as DOM manipulation, event handling, and interactive UI behavior. It demonstrates a strong grasp of frontend development principles and clean, structured code.",
    srcCode: "https://github.com/Marwanaashraf/Fokir",
    liveDemo: "https://marwanaashraf.github.io/Fokir/",
    status: true,
    image: fokir,

    teshStack: [
      "HTML",
      "CSS",
      "Js",
      "Responsive Design",
      "BootStrap",
      "Jquery",
    ],
  },
];
let flashDiv = {
  hidden: {
    opacity: 0.4,
  },
  visible: {
    opacity: 1,
    transation: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
export default function Projects() {
  return (
    <section className="py-10 contain">
      {/* header */}
      <motion.h2
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Featured Projects
      </motion.h2>

      {/* projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-3 ">
        {/* projects */}
        {projectsList.map((project, i) => {
          return (
            <motion.div
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, staggerChildren: 0.15 }}
              key={i}
              className="relative rounded-lg bg-slate-900 overflow-hidden  group"
            >
              {/* image */}
              <img
                className="w-full overflow-hidden rounded-t-lg group-hover:scale-[1.03] duration-500"
                src={project.image}
                alt={project.name}
              />
              {/* details */}
              <div className="p-3 space-y-3">
                {/* project Name */}
                <h3 className="font-semibold text-2xl">{project.name}</h3>
                {/* project Description */}
                <p className="text-slate-400 line-clamp-2">{project.desc}</p>
                {/*  Tech stack*/}
                <div className="text-sm uppercase font-semibold flex space-x-1 items-center">
                  <TechnoIcon />
                  <span>Tech stack</span>
                </div>
                <div className="flex flex-wrap space-x-1">
                  {project.teshStack?.map((item) => {
                    return (
                      <div
                        key={item}
                        className="w-fit h-8 p-3 my-1 rounded-full bg-slate-800 border border-sky-900 text-main text-sm flex justify-center items-center"
                      >
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                {/* liveDemo sourceCode */}
                {project.status ? (
                  <div className="grid grid-cols-2 gap-3 items-center">
                    <button
                      onClick={() => {
                        window.open(project.srcCode, "_blank");
                      }}
                      className="btn text-sm bg-gradient text-black hover:border-main hover:bg-black/75   "
                    >
                      <GithubIcon className="w-4 h-4" />{" "}
                      <span>Source Code</span>{" "}
                    </button>
                    <button
                      onClick={() => {
                        window.open(project.liveDemo, "_blank");
                      }}
                      className="btn text-sm bg-black  border border-sky-900 hover:border-main hover:opacity-60  "
                    >
                      <ShareIcon /> <span>Live Demo</span>{" "}
                    </button>
                  </div>
                ) : (
                  <button
                    disabled
                    onClick={() => {
                      window.open(project.liveDemo, "_blank");
                    }}
                    className="btn text-sm bg-black w-full border border-sky-900 hover:border-main hover:opacity-60 cursor-not-allowed"
                  >
                    <ShareIcon /> <span>Coming soon </span>{" "}
                  </button>
                )}

                {/* if completed or no  */}
                <div
                  className={
                    project.status
                      ? "absolute top-1 right-2 w-fit h-3  flex justify-center items-center rounded-full p-3 space-x-1 text-xs font-semibold bg-green-500 hover:bg-green-400"
                      : "absolute top-1 right-2 w-fit h-3  flex justify-center items-center rounded-full p-3 space-x-1 text-xs font-semibold bg-orange-500 hover:bg-orange-400"
                  }
                >
                  <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-white"
                  ></motion.div>
                  <span>{project.status ? "Completed" : "In Progress"}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* expolre more */}
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: .8 }}
        className="my-8 w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[35%] h-52 mx-auto text-center flex flex-col justify-center items-center space-y-3 bg-slate-900 border border-sky-900 rounded-lg p-5"
      >
        <h3 className="text-gradient text-2xl font-semibold">
          Explore More Projects
        </h3>
        <p className="text-slate-400">
          Discover my complete portfolio and open-source contributions.
        </p>
        <button
          onClick={() => {
            window.open(
              "https://github.com/Marwanaashraf?tab=repositories",
              "_blank"
            );
          }}
          className="btn text-sm w-52 bg-main text-black hover:scale-95 duration-500"
        >
          <GithubIcon className="w-4 h-4" /> <span>View Github profile</span>{" "}
        </button>
      </motion.div>
    </section>
  );
}
