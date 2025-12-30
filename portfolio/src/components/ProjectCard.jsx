import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, description, demo, github, video, image }) {
  const [hovered, setHovered] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  return (
    <div className="project-card-wrapper">
      <Card
        className="project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="card-glow"></div>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <CSSTransition
            in={!hovered}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={frontRef}
          >
            <div ref={frontRef} className="card-front w-100 text-center d-flex flex-column align-items-center">
              {image && (
                <img src={image} alt={title} className="project-img mb-3" />
              )}
              <Card.Title className="project-title">{title}</Card.Title>
            </div>
          </CSSTransition>
          <CSSTransition
            in={hovered}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={backRef}
          >
            <div ref={backRef} className="card-back w-100 text-center d-flex flex-column h-100">
              <Card.Text className="project-desc mb-3 flex-grow-1">{description}</Card.Text>
              <div className="project-links">
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link" title="Live Demo">
                    <FaExternalLinkAlt /> <span className="link-label">Demo</span>
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="card-link" title="GitHub">
                    <FaGithub /> <span className="link-label">Code</span>
                  </a>
                )}
                {video && (
                  <a href={video} target="_blank" rel="noopener noreferrer" className="card-link" title="YouTube">
                    <FaVideo /> <span className="link-label">Video</span>
                  </a>
                )}
              </div>
            </div>
          </CSSTransition>
        </Card.Body>
      </Card>
    </div>
  );
}
