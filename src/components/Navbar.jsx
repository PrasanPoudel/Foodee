import React from "react";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { SiIfood } from "react-icons/si";
const Navbar = () => {
  const location = useLocation();
  const isActive = (location, paths, hashes) => {
    return paths.includes(location.pathname) && hashes.includes(location.hash);
  };
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [isVisibleLinks, setIsVisibleLinks] = useState(false);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex z-50 shadow items-center justify-between lg:flex-row  w-full px-2 overflow-hidden ${
        isFixed ? "fixed top-0 left-0  bg-[#F0F0F0]" : ""
      }`}
    >
      <div>
        <div className={`overflow-hidden items-center`}>
          <h1 className="flex text-4xl lg:text-5xl text-orange-600 font-bold">
            <SiIfood />
            Foodee
          </h1>
        </div>
      </div>
      <div>
        <ul className="hidden lg:flex  gap-10 text-2xl items-center flex-nowrap">
          <li>
            <Link
              to="/"
              onClick={scrollToTop}
              className={`${
                isActive(location, ["/"], [""]) ? "text-orange-600" : ""
              } font-bold hover:border-orange-600 hover:border-b-2`}
            >
              Home
            </Link>
          </li>
          <li className="border-l-2 border-black pl-2">
            <Link
              to="/Menu"
              onClick={scrollToTop}
              className={`${
                isActive(location, ["/Menu"], [""]) ? "text-orange-600" : ""
              } hover:border-orange-600 hover:border-b-2 font-bold`}
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setIsVisibleCart(!isVisibleCart)}
        className="flex h-[65px] w-[120px] mr-[-75px] lg:mr-[-50px] items-center"
      >
        <PiShoppingBagOpenBold
          className={`bg-transparent text-4xl lg:text-5xl `}
        />
        <span
          className={`z-10  font-bold bg-orange-600  justify-center items-center line p-4 h-[35px] relative rounded-[50%] text-xl text-white left-[-35px] cursor-pointer top-[-10px] ${
            totalQty < 1 ? "hidden" : "flex"
          } `}
        >
          {totalQty}
        </span>
      </div>
      {/*Menu icon for Mobile Links  */}
      <HiOutlineMenuAlt2
        className="text-4xl lg:hidden fle"
        onClick={() => setIsVisibleLinks(!isVisibleLinks)}
      />
      {/* Mobile Links */}
      <div
        className={`fixed lg:hidden flex flex-col left-0 top-0 w-full h-full bg-white mb-3 p-5 ${
          isVisibleLinks ? "flex z-50" : "hidden"
        } `}
      >
        <div className="flex justify-end w-full">
          <IoMdClose
            className="text-5xl rounded-full border-2 border-red-600 text-red-600 p-1"
            onClick={() => setIsVisibleLinks(!isVisibleLinks)}
          />
        </div>
        <ul className="flex flex-col gap-10 text-2xl">
          <li>
            <Link
              to={"/"}
              onClick={scrollToTop}
              className={`${
                isActive(location, ["/"], [""]) ? "text-orange-600" : ""
              } font-bold hover:border-orange-600 hover:border-b-2`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/Menu"}
              onClick={scrollToTop}
              className={`${
                isActive(location, ["/Menu"], [""]) ? "text-orange-600" : ""
              } font-bold hover:border-orange-600 hover:border-b-2`}
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
      {/* .........................Cart..................... */}
      <div
        className={`fixed right-0 top-0  p-5 bg-white mb-3 ${
          isVisibleCart
            ? "flex flex-col overflow-y-scroll overflow-x-hidden w-full lg:w-[25vw] h-full"
            : "hidden"
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
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <PiShoppingBagOpenBold className="text-8xl " />
            <p className="text-xl font-bold">Food bag is empty.</p>
          </div>
        )}

        <div className="mt-10">
          <h3 className="font-semibold text-xl text-gray-800">
            Items : <span className="font-bold">{totalQty}</span>
          </h3>
          <h3 className="font-semibold text-xl text-gray-800">
            Total Amount :{" "}
            <span className="text-green-500">रु. {totalPrice}</span>
          </h3>
          {cartItems.length > 0 ?(
          <button
            onClick={() => navigate("/success")}
            className="text-center justify-center cursor-pointer bg-green-600 text-2xl font-bold px-3 text-white py-5 rounded-lg w-full mt-5"
          >
            Pay
          </button>
          ):(
            <button
            className="text-center justify-center cursor-not-allowed bg-gray-500 text-2xl font-bold px-3 text-white py-5 rounded-lg w-full mt-5"
          >
            Pay
          </button>
          )
        }
          <Link to="/Menu" className="flex cursor-pointer">
            <button
              onClick={() => setIsVisibleCart(!isVisibleCart)}
              className="flex gap-5 items-center justify-center bg-orange-600 text-2xl font-bold px-3 text-white py-5 rounded-lg w-full mt-2 mb-5"
            >
              Explore Menu
              <PiShoppingBagOpenBold className="text-3xl  " />»
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
