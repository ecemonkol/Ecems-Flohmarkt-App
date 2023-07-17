import * as React from 'react';
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import { Shop } from "./pages/Shop/Shop";
import { Cart } from './pages/Cart/Cart';
import { Contact } from './pages/Contact/Contact';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar /><br></br>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

