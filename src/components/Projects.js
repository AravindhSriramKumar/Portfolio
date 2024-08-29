import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Project 1: Portfolio Website</h3>
        <p>A personal portfolio website built with React.js to showcase my work, skills, and experience.</p>
      </div>
      <div className="project-item">
        <h3>Project 2: Predictive Maintenance for Pumps</h3>
        <p>As part of a college project, I contributed to developing a system for preventing pump failures that analyzes temperature and vibration data from integrated sensors. Our approach successfully predicts Remaining Useful Life and classifies faults, with transformers outperforming LSTM in RUL prediction.</p>
      </div>
      <div className="project-item">
        <h3>Project 3:Electronic Travelling Aid for Visually Impaired</h3>
        <p>
I developed a blind navigation system for a college project featuring real-time obstacle detection and caretaker alerts via a mobile app. The work, presented at Research Conclave 2023 held at PSG Tech, demonstrates my skills in embedded system development.
</p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
