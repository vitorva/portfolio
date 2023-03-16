import React, { useRef } from 'react';

interface HeaderProps {
  scrollToContact: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
  scrollToAboutMe: () => void;
}

function Header({ scrollToContact, scrollToProjects, scrollToSkills, scrollToAboutMe }: HeaderProps) {
  return (
    <header>
      <nav className='inner'>
      <button onClick={scrollToContact}>Contact</button>
      <button onClick={scrollToProjects}>Projects</button>
      <button onClick={scrollToSkills}>Skills</button>
      <button onClick={scrollToAboutMe}>About Me</button>
      </nav>
    </header>
  );
}

export default Header;