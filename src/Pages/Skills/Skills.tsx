import React, { useState } from "react";
import {
  BootstrapIcon,
  CssIcon,
  HtmlIcon,
  JQueryIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
} from "../../icons/Skills/frontend";
import {
  CIcon,
  JavaIcon,
  JsIcon,
  PythonIcon,
  TsIcon,
} from "../../icons/Skills/languages";
import {
  ExpressIcon,
  MongoIcon,
  NodeIcon,
  SqlIcon,
  SupabaseIcon,
} from "../../icons/Skills/backend";
import { GitIcon } from "../../icons/Skills/tools";
import { ProblemIcon, ProjectIcon, TeamIcon } from "../../icons/Skills/soft";
import { ISkill } from "../../Interfaces/skills";
import { CodeIcon } from "../../icons";
import DivIcon from "../../Components/DivIcon/DivIcon";
import { AnimatePresence, motion } from "framer-motion";
import { divVariants } from "../Home/Home";
// allSkills
let skills: ISkill[] = [
  { name: "HTML5", category: "Frontend", icon: <HtmlIcon /> },
  { name: "CSS", category: "Frontend", icon: <CssIcon /> },
  { name: "BootStrap", category: "Frontend", icon: <BootstrapIcon /> },
  { name: "Tailwind", category: "Frontend", icon: <TailwindIcon /> },
  { name: "JavaScript", category: "Programming Languages", icon: <JsIcon /> },
  { name: "TypeScript", category: "Programming Languages", icon: <TsIcon /> },
  { name: "JQuery", category: "Frontend", icon: <JQueryIcon /> },
  { name: "React.js", category: "Frontend", icon: <ReactIcon /> },
  { name: "Next.js", category: "Frontend", icon: <NextIcon /> },
  { name: "Node.js", category: "Backend", icon: <NodeIcon /> },
  { name: "Express.js", category: "Backend", icon: <ExpressIcon /> },
  { name: "MySQL", category: "Backend", icon: <SqlIcon /> },
  { name: "MongoDB", category: "Backend", icon: <MongoIcon /> },
  { name: "Supabase", category: "Backend", icon: <SupabaseIcon /> },
  { name: "C++", category: "Programming Languages", icon: <CIcon /> },
  { name: "Python", category: "Programming Languages", icon: <PythonIcon /> },
  { name: "Java", category: "Programming Languages", icon: <JavaIcon /> },
  { name: "GitHub", category: "Tools", icon: <GitIcon /> },
  { name: "Team Communication", category: "Soft Skills", icon: <TeamIcon /> },
  { name: "Problem Solving", category: "Soft Skills", icon: <ProblemIcon /> },
  { name: "Project Planning", category: "Soft Skills", icon: <ProjectIcon /> },
];
// categories
let skillsCategory: string[] = [
  "All Skills",
  "Frontend",
  "Backend",
  "Programming Languages",
  "Tools",
  "Soft Skills",
];
let containerAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
let childrensAnimate = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Skills() {
  // displayed skills
  let [filterSkills, setFilterSkills] = useState<ISkill[]>(skills);
  // active Category
  let [activeCategory, setActiveCategry] = useState<string>("All Skills");
  let handleSkills = (category: string) => {
    if (category === "All Skills") {
      setFilterSkills(skills);
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
              <CodeIcon />
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
              <p className="text-slate-500 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
