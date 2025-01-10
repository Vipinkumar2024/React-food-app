import React from 'react'
import Navbar from '../Comp/Navbar'
import Category from '../Comp/Category'
import FoodItems from '../Comp/FoodItems'
import Cart from '../Comp/Cart'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Category/>
   <FoodItems/>
   <Cart/>
   </>
  )
}

export default Home