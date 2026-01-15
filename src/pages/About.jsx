import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-200">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">About Page</h1>
      <p className="text-gray-700 text-center max-w-md">
        This is the About Page. You can add more details about your project, yourself, or the website here.
      </p>
    </div>
  );
}

export default About;
