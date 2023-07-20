import React from "react";


export const Product = (props) => {
  const {productName, price, productImage } = props.data;
  

  return (
    <div className="item">
      <img className="pic" src={productImage} alt="" />
      <div className="description">
        <p>
          <b className="name">{productName}</b>
        </p>
        <p className="price"> €{price}</p>
      </div>
      <button class="button-50" role="button">Add To Cart</button>
    </div>
  );
};