import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiBarsArrowDown } from "react-icons/hi2";

export default function Header() {
  return (
    <Navbar className='container navbar' bg="dark" data-bs-theme="dark" expand="md" sticky="top">
      <Container >
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle className='border-3  rounded-pill' aria-controls="main-navbar-nav" >
          <span className='text-warning fs-3  '>
            <HiBarsArrowDown />
          </span>
          </ Navbar.Toggle >
        <Navbar.Collapse id="main-navbar-nav " className='custom-navbar-collapse '>
          <Nav className="ms-auto mx-4">
            <Nav.Link className='navLinks' href="#home">Home</Nav.Link>
            <Nav.Link className='navLinks' href="#about">About</Nav.Link>
            <Nav.Link className='navLinks' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='navLinks' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
