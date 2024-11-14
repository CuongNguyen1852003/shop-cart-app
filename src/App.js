import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <h1>Shopping Cart App</h1>
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

export default App;
