import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

export default function ProjectCard({ title, description, demo, github, video }) {
  const [hovered, setHovered] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  return (
    <Card
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      bg="dark"
      text="light"
      border="primary"
    >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <CSSTransition
          in={!hovered}
          timeout={300}
          classNames="fade"
          unmountOnExit
          nodeRef={frontRef}
        >
          <div ref={frontRef} className="card-front w-100 text-center">
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
          <div ref={backRef} className="card-back w-100 text-center">
            <Card.Text className="project-desc mb-3">{description}</Card.Text>
            <Row className="justify-content-center">
              {demo && (
                <Col xs="auto">
                  <Button
                    variant="outline-warning"
                    href={demo}
                    target="_blank"
                    className="card-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Button>
                </Col>
              )}
              {github && (
                <Col xs="auto">
                  <Button
                    variant="outline-primary"
                    href={github}
                    target="_blank"
                    className="card-link"
                  >
                    <FaGithub /> GitHub
                  </Button>
                </Col>
              )}
              {video && (
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    href={video}
                    target="_blank"
                    className="card-link"
                  >
                    <FaVideo /> Demo Video
                  </Button>
                </Col>
              )}
            </Row>
          </div>
        </CSSTransition>
      </Card.Body>
    </Card>
  );
}