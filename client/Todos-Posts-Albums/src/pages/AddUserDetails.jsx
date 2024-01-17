import React, { useState, useEffect ,useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../sass/form.scss'
import api from '../Api';
import { UserContext } from '../App';
const AddUserDetails = ({ updateUserContext }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState({
    name: "",
    username: "",
    phone:"",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    geo: {
      lat: "",
      lng: "",
    },
    phone: "",
    company: {
      companyName: "",
      catchPhrase: "",
    }
  });
  useEffect(() => {
    setFormUser((prevFormUser) => ({
      id:user.id,
      email: user.email,
      ...prevFormUser,
    }));
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormUser = { ...formUser, id: user.id };
      const response = await api.put(`users/${user.id}`, updatedFormUser);
  
      if (response.error) {
        console.error('Error updating user details:', response.error);
      } else {
        const updatedUser = response.data;
        updateUserContext(updatedUser);
        navigate(`/users/${updatedUser.id}/home`);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleChangeNested = (parentKey, key, event) => {
    const { value } = event.target;
    setFormUser((prevUser) => ({
      ...prevUser,
      [parentKey]: {
        ...prevUser[parentKey],
        [key]: value,
      },
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
                          id="username"
                          className="form-control"
                          placeholder="Your user name"
                          value={formUser.username}
                          onChange={handleChange}
                          name="username"
                        />
                        <label className="form-label" htmlFor="username">
                          username
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="phone"
                          className="form-control"
                          placeholder="Your phone"
                          value={formUser.phone}
                          onChange={handleChange}
                          name="phone"
                        />
                        <label className="form-label" htmlFor="phone">
                          username
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="full-name"
                          className="form-control"
                          placeholder="Your name"
                          value={formUser.name}
                          onChange={handleChange}
                          name="name"
                        />
                        <label className="form-label" htmlFor="full-name">
                          Full Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <div className="d-flex">
                          <input
                            className="form-control me-2"
                            placeholder="Street"
                            value={formUser.address.street}
                            onChange={(e) => handleChangeNested('address', 'street', e)}
                            name="street"
                          />
                          <input
                            className="form-control me-2"
                            placeholder="Suite"
                            value={formUser.address.suit}
                            onChange={(e) => handleChangeNested('address', 'suit', e)}
                            name="suite"
                          />
                          <input
                            className="form-control"
                            placeholder="City"
                            value={formUser.address.city}
                            onChange={(e) => handleChangeNested('address', 'city', e)}
                            name="city"
                          />
                          <input
                            className="form-control"
                            placeholder="zip code"
                            value={formUser.address.zipcode}
                            onChange={(e) => handleChangeNested('address', 'zipcode', e)}
                            name="zipcode"
                          />
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="company-name"
                          className="form-control"
                          placeholder="Your company"
                          value={formUser.company.companyName}
                          onChange={(e) => handleChangeNested('company', 'companyName', e)}
                          name="companyName"
                        />
                        <label className="form-label" htmlFor="company-name">
                          Company Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="form2Example77"
                          className="form-control"
                          placeholder="Your catch phrase"
                          value={formUser.company.catchPhrase}
                          onChange={(e) => handleChangeNested('company', 'catchPhrase', e)}
                          name="catchPhrase"
                        />
                        <label className="form-label" htmlFor="form2Example77">
                          Company Catch Phrase
                        </label>
                        <br /><br />
                        <br /><br />
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

export default AddUserDetails;
