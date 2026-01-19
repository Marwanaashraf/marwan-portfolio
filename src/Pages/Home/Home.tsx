import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
import { socilMediaIcons } from "../../Constants/SocialMediaIcons";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  // Job
  const [text] = useTypewriter({
    words: ["Frontend developer", "React developer", "Next.js Developer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  return (
    <section className="h-screen relative bg-gradient-to-tl to-card_light dark:to-card_dark from-secondry/10">
      <div className="py-3 flex flex-col items-center space-y-7 text-center">
        {/* my name */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2"
        >
          <h5 className="mt-10">Hello I'm</h5>
          <h1 className="text-5xl md:text-7xl text-gradient font-bold">
            Marwan Ashraf
          </h1>
        </motion.div>

        {/* job */}
        <motion.h5
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.9 }}
          className="text-main"
        >
          {text}
          <Cursor />
        </motion.h5>

        <h5 className="text-xl">Creating impactful digital experiences</h5>

        {/* view work , contact */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.3 }}
          className="flex space-x-5"
        >
          {/* view my work : navigte to projects */}
          <Link offset={-80} smooth={true} to="projects" duration={600}>
            <button
              aria-label="view my work"
              className="btn w-40 bg-main/90 hover:scale-95 text-white text-lg hover:shadow-lg hover:shadow-main/50"
            >
              View My work
            </button>
          </Link>

          {/* Get In Touch : navigte to contact */}
          <Link offset={-80} smooth={true} to="contact" duration={600}>
            <button
              aria-label="navigte to contact section"
              className="btn w-40 bg-black border border-main/70 hover:bg-purple-500 hover:scale-95 text-white text-lg
          "
            >
              Get In Touch
            </button>
          </Link>
        </motion.div>

        {/* download */}
        <motion.a
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.3 }}
          className="w-56 h-12  bg-gradient flex justify-center items-center rounded-lg text-lg font-semibold hover:scale-90 duration-200 space-x-2 text-white"
          download
          aria-label="download cv"
          href="https://drive.google.com/uc?export=download&id=1XAHJzfGu94rHozaXcmcwbt5VBL-uM6DD"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -4 }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <Download className="w-5 h-5" />
          </motion.div>
          <span>Download CV</span>
        </motion.a>

        {/* social media */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.2,
            delay: 1.7,
            type: "spring",
            stiffness: 100,
          }}
          className="icons flex space-x-2"
        >
          {socilMediaIcons.map((item) => {
            return (
              <a
                key={item.name}
                className="size-12 rounded-full flex justify-center items-center bg-gradient-to-br from-slate-200 dark:from-slate-900 to-secondry/15 dark:to-secondry/20 text-main hover:to-secondry/25 hover:dark:to-secondry/25 hover:scale-90 transition-all duration-300"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* arrow : navigate to about */}
      <Link to="about" offset={-80} duration={600} smooth={true}>
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-28 left-1/2 text-2xl cursor-pointer group"
        >
          <ArrowDown
            aria-label="arrow icon"
            className="w-8 h-8 text-slate-500 dark:text-slate-300 "
          />
        </motion.div>
      </Link>
    </section>
  );
}
