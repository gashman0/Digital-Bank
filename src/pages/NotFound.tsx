import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 mb-6 text-center px-4">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
