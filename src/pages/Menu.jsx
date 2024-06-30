import React from 'react'
import CategoryMenu from '../components/CategoryMenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FoodItems from '../components/FoodItems'
import TableBooking from '../components/TableBooking'
import Team from '../components/Team'

const Menu = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    <TableBooking />
    <Team />
    <Footer/>
    </>
  )
}

export default Menu;