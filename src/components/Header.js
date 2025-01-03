import React from 'react';
import './Header.css';
import Resume from '../assets/Resume_AravindhSriramKumar_A_G.pdf';

function Header() {
  return (
    <header className="header">
      <h1>Aravindh's Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


