import React, { useRef } from 'react';

interface HeaderProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
}

function Header({ scrollToHome, scrollToProjects }: HeaderProps) {
  return (
    <header>
      <button onClick={scrollToHome}>Home</button>
      <button onClick={scrollToProjects}>Projects</button>
    </header>
  );
}

export default Header;