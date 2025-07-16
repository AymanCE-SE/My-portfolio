import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FAMMS E-Commerce (React & Redux Toolkit)",
    description: "E-commerce platform built with React and Redux Toolkit featuring product filtering, cart logic, and admin panel for managing inventory via a mock API.",
    demo: "https://react-bootstrap-with-redux-f6ma7j0i3.vercel.app",
    github: "https://github.com/AymanCE-SE/React-bootstrap-with-redux",
    video: "https://youtu.be/N57RbkGyqu8?si=4Keq5duI9564EgHk"
  },
  {
    title: "FoodTrove Bootstrap UI/UX Design Project",
    description: "FoodTrove – a visually engaging frontend project for food delivery, featuring a responsive Bootstrap design based on a custom Figma layout.",
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
    description: "Responsive React portfolio site with Vite and Bootstrap, highlighting my full stack skills, projects, and experience with a focus on UI/UX and performance.",
    demo: "https://ayman-portfolio-blue.vercel.app/",
    github: "https://github.com/AymanCE-SE/My-portfolio",
    // video: "https://www.youtube.com/watch?v=eaqb832pXCo"
  },
  {
    title: "Pervasion Platform",
    description: "Pervasion – A full‑stack portfolio platform with React & Django REST, JWT auth, file uploads, i18n, and deploy‑ready build setup supports two languages and light,dark mode",
    // demo: "https://ayman-portfolio-blue.vercel.app/",
    github: "https://github.com/AymanCE-SE/pervasion",
    // video: "https://www.youtube.com/watch?v=eaqb832pXCo"
  },
  {
    title: "Tanfeez Freelancing Platform",
    description: "Full‑stack freelance marketplace with user roles, proposals, dashboards & JWT auth Django REST, PostgreSQL, React, Redux Toolkit ",
    // demo: "https://ayman-portfolio-blue.vercel.app/",
    github: "https://github.com/AymanCE-SE/Tanfeez-freelancePlatform",
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