import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
// import profile from  "../assets/profile.png"
import { Row } from 'react-bootstrap';

export default function Hero() {
  return (
    <>
    <div id='home' className="hero-wraper container-fluid py-5 ">
      <Row className=" justify-content-center align-items-center">
        <div className="col-10 col-md-12 main-info text-center">
          {/* <img src={profile} alt="Ayman Samir" className="hero-img" /> */}
          <h1 className="d-none d-md-block">
            Hello, I'm <span className="highlight">Ayman Samir</span>
          </h1>
          <h2 className="d-md-none  ">
            Hello, I'm<br/> <span className="highlight">Ayman Samir</span>
          </h2>
          <h2 className="subtitle ">Full Stack Web Developer</h2>
          {/* <h3 className="subtitle d-block d-md-none">Full Stack Web Developer</h3> */}
          <p className="description">
            I craft modern, responsive web experiences using the latest technologies.<br />
            Passionate about UI/UX, performance, and clean code.
          </p>
          <ReactTyped
            className='fs-2 hero-typed'
            strings={[
              "Web Design",
              "Web Development",
              "Frontend Developer",
              "Backend Developer"
            ]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
          <div className="button my-4 d-flex flex-wrap justify-content-center gap-3">
            <a href="/Ayman-Samir-CV.pdf" className="anchor">
              <span>Download CV</span>
            </a>
            <a href='#contact' className="anchor contact  d-md-inline-block"><span>Contact Me</span></a>
          </div>
        </div>
      </Row>
    </div>
    </>
  )
}
