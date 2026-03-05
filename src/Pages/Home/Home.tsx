import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { heroData } from "./Home.constants";

import { SOCIAL_LINKS } from "../../Constants/socialLinks";
import { MotionWrapper } from "../../animations/motionVariants";
import { Button } from "../../Components/ui/Button";
import { PERSONAL_INFO } from "../../Constants/personInformation";
import IconButton from "../../Components/IconButton/IconButton";

export default function Home() {
  // 👨‍💻 Typewriter effect for jobs/roles
  const [text] = useTypewriter({
    words: heroData.jobs, // configurable array from constants
    loop: true, // ⚠ infinite loop can be heavy for low-end devices
    typeSpeed: 80, // typing speed
    deleteSpeed: 50, // deletion speed
    delaySpeed: 1200, // pause between words
  });

  return (
    // 🏠 Hero Section
    <section
      className="min-h-screen relative bg-gradient-to-tl to-card_light dark:to-card_dark from-secondry/10"
      id="home"
    >
      <div className="py-3 flex flex-col items-center space-y-7 text-center container mx-auto px-4">
        {/* Hero Name */}
        <MotionWrapper delay={0.5}>
          <div className="space-y-2">
            <h5 className="mt-10 text-3xl">Hello I'm</h5>
            <h1 className="text-5xl md:text-7xl text-gradient font-bold capitalize">
              {PERSONAL_INFO.userName} {/* configurable via heroData */}
            </h1>
          </div>
        </MotionWrapper>

        {/* Typewriter Jobs */}
        <MotionWrapper delay={0.7}>
          <h5 className="text-main text-3xl">
            {text} <Cursor /> {/* adds blinking cursor */}
          </h5>
        </MotionWrapper>

        {/* Tagline / short intro */}
        <h5 className="text-xl">{heroData.tagline}</h5>

        {/* CTA Buttons */}
        <MotionWrapper delay={0.9}>
          <div className="flex gap-3">
            {/* Scroll to Projects Section */}
            <Link offset={-80} smooth to="projects" duration={600}>
              <Button className="w-40 h-10 bg-main/90 text-white">
                View My Work
              </Button>
            </Link>

            {/* Scroll to Contact Section */}
            <Link offset={-80} smooth to="contact" duration={600}>
              <Button className="w-40 h-10 bg-black border border-main/70 hover:bg-secondry text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </MotionWrapper>

        {/* Download CV */}
        <MotionWrapper delay={1.1}>
          <a
            download
            href={PERSONAL_INFO.cvUrl} // configurable
          >
            <Button
              className="w-56 h-12 bg-gradient text-white"
              children={
                <>
                  {/* subtle floating animation for icon */}
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -4 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span>Download CV</span>
                </>
              }
            />
          </a>
        </MotionWrapper>

        {/* Social Icons */}
        <MotionWrapper delay={1.3}>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${item.name}`}
              >
                <IconButton
                  className="size-12 bg-gradient-to-br from-slate-200 dark:from-slate-900 to-secondry/15 dark:to-secondry/20 text-main hover:to-secondry/25 hover:dark:to-secondry/25 hover:scale-90 transition-all duration-300"
                  icon={item.icon}
                />
              </a>
            ))}
          </div>
        </MotionWrapper>

        {/* Scroll Down Arrow */}
        <Link to="about" offset={-80} duration={600} smooth>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-2xl cursor-pointer group"
            aria-label="Scroll down to About section"
          >
            <ArrowDown className="w-8 h-8 text-slate-500 dark:text-slate-300 my-2" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
