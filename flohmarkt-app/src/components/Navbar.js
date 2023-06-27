import React from 'react'
import { Link } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";

export const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart <PiShoppingCartLight /></Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  )
}
