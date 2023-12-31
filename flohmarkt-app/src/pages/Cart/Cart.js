import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopcontext";
import { PRODUCTS } from "../../products";
import CartItem from "./cart-item.jsx";
import { useNavigate } from "react-router-dom";
import PromoCodeInput from "../../components/PromoCodeInput"; // Import the PromoCodeInput component
import "./cart.css";

export const Cart = () => {
  const { cartItems, checkout } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState(''); // State to store the entered promo code
  const [discountedTotalAmount, setDiscountedTotalAmount] = useState(null); // State to store the discounted total amount

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    let totalPrice = 0;
    PRODUCTS.forEach((product) => {
      if (cartItems[product.id] !== 0) {
        totalPrice += product.price * cartItems[product.id];
      }
    });

    return totalPrice;
  };

  const originalTotalAmount = getTotalPrice();
  const navigate = useNavigate();

  // Event handler for promo code input change
  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  // Event handler for applying the promo code
  const handleApplyPromoCode = () => {
    if (promoCode === 'SOMMAR23') {
      const discountedAmount = originalTotalAmount * 0.8; // Calculate the discounted amount (20% off)
      setDiscountedTotalAmount(discountedAmount.toFixed(2));
    } else {
      setDiscountedTotalAmount(null);
      alert("Sorry:( It's  not a valid code") // If the promo code is not valid, reset the discounted total
    }
  };

  return (
    <div >
      <div className="cartheader">
        <h1>Your Cart Items:</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {originalTotalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal: €{originalTotalAmount.toFixed(2)} </p>
          <PromoCodeInput value={promoCode} onChange={handlePromoCodeChange} /> {/* Render the PromoCodeInput component */}
          <div className="buttons">
            <button className="applybutton" onClick={handleApplyPromoCode}>Apply</button>
            {discountedTotalAmount !== null && promoCode === 'SOMMAR23' ? (
              <>
                <p className="discount">Promo Code Discount (20% off): €{(originalTotalAmount * 0.2).toFixed(2)} </p>
                <p className="discount">Discounted Total: €{discountedTotalAmount}</p>
              </>
            ) : null}
            <div className="payorshop">
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
            
          </div>

        </div>
      ) : (
        <div className="empty">
          <h1 className="emptytext">Your Shopping Cart is Empty</h1>
          <img className="sadface" src='./sad.png' alt="" />
        </div>

      )}
    </div>
  );
};