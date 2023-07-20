import * as React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from ".//Product";
import "./shop.css";
import  ScrollToTop from '../../components/ScrollToTop.jsx';



export const Shop = () => {
  return (
   <div>
      <div className="shoppage">;
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

