import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = ({ userId }) => {
  return (
    <div>
      <h1>Sorry, an error occurred while fetching the data</h1>
      <NavLink to={`/users/${userId}/home`}>Return to home page</NavLink>
    </div>
  );
};

export default Error;
