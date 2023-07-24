import * as React from 'react';
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import { Shop } from "./pages/Shop/Shop";
import { Cart } from './pages/Cart/Cart';
import { Contact } from './pages/Contact/Contact';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { ShopContextProvider } from "./context/shopcontext";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </ShopContextProvider>
    </div>
  );
}

export default App;

