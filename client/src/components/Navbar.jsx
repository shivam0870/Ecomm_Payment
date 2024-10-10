import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar">
          <div className="left">
            <h3>NextGenMart</h3>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
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