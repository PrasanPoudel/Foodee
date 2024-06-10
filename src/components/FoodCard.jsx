import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { LuShoppingBag } from "react-icons/lu";
const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-3xl gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 bg-transparent rounded-3xl cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2 className="h-[50px]">{name}</h2>
        <span className="text-green-500 ">रु.{price}</span>
      </div>
      <p className="text-sm font-normal text-justify h-[100px]">{desc.slice(0, 75)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-orange-400" /> {rating}
        </span>
        <LuShoppingBag
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-black rounded-md text-4xl"
        />
      </div>
    </div>
  );
};

export default FoodCard;
