import React, { useState } from "react";



import SubcategoriesItem from "./SubcategoriesItem";
import { imgdata } from "../../data";
import { IoChevronDown } from 'react-icons/io5';
const Categoryitem = ({ item, index }) => {
  
    const [isDown, setIsDown] = useState(false);

  //  console.log(item);
 
    return (
        <div
        className="cursor-pointer"
        onMouseEnter={() => setIsDown(true)}
        onMouseLeave={() => setIsDown(false)}
      >
        <div className="flex justify-center">
          <img src={imgdata[index]} className=" w-14 object-contain" alt="" />
        </div>
        <div className="sm:text-base text-black text-center text-sm flex flex-row justify-center items-center gap-1">
          {item?.title}
  
          {item?.subcategories &&
            (isDown ? (
              <IoChevronDown
                size={18}
                className="text-black  rotate-180 duration-300"
              />
            ) : (
              <IoChevronDown size={18} className="text-black duration-300 " />
            ))}
        </div>
  
        <div className="absolute  flex bg-white text-gray-600 z-10  shadow-2xl  text-xs py-5  flex-col rounded-xl ">
          {isDown &&
            item?.subcategories &&
            item?.subcategories.map((item, index) => (
              <SubcategoriesItem item={item} key={index} />
            ))}
        </div>
      </div>
  )
}

export default Categoryitem