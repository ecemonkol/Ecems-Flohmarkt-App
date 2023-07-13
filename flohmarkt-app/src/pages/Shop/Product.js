import React from "react";



export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b className="name">{productName}</b>
        </p>
        <p className="price"> €{price}</p>
      </div>
    </div>
  );
};