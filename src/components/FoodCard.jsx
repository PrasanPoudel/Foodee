import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const FoodCard = ({name, price, img, rating}) => {
  const navigateTo = useNavigate();
  return (
    <div
    onClick={()=>{
      navigateTo(`/SingleFoodItem/${name}`)
    }}
     className="hover:cursor-pointer font-semibold w-[250px] bg-white p-5 flex flex-col rounded-3xl gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[150px] hover:scale-105  rounded-3xl cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between gap-6">
        <h2 className="h-[50px] flex flex-wrap">{name}</h2>
        <span className="text-green-500 ">रु.{price}</span>
      </div>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-orange-400" /> {rating}
        </span>
        <p className="flex items-center  p-1 text-[15px] font-semibold underline">
        Food detail »
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
