import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <Cart />  
      <CategoryMenu/>
      <FoodItems />
    </>
  );
};

export default Home;
