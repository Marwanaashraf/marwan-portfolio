
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, TextAlignJustify, X } from "lucide-react";
import clsx from "clsx";
import { ThemeModes, type ThemeMode } from "./Navbar.types";
import { PERSONAL_INFO } from "../../../Constants/personInformation";
import { NAV_LINKS } from "../../../Constants/navLinks";
import Slider from "./components/Slider/Slider";

export default function Navbar() {
  /**
   * Generate Logo Initials from user name
   * Example: "Marwan Ashraf" → "MA"
   */
  const [firstName, lastName] = PERSONAL_INFO.userName.split(" ");
  const logo = `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`;

  /** ---------------------------
   * Theme State (Dark / Light)
   * --------------------------- */
  const [theme, setTheme] = useState<ThemeMode>(ThemeModes.DARK);

  /**
   * Mobile Navigation Slider State
   */
  const [navSlider, setNavSlider] = useState(false);

  /**
   * Apply Theme To Root Element
   * Centralized function to keep logic reusable.
   */
  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;

    root.classList.toggle("dark", mode === ThemeModes.DARK);

    localStorage.setItem("mode", mode);
    setTheme(mode);
  };

  /**
   * Toggle Theme Mode
   */
  const handleMode = () => {
    applyTheme(theme === ThemeModes.DARK ? ThemeModes.LIGHT : ThemeModes.DARK);
  };

  /**
   * Load Saved Theme On First Render
   */
  useEffect(() => {
    const saved = localStorage.getItem("mode") as ThemeMode | null;
    applyTheme(saved ?? ThemeModes.DARK);
  }, []);

  return (
    <section aria-label="Navbar">
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6
        bg-slate-50 dark:bg-slate-950 border-b border-main/20"
      >
        {/* ---------------- Logo ---------------- */}
        <Link
          to="home"
          smooth
          duration={600}
          onClick={() => setNavSlider(false)}
        >
          <div className="text-2xl text-gradient font-bold cursor-pointer hover:scale-90 duration-200 uppercase">
            {logo}
          </div>
        </Link>

        {/* ---------------- Desktop Navigation ---------------- */}
        <ul className="hidden lg:flex justify-evenly w-[55%]">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="nav-link">
              <Link
                to={link.target}
                spy
                activeClass="active-link"
                smooth
                offset={-80}
                duration={200}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------------- Controls ---------------- */}
        <div className="flex space-x-3">
          {/* Theme Switch */}
          <button
            aria-label="Toggle Theme"
            onClick={handleMode}
            className={clsx(
              "w-12 h-6 rounded-full border border-light/30 dark:border-dark/30 flex cursor-pointer",
              "hover:border-main hover:dark:border-main",
              theme === ThemeModes.DARK ? "justify-end" : "justify-start",
            )}
          >
            <div className="size-[22px] rounded-full flex justify-center items-center shadow bg-slate-200 dark:bg-slate-800">
              {theme === ThemeModes.DARK ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={navSlider}
            aria-controls="mobile-menu"
            onClick={() => setNavSlider((prev) => !prev)}
            className="block lg:hidden"
          >
            {navSlider ? <X size={24} /> : <TextAlignJustify size={24} />}
          </button>
        </div>
      </nav>

      {/* ---------------- Mobile Slider ---------------- */}
      {navSlider && <Slider setNavSlider={setNavSlider} />}
    </section>
  );
}
