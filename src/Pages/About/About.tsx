import React from "react";
import me from "../../assets/photo_2023-10-13_18-34-11.jpg";
import { motion } from "framer-motion";
import { divVariants } from "../Home/Home";
let aboutAnimate = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export default function About() {
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
        About Me
      </motion.h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-1 my-10 items-center gap-8 ">
        {/* me */}
        <motion.div
          variants={aboutAnimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ backgroundImage: `url(${me})` }}
          className="xl:col-span-1 lg:col-span-2 w-full sm:w-96 lg:w-full  h-96  border-4 border-sky-950 rounded-lg bg-cover bg-center hover:border-main duration-500"
        ></motion.div>
        <motion.div
          variants={aboutAnimate}
          initial={{ x: 20, opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="xl:col-span-3 lg:col-span-3 "
        >
          {/* details for me */}
          <p className="text-slate-400 text-lg">
            I am a Software Engineer, graduated with a degree in Computer and
            Information Sciences.
          </p>
          <br />  
          <p className="text-slate-400 text-lg">
            I am a front-end specializing in building responsive and
            user-friendly web applications. I enjoy solving complex problems and
            bringing ideas to life through clean, efficient, and maintainable
            code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
