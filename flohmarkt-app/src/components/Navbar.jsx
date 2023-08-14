import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div id="promo-bar">
        <p className='promocode'> 10% discount on everything! code: SOMMAR23</p>
      </div>
      <div className="navbar">
        <div className="links">
          <Link to="/"> SHOP </Link>
          <Link to="/contact" id="contact" > CONTACT </Link>
          <Link to="/cart" id="cart"> CART<FaShoppingCart/></Link>
        </div>
        
      </div>
    </>
  
  );
};

export default Navbar;