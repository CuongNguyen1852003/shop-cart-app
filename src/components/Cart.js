import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
