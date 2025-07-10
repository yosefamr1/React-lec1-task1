import React, { useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { handleAddToCart, cartItems } = useContext(CartContext);
  const existingItem = cartItems.find((item) => item.id === product.id);
  const counter = existingItem ? existingItem.quantity : 1;

  const isInCart = cartItems.some((item) => item.id === product.id);

  const increment = () => {
    if (counter < product.stock) {
      handleAddToCart({ ...product, quantity: counter + 1 });
    }
  };

  const decrement = () => {
    if (counter > 1) {
      handleAddToCart({ ...product, quantity: counter - 1 });
    } else {
      //to delete
      handleAddToCart({ ...product, quantity: 0 });
    }
  };

  const handleClick = () => {
    handleAddToCart({ ...product, quantity: counter });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} style={{ color: "#f5c518", fontSize: "20px" }}>
            ★
          </span>
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span
            key={i}
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                color: "#f5c518",
                position: "absolute",
                width: "50%",
                overflow: "hidden",
              }}
            >
              ★
            </span>
            <span style={{ color: "#ccc" }}>★</span>
          </span>
        );
      } else {
        stars.push(
          <span key={i} style={{ color: "#ccc", fontSize: "20px" }}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  useEffect(() => {
    if (isInCart) {
      handleAddToCart({ ...product, quantity: counter });
    }
  }, [counter]);

  return (
    <section className="ProductCard">
      <div className="product_img">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="product_text">
        <h4>{product.title}</h4>
        <div>
          {renderStars(product.rating)} ({product.rating})
        </div>
        <h3>{product.price}$</h3>

        <p className="description">{product.description}</p>
      </div>
      {isInCart ? (
        <div className="buttons">
          <div className="tuglle_btns">
            <button className="increment_btn" onClick={increment}>
              +
            </button>
            <h2>{counter}</h2>
            <button className="increment_btn" onClick={decrement}>
              -
            </button>
          </div>
        </div>
      ) : (
        <div className="cart_btn">
          <button className="add_btn" onClick={handleClick}>
            add to cart
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductCard;
