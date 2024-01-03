import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/products" activeClassName="active">
        Products
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
