import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: "0.5px",
  }
  return (
    <>
      <Navbar className='navbar navbar-expand-lg navbar-dark bg-light gradient-custom '>
        <Container>
          <div>
            <h2 className='mt-2 h2_right container-fluid' style={{ color: "#ffffff" }}>
              <Nav.Link href="/" className='elegant-showy-text'>Sahil Anand</Nav.Link>
            </h2>
          </div>
          <Nav >
            <div className='mt-2'>
              <NavLink to="/" className="text-decoration-none headerLinkAnimation" style={common}>Home</NavLink>
              <NavLink to="/profile" className="text-decoration-none headerLinkAnimation" style={common}>Profiles</NavLink>
              <NavLink to="/playlist" className="text-decoration-none headerLinkAnimation" style={common}>Projects</NavLink>
              <NavLink to="/contact" className="text-decoration-none headerLinkAnimation" style={common}>Cold Mail!</NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
