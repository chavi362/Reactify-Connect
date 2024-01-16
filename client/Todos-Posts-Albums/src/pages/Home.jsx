import React, { useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="display-4">Welcome to Your Home Page</h1>
              <p className="lead">Hello, {user.username}!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
