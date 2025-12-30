import React from "react";
import ProjectCard from "./ProjectCard";
import fammsImg from '../assets/famms.PNG'
import foodtroveImg from '../assets/foodtrove.png'
import crowdfundingImg from '../assets/crowdfunding.PNG'
import portfolioImg from '../assets/my-portfolio.png'
import jumoohImg from '../assets/jumooh.png'
import tanfeezImg from '../assets/tanfeez.png'
import '../styles/Portfolio.css';
import '../styles/Portfolio.css';

const projects = [
  {
    title: "Jumooh Platform",
    description: "A bilingual, responsive full-stack platform for media projects with light/dark themes and interactive galleries. Features Lazy Loading for improved performance and a secure backend using Django and JWT.",
    github: "https://github.com/AymanCE-SE/pervasion",
    demo: "https://jumoohmedia.com/",
    image: jumoohImg
  },
  {
    title: "FAMMS E-Commerce (React & Redux Toolkit)",
    description: "E-commerce platform built with React and Redux Toolkit, featuring product filtering, cart logic, and an admin panel for inventory management.",
    demo: "https://react-bootstrap-with-redux.vercel.app/",
    github: "https://github.com/AymanCE-SE/React-bootstrap-with-redux",
    video: "https://youtu.be/N57RbkGyqu8?si=4Keq5duI9564EgHk",
    image: fammsImg
  },
  {
    title: "FoodTrove Bootstrap UI/UX Design Project",
    description: "A visually engaging frontend project for food delivery, featuring a responsive Bootstrap design based on a custom Figma layout.",
    github: "https://github.com/AymanCE-SE/FoodTrove",
    video: "https://youtu.be/X8ztf_DEZrs?si=7FiG7L_bAem100DC",
    image: foodtroveImg
  },
  {
    title: "Crowdfunding Platform Web App (Django templates)",
    description: "Full-featured crowdfunding platform using Django and PostgreSQL with user authentication, email verification, and social login (Google, Facebook). Includes password reset flows, responsive Bootstrap UI, and SMTP-configured email notifications for account activation and updates.",
    github: "https://github.com/AymanCE-SE/Django-CrowdFunding",
    video: "https://www.youtube.com/watch?v=eaqb832pXCo",
    image: crowdfundingImg
  },
  // {
  //   title: "My Personal Portfolio",
  //   description: "Responsive React portfolio site showcasing full stack skills, projects, and experience with a focus on UI/UX and performance.",
  //   demo: "https://ayman-portfolio-blue.vercel.app/",
  //   github: "https://github.com/AymanCE-SE/My-portfolio",
  //   image: portfolioImg
  // },
  {
    title: "Tanfeez Freelancing Platform",
    description: "Full-stack freelance marketplace with user roles, proposals, dashboards, and JWT authentication using Django REST and PostgreSQL.",
    github: "https://github.com/AymanCE-SE/Tanfeez-freelancePlatform",
    demo: "https://tanfeez-freelance-platform.vercel.app/",
    image: tanfeezImg
  },
];

export default function Portfolio() {
  return (
    <>    
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
         Explore my projects demonstrating expertise in React, Django, databases, and responsive design
        </p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
    </>
  );
}