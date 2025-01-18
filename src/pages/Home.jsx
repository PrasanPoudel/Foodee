import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      <Navbar/>
      <Hero />
    </>
  );
};

export default Home;
