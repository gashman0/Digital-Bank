import React from "react";

const NotAvailableYet: React.FC = () => {
  return (
    <div className="min-h-[88vh] flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚧 Not Available Yet
        </h1>
        <p className="text-gray-600 mb-6">
          This feature is still under development.  
          Please check back later.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotAvailableYet;
