import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 shadow-md rounded-lg p-3 mb-3">
      
      <img src={img} alt="" className="w-[50px] h-[50px] " />
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between  gap-5">
        <div className="font-bold text-black text-justify">{name}</div>
        <div>
        <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`Food item '${name}' is removed from cart 🛒.`, {
            icon: "🗑️",
            duration: 500,
          }); 
        }}
        className="text-3xl text-red-600 cursor-pointer"
      />
      </div>
      </div>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">रु.{price}</span>
          <div className="flex justify-center items-center gap-5">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
