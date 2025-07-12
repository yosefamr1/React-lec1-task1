import { useSelector } from "react-redux";


function wishlist() {
      const product = useSelector((state) => state.counter.wishItem);

  return (
    <div>{product[0].id}</div>
  )
}

export default wishlist