import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

ProductCard;

const Products = () => {
  const [resData, setResData] = useState([]);

  const API_URL = "https://fakestoreapi.com/products";
//   console.log(resData);

  async function fetchProductData() {
    const res = await fetch(API_URL);
    const data = await res.json();

    setResData(data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3 sm:px-16 px-3 justify-around items-center py-10">
        {resData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
