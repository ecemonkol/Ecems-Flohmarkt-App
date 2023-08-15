import * as React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from ".//Product";
import "./shop.css";

import  ScrollToTop from './ScrollButton.jsx';

export const Shop = () => {
  return (
   <div>
      <div className="shoppage">
        <img className= "headerimg" src='./logo.png' alt=""/>
        <button onClick = { () => window.scrollTo({ top:750, behavior: 'smooth'})  } className="startshoppingbutton">Start Shopping!</button>
        <img className= "shopheader" src='./shopheader.png' alt=""/>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};