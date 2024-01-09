import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './form.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const { email, password } = useParams();

  const [formUser, setFormUser] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    bs: ""
  });
  useEffect(() => {
    console.log('Current URL:', window.location.href);
    console.log(email)
    console.log(password)
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      email: email || prevFormUser.email,
      website: password || prevFormUser.website,
    }));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
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
                      <p>Let's take more details....</p>
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example33"
                          className="form-control"
                          placeholder="Your name"
                          value={formUser.name}
                          onChange={handleChange}
                          name="name"
                        />
                        <label className="form-label" htmlFor="form2Example33">
                          Full Name
                        </label>
                      </div>

                      {/* Address Input */}
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example44"
                          className="form-control"
                          placeholder="Your address"
                          value={formUser.address}
                          onChange={handleChange}
                          name="address"
                        />
                        <label className="form-label" htmlFor="form2Example44">
                          Address
                        </label>
                      </div>

                      {/* Phone Input */}
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example55"
                          className="form-control"
                          placeholder="Your phone number"
                          value={formUser.phone}
                          onChange={handleChange}
                          name="phone"
                        />
                        <label className="form-label" htmlFor="form2Example55">
                          Phone Number
                        </label>
                      </div>

                      {/* Company Name Input */}
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example66"
                          className="form-control"
                          placeholder="Your company name"
                          value={formUser.companyName}
                          onChange={handleChange}
                          name="companyName"
                        />
                        <label className="form-label" htmlFor="form2Example66">
                          Company Name
                        </label>
                      </div>

                      {/* Catch Phrase Input */}
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example77"
                          className="form-control"
                          placeholder="Your catch phrase"
                          value={formUser.catchPhrase}
                          onChange={handleChange}
                          name="catchPhrase"
                        />
                        <label className="form-label" htmlFor="form2Example77">
                          catch phrase
                        </label>
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Create Account
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
    </section>
  );
};

export default CreateAccount;
