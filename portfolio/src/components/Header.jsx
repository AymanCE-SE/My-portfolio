import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiBarsArrowDown } from "react-icons/hi2";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import logo from "../assets/logo.png"
import "../styles/Header.css";

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar className="navbar" expand="md" sticky="top">
      <Container className="w-75 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="me-5 ms-0">
          <div className="logo-container" aria-label="Ayman Samir Logo">
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Ayman Samir Logo"
              className="logo-svg"
            >
              {/* The Hexagon Frame - Represents Structural Engineering Stability */}
              <path
                d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                stroke="var(--primary-color)"
                strokeWidth="4"
                fill="none"
              />

              {/* The 'A' (Left half of the structure) */}
              <path
                d="M30 70 L50 25 L55 35"
                stroke="var(--primary-color)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

              {/* The 'S' (Right half - Terminal/Code style) */}
              <path
                d="M50 45 C70 45 70 55 50 55 C30 55 30 65 50 65 C70 65 70 65 70 65"
                stroke="var(--secondary-color)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Connection Point - The "Full Stack" Bridge */}
              <circle cx="50" cy="45" r="4" fill="var(--secondary-color)" />
            </svg>
          </div>
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-3">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="theme-icon" />
            ) : (
              <FaMoon className="theme-icon" />
            )}
          </button>

          <Navbar.Toggle
            className="border-3 rounded-pill"
            aria-controls="main-navbar-nav"
          >
            <span className="toggle-icon">
              <HiBarsArrowDown />
            </span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse
          id="main-navbar-nav"
          className="custom-navbar-collapse mt-2"
        >
          <Nav className="m-auto">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
