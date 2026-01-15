import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Home Page</h1>
      <p className="text-gray-700 text-center max-w-md">
        Welcome to the Home Page! This is a mini React + Vite + Tailwind website with multiple pages.
      </p>
    </div>
  );
}

export default Home;
