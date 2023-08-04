import React from 'react';

const PromoCodeInput = ({ onChange, value, onApply }) => {
  return (
    <div>
      <input className= "promocode" type="text" value={value} onChange={onChange} placeholder="PROMO CODE" />
    </div>
  );
};

export default PromoCodeInput;