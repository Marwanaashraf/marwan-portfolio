import me from "../../assets/marwan.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { childrensAnimate, divVariants } from "../../Constants/Motion";
import { aboutList } from "../../Constants/About";
import DivIcon from "../../Components/DivIcon/DivIcon";
export default function About() {
  const isMobile = useMediaQuery("(max-width:1024px)");

  return (
    <section className="my-20 contain">
      {/* header */}
      <motion.h2
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:grid lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-4 my-10 items-center gap-8 overflow-hidden">
        {/* my portfolio img */}
        <motion.div
          initial={{
            x: isMobile ? 0 : -30,
            y: isMobile ? 20 : 0,
            opacity: 0,
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="size-80 md:size-72 lg:size-80 lg:col-span-1 xl:col-span-1 2xl:col-span-1 border-4 border-main/30 rounded-lg flex justify-center items-center cursor-pointer hover:border-main duration-700 mb-6 md:mb-0"
        >
          <div
            style={{ backgroundImage: `url(${me})` }}
            className="bg-cover bg-center size-full rounded-lg"
          />
        </motion.div>

        {/* details of me */}
        <motion.div
          initial={{
            x: isMobile ? 0 : 20,
            y: isMobile ? 20 : 0,
            opacity: 0,
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="lg:col-span-2 xl:col-span-2 2xl:col-span-3 text-center md:text-left"
        >
          <p className="dark:text-gray-400 text-base sm:text-lg leading-relaxed break-words">
            I am a Front-end Developer with a strong passion for building web
            applications that are both interactive and user-friendly. I enjoy
            translating complex ideas into clean, efficient, and maintainable
            code, creating seamless experiences for users.
          </p>
          <p className="dark:text-gray-400 text-base sm:text-lg leading-relaxed break-words my-4">
            I specialize in modern front-end technologies like React.js,
            Next.js, and Tailwind CSS, focusing on combining innovative design
            with performant, responsive interfaces to deliver high-quality web
            applications.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {aboutList.map((ele, i) => {
          return (
            <motion.div
              initial={{ x: 10, y: 10 }}
              whileInView={{ x: -10, y: -10 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="bg-card_light dark:bg-card_dark my-10  w-full p-8 lg:p-5 rounded-lg border border-main/20 flex flex-col justify-center items-center gap-y-3 text-center"
            >
              {/* icon */}
              <motion.div
                variants={childrensAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <DivIcon className="w-16 h-16" icon={ele.icon} />
              </motion.div>
              {/* name */}
              <motion.h3
                variants={childrensAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-xl font-semibold text-black dark:text-white"
              >
                {ele.name}
              </motion.h3>
              <motion.p
                variants={childrensAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-slate-600 dark:text-slate-400 "
              >
                {ele.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
