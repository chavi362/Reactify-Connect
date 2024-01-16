import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../Api';
import '../sass/form.scss'
const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user', null);
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`users?email=${formUser.email}`);
      const users = response.data;
      if (response.error) {
        console.error('Error fetching user:', response.error);
        navigate('/error');
        return;
      }
      if (Array.isArray(users) && users.length > 0) {
        const foundUser = users[0];
        if (foundUser.email == formUser.email && foundUser.website == formUser.password) {
          console.log('Login successful');
          setUser(foundUser);
          props.updateUserContext(foundUser);
          navigate('/');
        } else {
          console.log('Incorrect email or password');
        }
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      navigate('/error');
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCreateNew = () => {
    navigate('/register');
  };

  return (
    <>
      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: '185px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email address"
                            value={formUser.email}
                            onChange={handleChange}
                            name="email"
                          />
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                            value={formUser.password}
                            onChange={handleChange}
                            name="password"
                          />
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          <br></br>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger" onClick={handleCreateNew}>
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Discover a World of Opportunities/</h4>
                      <p className="small mb-0">
                        Welcome to our platform where you can explore and connect with a community driven by innovation and collaboration.
                        Unleash your potential as we strive to make a positive impact together. Join us on this exciting journey!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Login;
