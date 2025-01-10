import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-green-600 mb-4">
        Order Successfully Placed!
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center mb-6">
        Thank you for your order! We are processing it now.
      </p>
      <div className="mt-6">
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
