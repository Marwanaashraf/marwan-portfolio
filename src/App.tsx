import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import Contact from "./Pages/Contact/Contact";
import { Element } from "react-scroll";
import NavigateToHome from "./Components/NavigateToHome/NavigateToHome";
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
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <NavigateToHome/>
    </>
  );
}
