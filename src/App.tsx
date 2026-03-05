import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import Contact from "./Pages/Contact/Contact";
import { Element } from "react-scroll";
import Navbar from "./Components/Layout/Navbar/Navbar";
import ScrollToTopButton from "./Components/Layout/ScrollToTopButton/ScrollToTopButton";
import Experience from "./Pages/Experience/Experience";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="education">
          <Education />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <ScrollToTopButton />
    </>
  );
}
