import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

export const Product = (props) => {
  const {id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  

  return (
    <div className="item">
      <img className="pic" src={productImage} alt="" />
      <div className="description">
        <p className="price"> €{price}</p>
        <p>
          <b className="name">{productName}</b>
        </p>
      </div>
      <button className="addToCartButton" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};