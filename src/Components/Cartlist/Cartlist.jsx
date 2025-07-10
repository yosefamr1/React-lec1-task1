import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Cartlist() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cartlist;
