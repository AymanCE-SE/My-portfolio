import React from "react";
import ProjectCard from "./ProjectCard";
import fammsImg from '../assets/famms.PNG'
import foodtroveImg from '../assets/foodtrove.png'
import crowdfundingImg from '../assets/crowdfunding.PNG'
import portfolioImg from '../assets/my-portfolio.png'
import jumoohImg from '../assets/jumooh.png'
import tanfeezImg from '../assets/tanfeez.png'

const projects = [
  {
    title: "FAMMS E-Commerce (React & Redux Toolkit)",
    description: "E-commerce platform built with React and Redux Toolkit featuring product filtering, cart logic, and admin panel for managing inventory via a mock API.",
    demo: "https://react-bootstrap-with-redux.vercel.app/",
    github: "https://github.com/AymanCE-SE/React-bootstrap-with-redux",
    video: "https://youtu.be/N57RbkGyqu8?si=4Keq5duI9564EgHk",
    image: fammsImg
  },
  {
    title: "FoodTrove Bootstrap UI/UX Design Project",
    description: "FoodTrove – a visually engaging frontend project for food delivery, featuring a responsive Bootstrap design based on a custom Figma layout.",
    github: "https://github.com/AymanCE-SE/FoodTrove",
    video: "https://youtu.be/X8ztf_DEZrs?si=7FiG7L_bAem100DC",
    image: foodtroveImg
  },
  {
    title: "Crowdfunding Platform Web App (Django templates)",
    description: "A full-stack task manager with authentication and real-time updates.",
    github: "https://github.com/AymanCE-SE/Django-CrowdFunding",
    video: "https://www.youtube.com/watch?v=eaqb832pXCo",
    image: crowdfundingImg
  },
  {
    title: "My Personal Portfolio",
    description: "Responsive React portfolio site with Vite and Bootstrap, highlighting my full stack skills, projects, and experience with a focus on UI/UX and performance.",
    demo: "https://ayman-portfolio-blue.vercel.app/",
    github: "https://github.com/AymanCE-SE/My-portfolio",
    image: portfolioImg
  },
  {
    title: "Jumooh Platform",
    description: "Jumooh – A full‑stack portfolio platform with React & Django REST, JWT auth, file uploads, i18n, and deploy‑ready build setup supports two languages and light,dark mode",
    github: "https://github.com/AymanCE-SE/pervasion",
    demo: "https://pervasion.vercel.app/",
    image: jumoohImg
  },
  {
    title: "Tanfeez Freelancing Platform",
    description: "Full‑stack freelance marketplace with user roles, proposals, dashboards & JWT auth Django REST, PostgreSQL, React, Redux Toolkit ",
    github: "https://github.com/AymanCE-SE/Tanfeez-freelancePlatform",
    image: tanfeezImg
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