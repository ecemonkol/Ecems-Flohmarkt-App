import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div id="scroll-container">
         <div id="scroll-text"> PROMO CODE: SOMMAR10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROMO CODE: SOMMAR10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROMO CODE: SOMMAR10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div className="navbar">
        <p className="logo">Flohmarkt</p>
        <div className="links">
          <Link to="/contact" id="contact" >Contact</Link>
          <Link to="/"> Shop </Link>
          <Link to="/cart" id="cart"><FaShoppingCart/></Link>
        </div>
      </div>
    </>
  
  );
};

export default Navbar;
