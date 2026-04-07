import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { TSlider } from "./Slider.types";
import { Button } from "../../../../ui/Button";
import { NAV_LINKS } from "../../../../../Constants/navLinks";
import { PERSONAL_INFO } from "../../../../../Constants/personInformation";

export default function Slider({ setNavSlider }: TSlider) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Close slider when clicking outside.
   * Fixed: Captured ref value in a variable for stable cleanup.
   */
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!innerRef.current?.contains(e.target as Node)) {
        setNavSlider(false);
      }
    };

    // 1. بناخد نسخة من الـ ref الحالي جوه الـ Effect
    const currentOuterRef = outerRef.current;

    if (currentOuterRef) {
      currentOuterRef.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      // 2. بنستخدم النسخة دي في الـ cleanup عشان نضمن إنها لسه بتشاور على نفس الـ DOM node
      if (currentOuterRef) {
        currentOuterRef.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [setNavSlider]);

  return (
    <div
      ref={outerRef}
      id="mobile-menu"
      className="fixed inset-0 bg-black/60 z-20 lg:hidden"
    >
      <div className="relative w-[99%] mx-auto h-full mt-4">
        <div
          ref={innerRef}
          className="bg-card_light dark:bg-card_dark w-full absolute top-[12%] p-5"
        >
          {/* Links */}
          <ul className="flex flex-col space-y-5 text-lg">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="hover:text-main font-semibold cursor-pointer"
              >
                <Link
                  to={link.target}
                  spy={true}
                  activeClass="active-link"
                  smooth={true}
                  offset={-80}
                  duration={200}
                  onClick={() => setNavSlider(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr />

          {/* Actions */}
          <div>
            <a
              download
              href={PERSONAL_INFO.cvUrl}
              className="btn w-full h-9 bg-black border border-main/25 text-white hover:bg-secondry"
              onClick={() => {
                setNavSlider(false);
              }}
            >
              <motion.div
                animate={{ y: -3 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <Download size={16} />
              </motion.div>
              Download Cv
            </a>

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              onClick={() => setNavSlider(false)}
              className="mt-3"
            >
              <Button className="mt-2 w-full h-9 bg-main text-white">
                Let's talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
