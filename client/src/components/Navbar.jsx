import React, { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Call useNavigate here

  const submitHandler = (e) => {
    e.preventDefault();
    // Navigate without the colon, as it's not needed
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  }

  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <Link to={'/'} className="left">
            <h3>NextGenMart</h3>
          </Link>
          <form className="search-bar" onSubmit={submitHandler}>
            <input 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              type="text" 
              placeholder="Search..." 
            />
            <button type="submit" style={{ display: 'none' }}>Search</button> {/* Optional: Hide button for better UI */}
          </form>
          <div className="right">
            <button className="btn btn-warning mx-3">Cart</button>
            <button className="btn btn-warning mx-3">Profile</button>
            <button className="btn btn-warning mx-3">Login</button>
            <button className="btn btn-warning mx-3">Register</button>
            <button className="btn btn-warning mx-3">Logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
