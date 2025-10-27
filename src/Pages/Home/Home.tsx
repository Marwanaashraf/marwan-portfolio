import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
import { socilMediaIcons } from "../../Constants/SocialMediaIcons";



export default function Home() {
  return (
    <section className="h-screen relative">
      <div className="py-3 flex flex-col items-center space-y-7 text-center">
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2"
        >
          {/* my name */}
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
        >
          Frontend developer
        </motion.h5>

        <p className="text-slate-200">Creating impactful digital experiences</p>

        {/* view work ,contact */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.3 }}
          className="flex space-x-5"
        >
          <Link offset={-80} smooth={true} to="projects" duration={600}>
            <button className="btn w-36 bg-sky-500 hover:scale-95">
              View My work
            </button>
          </Link>
          <Link offset={-80} smooth={true} to="contact" duration={600}>
            <button
              className="btn w-36 bg-black border border-sky-700 hover:bg-purple-500 hover:scale-95
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
          className="w-56 h-12  bg-gradient flex justify-center items-center rounded-lg text-lg font-semibold hover:scale-90 duration-200 space-x-2"
          download
          href="https://drive.google.com/uc?export=download&id=12EhR9KXXWLd40-RyUX5DzflvRmzWmahm"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -4 }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <Download className="w-5 h-5" />
          </motion.div>
          <span>Download Resume</span>
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
                className="w-12 h-12 rounded-full flex justify-center items-center bg-slate-900 text-sky-500 hover:bg-slate-800 hover:scale-90 duration-100"
                href={item.href}
                target="_blank"
              >
                {item.icon}
              </a>
            );
          })}
        </motion.div>
      </div>
      {/* arrow */}
      <Link to="about" offset={-80} duration={600} smooth={true}>
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-28 left-1/2 text-2xl cursor-pointer group"
        >
          <ArrowDown className="w-8 h-8 text-gray-600" />
        </motion.div> 
      </Link>
    </section>
  );
}
