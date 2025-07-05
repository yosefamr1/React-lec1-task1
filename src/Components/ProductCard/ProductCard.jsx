import React, { useState } from "react";
import "./ProductCard.css";
function ProductCard({ product }) {
  const [counter, setcounter] = useState(1);

  const increment = () => {
    if (counter < product.stock) setcounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setcounter(counter - 1);
  };

  return (
    <section className="ProductCard">
      <div className="product_img">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="product_text">
        <h4>{product.title}</h4>
        <p className="description">{product.description}</p>
      </div>
      <div className="buttons">
        <div className="tuglle_btns">
          <button className="increment_btn" onClick={increment}>+</button>
          <h2>{counter}</h2>
          <button  className="increment_btn" onClick={decrement}>-</button>
        </div>
      </div>
      <div className="cart_btn">
        <button className="add_btn">add to cart</button>
      </div>
    </section>
  );
}

export default ProductCard;
