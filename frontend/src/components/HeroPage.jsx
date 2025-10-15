import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-[#1b1d1f] flex items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Animated Background - Triangles */}
      <div className="absolute inset-0 flex flex-wrap justify-around items-start z-0">
        {[...Array(20)].map((_, i) => ( // Increased number of triangles for better coverage
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth - 50, // Spread across the width
              y: Math.random() * window.innerHeight - 50, // Spread across the height
              scale: Math.random() * 0.8 + 0.2, // Random scale
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth - 50,
              y: Math.random() * window.innerHeight - 50,
              rotate: Math.random() * 360,
              opacity: [0.1, 0.5, 0.1], // Fade in and out
              transition: {
                duration: Math.random() * 8 + 5, // Random duration for varied speed (increased range)
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut", // Use easeInOut for smoother transitions
                delay: Math.random() * 2, // Add a slight delay for staggered animation
              },
            }}
            className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full
                       absolute" // Make sure they are absolutely positioned
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Profile Image with Animation */}
        <div className="w-50 h-50 rounded-full border-4 border-white mx-auto overflow-hidden transform transition duration-500 hover:scale-110 shadow-lg">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name with Fade-In Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-6 text-4xl md:text-5xl font-bold font-[cursive] text-white"
        >
          <span className="italic">Goutam Kumar</span>
        </motion.h1>

        {/* Subtitle with Subtle Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="mt-2 text-lg md:text-xl text-gray-400"
        >
          final year student{" "}
          <span className="text-[#6c8cff]">
            @Lovely Professional University
          </span>
        </motion.h2>

        {/* Description with Fade-In Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="mt-2 text-sm md:text-base text-gray-500"
        >
          Turning Web Dreams into Reality, Just Like Tony Stark's Vision
        </motion.p>

        {/* Resume Button with Hover Animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="mt-6 px-6 py-2 border border-white rounded-md bg-transparent text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/14fZMMKqNThCibShbJlTRiGW8jzuAI6rf/view?usp=sharing",
              "_blank"
            )
          }
        >
          <span>⬇</span> Resume
        </motion.button>
      </div>
    </div>
  );
};

export default HeroPage;
