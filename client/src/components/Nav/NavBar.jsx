import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="success" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="home">Foods.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="features">Features</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
