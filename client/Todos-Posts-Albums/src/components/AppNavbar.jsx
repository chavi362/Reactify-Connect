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
      <Navbar.Brand as={NavLink} to="/" activeClassName="active" exact>
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/info" activeClassName="active">
            Info
          </Nav.Link>
          <NavDropdown title="Posts" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/todos" activeClassName="active">
              All Posts
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/create-post" activeClassName="active">
              Create New Post
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Albums" id="album-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/albums" activeClassName="active">
              All Albums
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/photos" activeClassName="active">
              Photos
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/delete-photo" activeClassName="active">
              Delete Photo
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/logout" activeClassName="active">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
