import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FoodItems from '../components/FoodItems'

const Menu = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    <Footer/>
    </>
  )
}

export default Menu;