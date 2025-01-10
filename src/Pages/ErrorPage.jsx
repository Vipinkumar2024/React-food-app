import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-6">Something went wrong. We couldn't process your request.</p>
        <p className="text-lg text-gray-600 mb-8">Please try again later or contact support.</p>
        
        <button
          onClick={() => navigate('/')} // Optionally reload or navigate to a specific route
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
