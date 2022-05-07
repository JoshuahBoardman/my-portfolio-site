import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// TODO: make the background transparent and increase the distance between nav links
const Header = () => {
  return (
    <Navbar variant="light" expand="sm" className="">
      <Container>
        <Navbar.Brand href="#home">
          <div className="rounded-circle bg-primary fs-3 fw-bold text-dark d-flex justify-content-center align-items-center" style={{width: "3rem", height: "3rem"}}>JB</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
