import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { aboutCards, aboutContent } from "./About.constants";
import { MotionWrapper } from "../../animations/motionVariants";
import IconButton from "../../Components/IconButton/IconButton";

const mobileBreakpoint = "(max-width:1024px)";

export default function About() {
  const isMobile = useMediaQuery(mobileBreakpoint); // 📱 detect mobile for animations

  return (
    <section
      aria-label="About section"
      className="my-20 section-container"
      id="about"
    >
      {/* Section Title */}
      <MotionWrapper delay={0.2}>
        <h1 className="section-head">About</h1>
      </MotionWrapper>

      {/* Main content: profile image + description */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 my-10 items-center gap-8 overflow-hidden">
        {/* Profile Image with animation */}
        <motion.div
          initial={{
            x: isMobile ? 0 : -30,
            y: isMobile ? 20 : 0,
            opacity: 0,
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="size-80 md:size-72 lg:size-80 lg:col-span-1 xl:col-span-1 2xl:col-span-1 border-4 border-main/20 rounded-lg flex justify-center items-center cursor-pointer hover:border-main/70 duration-700 mb-6 md:mb-0"
        >
          <div
            aria-label="Profile Image"
            style={{ backgroundImage: `url(${aboutContent.image})` }}
            className="bg-cover bg-center size-full rounded-sm"
          />
        </motion.div>

        {/* About Text Content */}
        <motion.div
          initial={{
            x: isMobile ? 0 : 20,
            y: isMobile ? 20 : 0,
            opacity: 0,
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-2 xl:col-span-2 2xl:col-span-3 text-center md:text-left"
        >
          <p className="dark:text-dark text-base sm:text-lg leading-relaxed break-words">
            {aboutContent.paragraphs[0]} {/* configurable */}
          </p>
          <p className="dark:text-dark text-base sm:text-lg leading-relaxed break-words my-4">
            {aboutContent.paragraphs[1]}
          </p>
        </motion.div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {aboutCards.map((item) => (
          <div
            key={item.title}
            className="bg-card_light dark:bg-card_dark my-10 w-full p-8 lg:p-5 rounded-lg border border-main/20 flex flex-col justify-center items-center gap-y-3 text-center hover:shadow-lg hover:shadow-main/20 duration-500"
          >
            {/* Card Icon */}
            <MotionWrapper delay={0.5}>
              <IconButton
                className="size-16 bg-slate-200 dark:bg-slate-800"
                icon={item.icon}
              />
            </MotionWrapper>

            {/* Card Title */}
            <MotionWrapper delay={0.7}>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {item.title}
              </h3>
            </MotionWrapper>

            {/* Card Description */}
            <MotionWrapper delay={0.9}>
              <p className="text-light dark:text-dark">
                {item.description} {/* configurable */}
              </p>
            </MotionWrapper>
          </div>
        ))}
      </div>
    </section>
  );
}
