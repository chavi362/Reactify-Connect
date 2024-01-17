import React, { useState, useContext } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../sass/appNavBar.scss';
import LogoutModal from './LogoutModal';
import { UserContext } from '../App';

const AppNavbar = ({ deleteUser }) => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const  userId= user.id;
  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleLogout = () => {
    deleteUser();
    closeLogoutModal();
    navigate(`/login`); // Redirect to login or home after logout
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="logo-container">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          style={{ width: '100px' }}
          alt="logo"
        />
      </div>
      <Navbar.Brand as={NavLink} to={`/users/${userId}/home`} activeClassName="active">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to={`/users/${userId}/info`} className="nav-link" activeClassName="">
            Info
          </Nav.Link>
          <NavDropdown title="Posts" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to={`/all-posts`} className="nav-link" activeClassName="">
              all posts
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={`/users/${userId}/posts`} className="nav-link" activeClassName="">
              your Posts
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to={`/users/${userId}/todos`} className="nav-link" activeClassName="">
            Todos
          </Nav.Link>
          <Nav.Link as={NavLink} to={`/users/${userId}/albums`} className="nav-link" activeClassName="">
            Albums
          </Nav.Link>
          <Nav.Link onClick={() => setLogoutModalOpen(true)} className="nav-link" activeClassName="">
            Logout
          </Nav.Link>
          {isLogoutModalOpen && <LogoutModal deleteUser={handleLogout} closeModal={closeLogoutModal} />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  
    
};

export default AppNavbar;
