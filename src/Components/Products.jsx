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
  console.log(allItems.length);
  

  if (allItems.length < 1) {
    return (
      <>
        <div className="bg-gray-200 w-full h-44 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-gray-600 font-mono">
            No Items Found
          </p>

          <p className="text-[10px] font-thin pt-1 text-gray-500">
            Check your Internet Conection.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="     flex flex-wrap gap-3 sm:px-16 px-3 justify-around items-center py-10">
          {allItems?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  }
};

export default Products;
