import React from 'react';

const PromoCodeInput = ({ onChange, value, onApply }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default PromoCodeInput;
