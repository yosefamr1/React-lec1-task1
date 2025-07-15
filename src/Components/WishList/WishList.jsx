import { useDispatch, useSelector } from "react-redux";
import "./WishList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { addtowishlist, removeFromwishlist } from "../../store/wishlistSlice";

function Wishlist() {
    const dispatch = useDispatch();
    const wishItem = useSelector((state) => state.counter.wishItem); 

    const isInWishlist = (productId) => wishItem.some((item) => item.id === productId);

    const handleToggleWishlist = (e, product) => {
        e.stopPropagation(); 
        if (isInWishlist(product.id)) {
            dispatch(removeFromwishlist(product.id));  
            console.log("Removed from wishlist");
        } else {
            dispatch(addtowishlist(product)); 
            console.log("Added to wishlist");
        }
    };

    return (
        <section className="cart">
            <div className="container">
                <div className="header">Wishlist</div>

                {wishItem.length === 0 ? (
                    <div className="Empty">Empty!</div>
                ) : (
                    <>
                        {wishItem.map((product) => (
                            <div className="item" key={product.id}>
                                <div className="item_description">
                                    <div className="item-img">
                                        <img src={product.thumbnail} alt={product.title} />
                                    </div>
                                    <div className="item-text">
                                        <p>{product.title}</p>
                                        <p>Product ID: {product.id}</p>
                                    </div>
                                </div>
                                <button
                                    className="wish-btn"
                                    onClick={(e) => handleToggleWishlist(e, product)}
                                >
                                    <FontAwesomeIcon
                                        icon={isInWishlist(product.id) ? solidHeart : regularHeart}
                                        style={{
                                            color: isInWishlist(product.id) ? "#3A4980" : "gray",
                                            fontSize: "1.5rem",
                                            border: "none",
                                            backgroundColor: "transparent",
                                        }}
                                    />
                                </button>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}

export default Wishlist;
