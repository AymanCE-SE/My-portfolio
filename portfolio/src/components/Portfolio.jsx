import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FAMMS E-Commerce (React & Redux Toolkit)",
    description: "A modern, responsive portfolio built with React and Bootstrap.",
    demo: "https://react-bootstrap-with-redux-f6ma7j0i3.vercel.app",
    github: "https://github.com/AymanCE-SE/React-bootstrap-with-redux",
    video: "https://youtu.be/N57RbkGyqu8?si=4Keq5duI9564EgHk"
  },
  {
    title: "FoodTrove Bootstrap UI/UX Design Project",
    description: "A full-stack task manager with authentication and real-time updates.",
    // demo: "https://your-task-demo.com",
    github: "https://github.com/AymanCE-SE/FoodTrove",
    video: "https://youtu.be/X8ztf_DEZrs?si=7FiG7L_bAem100DC"
  },
  {
    title: "Crowdfunding Platform Web App (Django templates)",
    description: "A full-stack task manager with authentication and real-time updates.",
    // demo: "https://your-task-demo.com",
    github: "https://github.com/AymanCE-SE/Django-CrowdFunding",
    video: "https://www.youtube.com/watch?v=eaqb832pXCo"
  },
  {
    title: "My Personal Portfolio",
    description: "A full-stack task manager with authentication and real-time updates.",
    demo: "https://ayman-portfolio-blue.vercel.app/",
    github: "https://github.com/AymanCE-SE/My-portfolio",
    // video: "https://www.youtube.com/watch?v=eaqb832pXCo"
  },
  ];

export default function Portfolio() {
  return (
    <>    
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
    </>
  );
}