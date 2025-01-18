import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { BsSearch } from "react-icons/bs";
import { setSearch } from "../redux/slices/SearchSlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-5 mt-6" id="CategoryMenu">
      <div>
      <div className="my-5 flex  gap-3 py-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-600 hover:text-white ${
            selectedCategory === "All" && "bg-orange-600  text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-orange-600 hover:text-white ${
                selectedCategory === category && "bg-orange-600 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
        </div>
      <div className="flex justify-between items-center p-1 mr-5 bg-white rounded-[10px] lg:w-[420px] h-[50px]">
        <BsSearch className="h-[75%] w-[10%]"/>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Food:"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="flex items-center bg-transparent text-xl border-none outline-none h-full w-[87%] text-black placeholder:text-gray-500 placeholder:font-[500]"
        />
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;