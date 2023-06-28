import React from 'react'
import { Link } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { PiHouseLight } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";


export const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Shop <PiHouseLight /></Link>
          </li>
          <li>
            <Link to="/cart">Cart <PiShoppingCartLight /></Link>
          </li>
          <li>
            <Link to="/contact">Contact <PiHeadphonesLight /></Link>
          </li>
        </ul>
      </nav>
  )
}
