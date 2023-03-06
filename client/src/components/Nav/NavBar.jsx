import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import { LogoutButton } from "../Auth/LogoutButton";
import "./NavBar.css";
import Logo from "../../assets/images/navLogo.png"

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <Navbar bg="success" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img src={Logo} alt="" className="navLogo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          {isAuthenticated ? (
            <img className="navImg" src={user.picture} alt={"No"} />
          ) : (
            <img
              className="navImg"
              src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
              alt={"No"}
            />
          )}
          {isAuthenticated ? (
            <h3 id="autentic">{user.email}</h3>
          ) : (
            <h3 id="autentic">Invited</h3>
          )}
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <Link to="/">
              <button type="button" class="btn btn-light">
                Login
              </button>
            </Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
