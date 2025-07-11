import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductDetails.css";
import { axiosInstance } from "../../network/interceptor";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const { handleAddToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        setProduct(res?.data); 
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    callApi();
  }, [id]); 

  if (!product) {
    return (
      <div className="product-details">
        <p>Loading product details...</p>
      </div>
    );
  }

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
      handleAddToCart({ ...product, quantity: 0 });
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    handleAddToCart({ ...product, quantity: counter });
  };

  return (
    <section className="details">
      <div className="container">
        <figure>
          <img src={product.images && product.images[0]} alt={product.title} />
        </figure>
        <div className="text">
          <h1 id="title">{product.title}</h1>
          <h3>{product.description}</h3>
          <h2 id="price">{product.price} $</h2>
          {product.stock > 0 ? (
            <h2 className="instock">in stock</h2>
          ) : (
            <h2 className="outstock">out of stock</h2>
          )}
          <p>only {product.stock} left in stock</p>
          <h3>
            <span className="category">category:</span> {product.category}
          </h3>
          <h3>
            <span className="brand">brand:</span> {product.brand}
          </h3>

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
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
