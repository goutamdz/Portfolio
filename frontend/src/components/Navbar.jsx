import React, { useState } from 'react'
import FeaturedLink from './navbar/FeaturedLink'
import SocialLink from './navbar/SocialLink'
import 'remixicon/fonts/remixicon.css'
import logo from '../assets/logo.png'

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className='flex justify-between pt-5 pb-1 md:justify-evenly bg-[#353839] text-[#FFFAFA]  w-full fixed'
    >
      <div>
        <h1 className='ml-5'>
          <img src={logo} alt='logo' className='w-10 h-10 rounded-full' />
        </h1>
      </div>

      {/* for mobile view */}
      <div className='md:hidden'
        onClick={()=>{setIsOpen(!isOpen)}}
      >
        <i className="ri-menu-line mr-5 text-2xl cursor-pointer" />
      </div>
      {
        isOpen && (
          <div className='md:hidden absolute top-0 w-full h-screen bg-[#353839] px-0 mt-3'>
            <div className='flex justify-between items-center p-5'>
              <div><i class="ri-moon-fill text-xl rounded-full border p-1"></i></div>
              <i className="ri-close-line text-3xl cursor-pointer" onClick={()=>{setIsOpen(!isOpen)}}></i>
            </div>
            <div className='flex justify-center flex-col items-center'>
              <h1 className='text-xl mt-10 mb-2 border-b-2'>Featured Links </h1>
              <FeaturedLink className={'flex-col'} />
              <h1 className='text-xl mt-10 mb-2 border-b-2'>Social Links</h1>
              <SocialLink className={'flex-col'} />
            </div>
          </div>
        )
      }

      {/* for desktop view */}
      <FeaturedLink className={'hidden md:flex'} />
      <SocialLink className={'hidden md:flex'} />
    </div>
  )
}

export default Navbar