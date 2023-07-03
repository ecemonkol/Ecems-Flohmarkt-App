import React from 'react'
import { Link } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { PiHouseLight } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";
import "./Navbar.css";



export const Navbar = () => {
    return (
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop <PiHouseLight /></Link>
          <Link to="/contact"> Contact <PiHeadphonesLight /></Link>
          <Link to="/cart" >
            Cart<PiShoppingCartLight />
          </Link>
        </div>
      </div>
    );
  };