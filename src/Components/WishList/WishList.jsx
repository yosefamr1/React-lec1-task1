import { useSelector } from "react-redux";
import "./wishlist.css"; // لو عندك ستايلات

function Wishlist() {
  const wishlistItems = useSelector((state) => state.counter.wishItem);

  return (
    <section className="cart"> 
      <div className="container">
        <div className="header">Wishlist</div>

        {wishlistItems.length === 0 ? (
          <div className="Empty">Empty!</div>
        ) : (
          <>
            {wishlistItems.map((product) => (
              <div className="item" key={product.id}>
                <div className="item_description">
                  <div className="item-img">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                    />

                  </div>
                  <div className="item-text">
                    <p>{product.title}</p>
                    <p>Movie ID: {product.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
