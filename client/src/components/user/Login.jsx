import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const {  email, password } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

    const result = await login( email, password);

    if (result.success) {
      navigate("/");
    }

    // console.log(formData);
  };

  return (
    <div className="register-container">
       <h1 className='reg-h1'>Please login here</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label animated-label"
          >
            Email 
          </label>

          <input
            name= "email"
            value={formData.email}
            onChange={onChangerHandler}
            type="email"
            className="form-control animated-input"
            id="exampleInputEmail144444444444444"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text animated-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label animated-label"
          >
            Password
          </label>
          <input
            name= "password"
            value={formData.password}
            onChange={onChangerHandler}
            type="password"
            className="form-control animated-input"
            id="exampleInputPassword1132"
          />
        </div>
       
        { (
          <div className="notification">
            <div className="notification-content">
              <div className="notification-icon">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <div className="notification-message">
                <span>Please click on the checkbox and then proceed!!</span>
              </div>
              <div className="notification-close">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        )}
        <div className='d-grid col-6 mx-auto my-3'>
        <button
          type="submit"
          className="btn btn-primary animated-button"
        >
          Login
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default Login;
