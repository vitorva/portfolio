import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);


  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
        <Header
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToAboutMe={scrollToAboutMe}
      />
      <div className="App">
          <Home homeRef = {homeRef}/>
          <Projects projectsRef = {projectsRef}/>
          <Skills skillsRef = {skillsRef}/>
          <AboutMe aboutMeRef = {aboutMeRef}/>
      </div>
    </>
  );
}

export default App;
