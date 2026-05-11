import React, { useState } from 'react';
import FeaturedLink from './navbar/FeaturedLink';
import SocialLink from './navbar/SocialLink';
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo.png';

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full border border-white/10 shadow-xl" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Goutam Kumar</p>
            <p className="text-base font-semibold">Full Stack Developer (Backend-focused)</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <FeaturedLink className={'flex gap-6'} />
          <SocialLink className={'flex gap-4'} />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080a12]/95 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Menu</p>
            <i className="ri-close-line text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="mt-8 flex flex-col gap-8">
            <FeaturedLink className={'flex flex-col gap-4'} />
            <SocialLink className={'flex flex-col gap-4'} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;