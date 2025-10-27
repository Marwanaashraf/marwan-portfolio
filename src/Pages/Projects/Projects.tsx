import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
import { projectsList } from "../../Constants/Projects";
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
              className="relative rounded-lg bg-slate-900 overflow-hidden hover:scale-95 cursor-default"
            >
              {/* image */}
              <img
                className="w-full overflow-hidden rounded-t-lg duration-500"
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
                  <Zap className="w-4 h-4 text-main" />
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
                      <Github className="w-4 h-4" />{" "}
                      <span>Source Code</span>{" "}
                    </button>
                    <button
                      onClick={() => {
                        window.open(project.liveDemo, "_blank");
                      }}
                      className="btn text-sm bg-black  border border-sky-900 hover:border-main hover:opacity-60  "
                    >
                      <ExternalLink className="w-4 h-4"/> <span>Live Demo</span>{" "}
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
                    <ExternalLink className="w-4 h-4"/> <span>Coming soon </span>{" "}
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
        transition={{ duration: 1, delay: 0.8 }}
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
          <Github className="w-4 h-4" /> <span>View Github profile</span>{" "}
        </button>
      </motion.div>
    </section>
  );
}
