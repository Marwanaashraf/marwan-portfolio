import React, { useEffect, useState } from "react";
import { link } from "../../Interfaces/link";
import { Link } from "react-scroll";
import Slider from "../Slider/Slider";
import { motion } from "framer-motion";
import { Download, Moon, Sun, TextAlignJustify, X } from "lucide-react";
import clsx from "clsx";
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
  enum Modes {
    DARK = "dark",
    LIGHT = "light",
  }
  const [mode, setMode] = useState(true);
  // slider
  let [navSlider, setNavSlider] = useState(false);
  let handleSlider = () => {
    if (navSlider) setNavSlider(false);
    else setNavSlider(true);
  };
  const handleMode = () => {
    if (mode === true) {
      localStorage.setItem("mode", Modes.LIGHT);
      document.querySelector("html")?.classList.remove("dark");
      setMode(false);
    } else {
      localStorage.setItem("mode", Modes.DARK);
      document.querySelector("html")?.classList.add("dark");
      setMode(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") !== null) {
      if (localStorage.getItem("mode") === Modes.DARK) {
        document.querySelector("html")?.classList.add("dark");
        setMode(true);
      } else {
        document.querySelector("html")?.classList.remove("dark");
        setMode(false);
      }
    }
  }, []);
  return (
    <section className="relative">
      <nav className="fixed bg-card_light dark:bg-slate-950 top-0 left-0 right-0 flex justify-between z-50 items-center p-6 border-b border-main/10">
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
        <div className="flex space-x-3">
          {/* mode */}
          <div
            onClick={handleMode}
            className={clsx(
              "w-12 h-6 rounded-full border border-gray-300 dark:border-gray-700 flex  cursor-pointer hover:border-main hover:dark:border-main",
              mode ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={clsx(
                "size-[22px]  rounded-full flex justify-center items-center shadow ",
                mode ? "bg-slate-800 text-white" : "bg-slate-200 text-black"
              )}
            >
              {mode ? (
                <Moon className="w-4 h-4 " />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* list */}
          <div
            onClick={handleSlider}
            className="block lg:hidden cursor-pointer"
          >
            {navSlider ? (
              <X className="w-6 h-6 hover:text-main" />
            ) : (
              <TextAlignJustify className="w-6 h-6" />
            )}
          </div>
        </div>
      </nav>
      {/* navSlider */}
      {navSlider ? <Slider setNavSlider={setNavSlider} /> : ""}
    </section>
  );
}
