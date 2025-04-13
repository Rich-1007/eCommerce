import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setAllItems } from "../Redux/slices/CartSlice";

ProductCard;

const Products = () => {
  const [resData, setResData] = useState([]);
  const dispatch = useDispatch();

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const upDatedData = data.map((item) => ({
      ...item,
      isAdded: false,
      quantity: 2,
    }));

    setResData(data);
    dispatch(setAllItems(upDatedData));
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const allItems = useSelector((state) => state.cart.allItems);

  return (
    <>
      <div className="flex flex-wrap gap-3 sm:px-16 px-3 justify-around items-center py-10">
        {allItems?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
