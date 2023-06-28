import * as React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>EcemS Flohmarkt</h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>

    
    </div>
  );
};

export default Shop;