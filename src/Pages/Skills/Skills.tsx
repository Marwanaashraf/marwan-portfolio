import React, { useState } from "react";
import { ISkill } from "../../Interfaces/skills";
import DivIcon from "../../Components/DivIcon/DivIcon";
import { AnimatePresence, motion } from "framer-motion";
import {  CodeXml } from "lucide-react";
import { skills, skillsCategory } from "../../Constants/Skills";
import { childrensAnimate, containerAnimate, divVariants } from "../../Constants/Motion";
export default function Skills() {
  // displayed skills
  let [filterSkills, setFilterSkills] = useState<ISkill[]>(skills.slice(0,15));
  // active Category
  let [activeCategory, setActiveCategry] = useState<string>("All Skills");
  let handleSkills = (category: string) => {
    if (category === "All Skills") {
      setFilterSkills(skills.slice(0,15));
      setActiveCategry(category);
    } else {
      let result = skills.filter((item) => item.category === category);
      setFilterSkills(result);
      setActiveCategry(category);
    }
  };
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
        Technical Skills
      </motion.h2>

      {/* categories */}
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-wrap justify-center items-center space-x-3  my-14"
      >
        {skillsCategory.map((item, i) => {
          return (
            <div
              onClick={() => {
                handleSkills(item);
              }}
              key={i}
              id={item}
              className={
                activeCategory === item
                  ? "border border-main w-fit h-9 p-3 rounded-full flex justify-center items-center cursor-pointer space-x-2 bg-slate-900 text-main text-sm md:text-base my-2"
                  : "border border-sky-900 my-2 w-fit h-9 p-3 rounded-full flex justify-center items-center cursor-pointer space-x-2 hover:bg-slate-900 hover:text-main hover:border-main"
              }
            >
              <CodeXml className="w-5 h-5" />
              <span>{item}</span>
            </div>
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
          {filterSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={childrensAnimate}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              layout
              className="shadow-div w-full h-40 border border-sky-950 bg-slate-900 rounded-lg flex flex-col space-y-2 justify-center items-center p-3 hover:scale-[1.01] duration-300"
            >
              <DivIcon className="w-14 h-14" icon={skill.icon} />
              <h6 className="font-semibold">{skill.name}</h6>
              <p className="text-slate-400 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
