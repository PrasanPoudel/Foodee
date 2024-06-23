import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
const Navbar = () => {
  const [activeCart, setActiveCart] = useState(false);
  const dispatch = useDispatch();
  const [isFixed, setIsFixed] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`flex flex-col z-50 items-center  justify-between lg:flex-row  w-full pt-5 ${isFixed ? 'fixed top-0 left-0 w-full  bg-[#F0F0F0]' : ''}`}>
      <div>
        <div className={`flex overflow-hidden items-center ${isFixed ? 'hidden lg:flex'  : ''}`}>
        <img src={logo} alt="" className="h-[120px] w-[200px] bg-transparent"/>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          type="search"
          name="search"
          id=""
          placeholder="🔍︎ Search Food:"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="flex items-center p-2 border border-black text-xl rounded-2xl outline-none  text-black placeholder:text-gray-600 my-2 w-48 lg:w-72"
        />
        <div  className='flex h-[75px] w-[120px] mr-[-40px]'>
      <LuShoppingBag
        onClick={() => setActiveCart(!activeCart)}
        className={`bg-transparent text-7xl p-3`}
      />
      <span className={`z-10  font-bold bg-orange-600  justify-center items-center line p-4 h-[35px] relative rounded-[50%] text-xl text-white left-[-35px] cursor-pointer top-[-10px] ${totalQty<1 ? "hidden": "flex"} `}>{totalQty}</span>
      </div>
        </div>

        {/* .........................Cart..................... */}

        <div
        className={`fixed right-0 top-0  p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0 overflow-y-scroll overflow-x-hidden w-full lg:w-[25vw] h-full" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
         <h3 className="text-2xl font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h3> 
        <div className="flex justify-between items-center my-3 z-50">
          <span className="text-xl font-bold text-black-600">Bag:</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-red-600 text-red-600 font-bold  p-1 text-4xl  rounded-md cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
            })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your bag is empty
          </h2>
        )}

        <div>
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-600 text-2xl font-bold px-3 text-white py-5 rounded-lg w-[90vw] lg:w-full mb-5"
          >Pay
          </button>
        </div>
      </div>
    </nav>
  );
  };
export default Navbar;
