import { useState } from "react";
import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import clsx from "clsx";

import { skills } from "./Skills.constants";
import { MotionWrapper } from "../../animations/motionVariants";
import { SkillsCategory, type SkillCategory } from "./Skills.types";
import IconButton from "../../Components/IconButton/IconButton";


export default function Skills() {
  // 🔹 Active skill category
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    SkillsCategory.AllSkills,
  );

  // 🔹 Filter skills based on selected category
  const filteredSkills =
    activeCategory === SkillsCategory.AllSkills
      ? skills.slice(0, 12) // limit to 12 by default for UI neatness
      : skills.filter((skill) => skill.category === activeCategory);

  // 🔹 Handle category button click
  const handleSkills = (category: SkillCategory) => {
    setActiveCategory(category);
  };

  return (
    <section aria-label="Skills section" className="my-20 section-container">
      
      {/* Section Heading */}
      <MotionWrapper delay={0.3}>
        <h1 className="section-head">Technical Skills</h1>
      </MotionWrapper>

      {/* Short description */}
      <p className="text-light dark:text-dark mt-6 text-center font-medium text-lg">
        A comprehensive showcase of my technical knowledge and experience.
      </p>

      {/* Skill categories buttons */}
      <MotionWrapper delay={0.5}>
        <div className="flex flex-wrap justify-center items-center gap-3 my-5">
          {Object.values(SkillsCategory).map((item) => (
            <button
              key={item} // use category name as key
              onClick={() => handleSkills(item)}
              className={clsx(
                "h-9 p-3 rounded-xl flex justify-center items-center gap-2 text-sm md:text-base my-2",
                activeCategory === item
                  ? "bg-main dark:bg-main/70 text-white"
                  : "border hover:bg-card_light hover:dark:bg-card_dark border-main/40 hover:text-main hover:border-main",
              )}
            >
              <CodeXml aria-label="code icon" className="w-5 h-5" />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </MotionWrapper>

      {/* Skills grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1, staggerChildren: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[85%] sm:w-[75%] mx-auto"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={`${skill.title}-${skill.category}`} // unique key
            aria-label={`${skill.title} skill`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            layout
            className="hover:shadow-lg hover:shadow-main/20 w-full h-40 border border-main/25 dark:border-main/15
            bg-white dark:bg-slate-900 rounded-lg flex flex-col gap-2 justify-center items-center p-3
            hover:-translate-y-3 transition-all duration-300 group"
          >
            {/* Skill Icon */}
            <IconButton
              className="w-14 h-14 bg-card_light dark:bg-slate-800 group-hover:scale-110 duration-300"
              icon={
                typeof skill.icon === "string" ? (
                  <i className={`${skill.icon} text-main text-2xl`}></i>
                ) : (
                  skill.icon
                )
              }
            />

            {/* Skill title */}
            <h6 className="font-semibold dark:text-white text-black">{skill.title}</h6>

            {/* Skill category */}
            <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
              {skill.category}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}