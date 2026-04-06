import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import clsx from "clsx";
import { projectsConfig, projectsList } from "./Projects.constants";
import { MotionWrapper } from "../../animations/motionVariants";

import { ProjectStatus, type ProjectStatusType } from "./Projects.types";
import defaultImg from "../../assets/projects/default.png";
import { Button } from "../../Components/ui/Button";

/**
 * TechBadge Component
 * Reusable badge for each technology in the project
 */
const TechBadge = ({ name }: { name: string }) => (
  <span className="px-3 h-7 flex items-center rounded-full bg-transparent dark:bg-slate-800 border border-main/20 dark:border-main/20 text-main text-sm transition-transform duration-300 hover:scale-105">
    {name}
  </span>
);

/**
 * Get dynamic styles based on project status
 */
const getStatusStyle = (status: ProjectStatusType) => {
  switch (status) {
    case ProjectStatus.COMPLETED:
      return "bg-green-500 hover:bg-green-500/90";
    case ProjectStatus.INPROGRESS:
      return "bg-orange-500 hover:bg-orange-400";
    default:
      return "bg-main hover:bg-main/90";
  }
};

export default function Projects() {
  return (
    <section aria-label="Projects section" className="my-20 section-container">
      {/* Section Header */}
      <MotionWrapper delay={0.3}>
        <h1 className="section-head">Featured Projects</h1>
      </MotionWrapper>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-8">
        {projectsList.map((project, i) => (
          <MotionWrapper key={project.id} delay={0.5 + 0.1 * i}>
            <article className="relative rounded-lg bg-card_light dark:bg-card_dark shadow-md overflow-hidden group transition-transform duration-500 hover:-translate-y-1 will-change-transform">
              {/* Project Thumbnail */}
              <div className=" relative overflow-hidden">
                <img
                  src={project.thumbnail || defaultImg}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
                </div>

              {/* Project Content */}
              <div className="p-4 space-y-3">
                {/* Title & Description */}
                <h3 className="font-semibold text-black dark:text-white text-xl capitalize">
                  {project.title}
                </h3>
                <p className="text-light dark:text-dark line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="text-sm uppercase font-semibold flex gap-1 items-center">
                  <Zap className="w-4 h-4 text-main" />
                  <span className="text-black dark:text-white">Tech stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 h-7 flex items-center rounded-full bg-card_light dark:bg-card_dark border border-main/25 text-sm">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                {project.sourceCode || project.liveDemo ? (
                  <div className="flex items-center gap-3">
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="w-full"
                      >
                        <Button className="w-full h-10 text-sm bg-gradient text-black">
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </Button>
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} Live Demo`}
                        className="w-full"

                      >
                        <Button className="w-full h-10 text-sm bg-slate-900 dark:bg-black border border-main dark:border-main/35 text-white">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </Button>
                      </a>
                    )}
                  </div>
                ) : (
                  <Button
                    disabled
                    className="w-full h-9 text-sm opacity-60 bg-main dark:bg-black cursor-not-allowed"
                  >
                    Coming Soon...
                  </Button>
                )}
              </div>

              {/* Status Badge */}
              <div
                className={clsx(
                  "absolute top-2 right-2 px-3 py-1 flex items-center gap-2 rounded-full text-xs font-semibold text-white capitalize",
                  getStatusStyle(project.status),
                )}
              >
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                {project.status}
              </div>
            </article>
          </MotionWrapper>
        ))}
      </div>

      {/* Explore More Projects */}
      <MotionWrapper delay={0.7}>
        <div className="my-8 max-w-md mx-auto flex flex-col items-center gap-3 text-center bg-gradient-to-tl from-secondry/10 to-card_light dark:to-card_dark border border-main/30 rounded-lg p-6">  
          <h3 className="text-gradient text-2xl font-semibold">
            Explore More Projects
          </h3>
          <p className="text-slate-400">
            Discover additional work and open-source contributions.
          </p>
          <Button
            onClick={() => window.open(projectsConfig.githubProfile, "_blank")}
            className="w-52 h-9 text-sm bg-main text-black"
          >
            <Github className="w-4 h-4" />
            View Github Profile
          </Button>
        </div>
      </MotionWrapper>
    </section>
  );
}
