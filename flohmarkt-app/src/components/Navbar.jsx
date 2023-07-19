import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Flohmarkt</p>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/cart" > Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
