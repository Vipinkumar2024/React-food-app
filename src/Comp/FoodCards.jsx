import React from 'react';
import { IoIosStar } from "react-icons/io";
import {useDispatch} from 'react-redux';
import { addToCart} from '../Redux/Slice/CardSlice'

const FoodCards = ({id, name, img, price, rating, dec}) => {
  const dispatch = useDispatch();
  return (
    <>
       
      <div className='font-bold w-[250px] bg-white p-5 flex flex-col ml-10 rounded-lg h-[350px] '>
        <img 
          src={img} 
          alt={name} 
          className='w-full h-[150px] object-cover mb-4 rounded-md hover:scale-110 transition-all duration-500 ease-in-out' 
        />

        <div className='flex justify-between mb-1'>
          <h2 className='text-lg font-semibold'>{name}</h2>
          <span className='text-green-300'>₹{price}</span>
        </div>

        <p className='text-sm mb-2 font-thin'>{dec.slice(0, 50)}...</p>

        <div className='flex justify-between items-center'>
          <span className='flex justify-center items-center'>
            <IoIosStar className='mr-1 text-yellow-400'/>
            {rating}
          </span>
          <button onClick={()=>{
            dispatch(addToCart({id,name,price,rating,img,qty:1}))
          }} className='p-2 text-white bg-green-500 rounded-lg text-sm'>
            Add to Cart
          </button>
        </div>
      </div>
      

    </>
  );
}

export default FoodCards;
