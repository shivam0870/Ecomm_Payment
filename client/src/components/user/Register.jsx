import React, { useState } from 'react';

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      setShowNotification(true);
    } else {
      // Submit the form
      alert('Registeration successful')
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label animated-label"
          >
           Name
          </label>
          <input
            type="text"
            className="form-control animated-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label animated-label"
          >
            Email 
          </label>
          <input
            type="email"
            className="form-control animated-input"
            id="exampleInputEmail1"
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
            type="password"
            className="form-control animated-input"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="htmlForm-check-input animated-checkbox"
            id="exampleCheck1"
            onChange={handleCheckboxChange}
          />
          <label
            className="htmlForm-check-label animated-label"
            htmlFor="exampleCheck1"
          >
            Confirm Details
          </label>
        </div>
        {showNotification && (
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
          Register
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default Register;