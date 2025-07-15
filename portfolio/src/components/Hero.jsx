import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
// import Particles from "react-tsparticles";
import profile from  "../assets/profile.png"
export default function Hero() {
  return (
    <>    
    <div id='home' className="hero-wraper">
      <div className="main-info">
        <img src={profile} alt="Ayman Samir" className="hero-img" />
        <h1>
          Hello, I'm <span className="highlight">Ayman Samir</span>
        </h1>
        <h2 className="subtitle">Full Stack Web Developer</h2>
        <p className="description">
          I craft modern, responsive web experiences using the latest technologies.<br />
          Passionate about UI/UX, performance, and clean code.
        </p>
        <ReactTyped
          className='fs-2'
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
      </div>
      <div className="button">
        <a href="/Ayman-Samir-CV.pdf" className="anchor" download>
          <span>Download CV</span>
        </a>
        <a href='#contact' className="anchor ms-5 contact "><span>Contact Me</span></a>
      </div>
    </div>
    </>
  )
}
