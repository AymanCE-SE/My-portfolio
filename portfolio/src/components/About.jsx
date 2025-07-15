import React from "react";

export default function About() {
  return (
    <>
    <section id="about" className="about-section p-5">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-summary">
          Hi, I'm <span className="highlight">Ayman Samir</span>, a passionate Full Stack Web Developer.
          I love building modern, performant web apps and learning new technologies.
        </p>
        <div className="about-skills">
          <h3 className="skills-title">Skills & Tools</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>HTML5 & CSS3</li>
            <li>Django</li>
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="about-education">
          <h3 className="education-title">Education</h3>
          <p>Zagazig Higher Institute Of Engineering and Technology (2013-2018)</p>
        </div>
        <div className="about-experience">
          <h3 className="experience-title">Experience</h3>
          <p>Information Technology Institute ITI Internship (2024-2025)</p>
          <p>Freelance Projects (2025 - Present)</p>
        </div>
      </div>
    </section>
    </>
  );
}