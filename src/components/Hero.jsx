import React from 'react'
import {Link} from "react-router-dom"
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineTableRestaurant } from "react-icons/md";
const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded-3xl" alt="hero" src="/image/Banner.webp" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">Foodee Restaurant
      </h1>
      <p class="mb-10 text-xl  text-justify"> Dive into a world of culinary delight crafted with passion and precision. Whether you're joining us for brunch, a romantic dinner, or a quick bite, our vibrant dishes and warm ambiance ensure a memorable dining experience every time.</p>
      <div class="flex justify-center flex-col lg:flex-row gap-5">
        <Link to='/Menu'>
        <button class="flex justify-between text-2xl p-3 gap-3 text-white font-bold bg-orange-600 rounded-lg w-[235px]">Order Food<LuShoppingBag className='text-3xl'/> </button>
        </Link>
        <a href='#TableBooking'>
        <button class="flex justify-between text-2xl p-3 gap-3 text-white font-bold bg-orange-600 rounded-lg w-[235px]">Table Booking<MdOutlineTableRestaurant className= 'text-3xl'/></button>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero