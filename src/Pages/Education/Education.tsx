import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
export default function Education() {
  return (
    <section className="contain py-10">
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
        className="w-[100%] md:w-[80%] mx-auto my-14 bg-slate-950 shadow rounded-lg border border-sky-900 p-5"
      >
        {/* bechlor */}
        <div className="flex items-center space-x-4 ">
          <div className="w-28 sm:w-24 h-16  lg:w-20 lg:h-20 bg-slate-900 rounded-lg flex justify-center items-center text-main">
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
            className="bg-slate-800 rounded-lg p-3 flex items-center space-x-2 font-semibold"
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
            className="bg-slate-800 rounded-lg p-3 flex items-center space-x-2 font-semibold"
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
          className="bg-slate-900 rounded-lg p-3 flex items-center space-x-2 font-semibold text-2xl"
        >
          <GraduationCap className="w-8 h-8 text-main" />
          <span>Graduation Project</span>
        </motion.div>

        {/* name , grade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-slate-800 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold">
              Project Name:{" "}
              <span className="text-slate-400 text-base">
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
            className="bg-slate-800 rounded-lg p-3"
          >
            <h3 className="text-xl font-semibold">
              Grade: <span className="text-slate-400 text-base">B+</span>
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
          className="bg-slate-800 rounded-lg p-3 my-3"
        >
          <h3 className="text-xl font-semibold">
            Description:{" "}
            <span className="text-slate-400 text-base">
              A deep learning model that colorizes black-and-white images and
              enhances old image quality.
            </span>
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
