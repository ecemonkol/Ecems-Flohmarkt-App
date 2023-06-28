import * as React from 'react'; 
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import  Shop  from "./pages/Shop/Shop";
import  Cart  from './pages/Cart/Cart';
import  Contact  from './pages/Contact/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;