import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { axiosInstance } from "../../network/interceptor";
import { useNavigate } from "react-router-dom";


function ProductList() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const callApi = async () => {
    let res = await axiosInstance.get("/products");
    setList(res?.data?.products);
    console.log(res);
  };

  useEffect(() => {
    callApi();
  }, []);


  const details = (productid) => {
    // console.log("Product ID:", productid);

    navigate(`/productdetails/${productid}`);

    
  };
  return (
    <div className="productlist">
      {list.length > 0
        ? list.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => details(product.id)}
            />
          ))
        : ""}
    </div>
  );
}

export default ProductList;
