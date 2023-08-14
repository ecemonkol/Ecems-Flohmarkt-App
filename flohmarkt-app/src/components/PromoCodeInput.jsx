import React from 'react';

const PromoCodeInput = ({ onChange, value, onApply }) => {
  return (
    <div>
      <p className="code">Use Promotion Code;</p>
      <input class= "promocodebar" type="text" value={value} onChange={onChange} placeholder="PROMO CODE" />
    </div>
  );
};

export default PromoCodeInput;