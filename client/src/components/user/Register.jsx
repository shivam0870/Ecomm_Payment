import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import {useNavigate} from 'react-router-dom';

const Register = () => {
 
const {register} = useContext(AppContext); 
const navigate = useNavigate();
  const [formData,setFromData] = useState({
    name : '',
    email : '',
    password : ''
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };


  const [isChecked, setIsChecked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const {name,email,password} = formData;


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!isChecked) {
//       setShowNotification(true);
     
//     } else {
//       // Submit the form
//       // alert('Registeration successful')
//       // console.log(formData);
      
// const res = await register(name,email,password);

// if(res.success){
//   navigate('/login');

// }


//     }
//   };

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!isChecked) {
    setShowNotification(true);
  } else {
    const res = await register(name, email, password);
    if (res.success) {
      navigate('/login');
    } 
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
          name= "name"
          value={formData.name}
          onChange={onChangeHandler}
            type="text"
            className="form-control animated-input"
            id="exampleInputEmail1333333"
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
            name= "email"
            value={formData.email}
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
            type="password"
            className="form-control animated-input"
            id="exampleInputPassword1132"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="htmlForm-check-input animated-checkbox"
            id="exampleCheck1555"
            onChange={handleCheckboxChange}
          />
          <label
            className="htmlForm-check-label animated-label"
            htmlFor="exampleCheck143134"
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