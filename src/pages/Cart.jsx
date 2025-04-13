import React, { useState } from "react";

import { IoMdStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/slices/CartSlice";
import { store } from "../Redux/store";
import Navbar from "../Components/Navbar";

const Cart = () => {
  const [isTrue, setIsTrue] = useState(true);

  const items = useSelector((store) => store.cart.cartItems);

  console.log(items);

  // console.log(items);
  function handleAddToCart() {
    setIsTrue((prev) => !prev);
  }

  return (
    <>
      <Navbar />
      {items &&
        items.map((item) => (
          <div
            key={item?.id}
            className=" rounded-lg shadow-md hover:shadow-2xl hover:translate-y-0.5 transition-all duration-300 flex flex-col sm:w-64  h-96 px-3 bg-white items-center"
          >
            <div className="flex flex-col py-3 ">
              <span className="text-sm font-semibold line-clamp-2">
                {item?.title}
              </span>
              <span className="text-xs font-light line-clamp-2">
                {item?.description}
              </span>
            </div>

            <div className="h-56 w-32 py-1 overflow-hidden flex justify-center">
              <img src={item?.image} alt="" className="object-contain" />
            </div>

            <div className="py-4 flex justify-between w-full ">
              <div className="flex flex-col">
                <p>Price : {item?.price} $</p>

                <div className="flex flex-row items-center gap-1">
                  <p>Rating : {item?.rating.rate}</p>
                  <IoMdStarOutline color="black" />
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-green-400 px-2 rounded-lg text-gray-500 hover:bg-green-500 transition-all duration-500 hover:text-gray-900"
              >
                {isTrue ? "Add To Cart" : "Remove Cart"}
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cart;
