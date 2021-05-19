import React from "react";
import Nav  from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/icons/logow.webp";

import './mynavbar.style.css';

const Mynavbar = () => {
  return (
    <>
      <Navbar className="animate-navbar nav-theme justify-content-between" fixed="top" expand="md"  variant="dark">
        <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="My Portfolio Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#content">Content</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Mynavbar;
