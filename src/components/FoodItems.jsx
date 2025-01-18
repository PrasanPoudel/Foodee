import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  // Filtered food items based on category and search criteria
  const availableFoods = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        category === food.category &&
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <>
      <div id="Foods" className="flex flex-wrap gap-10 mt-10 justify-center lg:justify-start lg:pl-5">
        {availableFoods.length === 0 ? (
          <p className="text-2xl text-gray-600 items-center p-5">Food item "{search}" is not available here. Check spelling and try again.</p>
        ) : (
          availableFoods.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              rating={food.rating}
              img={food.img}
            />
          ))
        )}
      </div>
    </>
  );
};

export default FoodItems;
