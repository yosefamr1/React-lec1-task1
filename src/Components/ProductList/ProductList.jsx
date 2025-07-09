import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { axiosInstance } from "../../network/interceptor";

function ProductList() {
  const [list, setList] = useState([]);
  const callApi = async () => {
    let res = await axiosInstance.get("/products");
    setList(res?.data?.products);
    console.log(res);
  };
  useEffect(() => {
    callApi();
  }, []);

  console.log(list);

  return (
    <div className="productlist">
      
      {list.length > 0
        ? list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : ""}
    </div>
  );
}

export default ProductList;
