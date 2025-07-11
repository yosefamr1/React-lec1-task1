import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cartlist.css";

function Cartlist() {
  const { cartItems, handleAddToCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <div className="container">
        <div className="header">Cart</div>
        {cartItems.length === 0 ? (
          <div className="Empty">Empty !</div>
        ) : (
          <>
            {cartItems.map((product) => {
              const counter = product.quantity;
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
              return (
                <div className="item" key={product.id}>
                  <div className="item_description">
                    <div className="item-img">
                      <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className="item-text">
                      <p>{product.title}</p>
                      <p>product id: {product.id}</p>
                    </div>
                  </div>
                  <div className="item_sitting">
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
                    <div className="price">
                      {(product.price * product.quantity).toFixed(2)} $
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="total">
              <h2>Total: {totalPrice.toFixed(2)} $</h2>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cartlist;
