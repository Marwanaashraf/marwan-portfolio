import React, { useEffect, useState } from "react";
import { link } from "../../Interfaces/link";
import { Link } from "react-scroll";
import Slider from "../Slider/Slider";
import { motion } from "framer-motion";
import { Download, TextAlignJustify, X } from "lucide-react";
// links
export const links: link[] = [
  { pathName: "Home", href: "home" },
  { pathName: "About", href: "about" },
  { pathName: "Skills", href: "skills" },
  { pathName: "Projects", href: "projects" },
  { pathName: "Education", href: "education" },
  { pathName: "Contact", href: "contact" },
];
export default function Navbar() {
  // slider
  let [navSlider, setNavSlider] = useState(false);
  let handleSlider = () => {
    if (navSlider) setNavSlider(false);
    else setNavSlider(true);
  };

  return (
    <section className="relative">
      <nav className="fixed bg-slate-950 top-0 left-0 right-0 flex justify-between z-50 items-center p-5 border-b border-sky-900">
        {/* logo */}
        <Link
          onClick={() => {
            setNavSlider(false);
          }}
          offset={-80}
          smooth={true}
          to="home"
          duration={600}
        >
          <div className="text-2xl text-gradient font-bold cursor-pointer hover:scale-90 duration-200">
            MA
          </div>
        </Link>
        {/* links */}
        <ul className="list-none hidden justify-evenly w-[55%] lg:flex">
          {links.map((link, i) => {
            return (
              <li key={i} className="nav-link">
                <Link
                  activeClass="active-link"
                  spy={true}
                  smooth={true}
                  to={link.href}
                  offset={-80}
                  duration={600}
                  isDynamic={link.pathName === "Home" ? true : false}
                >
                  {link.pathName}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* resume , contact */}
        <div className="hidden lg:flex space-x-3">
          {/* resume */}
          <a
            className="w-28 btn border border-gray-800 text-white  hover:bg-lavender duration-300 hover:text-black"
            download
            href="https://drive.google.com/uc?export=download&id=1veBA3NZX_DBOrpJhhYSwCQyl-BIF3jad"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -3 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
            <span>Resume</span>
          </a>

          {/* contact */}
          <Link smooth={true} to="contact" duration={600}>
            <button className="bg-sky-400 w-20 btn  shadow-md ">
              Let's talk
            </button>
          </Link>
        </div>

        {/* list */}
        <div onClick={handleSlider} className="block lg:hidden cursor-pointer">
          {navSlider ? (
            <X className="w-6 h-6 hover:text-main" />
          ) : (
            <TextAlignJustify className="w-6 h-6" />
          )}
        </div>
      </nav>
      {/* navSlider */}
      {navSlider ? <Slider setNavSlider={setNavSlider} /> : ""}
    </section>
  );
}
