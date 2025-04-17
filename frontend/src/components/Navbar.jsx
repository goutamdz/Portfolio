import React, { useState } from 'react';
import FeaturedLink from './navbar/FeaturedLink';
import SocialLink from './navbar/SocialLink';
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo.png';

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex justify-between items-center pt-1 pb-1 md:justify-evenly bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-[#FFFAFA] w-full fixed z-50 shadow-lg transition-all duration-300"
    >
      <div>
        <h1 className="ml-5">
          <img
            src={logo}
            alt="logo"
            className="w-15  rounded-full transition-transform duration-300"
          />
        </h1>
      </div>

      {/* for mobile view */}
      <div
        className="md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="ri-menu-line mr-5 text-2xl cursor-pointer transition-colors duration-300" />
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 w-full h-screen bg-[#1a1a1a] px-0 mt-3">
          <div className="flex justify-between items-center p-5">
            <i
              className="ri-close-line text-3xl cursor-pointer transition-colors duration-300"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></i>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-xl mt-10 mb-2 border-b-2">Featured Links</h1>
            <FeaturedLink className={'flex-col transition-transform duration-300'} />
            <h1 className="text-xl mt-10 mb-2 border-b-2">Social Links</h1>
            <SocialLink className={'flex-col transition-transform duration-300'} />
          </div>
        </div>
      )}

      {/* for desktop view */}
      <FeaturedLink className={'hidden md:flex gap-4 transition-colors duration-300'} />
      <SocialLink className={'hidden md:flex gap-4 transition-colors duration-300'} />
    </div>
  );
}

export default Navbar;