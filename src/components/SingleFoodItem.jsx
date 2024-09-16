import React from 'react'
import FoodData from "../data/FoodData.js";
import { useParams } from 'react-router'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
const SingleFoodItem = () => {
  const Food = useParams();
  const SingleFoodData= FoodData.filter(x=>x.name == Food.name);
  const FoodItem = SingleFoodData[0];
  return (
    <>
<Navbar />
    <section className="pt-10 lg:mx-[200px] h-[300vh] lg:h-[135vh] text-black">
      <div className="flex flex-col  bg-white p-2 m-auto">
      <div className='mb-5'>
        <Link to="/Menu" className='text-5xl'><IoMdArrowRoundBack className='border-b-2 border-r-2 border-gray-600'/></Link>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <img alt="" className="lg:w-1/3 w-full h-[300px]" src={FoodItem.img}/>
        <div className="lg:w-2/3 lg:px-5 w-full">
          <h2 className="text-2xl text-gray-500">{FoodItem.category}</h2>
          <h1 className="text-gray-900 text-3xl  font-medium mb-6">{FoodItem.name}</h1>
          <p className='flex mt-5 text-2xl lg:px-5 items-center'><AiFillStar className="text-orange-400" />{ FoodItem.rating}</p>
          <p className='mt-1 text-2xl lg:px-5'>Price: <span className='text-2xl text-green-600'>रु.{FoodItem.price}</span></p>
          <p className="leading-9 mt-5 text-justify text-xl">{FoodItem.desc}</p>
        </div>
        </div>
        <div className='mt-5 lg:px-5'>
    <h2 className='text-3xl text-black'>Recipe:</h2>
    <p className='text-xl text-justify leading-9  mt-5'>
    {FoodItem.recipe}
    </p>
        </div>
      </div>
    </section>
  </>
  )
}

export default SingleFoodItem