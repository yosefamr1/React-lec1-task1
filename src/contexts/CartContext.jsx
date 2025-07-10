// src/contexts/CartProvider.jsx
import React, { useState } from "react";
import { CartContext } from "./CartContext"; 

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  

  const handleAddToCart = (item) => {
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);

    if(item.quantity ===0){
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

    }else if (exists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
