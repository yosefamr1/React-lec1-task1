import React, { useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addtowishlist, removeFromwishlist } from "../../store/wishlistSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";


function ProductCard({ product, onClick }) {
  const dispatch = useDispatch();

  const { handleAddToCart, cartItems } = useContext(CartContext);
  const existingItem = cartItems.find((item) => item.id === product.id);
  const counter = existingItem ? existingItem.quantity : 1;

  const isInCart = cartItems.some((item) => item.id === product.id);

  const increment = (e) => {
    e.stopPropagation();
    if (counter < product.stock) {
      handleAddToCart({ ...product, quantity: counter + 1 });
    }
  };

  const decrement = (e) => {
    e.stopPropagation();
    if (counter > 1) {
      handleAddToCart({ ...product, quantity: counter - 1 });
    } else {
      //to delete
      handleAddToCart({ ...product, quantity: 0 });
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
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

  // Wishlist functionality
  const wishItem = useSelector((state) => state.counter.wishItem);

  const isInWishlist = wishItem.some((item) => item.id === product.id);

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromwishlist(product.id));
      console.log("Removed from wishlist");
    } else {
      dispatch(addtowishlist(product));
      console.log("Added to wishlist");
    }
  };

  return (
    <section className="ProductCard" onClick={onClick}>
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
          <button className="wish-btn" onClick={handleToggleWishlist}>
            <FontAwesomeIcon
              icon={isInWishlist ? solidHeart : regularHeart}
              style={{ color: isInWishlist ? "#3A4980" : "gray", fontSize: "1.5rem" ,border: "none", backgroundColor: "transparent"}}
            />
          </button>
    </section>
  );
}

export default ProductCard;
