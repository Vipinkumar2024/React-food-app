import React from 'react'
import { AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Slice/CardSlice';

const ItemCard = ({id,name,price,img,qty}) => {

  const dispatch=useDispatch();
  return (
    <div className='flex    gap-1 shadow-md rounded-lg p-2 mb-3 leading-5 '>
        <MdDelete onClick={()=>dispatch(removeFromCart(id)) } className='absolute right-7 cursor-pointer'/> 

        <img src={img} className='w-[50px] h-[50px] object-cover'/>
        <div className='flex justify-start flex-col'>
            <h3>{name}</h3>
            <h3 className='text-green-500'> price:₹{price}</h3>
        </div>
        <div className='flex  justify-end items-center gap-1 '>
            <AiOutlinePlus   className='border-2 border-gray-600 text-gray-600 hover:bg-green-400 rounded-md'/>
            <span>{qty}</span>
            <AiOutlineMinus  className='border-2 border-gray-600 text-gray-600 hover:bg-green-400 rounded-md'/>

        </div>

    </div>
  )
}

export default ItemCard