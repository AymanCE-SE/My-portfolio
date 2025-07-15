import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Bootstrap.",
    demo: "https://your-live-demo.com",
    github: "https://github.com/yourusername/portfolio",
    video: "https://youtu.be/demo-video"
  },
  {
    title: "Task Manager App",
    description: "A full-stack task manager with authentication and real-time updates.",
    demo: "https://your-task-demo.com",
    github: "https://github.com/yourusername/task-manager",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}