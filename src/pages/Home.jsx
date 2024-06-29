import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Gallery from "../components/Gallery"
import Review from "../components/Review";
import TableBooking from "../components/TableBooking";
import Team from "../components/Team";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu/>
      <FoodItems />
      <Gallery/>
      <Review/>
      <TableBooking />
      <Team/>
    </>
  );
};

export default Home;
