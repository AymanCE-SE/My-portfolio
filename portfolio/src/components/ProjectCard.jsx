import React, { useState } from "react";
import { Card, Carousel, Modal } from "react-bootstrap";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, description, details = [], technologies, demo, github, video, image, images, featured }) {
  const [showDetails, setShowDetails] = useState(false);
  const projectImages = images?.length ? images : image ? [image] : [];

  return (
    <article className={`project-card-wrapper ${featured ? "project-card-featured" : ""}`}>
      <Card className="project-card">
        {image && <img src={image} alt={`${title} project preview`} className="project-img" />}
        <Card.Body className="project-card-body">
          {featured && <span className="featured-label">Featured project</span>}
          <Card.Title className="project-title">{title}</Card.Title>
          <Card.Text className="project-desc">{description}</Card.Text>
          <ul className="project-technologies" aria-label={`Technologies used in ${title}`}>
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <button type="button" className="project-details-btn" onClick={() => setShowDetails(true)}>
            View project details <FaArrowRight aria-hidden="true" />
          </button>
          <div className="project-links">
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link"><FaExternalLinkAlt aria-hidden="true" /> Live site</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="card-link card-link-secondary"><FaGithub aria-hidden="true" /> Code</a>}
            {video && <a href={video} target="_blank" rel="noopener noreferrer" className="card-link card-link-secondary"><FaVideo aria-hidden="true" /> Video</a>}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showDetails} onHide={() => setShowDetails(false)} centered size="lg" contentClassName="project-modal">
        <Modal.Header closeButton>
          <div>
            <span className="featured-label">{featured ? "Featured project" : "Project case study"}</span>
            <Modal.Title>{title}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          {projectImages.length > 0 && (
            <Carousel className="project-carousel" interval={null} touch indicators={projectImages.length > 1} controls={projectImages.length > 1}>
              {projectImages.map((projectImage, index) => (
                <Carousel.Item key={index}>
                  <img src={projectImage} alt={`${title} screenshot ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <p className="project-modal-description">{description}</p>
          {details.length > 0 && (
            <ul className="project-detail-list">
              {details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
          <div className="project-modal-links">
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link"><FaExternalLinkAlt aria-hidden="true" /> Live site</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="card-link card-link-secondary"><FaGithub aria-hidden="true" /> Code</a>}
            {video && <a href={video} target="_blank" rel="noopener noreferrer" className="card-link card-link-secondary"><FaVideo aria-hidden="true" /> Video</a>}
          </div>
        </Modal.Body>
      </Modal>
    </article>
  );
}
