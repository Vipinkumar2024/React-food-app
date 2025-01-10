import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [activeCart, setActiveCart] = useState(true);
    const cartItems = useSelector((state) => state.cart.cart);
    
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    const navigate = useNavigate(); // Initialize useNavigate hook
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleButtonClick = () => {
    // Simulate some success logic (e.g., form submission)
    setIsSuccessful(true);

    // Navigate to another page on success
    if (isSuccessful) {
      navigate('success'); 
    }
  };

    
    // Handle the cart visibility
 

    return (
        <>
            {/* If activeCart is false, don't show the cart */}
            {activeCart && (
                <div className={`fixed right-0 top-0 w-full md:w-[20vw] h-full p-5 bg-white ${activeCart?'translate-x-0':"translate-x-full"}`}>
                    <div className='flex justify-between my-4'>
                        <span className='text-xl font-bold text-gray-500'>My Order</span>
                        {/* Close button to hide the cart */}
                        <IoMdClose
                           
                            onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-400 cursor-pointer'
                        />
                    </div>

                    {/* Dynamically rendering the cart items */}
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} qty={item.qty}/>
                        ))
                    ) : (
                        <p className='text-center text-gray-500'>Your cart is empty.</p>
                    )}

<div className='absolute bottom-0 w-full '>
      <h3 className='font-semibold text-gray-500'>Items:</h3>
      
      {/* Display list of items in the cart */}
      <div>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between py-1">
            <span>{item.name} (x{item.qty})</span>
           
          </div>
        ))}
      </div>
      <h3 className='font-semibold text-green-500'>
        Total amount: ₹{totalAmount.toFixed(2)} {/* Calculate total and format it to 2 decimal places */}
      </h3>

      <hr className='w-[90vw] md:w-[18vw] my-2' />

      <button onClick={handleButtonClick} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[18vw] mb-5'>
        Checkout
      </button>
    </div>

                </div>
                
              
            )}
           <FaShoppingCart
        onClick={() => setActiveCart(true)}
        className="fixed bottom-5 left-0 m-5 p-1 rounded-full bg-white shadow-md text-5xl cursor-pointer"
      />
              
        </>
    );
}

export default Cart;
