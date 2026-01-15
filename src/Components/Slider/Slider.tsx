import React, { useEffect } from "react";
import { links } from "../Navbar/Navbar";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
type TSlider = {
  setNavSlider: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Slider({ setNavSlider }: TSlider) {
  useEffect(() => {
    let navSlider = document.querySelector(".nav-slider");
    let innerSlider = document.querySelector(".inner-slider");
    // click in any thing expect slider close slider
    navSlider?.addEventListener("click", (e) => {
      if (!innerSlider?.contains(e.target as Node)) {
        setNavSlider(false);
      }
    });
  }, []);
  return (
    <div aria-label="Slider" className="nav-slider block lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-20">
      <div className="relative w-[98%] mx-auto h-full">
        <div className="inner-slider bg-slate-50 dark:bg-slate-900 w-full absolute top-[12%] p-5">
          {/* links */}
          <ul className="my-3 list-none flex flex-col space-y-5 justify-evenly text-lg">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  className="hover:text-main font-semibold cursor-pointer"
                >
                  <Link
                    to={link.href}
                    spy={true}
                    activeClass="active-link"
                    smooth={true}
                    offset={-80}
                    duration={600}
                    onClick={() => {
                      setNavSlider(false);
                    }}
                  >
                    {link.pathName}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="border-sky-900 my-3" />

          {/* buttons */}
          <div className="space-y-1">
            {/* download cv */}
            <a
              aria-label="Download Cv"
              onClick={() => {
                setNavSlider(false);
              }}
              className="w-full btn my-2 bg-black border border-gray-600  text-white  hover:bg-secondry duration-200  hover:text-black"
              download
              href="https://drive.google.com/uc?export=download&id=1XAHJzfGu94rHozaXcmcwbt5VBL-uM6DD"
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -3 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <Download className="w-4 h-4" aria-label="Download icon" />
              </motion.div>
              <span>Download Resume</span>
            </a>

            {/* Let's talk */}
            <Link
              className="my-3"
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => {
                setNavSlider(false);
              }}
            >
              <button
                aria-label="Navigate to contact section"
                className="w-full btn bg-main text-white"
              >
                Let's talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
