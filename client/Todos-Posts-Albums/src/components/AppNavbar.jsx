import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="logo-container">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          style={{ width: '100px' }}
          alt="logo"
        />
      </div>
      <Navbar.Brand as={NavLink} to="/" activeclassname="active" >
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/info" activeclassname="active">
            Info
          </Nav.Link>
          <NavDropdown title="Posts" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/posts" activeclassname="active">
              All Posts
            </NavDropdown.Item>
          </NavDropdown>
            <Nav.Link as={NavLink} to="/todos" activeclassname="active">
              All Todos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/albums" activeclassname="active">
              All Albums
            </Nav.Link>
          <Nav.Link as={NavLink} to="/logout" activeclassname="active">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
