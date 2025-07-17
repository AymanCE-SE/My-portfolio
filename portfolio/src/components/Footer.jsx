import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>    
    <footer className="footer-section py-4">
      <div className="container text-center">
        <a href="https://github.com/AymanCE-SE" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ayman-samir2210/" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
          <FaLinkedin />
        </a>
        <a href="https://x.com/Ayman_Samir22" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
        <FaXTwitter />
        </a>
        <a href="mailto:ayman.samir1095@gmail.com" className="footer-icon mx-3">
          <FaEnvelope />
        </a>
        <div className="mt-3" style={{ color: 'var(--text-color)' }}>
          &copy; {new Date().getFullYear()} Ayman Samir. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}
