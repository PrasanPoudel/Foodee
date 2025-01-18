import React, { useState } from "react";
import FoodData from "../data/FoodData.js";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { FaBox } from "react-icons/fa";
import { PiShoppingBagOpenBold } from "react-icons/pi";
const SingleFoodItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    if (clicked) return; // Prevent re-triggering the animation while it's active
    setClicked(true);
    setTimeout(() => setClicked(false), 1500); // Reset animation after 1.5 seconds
  };

  const handleToast = (name) =>
    toast.success(`Food item '${name}' is added to bag ˚ ༘⋆🛍️｡˚.`);
  const dispatch = useDispatch();
  const { name } = useParams();
  const SingleFoodData = FoodData.filter((x) => x.name === name);
  const FoodItem = SingleFoodData[0];

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: FoodItem.id,
        name: FoodItem.name,
        price: FoodItem.price,
        rating: FoodItem.rating,
        img: FoodItem.img,
        qty: 1,
      })
    );
    handleToast(FoodItem.name);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <section className="pt-10 lg:mx-[200px] h-[300vh] lg:h-[135vh] text-black">
        <div className="flex flex-col bg-white p-2 m-auto">
          <div className="mb-5">
            <Link to="/Menu" className="text-5xl">
              <IoMdArrowRoundBack className="border-b-2 border-r-2 border-gray-200" />
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row">
            <img
              alt=""
              className="lg:w-1/3 w-full h-[275px]"
              src={FoodItem.img}
            />
            <div className="lg:w-2/3 lg:px-5 w-full">
              <h2 className="text-2xl text-gray-500">{FoodItem.category}</h2>
              <h1 className="text-gray-900 text-3xl font-medium mb-6">
                {FoodItem.name}
              </h1>
              <p className="flex mt-5 text-2xl lg:px-5 items-center">
                <AiFillStar className="text-orange-400" />
                {FoodItem.rating}
              </p>
              <button
                className={`cart-button w-[250px]  p-3 h-[60px] text-2xl text-white font-bold bg-orange-600 hover:bg-gray-500 hover:scale-x-105 mt-10 mb-5  ${clicked ? "clicked" : ""}`}
                onClick={()=>{
                  handleButtonClick();
                  handleAddToCart();
                }}
              >
                <span className="add-to-cart flex gap-2 w-full justify-center items-center">
                  Add To Bag: <PiShoppingBagOpenBold className="text-4xl" />
                </span>
                <PiShoppingBagOpenBold className="PiShoppingBagOpenBold text-4xl" />
                <FaBox className="fa-box" />
              </button>
              <p className="mt-1 text-2xl lg:px-5">
                Price:{" "}
                <span className="text-2xl text-green-600">
                  रु.{FoodItem.price}
                </span>
              </p>
              <p className="leading-9 mt-5 text-justify text-xl">
                {FoodItem.desc}
              </p>
            </div>
          </div>
          <div className="mt-5 lg:px-5">
            <h2 className="text-3xl text-black">Recipe:</h2>
            <p className="text-xl text-justify leading-9 mt-5">
              {FoodItem.recipe}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleFoodItem;
