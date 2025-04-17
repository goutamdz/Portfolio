// FeaturedLink.jsx
import React from 'react';

function FeaturedLink({ className }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
        Home
      </a>
      <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
        About
      </a>
      <a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
        Projects
      </a>
      <a href="/certificates" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">
        Certificate
      </a>
    </div>
  );
}

export default FeaturedLink;