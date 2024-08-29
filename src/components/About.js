import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
      <img src="/profile.jpg" alt="PIC" className="profile-photo" />
      <p>Hello! I'm Aravindh Sriram Kumar, a passionate recent graduate with interest in both hardware and software. I’m fascinated by these two domains and am eager to explore them. Whether it’s designing efficient embedded systems or diving into machine learning algorithms, I’m open to learning and contributing across diverse areas.I love exploring new technologies and applying them in my projects.</p>
      </div>
    </section>
  );
}

export default About;
