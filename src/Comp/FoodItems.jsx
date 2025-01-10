import React from 'react'
import FoodCards from './FoodCards'
import FoodData from '../Data/FoodData'

const FoodItems = () => {
  return (
    <div className='m-2 '>
       <h3 className='text-black font-serif font-bold mb-5 ml-10'>FIND THE BEST RESTURANT</h3>
    <div className='flex   flex-wrap gap-10 justify-center items-center'>

        {
            FoodData.map((item)=>{
                return(
<FoodCards key={item.id} id={item.id} name={item.name } price={item.price} dec={item.desc} rating={item.rating} img={item.img} />
                )

            })
        }
    </div>

    </div>
  )
}

export default FoodItems