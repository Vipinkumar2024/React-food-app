import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import the dispatch hook
import FoodData from '../Data/FoodData';
import { addToCart } from '../Redux/Slice/CardSlice'; // Import the addToCart action
import { toast, ToastContainer } from 'react-toastify'; // Import the toast function and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the default CSS for react-toastify

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch(); // Initialize dispatch to send actions to Redux
  const search = useSelector((state) => state.search.search);

  // Filter the food data based on the selected category
  const filteredData =
    selectedCategory === 'All'
      ? FoodData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      : FoodData.filter(
          (item) => item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase())
        );

  // Handle adding an item to the cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // Dispatch the addToCart action
    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored', // Choose the theme
      className: "bg-green-500 text-white", // Tailwind class for success toast color
    }); // Display success toast with custom styling
  };

  return (
    <div className="m-2 md:m-10">
      <h3 className="font-serif font-bold mb-5 text-green-500">FOOD MENU</h3>

      {/* Category buttons */}
      <div className="font-serif text-lg flex overflow-x-scroll scroll-smooth gap-5 md:overflow-hidden">
        <button
          className={`px-3 py-3 font-bold rounded-lg ${
            selectedCategory === 'All' ? 'bg-gray-200 hover:bg-green-500' : ''
          }`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={`px-3 py-3 font-bold rounded-lg ${
            selectedCategory === 'Lunch' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500'
          }`}
          onClick={() => setSelectedCategory('Lunch')}
        >
          Lunch
        </button>
        <button
          className={`px-3 py-3 font-bold rounded-lg ${
            selectedCategory === 'Dinner' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500'
          }`}
          onClick={() => setSelectedCategory('Dinner')}
        >
          Dinner
        </button>
        <button
          className={`px-3 py-3 font-bold rounded-lg ${
            selectedCategory === 'Breakfast' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500'
          }`}
          onClick={() => setSelectedCategory('Breakfast')}
        >
          Breakfast
        </button>
        <button
          className={`px-3 py-3 font-bold rounded-lg ${
            selectedCategory === 'Snacks' ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500'
          }`}
          onClick={() => setSelectedCategory('Snacks')}
        >
          Snacks
        </button>
      </div>

      {/* Food Items Display */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-6">
        {filteredData.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-500">₹{item.price}</p>
            <p className="text-sm text-gray-400">{item.category}</p>

            <button
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg w-full md:w-[10vw] text-center"
              onClick={() => handleAddToCart(item)} // Add to cart action on click
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Toast container for displaying toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // You can specify other themes here like 'light', 'dark', etc.
        className="font-serif" // Additional styling for the ToastContainer
      />
    </div>
  );
};

export default Category;
