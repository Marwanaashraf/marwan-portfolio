import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
export default function Education() {
  return (
    <section className="contain my-20">
      <motion.h2
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Education
      </motion.h2>
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-[100%] md:w-[80%] mx-auto my-14 bg-card_light dark:bg-slate-900 shadow rounded-lg border border-main/30   dark:border-sky-900 p-6"
      >
        {/* bechlor */}
        <div className="flex items-center space-x-4 ">
          <div className="w-28 sm:w-24 h-16  lg:w-20 lg:h-20 bg-gradient-to-br to-secondry/20 dark:to-secondry/20 from-card_light dark:from-card_dark rounded-lg flex justify-center items-center text-main">
            <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-main" />
          </div>
          <div>
            <h3 className="text-gradient text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold">
              Bachelor of Computer Science and Information Systems
            </h3>
            <p className="text-main text-base md:text-xl font-bold">
              Ain Shams University
            </p>
          </div>
        </div>

        {/* chlander and location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3 flex items-center space-x-2 font-semibold"
          >
            <Calendar className="w-5 h-5 text-main " />
            <span>2020 – 2024 (Graduated)</span>
          </motion.div>
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3 flex items-center space-x-2 font-semibold"
          >
            <MapPin className="w-6 h-6 text-main" />
            <span>Cairo, Egypt</span>
          </motion.div>
        </div>

        {/* Graduation project */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-gradient-to-r to-secondry/15 dark:to-secondry/10 from-card_light dark:from-card_dark rounded-lg p-3 flex items-center space-x-2 font-semibold text-2xl shadow"
        >
          <GraduationCap className="w-8 h-8 text-main" />
          <span className="text-black dark:text-white">Graduation Project</span>
        </motion.div>

        {/* name , grade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Project Name:{" "}
              <span className="text-slate-500 dark:text-slate-400 text-base font-medium">
                Image Colorization
              </span>
            </h3>
          </motion.div>
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Grade: <span className="text-slate-500 dark:text-slate-400 text-base font-medium">B+</span>
            </h3>
          </motion.div>
        </div>

        {/* disc */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
          className="bg-white dark:bg-slate-800 rounded-lg p-3 my-3"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Description:{" "}
            <span className="text-slate-500 dark:text-slate-400 text-base font-medium">
              A deep learning model that colorizes black-and-white images and
              enhances old image quality.
            </span>
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
