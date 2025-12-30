import React from "react";
import profile from "../assets/profile.jpg";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import "../styles/About.css";

export default function About() {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: [ "HTML5", "CSS3","JavaScript", "Bootstrap", "React", "Redux Toolkit" ],
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "PostgreSQL", "MySQL", "REST API", "JWT"],
    },
    {
      category: "Tools & Others",
      skills: ["Git & GitHub", "Figma", "C++", "Nginx", "Docker", "Linux"],
    },
  ];

  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-image-wrapper">
              <div className="image-frame">
                <img src={profile} alt="Ayman Samir" className="about-img" />
                <div className="image-glow"></div>
              </div>
            </div>

            <div className="about-text">
              <p className="about-summary">
                Hi, I'm <span className="gradient-text">Ayman Samir</span>, a
                passionate{" "}
                <span className="highlight">Full Stack Web Developer</span> with
                a strong foundation in modern web technologies.
              </p>
              <p className="about-detail">
                Analytical Developer with a Bachelor’s in Engineering, applying
                rigorous problem-solving to build scalable web architectures.
                Specialized in Python (Django) and React/Redux Toolkit , with a
                focus on database optimization and secure API design. Leverages
                5 years of professional engineering experience to deliver
                structured, high-quality code and effective project management
                in cross-functional teams.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="about-skills">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((group, idx) => (
                <div key={idx} className="skill-group">
                  <div className="skill-group-header">
                    {group.category === "Frontend" && (
                      <FaCode className="skill-icon" />
                    )}
                    {group.category === "Backend" && (
                      <FaDatabase className="skill-icon" />
                    )}
                    {group.category === "Tools & Others" && (
                      <FaTools className="skill-icon" />
                    )}
                    <h4>{group.category}</h4>
                  </div>
                  <ul className="skills-list">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="skill-badge">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="about-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h4>Education</h4>
                <p className="timeline-subtitle">
                  Zagazig Higher Institute Of Engineering and Technology
                </p>
                <p className="timeline-year">2013 - 2018</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h4>Experience</h4>
                <p className="timeline-subtitle">
                  Information Technology Institute (ITI) Internship
                </p>
                <p className="timeline-year">2024 - 2025</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h4>Current</h4>
                <p className="timeline-subtitle">
                  Freelance Full Stack Developer
                </p>
                <p className="timeline-year">2025 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
