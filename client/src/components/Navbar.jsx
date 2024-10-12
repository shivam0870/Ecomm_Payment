import React, { useContext, useState } from 'react';
import '../index.css';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import AppContext from '../context/AppContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu
  const navigate = useNavigate();
  const location = useLocation();

const {setFilteredData,products, logout, isAuthenticated} = useContext(AppContext);

const filterbyCategory = (cat) => {
  setFilteredData(products.filter((data) => data.category.toLowerCase() == cat.toLowerCase()));
}
const filterbyPrice = (price) => {
  setFilteredData(products.filter((data) => data.price >= price));
}


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
            {isAuthenticated && (
              <>
               <button className="btn btn-warning mx-3">Cart</button>
               <button className="btn btn-warning mx-3">Profile</button>
               <button className="btn btn-warning mx-3" onClick={() => {
              logout();
              navigate('/');
            }} >Logout</button>
               </>
            )}
           {!isAuthenticated && (
<>
<button onClick={() => navigate('/login')} className="btn btn-warning mx-3">Login</button>
            <button onClick={() => navigate('/register')} className="btn btn-warning mx-3">Register</button>
</>
           )}
            
           
          </div>
        </div>
{location.pathname == '/' && (


<div className="sub_bar">
  <div className="items" onClick={() => setFilteredData(products)}>No Filter</div>
  <div className="items" onClick={() => filterbyCategory('mobiles')}>Mobiles</div>
  <div className="items" onClick={() => filterbyCategory('laptops')}>Laptops</div>
  <div className="items" onClick={() => filterbyCategory('cameras')}>Camera</div>
  <div className="items" onClick={() => filterbyCategory('headphones')}>Headphone</div>
  <div className="items" onClick={() => filterbyCategory('shirts')}>Shirts</div>
  <div className="items" onClick={() => filterbyCategory('chairs')}>Chairs</div>
  <div className="items" onClick={() => filterbyPrice(35000)}>Price &gt; 35000</div>
  <div className="items" onClick={() => filterbyPrice(45000)}>Price &gt; 45000</div>
  <div className="items" onClick={() => filterbyPrice(550000)}>Price &gt; 55000</div>
</div>
)}
      </div>
    </>
  );
};

export default Navbar;
