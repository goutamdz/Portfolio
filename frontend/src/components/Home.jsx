import React from "react";
import profile from "../assets/profile.jpeg"; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1b1d1f] flex items-center justify-center text-white px-4">
      <div className="text-center">
        <div className="w-50 h-50 rounded-full border-4 border-white mx-auto overflow-hidden">
          <img
            src={profile} // Change this path to your actual image path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold font-[cursive] text-white">
          <span className="italic">Goutam Kumar</span>
        </h1>

        <h2 className="mt-2 text-lg md:text-xl text-gray-400">
          Pre-final year student <span className="text-[#6c8cff]">@Lovely Professional University</span>
        </h2>

        <p className="mt-2 text-sm md:text-base text-gray-500">
          Turning Web Dreams into Reality, Just Like Tony Stark's Vision
        </p>

        <button 
            className="mt-6 px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto"

            onClick={() => window.open("https://drive.google.com/file/d/14fZMMKqNThCibShbJlTRiGW8jzuAI6rf/view?usp=sharing", "_blank")}
        >
            <span>⬇</span> Resume
        </button>


      </div>
    </div>
  );
};

export default Home;
