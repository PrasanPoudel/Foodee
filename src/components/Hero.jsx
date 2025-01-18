import React from 'react'
import {Link} from "react-router-dom"
import { PiShoppingBagOpenBold } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="text-black">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded-3xl border-8 p-2 border-orange-600" alt="hero" src="/image/welcome.jpeg" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center">
      <div className=" flex flex-col lg:flex-row items-center justify-center  text-[50px] mb-5 text-black">
        <p className='font-bold text-center text-orange-600'>THE KEY TO FINE DINING</p>
      </div>
      <p className="mb-10 text-xl text-justify"> Dive into a world of culinary delight crafted with passion and precision. Whether you're joining us for brunch, a romantic dinner, or a quick bite, our vibrant dishes and warm ambiance ensure a memorable dining experience every time. <br />
        <span className='text-orange-600 font-bold text-3xl'>*</span> Home delivery is also available here. You can enjoy the delicious food prepared by our wonderful team in your own place.
      </p>
      <div>
        <Link to='/Menu'>
        <button className="flex justify-between text-2xl p-3  text-white font-bold bg-orange-600 rounded-lg w-[250px] hover:scale-x-105">
          Explore Menu  &nbsp;<PiShoppingBagOpenBold className='text-3xl'/>» </button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero