import { useState } from "react";
import { ISkill } from "../../Interfaces/skills";
import DivIcon from "../../Components/DivIcon/DivIcon";
import { AnimatePresence, motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import { skills, skillsCategory } from "../../Constants/Skills";
import {
  childrensAnimate,
  containerAnimate,
  divVariants,
} from "../../Constants/Motion";
import clsx from "clsx";
export default function Skills() {
  // displayed skills
  const [displayedSkills, setDisplayedSkills] = useState<ISkill[]>(
    skills.slice(0, 15)
  );

  // active Category
  const [activeCategory, setActiveCategry] = useState<string>("All Skills");

  // choose type of skills
  const handleSkills = (category: string) => {
    // all skills choosen
    if (category === "All Skills") {
      setDisplayedSkills(skills.slice(0, 15));
      setActiveCategry(category);
    } else {
      // filter skills by category
      let result = skills.filter((item) => item.category === category);
      // set new skills data
      setDisplayedSkills(result);
      // active category 
      setActiveCategry(category);
    }
  };

  return (
    <section aria-label="Skills section" className="my-20 contain">
      {/* header */}
      <motion.h2
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Technical Skills
      </motion.h2>
      <p className="text-slate-400 mt-10 text-center font-medium text-lg">
        A comprehensive showcase of my technical knowledge and experience.{" "}
      </p>

      {/* categories */}
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-wrap justify-center items-center space-x-3 my-5"
      >
        {skillsCategory.map((item, i) => {
          return (
            <button
              onClick={() => {
                handleSkills(item);
              }}
              key={i}
              id={item}
              className={clsx(
                " h-9 p-3 rounded-xl flex justify-center items-center cursor-pointer space-x-2  text-sm md:text-base my-2 text-black dark:text-white",
                activeCategory === item
                  ? "bg-main dark:bg-main/70 text-white"
                  : "border hover:bg-card_light hover:dark:bg-card_dark border-main/40 hover:text-main hover:border-main"
              )}
            >
              <CodeXml aria-label="code icon" className="w-5 h-5" />
              <span>{item}</span>
            </button>
          );
        })}
      </motion.div>

      {/* skills */}
      <motion.div
        variants={containerAnimate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-3 w-[85%] mx-auto"
      >
        <AnimatePresence mode="wait">
          {displayedSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={childrensAnimate}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              layout
              className="hover:shadow-lg hover:shadow-main/20   w-full h-40 border border-main/15  dark:border-sky-950 bg-slate-100 dark:bg-card_dark rounded-lg flex flex-col space-y-2 justify-center items-center p-3 hover:-translate-y-3 transition-all duration-300 group"
            >
              {/* skill's icon */}
              <DivIcon
                className="w-14 h-14 group-hover:scale-110 duration-300"
                icon={skill.icon}
              />

              {/* skill's name */}
              <h6 className="font-semibold dark:text-white text-black">
                {skill.name}
              </h6>

              {/* skill's category */}
              <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
