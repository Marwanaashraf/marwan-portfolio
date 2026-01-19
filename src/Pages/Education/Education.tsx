import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
export default function Education() {
  return (
    <section aria-label="Education section" className="contain my-20">
      {/* header */}
      <motion.h2
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Education
      </motion.h2>

      {/* education details */}
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-[100%] md:w-[80%] mx-auto my-14 bg-card_light dark:bg-slate-950 shadow rounded-lg border border-main/30   dark:border-sky-900 p-6"
      >
        {/* bechlor */}
        <div className="flex items-center space-x-4 ">
          <div className="w-20 sm:w-20 h-16  lg:w-20 lg:h-20 bg-gradient-to-br to-secondry/20 dark:to-secondry/20 from-card_light dark:from-card_dark rounded-lg flex justify-center items-center text-main shadow">
            <GraduationCap
              className="w-8 h-8 sm:w-12 sm:h-12 text-main"
              aria-label="GraduationCap icon"
            />
          </div>
          <div>
            <h3 className="text-gradient text-base sm:text-xl md:text-2xl xl:text-3xl font-bold">
              Bachelor of Computer Science
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
            className="bg-white dark:bg-slate-900 rounded-lg p-3 flex items-center space-x-2 font-semibold"
          >
            <Calendar
              className="w-5 h-5 text-main "
              aria-label="Calendar icon"
            />
            <span>2020 – 2024 (Graduated)</span>
          </motion.div>
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-white dark:bg-slate-900 rounded-lg p-3 flex items-center space-x-2 font-semibold"
          >
            <MapPin className="w-6 h-6 text-main" aria-label="map icon" />
            <span>Cairo, Egypt</span>
          </motion.div>
        </div>

        {/* Department */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white dark:bg-slate-900 rounded-lg p-3 my-3"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Department:{" "}
            <span className="text-slate-500 dark:text-slate-300 font-medium text-base">
              Information Systems
            </span>
          </h3>
        </motion.div>

        {/* Graduation project */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          className="bg-gradient-to-r to-secondry/15 dark:to-secondry/10 from-card_light dark:from-card_dark rounded-lg p-3 flex items-center space-x-2 font-bold text-xl md:text-2xl shadow"
        >
          <GraduationCap
            className="w-8 h-8 text-main"
            aria-label="GraduationCap icon"
          />
          <span className="text-black dark:text-white">Graduation Project</span>
        </motion.div>

        {/* name , grade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          {/* name */}
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-white dark:bg-slate-900 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Project Name:{" "}
              <span className="text-slate-500 dark:text-slate-300 text-base font-medium">
                Image Colorization
              </span>
            </h3>
          </motion.div>

          {/* grade */}
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
            className="bg-white dark:bg-slate-900 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Grade:{" "}
              <span className="text-slate-500 dark:text-slate-300 text-base font-medium">
                B+
              </span>
            </h3>
          </motion.div>
        </div>

        {/* disc */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white dark:bg-slate-900 rounded-lg p-3 my-3"
        >
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Description:{" "}
            <span className="text-slate-500 dark:text-slate-300 text-base font-medium">
              A deep learning model that colorizes black-and-white images and
              enhances old image quality.
            </span>
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
