import React, { useRef } from "react";
import "./App.css";
import "./Projects.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToAboutMe={scrollToAboutMe}
      />
      <div className="App">
        <Contact contactRef={contactRef} />
        <Projects projectsRef={projectsRef} />
        <Skills skillsRef={skillsRef} />
        <AboutMe aboutMeRef={aboutMeRef} />
      </div>
    </>
  );
}

export default App;
