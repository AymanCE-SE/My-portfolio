import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { Row } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <>
    <div id='home' className="hero-wraper container-fluid py-5">
      <div className="hero-gradient-bg"></div>
      <Row className="justify-content-center align-items-center">
        <div className="col-10 col-md-12 main-info text-center hero-content">
          <div className="hero-greeting">
            <h1 className="d-none d-md-block hero-title-large">
              Hello, I'm <span className="gradient-text">Ayman Samir</span>
            </h1>
            <h2 className="d-md-none hero-title-mobile">
              Hello, I'm<br/> <span className="gradient-text">Ayman Samir</span>
            </h2>
          </div>
          
          <h2 className="subtitle hero-subtitle">Full Stack Web Developer</h2>
          
          <p className="description hero-description">
            I craft modern, responsive web experiences using the latest technologies.<br />
            Passionate about UI/UX, performance, and clean code.
          </p>
          
          <div className="typed-container">
            <ReactTyped
              className='fs-2 hero-typed'
              strings={[
                "Web Design",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Full Stack Solutions"
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </div>
          
          <div className="button my-5 d-flex flex-wrap justify-content-center gap-3">
            <a href="/Ayman-Samir-CV.pdf" className="btn-primary-custom">
              <span>Download CV<FaArrowDown className="arrow-icon fs-3" /></span>
            </a>
            <a href='#contact' className="btn-secondary-custom"><span>Get In Touch</span></a>
          </div>
          
          <div className="scroll-indicator">
          </div>
        </div>
      </Row>
    </div>
    </>
  )
}
