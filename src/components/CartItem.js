import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <p>
        {item.name} - ${item.price} × {item.quantity}
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </p>
    </div>
  );
};

export default CartItem;
