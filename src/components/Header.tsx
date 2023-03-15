import React, { useRef } from 'react';

interface HeaderProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
  scrollToAboutMe: () => void;
}

function Header({ scrollToHome, scrollToProjects, scrollToSkills, scrollToAboutMe }: HeaderProps) {
  return (
    <header>
      <button onClick={scrollToHome}>Home</button>
      <button onClick={scrollToProjects}>Projects</button>
      <button onClick={scrollToSkills}>Skills</button>
      <button onClick={scrollToAboutMe}>About Me</button>
    </header>
  );
}

export default Header;