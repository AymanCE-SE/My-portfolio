import React from "react";
import ProjectCard from "./ProjectCard";
import fammsImg from '../assets/famms.PNG'
import foodtroveImg from '../assets/foodtrove.png'
import crowdfundingImg from '../assets/crowdfunding.PNG'
import jumoohImg from '../assets/jumooh.png'
import tanfeezImg from '../assets/tanfeez.png'
import PlabImg from '../assets/plab.png'
import '../styles/Portfolio.css';

const projects = [
  {
    title: "Jumooh Platform",
    summary: "Bilingual media platform with secure authentication and interactive project galleries.",
    description: "Built a responsive Arabic/English experience with Django, JWT authentication, light and dark themes, and lazy-loaded media galleries.",
    details: [
      "Designed a bilingual interface with English and Arabic support.",
      "Implemented JWT-based authentication and protected backend workflows.",
      "Added interactive galleries and lazy loading to keep media-heavy pages fast.",
    ],
    technologies: ["React", "Django", "JWT", "i18n"],
    featured: true,
    github: "https://github.com/AymanCE-SE/pervasion",
    demo: "https://pervasion.vercel.app/",
    image: jumoohImg
  },
  {
    title: "FAMMS E-Commerce",
    summary: "E-commerce storefront with product discovery, cart management, and inventory controls.",
    description: "Built product filtering, cart logic, and an admin workflow for managing inventory in a responsive React application.",
    details: [
      "Created a Redux Toolkit state flow for products, filters, and cart updates.",
      "Built responsive product discovery and cart interactions.",
      "Included an admin experience for inventory management.",
    ],
    technologies: ["React", "Redux Toolkit", "Bootstrap"],
    demo: "https://react-bootstrap-with-redux.vercel.app/",
    github: "https://github.com/AymanCE-SE/React-bootstrap-with-redux",
    video: "https://youtu.be/N57RbkGyqu8?si=4Keq5duI9564EgHk",
    image: fammsImg
  },
  {
    title: "FoodTrove UI Design",
    summary: "Responsive food-delivery interface translated from a custom Figma design.",
    description: "Focused on layout fidelity, responsive behavior, and a clear ordering journey using Bootstrap.",
    details: [
      "Translated a custom Figma layout into a responsive frontend.",
      "Focused on visual hierarchy, food discovery, and an intuitive ordering flow.",
      "Used reusable Bootstrap components and responsive breakpoints.",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "Figma"],
    github: "https://github.com/AymanCE-SE/FoodTrove",
    video: "https://youtu.be/X8ztf_DEZrs?si=7FiG7L_bAem100DC",
    image: foodtroveImg
  },
  {
    title: "Crowdfunding Platform",
    summary: "Crowdfunding platform with secure accounts, social login, and email workflows.",
    description: "Implemented authentication, email verification, password reset, social login, and responsive Django templates backed by PostgreSQL.",
    details: [
      "Built user authentication, email verification, and password-reset workflows.",
      "Added Google and Facebook social login alongside a responsive Bootstrap interface.",
      "Configured PostgreSQL persistence and SMTP notifications for account activity.",
    ],
    technologies: ["Django", "PostgreSQL", "Bootstrap", "SMTP"],
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
    summary: "Freelance marketplace with role-based dashboards and proposal workflows.",
    description: "Built a full-stack application with Django REST, PostgreSQL, JWT authentication, distinct user roles, and proposal management.",
    details: [
      "Implemented role-based dashboards for marketplace users.",
      "Created proposal workflows backed by Django REST and PostgreSQL.",
      "Secured API access with JWT authentication.",
    ],
    technologies: ["React", "Django REST", "PostgreSQL", "JWT"],
    featured: true,
    github: "https://github.com/AymanCE-SE/Tanfeez-freelancePlatform",
    demo: "https://tanfeez-freelance-platform.vercel.app/",
    image: tanfeezImg
  },
  {
    title: "P-lab Patient Portal",
    summary: "Secure bilingual portal for patients to access lab reports and account tools.",
    description: "Created custom phone-number login, patient dashboards, PDF report downloads, Arabic RTL support, and an admin-managed delivery workflow.",
    details: [
      "Created a custom phone-number login, patient dashboard, profile editing, and password management.",
      "Delivered PDF lab reports through a secure admin-managed workflow.",
      "Supported English and Arabic, including RTL layouts, lab announcements, and blog posts.",
      "Configured environment-driven settings, WhiteNoise static serving, and optional Cloudinary media storage.",
    ],
    technologies: ["Django", "i18n", "RTL", "PDF"],
    github: "https://github.com/AymanCE-SE/Plab",
    demo: "https://plab.pythonanywhere.com/",
    image: PlabImg
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
          Selected full-stack and frontend work, from polished interfaces to secure web platforms.
        </p>
      </div>
      <div className="portfolio-grid" aria-label="Project portfolio">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
    </>
  );
}
