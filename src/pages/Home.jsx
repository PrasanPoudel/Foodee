import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery"
import Review from "../components/Review";
import TableBooking from "../components/TableBooking";
import Team from "../components/Team";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Gallery/>
      <Review/>
      <TableBooking />
      <Team/>
      <Footer />
    </>
  );
};

export default Home;
