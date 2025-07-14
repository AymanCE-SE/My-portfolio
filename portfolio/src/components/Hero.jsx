import { Link } from 'react-router-dom';
import  { ReactTyped } from "react-typed";
// import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <>
      <div className="hero-wraper">
        <div className="main-info">
            <h1>Full stack web developer</h1>
            <ReactTyped
            className='fs-2 '
              strings={["Web design", "Web development", "Frontend developer", "Backend developer"
              ]}
              typeSpeed={70}
              backSpeed={80}
              loop
            />
            {/* <button className='btn btn-outline-success'>Download CV</button> */}
        </div>
            <div className="button">
                <a href="#" className="anchor">
                    <span>Download CV</span>
                </a>
                <Link to="/contact" className="anchor ms-5 "><span>Contact me</span></Link>
            </div>
      </div>
    </>
  )
}
