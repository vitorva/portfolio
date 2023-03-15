import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Header/>
      <div className="App">
          <Home/>
          <Projects/>
          <Skills/>
          <AboutMe/>
      </div>
    </>
  );
}

export default App;
