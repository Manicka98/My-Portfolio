import React from 'react';
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Particle from './components/Particle';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      <Particle/>
      
    </div>
  );
}

export default App;
