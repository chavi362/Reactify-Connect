import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppNavbar = () => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/" activeClassName="active" exact>
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
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
          <NavDropdown title="Posts" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/posts" activeClassName="active">
              All Posts
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/create-post" activeClassName="active">
              Create New Post
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/albums" activeClassName="active">
            Albums
          </Nav.Link>
          <Nav.Link as={NavLink} to="/logout" activeClassName="active">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
