import * as React from 'react';
import { Link, Routes, Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart.js';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
