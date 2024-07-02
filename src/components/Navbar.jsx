import React from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";
import emptyCart from "../assets/emptyCart.png";
import { useState, useEffect } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [isVisibleLinks,setIsVisibleLinks] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
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
    <nav className={`flex z-50 items-center justify-between lg:flex-row  w-full px-3 overflow-hidden ${isFixed ? 'fixed top-0 left-0  bg-[#F0F0F0]' : ''}`}>
      <div>
        <div className={`flex overflow-hidden items-center`}>
        <img src={logo} alt="" className="h-[75px] w-[125px] bg-transparent lg:h-[100px] lg:w-[150px]" />
        </div>
      </div>
            <div>
          <ul className="hidden lg:flex  gap-10 text-2xl items-center flex-nowrap">
            <li>
              <Link to="/" onClick={scrollToTop} className={` font-bold hover:border-orange-600 hover:border-b-4`}>Home</Link>
            </li>
            <li>
              <Link to="/Menu" onClick={scrollToTop} className="NavLink hover:border-orange-600 hover:border-b-4 font-bold">Menu</Link>
            </li>
            <li>
              <a href="#Gallary"  className="NavLink hover:border-orange-600 hover:border-b-4 font-bold">Gallary</a>
            </li>
            <li>
              <a href="#Team" className="NavLink hover:border-orange-600 hover:border-b-4 font-bold">Team</a>
            </li>
          </ul>
        </div>
        <div  className='flex h-[65px] w-[120px] mr-[-40px] items-center'>
      <LuShoppingBag
        onClick={() => setIsVisibleCart(!isVisibleCart)}
        className={`bg-transparent text-5xl`}
      />
      <span className={`z-10  font-bold bg-orange-600  justify-center items-center line p-4 h-[35px] relative rounded-[50%] text-xl text-white left-[-35px] cursor-pointer top-[-10px] ${totalQty<1 ? "hidden": "flex"} `}>{totalQty}</span>
      </div>     
      {/* Hamburger menu for Mobile Links  */}
      <GiHamburgerMenu  
      className="text-5xl lg:hidden flex"
      onClick={() => setIsVisibleLinks(!isVisibleLinks)}
      />
        {/* Mobile Links */}
        <div className={`fixed lg:hidden flex flex-col left-0 top-0 w-full h-full bg-white mb-3 p-5 ${
          isVisibleLinks ? "flex z-50" : "hidden"
        } `}>
          <div className="flex justify-end w-full">
            <IoMdClose className="text-5xl rounded-full border-2 border-red-600 text-red-600 p-1"
             onClick={() => setIsVisibleLinks(!isVisibleLinks)}
            />
          </div>
          <ul className="flex flex-col gap-10 text-2xl">
            <li> 
              <Link to="/" onClick={scrollToTop}  className="hover:border-orange-600 hover:border-b-4 font-bold">Home</Link>
            </li>
            <li>
              <Link to="/Menu" onClick={scrollToTop} className="hover:border-orange-600 hover:border-b-4 font-bold">Menu</Link>
            </li>
            <li>
              <a href="#Gallary" onClick={() => setIsVisibleLinks(!isVisibleLinks)} className="hover:border-orange-600 hover:border-b-4 font-bold">Gallary</a>
            </li>
            <li>
              <a href="#Team" onClick={() => setIsVisibleLinks(!isVisibleLinks)} className="hover:border-orange-600 hover:border-b-4 font-bold">Team</a>
            </li>
          </ul>
        </div>
        {/* .........................Cart..................... */}
        <div
        className={`fixed right-0 top-0  p-5 bg-white mb-3 ${
          isVisibleCart ? "flex flex-col overflow-y-scroll overflow-x-hidden w-full lg:w-[25vw] h-full" : "hidden"
        } transition-all duration-500 z-50`}
      >
         <h3 className="text-2xl font-bold flex justify-between">
          {new Date().toUTCString().slice(0, 16)}
          <IoMdClose
            onClick={() => setIsVisibleCart(!isVisibleCart)}
            className="border-2 border-red-600 text-red-600 font-bold  p-1 text-5xl  rounded-full cursor-pointer"
          />
        </h3> 

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
          <div className="flex flex-col items-center justify-center w-full">
            <img src={emptyCart} alt="" className="h-[100px] w-[150px] bg-transparent"/>
            <p>Bag is empty.</p>
          </div>
        )}

        <div>
          <h3 className="font-semibold text-xl text-gray-800">Items : <span className="font-bold">{totalQty}</span></h3>
          <h3 className="font-semibold text-xl text-gray-800">
            Total Amount : <span className="text-green-500">रु. {totalPrice}</span>
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
