import React, { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };

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
            <button type="submit" style={{ display: 'none' }}>Search</button>
          </form>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`right ${isOpen ? 'show' : ''}`}>
            <button className="btn btn-warning mx-3">Cart</button>
            <button className="btn btn-warning mx-3">Profile</button>
            <button className="btn btn-warning mx-3">Login</button>
            <button onClick={() => navigate('/register')} className="btn btn-warning mx-3">Register</button>
            <button className="btn btn-warning mx-3">Logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
