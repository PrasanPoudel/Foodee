import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import Navbar from '../components/Navbar'
import FoodItems from '../components/FoodItems'
import { useEffect } from 'react';
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    </>
  )
}

export default Menu;