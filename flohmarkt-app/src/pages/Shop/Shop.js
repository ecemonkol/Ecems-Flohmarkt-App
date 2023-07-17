import * as React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from ".//Product";
import "./shop.css";


export const Shop = () => {
  return (
    <div className="shoppage">
      <h2>Shop</h2>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

