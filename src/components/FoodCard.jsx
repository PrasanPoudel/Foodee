import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import {Link} from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
const FoodCard = ({ id, name, price, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-3xl gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[150px] hover:scale-110 bg-transparent rounded-3xl cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between gap-6">
        <h2 className="h-[50px] flex flex-wrap">{name}</h2>
        <span className="text-green-500 ">रु.{price}</span>
      </div>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-orange-400" /> {rating}
        </span>
        <Link to={`/SingleFoodItem/${name}`} className="flex items-center  p-1 text-[15px] font-bold">
        Food detail »
        </Link>
        <GiShoppingCart
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-black rounded-md text-4xl scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default FoodCard;
