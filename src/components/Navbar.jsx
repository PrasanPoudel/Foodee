import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col gap-3 lg:flex-row justify-between py-3 mx-6">
      <div>
        <h3 className="text-xl font-bold text-black-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3> 
        <div className="flex mt-5 overflow-hidden gap-5 justify-start items-center">
        <img src={logo} alt="" className="h-[120px] w-[200px] bg-transparent"/>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="🔍︎ Search Food:"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-black text-xl rounded-3xl outline-none w-full lg:w-[25vw] text-black placeholder:text-gray-600"
        />
      </div>
    </nav>
  );
};

export default Navbar;
